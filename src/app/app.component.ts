import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxCaptureService } from 'ngx-capture';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CONTESTANTS } from './contestants';
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
  contestants = CONTESTANTS;
  @ViewChild('printable', { static: false }) ranking: any;
  
  constructor(private spotify: SpotifyService, private route: ActivatedRoute, private captureService: NgxCaptureService) {}
  
  ngOnInit(): void {
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
          ['long_term', 'medium_term', 'short_term'].forEach((range, value) => {
            this.spotify.getTopTracks(this.token, range).subscribe(
              ((tracks: any[]) => {
                this.tracks = tracks;
                this.contestants = this.contestants.map((c) => {
                  const index = tracks.findIndex((track) => c.spotifyId.includes(track.id) || track.name.toLowerCase().replace(' - eurovision version', '') === (c.songTitle.toLowerCase()));
                  if (index !== -1) {
                    console.log(`${tracks[index].name} appears in ${range} at position ${index + 1} (+${(value + 1) * (50 - index)} points)`)
                    c.points += (value + 1) * (50 - index);
                  }
                  return c;
                })
              }),
              (err => window.location.href = environment.redirect_url)
            )
          })
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
          })
        ).subscribe(() => {}, () => {
          for (let i = 0; i < collapsables.length; i++ ) {
            collapsables.item(i).removeAttribute('hidden');
          }
        });
  }

  async share() {
    await window.navigator.share({ title: "SpotiVision", url: "https://spotivisionapp.herokuapp.com/" });
  }

}
