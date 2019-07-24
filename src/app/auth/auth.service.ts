import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import User from '../models/User';
import {Observable} from 'rxjs/Observable';
import {JwtHelperService} from '@auth0/angular-jwt';
import {REST_API_URL} from '../app.module';

@Injectable()
export class AuthService {

  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService ) {
  }

  login(user: User): Observable<any> {
    const requestHeaders = { 'Content-Type': 'application/json' };

    return this.httpClient.post<any>(
      REST_API_URL + '/login',
      JSON.stringify(user),
      { headers: requestHeaders, observe: 'response' }
    );
  }

  logout(): void {
    sessionStorage.removeItem('jwt-token');
  }

  isLoggedIn(): boolean {
    const jwtToken = sessionStorage.getItem('jwt-token');
    if (jwtToken == null) {
      return false;
    }
    const isExpired = this.jwtHelper.isTokenExpired(jwtToken);
    return !isExpired;
  }




}
