import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHandler } from '@angular/common/http';

import { UsersListComponent } from './users-list.component';
import { UserWindowComponent } from './../user-window/user-window.component';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsersListComponent, UserWindowComponent],
      providers: [
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: ActivatedRoute, useValue: 1 },
        HttpClient,
        HttpHandler,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('div')).toBeTruthy();
  });
});
