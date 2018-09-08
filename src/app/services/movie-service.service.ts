import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';
import { Movie } from '../models/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private _darkTheme: Subject<boolean> = new Subject<boolean>();
  isDarkTheme = this._darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean) {
    this._darkTheme.next(isDarkTheme);
  }

  constructor(private httpClient: HttpClient) { }

  getMoviesList(): Observable<Movie[]> {
    const url = 'http://starlord.hackerearth.com/movieslisting';
    console.log(url);
    return this.httpClient.get<Movie[]>(url)
    .pipe(
      tap(movies => {
        console.log(movies);
        movies.map(movie => movie.cast = movie.actor_1_name + ', ' + movie.actor_2_name);
      }),
      catchError(this.handleError('getMoviesList', []))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    console.log(message);
  }
}
