import { Component } from '@angular/core';
import { VideoCardComponent } from "../../components/video-card/video-card.component";

@Component({
  selector: 'app-watch-video',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './watch-video.component.html',
  styleUrl: './watch-video.component.css'
})
export class WatchVideoComponent {

}
