import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../../types/models';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private apiUrl = 'http://localhost:3000/videos';

  constructor(private http: HttpClient) { }

  getVideos() {
    return this.http.get<Video[]>(this.apiUrl);
  }
}
