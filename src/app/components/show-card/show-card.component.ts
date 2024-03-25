import { Component, Input } from '@angular/core';
import { Show } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-show-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-card.component.html',
  styleUrl: './show-card.component.css'
})
export class ShowCardComponent {
  @Input() show!: Show; 
}
