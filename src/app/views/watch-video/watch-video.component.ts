import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { VideoService } from '../../services/video/video.service';

import { Video } from '../../types/models';

import { VideoCardComponent } from "../../components/video-card/video-card.component";

@Component({
  selector: 'app-watch-video',
  standalone: true,
  imports: [VideoCardComponent, DatePipe],
  templateUrl: './watch-video.component.html',
  styleUrl: './watch-video.component.css'
})
export class WatchVideoComponent {
  currentVideo!: Video;
  videos: Video[] = [];
  likes: number = 0;
  safeVideoUrl!: SafeResourceUrl;

  constructor(
    private videoService: VideoService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const videoId = params['id'];
      this.loadVideo(videoId);
    });
  }

  loadVideo(videoId: string) {
    this.videoService.getVideoById(videoId).subscribe(video => {
      this.currentVideo = video
      const url = this.currentVideo.url.replace('watch?v=', 'embed/');
      this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(url);

      this.videoService.incrementViews(videoId, this.currentVideo.views).subscribe(() => this.loadVideos());
      this.currentVideo.views++;
    });
    this.videoService.getLikesByVideoId(videoId).subscribe(likes => this.likes = likes.length);
  }

  loadVideos() {
    return this.videoService.getVideos().subscribe(videos => {
      this.videos = this.shuffleVideos(videos);
    });
  }

  shuffleVideos(videos: Video[]) {
    for (let i = videos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [videos[i], videos[j]] = [videos[j], videos[i]];
    }
    return videos
  }
}
