import { Component } from '@angular/core';
import { VideoService } from '../../services/video/video.service';

import { Video } from '../../types/models';

import { VideoCardComponent } from "../../components/video-card/video-card.component";

@Component({
  selector: 'app-watch-video',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './watch-video.component.html',
  styleUrl: './watch-video.component.css'
})
export class WatchVideoComponent {
  videos: Video[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit() {
    this.loadVideos();
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
