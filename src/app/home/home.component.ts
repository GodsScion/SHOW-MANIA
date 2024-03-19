import { Component } from '@angular/core';
import { ShowsService } from '../requests/shows.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private shows: ShowsService) {}

  ngOnInit() {
    this.shows.getShows("https://api.tvmaze.com/shows",{page:5}).subscribe((data)=>{
      console.log(data);
    })
  }

}
