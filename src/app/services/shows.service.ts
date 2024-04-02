import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { PageParams, Show } from '../../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {

  constructor(private api: ApiService) { }

  getMovies(params?: PageParams) {
    return this.api.get('https://api.themoviedb.org/3/discover/movie', {params})
  }

  getTvShows(params?: PageParams) {
    return this.api.get('https://api.themoviedb.org/3/discover/tv', {params})
  }

  getRatedMovies(params?: PageParams) {
    return this.api.get('https://api.themoviedb.org/3/guest_session/guest_session_id/rated/movies', {params})
  }

  getBannerImage(id: number, params?: PageParams) {
    return this.api.get(`https://api.themoviedb.org/3/movie/${id}/images`, {params})
  }

  getBannerVideo(id: number, params?: PageParams) {
    return this.api.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {params});
  }

  getBannerDetail(id: number, params?: PageParams) {
    return this.api.get(`https://api.themoviedb.org/3/movie/${id}`, {params});
  }

  getNowPlayingMovies(params?: PageParams) {
    return this.api.get('https://api.themoviedb.org/3/movie/now_playing', {params})
  }

  getPopularMovies(params?: PageParams) {
    return this.api.get('https://api.themoviedb.org/3/movie/popular', {params})
  }

  getTopRated(params?: PageParams) {
    return this.api.get('https://api.themoviedb.org/3/movie/top_rated', {params})
  }

  getUpcomingMovies(params?: PageParams) {
    return this.api.get('https://api.themoviedb.org/3/movie/upcoming', {params})
  }

  getTvMazeShows = (url: string,  params?: PageParams): Observable<Show[]> => {
    return this.api.getTvMaze(url, {
      params,
      responseType: 'json'
    })
  }
}
