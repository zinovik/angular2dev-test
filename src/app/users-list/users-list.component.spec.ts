import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';
import { Location, LocationStrategy, PathLocationStrategy, APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';

import { UsersListComponent } from './users-list.component';
import { UserWindowComponent } from '../user-window/user-window.component';
import { UsersService } from '../users.service';
import { User } from '../user';
import { routes } from '../app-routing.module';

const USERS = [
  <User>{
    id: 1,
    name: 'name1',
    username: 'username1',
    email: 'email1',
  },
  <User>{
    id: 2,
    name: 'name2',
    username: 'username2',
    email: 'email2',
  },
];

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;
  let location: Location;
  let router: Router;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      declarations: [UsersListComponent, UserWindowComponent],
      providers: [
        Location,
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        { provide: APP_BASE_HREF, useValue: '/' },
        { provide: UsersService, useClass: MockUsersService },
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    location = TestBed.get(Location);
    router = TestBed.get(Router);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render table with users data', () => {
    const compiled = fixture.debugElement.nativeElement;
    const table = compiled.querySelector('table');
    expect(table).toBeTruthy();
    const tds = table.querySelectorAll('td');
    expect(tds.length).toEqual(12);
    expect(tds[0].innerHTML).toEqual('#');
    expect(tds[1].innerHTML).toEqual('Name');
    expect(tds[2].innerHTML).toEqual('Username');
    expect(tds[3].innerHTML).toEqual('Email');
    expect(tds[4].innerHTML).toEqual('1');
    expect(tds[5].innerHTML).toEqual('name1');
    expect(tds[6].innerHTML).toEqual('username1');
    expect(tds[7].innerHTML).toEqual('email1');
    expect(tds[8].innerHTML).toEqual('2');
    expect(tds[9].innerHTML).toEqual('name2');
    expect(tds[10].innerHTML).toEqual('username2');
    expect(tds[11].innerHTML).toEqual('email2');
  });

  it('should open and close modal window', () => {
    expect(component.user).toEqual(undefined);

    component.userClicked(USERS[0]);
    expect(component.user).toEqual(USERS[0]);
    expect(location.path()).toEqual('/users/1');

    component.windowAction('close');
    expect(component.user.id).toEqual(undefined);
    expect(location.path()).toEqual('/users');
  });

  it('should work with routes', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/users');

    router.navigate(['/users/1']);
    tick();
    expect(location.path()).toBe('/users/1');
  }));

  it('should get user by id', () => {
    const user1 = component.getUserById({ users: USERS, id: 1 });
    expect(user1.name).toEqual('name1');
    expect(user1.username).toEqual('username1');
    expect(user1.email).toEqual('email1');

    const user2 = component.getUserById({ users: USERS, id: 2 });
    expect(user2.name).toEqual('name2');
    expect(user2.username).toEqual('username2');
    expect(user2.email).toEqual('email2');

    const user3 = component.getUserById({ users: USERS, id: 3 });
    expect(user3).toEqual(undefined);
  });
});

class MockUsersService {
  public getUsers(): Observable<User[]> {
    return of(USERS);
  }
}
