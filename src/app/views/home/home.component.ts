import { Component } from '@angular/core';
import { VideoCardComponent } from '../../components/video-card/video-card.component';

import { VideoService } from '../../services/video/video.service';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

import { Video } from '../../types/models';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedCategory: string = 'default';
  videos: Video[] = [];
  filteredVideos: Video[] = [];
  userId!: string;

  constructor(
    private videoService: VideoService,
    private userService: UserService,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.loadVideos();
    this.auth.getUser().subscribe(user => {
      this.userId = user?.sub || '';
    });
  }

  loadVideos() {
    return this.videoService.getVideos().subscribe(videos => {
      this.videos = this.shuffleVideos(videos);
      this.filteredVideos = videos;
    });
  }

  selectCategory(category: string) {
    this.selectedCategory = category;

    if (category === 'default') {
      this.filteredVideos = this.videos;
    } else if (category === 'favoritos') {
      this.userService.getFavorites(this.userId).subscribe(favorites => {
        if (favorites.length > 0) {
          this.filteredVideos = favorites.map(fv => fv.video).filter((video) => video !== undefined) || [];
        } else {
          this.filteredVideos = [];
        }
      })
    } else if (category === 'assistir-depois') {
      this.userService.getWatchLater(this.userId).subscribe(watchLater => {
        if (watchLater.length > 0) {
          this.filteredVideos = watchLater.map(wl => wl.video).filter((video) => video !== undefined) || [];
        } else {
          this.filteredVideos = [];
        }
      })
    }
  }

  shuffleVideos(videos: Video[]) {
    for (let i = videos.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [videos[i], videos[j]] = [videos[j], videos[i]];
    }
    return videos
  }

}
