import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {routing} from './app.routes';
import { HomeComponent } from './home/home.component';
import { UsersListComponent } from './user/userslist/users-list.component';
import { LoginComponent } from './auth/login/login.component';
import {JwtModule} from '@auth0/angular-jwt';
import {HttpClientModule} from '@angular/common/http';
import {AuthService} from './auth/auth.service';
import {UserService} from './user/user.service';

export const REST_API_URL = 'http://localhost:4200';

export function tokenGetter() {
  return sessionStorage.getItem('jwt-token');
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersListComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: ['localhost:8080'],
        blacklistedRoutes: [''],
        skipWhenExpired: true
      }
    }),
    routing
  ],
  providers: [
    AuthService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
