import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
    return this.http.get(`https://api.spotify.com/v1/me/top/tracks?time_range=${timeRange}&limit=50&offset=5`, {headers}).pipe(take(1), map((res: any) => res.items || []))
  }

  getProfile(token) {
    let headers = new HttpHeaders();
    headers = headers.set('Accept', 'application/json');
    headers = headers.set('Content-Type', 'application/json');
    headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get(`https://api.spotify.com/v1/me`, {headers})
      .pipe(take(1), map((profile: any) => ({id: profile.id, name: profile.display_name})))
  }
}
