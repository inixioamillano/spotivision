import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Contestant } from '../contestant';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) {
  }

  authorize() {
    window.location.href = `https://accounts.spotify.com/authorize?client_id=${environment.client_id}&response_type=token&redirect_uri=${environment.redirect_url}&scope=user-top-read`;
  }

  getTopTracks(code: string, timeRange: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${code}`);
    return this.http.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=50&offset=0`, {headers}).pipe(take(1), map((res: any) => res.items || []))
  }

  getProfile(token) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://api.spotify.com/v1/me`, {headers})
      .pipe(take(1), tap((res) => console.log(res)), map((profile: any) => ({id: profile.id, name: profile.display_name})))
  }

  searchTrack(searchTerm: string, token: string) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://api.spotify.com/v1/search?q=${searchTerm}&type=track`, {headers}).pipe(take(1), map((res: any) => res.tracks.items || []));
  }

  getPlaylist(id, token) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://api.spotify.com/v1/playlists/${id}/tracks?limit=50`, {headers})
      .pipe(
        take(1), 
        tap((res) => console.log(res)), 
        map((data: any) => data.items.map(i => i.track)),
        tap(tracks => console.log('TRACKS', tracks)),
        map(tracks => this.tracksToContestants(tracks))
      )
  }

  private tracksToContestants(tracks): Contestant[] {
    return tracks.map(t => {
      const contestant: Contestant = {
        countryCode: '',
        countryName: '',
        songTitle: t.name,
        singer: t.artists[0].name,
        points: 0,
        spotifyData: [
          {
            trackId: t.id,
            title: t.name,
            singer: t.artists[0].name,
            imageUrl: t.album.images[0].url
          }
        ]
      };
      return contestant;
    });
  }

}
