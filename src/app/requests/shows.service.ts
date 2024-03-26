import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PageParams, Show } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private api: ApiService) { }

  getTvMazeShows = (url: string,  params?: PageParams): Observable<Show[]> => {
    return this.api.getTvMaze(url, {
      params,
      responseType: 'json'
    })
  }
}
