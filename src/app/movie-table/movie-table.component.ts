import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

import { Movie } from '../models/movie';
import { MovieService } from '../services/movie-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.scss']
})
export class MovieTableComponent implements OnInit {

  isDarkTheme: Observable<boolean>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Movie>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['movie_title', 'director_name', 'cast', 'genres', 'language', 'country',
    'content_rating', 'budget', 'title_year', 'plot_keywords'];

  constructor(private movieService: MovieService) {
    this.movieService.getMoviesList().subscribe(
      response => {
        // console.log(response);

        // Assign the data to the data source for the table to render
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => console.log(error)
    );
  }

  ngOnInit() {
    this.isDarkTheme = this.movieService.isDarkTheme;
  }

  toggleDarkTheme(checked: boolean) {
    this.movieService.setDarkTheme(checked);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // if (this.dataSource.paginator) {
    //   this.dataSource.paginator.firstPage();
    // }
  }

  getWMaxSize() {
    const innerHeight = window.innerHeight;
    console.log(innerHeight - 300);
    return (window.innerHeight - 300) + 'px';
  }
}
