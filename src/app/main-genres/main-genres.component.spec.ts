import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainGenresComponent } from './main-genres.component';

describe('MainGenresComponent', () => {
  let component: MainGenresComponent;
  let fixture: ComponentFixture<MainGenresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainGenresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainGenresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
