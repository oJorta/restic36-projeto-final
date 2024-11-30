import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video/video.service';

import { VideoCardComponent } from "../../components/video-card/video-card.component";
import { Video, SortByField, SortOrder } from '../../types/models';
import { ButtonComponent } from "../../components/button/button.component";

@Component({
  selector: 'app-search-video',
  standalone: true,
  imports: [VideoCardComponent, ButtonComponent],
  templateUrl: './search-video.component.html',
  styleUrl: './search-video.component.css'
})
export class SearchVideoComponent {
  videos: Video[] = [];
  query!: string;
  sortBy: SortByField = 'views';
  sortOrder: SortOrder = 'desc';

  constructor(
    private route: ActivatedRoute,
    private videoService: VideoService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.query = params['q'] || '';
      this.searchVideos();
    });
  }

  searchVideos() {
    this.videoService.searchVideos(this.query).subscribe(videos => {
      this.videos = videos;
    });
  }

  sortVideos(sortBy: SortByField, sortOrder: SortOrder) {
    this.sortBy = sortBy;
    this.sortOrder = sortOrder;

    this.videos.sort((a, b) => this.compareVideos(a, b, this.sortBy, this.sortOrder));
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
