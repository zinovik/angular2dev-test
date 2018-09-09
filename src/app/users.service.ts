import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(
    private httpClient: HttpClient,
  ) {
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.URL)
      .pipe(catchError(error => {
        return throwError('No users found');
      }));
  }
}
