import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieTableComponent } from './movie-table/movie-table.component';
import { MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatButtonModule, MatSidenavModule, 
  MatIconModule, MatListModule, MatGridListModule, MatCardModule, MatMenuModule, MatFormFieldModule,
  MatInputModule, MatSlideToggleModule } from '@angular/material';
import { MovieNagivationComponent } from './movie-nagivation/movie-nagivation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MovieDashboardComponent } from './movie-dashboard/movie-dashboard.component';
import { MovieService } from './services/movie-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CdkTableModule } from '@angular/cdk/table';

@NgModule({
  declarations: [
    AppComponent,
    MovieTableComponent,
    MovieNagivationComponent,
    MovieDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    CdkTableModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
