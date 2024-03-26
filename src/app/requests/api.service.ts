import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Options } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  headers = {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5YjU3NjJmZjcwMjMwMTYzNGRlZjNjZTYzMjM2OTYyOCIsInN1YiI6IjY2MDIwNGUxMDkyOWY2MDE3ZTllMTMyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9v6Qej1AuzriexyydeYLuNYCUJH6oc1YOTaH7y_tHd0'
  }

  get<T>(url: string, options?: Options): Observable<T> {
    if (options) { options.headers = this.headers } else { options = { headers: this.headers } }
    return this.http.get<T>(url, options) as Observable<T>;
  }

  getTvMaze<T>(url: string, options?: Options): Observable<T> {
    return this.http.get<T>(url, options) as Observable<T>;
  }
}
