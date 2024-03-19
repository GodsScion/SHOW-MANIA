import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { PageParams, Show } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private ApiService: ApiService) { }

  getShows = (url: string, params: PageParams): Observable<Show[]> => {
    return this.ApiService.get(url, {
      params,
      responseType: "json"
    });
  }
}
