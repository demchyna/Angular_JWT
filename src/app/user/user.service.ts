import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {REST_API_URL} from '../app.module';

@Injectable()
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAllUsers(): Observable<any> {
    const requestHeaders = { 'Authorization': sessionStorage.getItem('jwt-token') };

    return this.httpClient.get<any>(
      REST_API_URL + '/api/user/all',
      { headers: requestHeaders, observe: 'response' }
    );
  }
}
