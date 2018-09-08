
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MovieNagivationComponent } from './movie-nagivation.component';

describe('MovieNagivationComponent', () => {
  let component: MovieNagivationComponent;
  let fixture: ComponentFixture<MovieNagivationComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [MovieNagivationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieNagivationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
