import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { CONTESTANTS } from './contestants';
import CONTESTS from './contests';
import { OrderByPointsPipe } from './pipes/order-by-points.pipe';
import { SpotifyService } from './services/spotify.service';
import { Contestant } from './contestant';
import { SessionStorageService } from './session-storage.service';
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
  customPlaylist: string;
  playlistName: string;
  contestants: Contestant[] = this.contest.contestants || [];
  canShare = true;
  elFestivalQueQuieres = true;
  term = 'short_term';
  type = 'artists';
  @ViewChild('explanationDiv')
  inputMessageRef: ElementRef;
  explanation = 'Spotify registra tus canciones más escuchadas en 3 listas: Top 50 a corto plazo, Top 50 a medio plazo y Top 50 a largo plazo. En función a la posición que ocupe una canción en cada lista, Spotivision otorga más o menos puntos.\n\n';
  @ViewChild('printable', { static: false }) ranking: any;
  ACCESS_TOKEN = 'access_token';
  EXPIRATION = 'expires_in';
  EXPIRATION_DATE = 'expiration_date';
  TYPE_ARTISTS = 'artists';
  TYPE_TRACKS = 'tracks';
  TYPE_PLAYLIST = 'customPlaylist';

  constructor(
    private spotify: SpotifyService,
    private route: ActivatedRoute,
    private captureService: NgxCaptureService,
    private orderByPoints: OrderByPointsPipe,
    private sessionStorage: SessionStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.getPoints();
  }

  getPoints() {
    // this.elFestivalQueQuieres = !this.contestants;
    // if (this.elFestivalQueQuieres) {
    //   this.contestants = [];
    // }
    if (this.contestants) {
      this.contestants = this.contestants.map(c => {
        c.points = 0;
        return c;
      });
    }
    this.route.fragment
      .pipe(
        map(fragment => new URLSearchParams(fragment)),
        map(params => ({
          access_token: params.get(this.ACCESS_TOKEN),
          error: params.get('error'),
          expiresIn: params.get(this.EXPIRATION),
        }))
      )
      .subscribe(async params => {
        this.token = this.getSessionToken(params.access_token);
        if (this.token) {
          if (params.expiresIn) this.saveSession(this.token, params.expiresIn);
          this.spotify.getProfile(this.token).subscribe(
            (profile: any) => this.profile = profile,
            error => {
              this.clearCache();
              window.location.reload();
            },
          );
          const base = [0, 50, 100];
          const rangeName = ['corto', 'medio', 'largo'];
          const elFestivalQueQuieres = this.elFestivalQueQuieres && this.type !== this.TYPE_PLAYLIST;
          ['short_term', 'medium_term', 'long_term'].forEach((range, value) => {
            this.spotify.getTopTracks(this.token, range, elFestivalQueQuieres ? this.type : this.TYPE_TRACKS).subscribe(
              ((tracks: any[]) => {
                if (elFestivalQueQuieres) {
                  this.contestants = [];
                  const newContestants = this.type === this.TYPE_TRACKS ? this.spotify.tracksToContestants(tracks) : this.spotify.artistsToContestants(tracks);
                  // console.log('New contestants', newContestants)
                  newContestants.forEach((newContestant, i) => {
                    // console.log(c.songTitle + ' is in ' + range + i)
                    const index = this.contestants.findIndex(con => con.spotifyData[0].trackId === newContestant.spotifyData[0].trackId);
                    // console.log(i);
                    let points = (50 - i);
                    if (index !== -1) {
                      // console.log('Estaba');
                      this.contestants[index].points += points;
                    } else {
                      // console.log('No estaba')
                      newContestant.points = points;
                      this.contestants.push(newContestant);
                    }
                  });
                  // console.log(this.contestants)
                  this.contestants = [...this.contestants];
                } else {
                  this.tracks = tracks;
                  if (this.contestants) {
                    this.contestants = this.contestants.map((con) => {
                      const index = tracks.findIndex((track) => con.spotifyData.find(sd => sd.trackId === track.id || sd.title === track.name));
                      if (index !== -1) {
                        let points = (50 - index);
                        if (con.points === 0) {
                          points += base[value];
                        }
                        this.explanation = this.explanation + `${tracks[index].name} ocupa la posición ${index + 1} en tu Top 50 a ${rangeName[value]} plazo  (+${points} puntos),\n`;
                        con.points += points;
                      }
                      return con;
                    })
                  };
                }
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
    for (let i = 0; i < collapsables.length; i++) {
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
          for (let i = 0; i < collapsables.length; i++) {
            collapsables.item(i).removeAttribute('hidden');
          }
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
          watermark.setAttribute('hidden', 'true');
        })
      ).subscribe(() => { }, () => {
        for (let i = 0; i < collapsables.length; i++) {
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
      text: `My 12 points go to ${winner.songTitle}${winner.singer ? ` (${winner.singer})` : ''}! Discover your ranking based on your Spotify stats  #${this.contest.hashtag} #SpotiVision`
    });
  }

  scroll(element: HTMLElement) {
    this.inputMessageRef.nativeElement.scrollIntoView();
    //window.scrollBy(0, -10);
  }

  changeContest(event) {
    const i = event.target.value;
    this.contest = this.contests[i];
    console.log(i);
    this.elFestivalQueQuieres = (i == 0);
    if (this.contest.playlistId) {
      this.spotify.getPlaylist(this.contest.playlistId, this.token).subscribe((playlist) => {
        this.contestants = playlist.contestants;
        /*this.contestants = contestants.map(c => {
          c.spotifyData[0].imageUrl = this.contest.imageUrl;
          return c;
        });*/
        console.log('CONTESTANTS', playlist.contestants);
        this.getPoints();
      });
    } else {
      this.contestants = this.contest.contestants;
      this.getPoints();
    }
  }

  changeType(event) {
    this.type = event.target.value;
    this.playlistName = '';
    if (this.type === this.TYPE_ARTISTS || this.type === this.TYPE_TRACKS) {
      this.contestants = this.contest.contestants;
      this.getPoints();
    }
  }

  async getPlaylistData() {
    try {
      if (this.customPlaylist) {
        // example playlist: https://open.spotify.com/playlist/65fnIgLIRrGDGHRSU6qkiv?si=b7d99664fdb5422e
        const playlistId = this.customPlaylist.slice(
          this.customPlaylist.lastIndexOf('/') + 1,
          this.customPlaylist.includes('?') ? this.customPlaylist.indexOf('?') : this.customPlaylist.length
        );
        const playlist = await this.spotify.getPlaylist(playlistId, this.token).toPromise();
        this.playlistName = playlist.name;
        this.contestants = playlist.contestants;
        this.getPoints();
      } else {
        alert('Playlist link can\'t be empty');
      }
    } catch (err) {
      console.error(JSON.stringify(err));
    };
  }

  closeSession(): void {
    this.clearCache();
    window.location.reload();
  }

  private saveSession(accessToken: string, expiresIn: string): void {
    this.sessionStorage.set(this.ACCESS_TOKEN, accessToken);
    if (expiresIn) {
      this.sessionStorage.set(this.EXPIRATION, expiresIn);
      const expiresInNumber = parseInt(expiresIn, 10);
      this.sessionStorage.set(this.EXPIRATION_DATE, JSON.stringify(moment().add(expiresInNumber, 'seconds').valueOf()));
    }
    this.removeAuthParams(this.ACCESS_TOKEN);
    this.removeAuthParams(this.EXPIRATION);
  }

  private getSessionToken(paramsToken: string): string {
    const sessionToken = this.sessionStorage.get(this.ACCESS_TOKEN);
    const sessionExpiration = this.sessionStorage.get(this.EXPIRATION_DATE);
    if (sessionToken && sessionExpiration) {
      if (moment().isAfter(moment(parseInt(sessionExpiration, 10)))) {
        this.closeSession();
      }
      return sessionToken;
    } else {
      this.clearCache();
      return paramsToken;
    }
  }

  private removeAuthParams(param: string): void {
    // Remove query params
    this.router.navigate([], {
      queryParams: {
        param: null,
      },
      queryParamsHandling: 'merge'
    });
  }

  private clearCache(): void {
    this.sessionStorage.clear();
  }
}