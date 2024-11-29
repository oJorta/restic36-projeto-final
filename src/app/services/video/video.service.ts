import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video, VideoInteraction } from '../../types/models';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videosApiUrl = 'http://localhost:3000/videos';
  private likesApiUrl = 'http://localhost:3000/likes';

  constructor(private http: HttpClient) { }

  getVideoById(videoId: number) {
    return this.http.get<Video>(`${this.videosApiUrl}/${videoId}`);
  }

  getVideos() {
    return this.http.get<Video[]>(this.videosApiUrl);
  }

  getLikesByVideoId(videoId: number) {
    return this.http.get<VideoInteraction[]>(`${this.likesApiUrl}?videoId=${videoId}`);
  }

  addLike(videoId: number, userId: string) {
    return this.http.post<VideoInteraction>(`${this.likesApiUrl}`, { videoId, userId });
  }

  removeLike(likeId: string) {
    return this.http.delete(`${this.likesApiUrl}/${likeId}`);
  }

  incrementViews(videoId: number, currentViews: number) {
    return this.http.patch(`${this.videosApiUrl}/${videoId}`, { views: currentViews + 1 });
  }
}
