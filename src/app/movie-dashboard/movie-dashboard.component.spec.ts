
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDashboardComponent } from './movie-dashboard.component';

describe('MovieDashboardComponent', () => {
  let component: MovieDashboardComponent;
  let fixture: ComponentFixture<MovieDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
