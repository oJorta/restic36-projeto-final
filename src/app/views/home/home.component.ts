import { Component } from '@angular/core';
import { VideoCardComponent } from '../../components/video-card/video-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [VideoCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
