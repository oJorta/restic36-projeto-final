import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoCardComponent } from "../../components/video-card/video-card.component";

@Component({
  selector: 'app-search-video',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './search-video.component.html',
  styleUrl: './search-video.component.css'
})
export class SearchVideoComponent {
  query!: string;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.query = this.route.snapshot.paramMap.get('query')!;
  }
}
