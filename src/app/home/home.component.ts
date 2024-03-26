import { Component } from '@angular/core';
import { ShowsService } from '../requests/shows.service';
import { Show } from '../../types';
import { ShowCardComponent } from '../components/show-card/show-card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../layout/header/header.component';
import { SearchComponent } from '../components/search/search.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ShowCardComponent, CommonModule, HeaderComponent, SearchComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private shows: ShowsService) {}

  public showsList: Show[] = []

  ngOnInit() {
    let perPage = 40
    let max = 250

    this.shows.getTvMazeShows("https://api.tvmaze.com/shows",{
      page: 0//getRandomInt(0,max)
    }).subscribe((data)=>{
      if (data.length < perPage) {
        this.shows.getTvMazeShows("https://api.tvmaze.com/shows").subscribe((newData) => {data = newData})
      }
      let randomIndex = getRandomInt(0,data.length-perPage+1)
      this.showsList = data.slice(randomIndex,randomIndex+perPage)
      console.log(this.showsList,randomIndex)
    })
  }

}

function getRandomInt(min: number, max: number) : number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
