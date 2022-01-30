import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CONTESTANTS } from './contestants';
import CONTESTS from './contests';
import { OrderByPointsPipe } from './pipes/order-by-points.pipe';
import { SpotifyService } from './services/spotify.service';
@Component({
  selector: 'euroboard-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  token: string;
  tracks = [];
  profile: any;
  contests = CONTESTS;
  contest = this.contests[0];
  contestants = this.contest.contestants;
  canShare = true;
  @ViewChild('explanationDiv')
  inputMessageRef: ElementRef;
  explanation = 'Spotify registra tus canciones más escuchadas en 3 listas: Top 50 a corto plazo, Top 50 a medio plazo y Top 50 a largo plazo. En función a la posición que ocupe una canción en cada lista, Spotivision otorga más o menos puntos.\n\n';
  @ViewChild('printable', { static: false }) ranking: any;

  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute,
    private captureService: NgxCaptureService,
    private orderByPoints: OrderByPointsPipe
    ) {}

  ngOnInit(): void {
    this.getPoints();
  }

  getPoints() {
    this.contestants = this.contestants.map(c => {
      c.points = 0;
      return c;
    });
    this.route.fragment
    .pipe(
      map(fragment => new URLSearchParams(fragment)),
      map(params => ({
        access_token: params.get('access_token'),
        error: params.get('error'),
      }))
    )
    .subscribe(params => {
      this.token = params.access_token;
      if (this.token) {
          this.spotify.getProfile(this.token).subscribe(
            (profile: any) => this.profile = profile
          );
          const base = [0, 50, 100];
          const rangeName = ['corto', 'medio', 'largo'];
          ['short_term', 'medium_term', 'long_term'].forEach((range, value) => {
            this.spotify.getTopTracks(this.token, range).subscribe(
              ((tracks: any[]) => {
                this.tracks = tracks;
                this.contestants = this.contestants.map((c) => {
                  const index = tracks.findIndex((track) => c.spotifyData.find(sd => sd.trackId === track.id || sd.title === track.name));
                  if (index !== -1) {
                    let points = (50 - index);
                    if (c.points === 0) {
                      points += base[value];
                    }
                    this.explanation = this.explanation + `${tracks[index].name} ocupa la posición ${index + 1} en tu Top 50 a ${rangeName[value]} plazo  (+${points} puntos),\n`;
                    c.points += points;
                  }
                  return c;
                });
              }),
              (err => window.location.href = environment.redirect_url)
            );
          });
      }
    }
  );
  }

  authorize() {
    this.spotify.authorize();
  }

  saveImage() {
    const collapsables = document.getElementsByTagName("button");
    for (let i = 0; i < collapsables.length; i++ ) {
      collapsables.item(i).setAttribute('hidden', 'true');
    }
    const watermark = document.getElementById('watermark');
    watermark.removeAttribute('hidden');
    this.captureService.getImage(this.ranking.nativeElement, true)
        .pipe(
          tap(async img => {
            var image = new Image();
            image.src = img;
            var url = image.src.replace(/^data:image\/[^;]+/, 'data:application/octet-stream');
            var downloadLink = document.createElement("a");
            downloadLink.href = url;
            downloadLink.download = `Spotivision.png`;
            for (let i = 0; i < collapsables.length; i++ ) {
              collapsables.item(i).removeAttribute('hidden');
            }
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            watermark.setAttribute('hidden', 'true');
          })
        ).subscribe(() => {}, () => {
          for (let i = 0; i < collapsables.length; i++ ) {
            collapsables.item(i).removeAttribute('hidden');
            watermark.setAttribute('hidden', 'true');
          }
        });
  }

  async share() {
    const winner = this.orderByPoints.transform(this.contestants)[0];
    await window.navigator.share({
      title: "SpotiVision",
      url: "http://spotivision.inixio.dev/",
      text: `My 12 points go to ${winner.songTitle} (${winner.singer})! Discover your ranking based on your Spotify stats  #${this.contest.hashtag} #SpotiVision`
    });
  }

  scroll(element: HTMLElement) {
    this.inputMessageRef.nativeElement.scrollIntoView();
    //window.scrollBy(0, -10);
  }

  changeContest(event) {
    const i = event.target.value;
    this.contest = this.contests[i];
    if(this.contest.playlistId) {
      this.spotify.getPlaylist(this.contest.playlistId, this.token).subscribe((contestants) => {
        this.contestants = contestants;
        /*this.contestants = contestants.map(c => {
          c.spotifyData[0].imageUrl = this.contest.imageUrl;
          return c;
        });*/
        console.log('CONTESTANTS', contestants)
        this.getPoints();
      });
    } else {
      this.contestants = this.contest.contestants;
      this.getPoints();
    }
  }

}
