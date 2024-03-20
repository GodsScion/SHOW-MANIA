import { Component, Input } from '@angular/core';
import { Show } from '../../types';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Input() show!: Show; 
}
