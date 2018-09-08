import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { UsersService } from './users.service';
import { User } from './user';

describe('UsersService', () => {
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        UsersService,
      ]
    });

    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', inject([UsersService], (service) => {
    expect(service).toBeTruthy();
  }));

  it('should return users', inject([UsersService], (service) => {
    const mockResponse: User[] = [];
    const user1 = <User>{};
    const user2 = <User>{};
    mockResponse.push(user1);
    mockResponse.push(user2);

    service.getUsers().subscribe((users: User[]) => {
      expect(users.length).toBe(2);
      expect(users).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(service.URL);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  }));
});
