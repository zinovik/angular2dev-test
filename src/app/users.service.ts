import { Injectable } from '@angular/core';

import { User } from './user';

import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const URL = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(URL)
      .pipe(catchError(error => {
        return throwError('No users found');
      }));
  }
}
