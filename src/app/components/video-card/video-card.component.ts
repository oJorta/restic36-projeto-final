import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-video-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  @Input() size: 'sm' | 'md' | 'lg' = 'md';
  @Input() title: string = 'Título do vídeo';
  @Input() description: string = 'Descrição do vídeo';
  @Input() views: number = 0;
}
