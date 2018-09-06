import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';

import { UserWindowComponent } from './user-window.component';

describe('UserWindowComponent', () => {
  let component: UserWindowComponent;
  let fixture: ComponentFixture<UserWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UserWindowComponent],
      providers: [
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
