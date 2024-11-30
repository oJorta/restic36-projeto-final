import { Component } from '@angular/core';
import { VideoCardComponent } from '../../components/video-card/video-card.component';

import { VideoService } from '../../services/video/video.service';
import { UserService } from '../../services/user/user.service';
import { AuthService } from '../../services/auth/auth.service';

import { Video, SortByField, SortOrder } from '../../types/models';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoCardComponent, ButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  selectedCategory: string = 'default';
  videos: Video[] = [];
  filteredVideos: Video[] = [];
  sortBy: SortByField = 'views';
  sortOrder: SortOrder = 'desc';
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
          this.filteredVideos = this.videos.filter(video => favorites.some(fav => fav.videoId === video.id));
        } else {
          this.filteredVideos = [];
        }
      })
    } else if (category === 'assistir-depois') {
      this.userService.getWatchLater(this.userId).subscribe(watchLater => {
        if (watchLater.length > 0) {
          this.filteredVideos = this.videos.filter(video => watchLater.some(wl => wl.videoId === video.id));
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

  sortVideos(sortBy: SortByField, sortOrder: SortOrder) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;

    this.filteredVideos.sort((a, b) => this.compareVideos(a, b, this.sortBy, this.sortOrder));
  }

  compareVideos(a: Video, b: Video, sortBy: SortByField, sortOrder: SortOrder) {
    let result = 0;

    switch (sortBy) {
      case 'views':
        result = a.views - b.views;
        break;
      case 'date':
        result = new Date(a.uploadedAt).getTime() - new Date(b.uploadedAt).getTime();
        break;
      case 'title':
        result = a.title.localeCompare(b.title);
        break;
    }

    return sortOrder === 'asc' ? result : -result;
  }

  toggleSort(sortBy: SortByField) {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.sortVideos(sortBy, this.sortOrder);
  }

}
