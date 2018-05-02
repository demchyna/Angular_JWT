import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';
import User from '../../models/User';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {  }

  signIn(data: any): void {
    const user = new User;
    user.username = data.username;
    user.password = data.password;

    this.authService.login(user)
      .subscribe((response: HttpResponse<any>) => {
        if (response && response.headers.has('Authorization')) {
          const jwtToken = response.headers.get('Authorization');
          sessionStorage.setItem('jwt-token', jwtToken);
          this.router.navigate(['/']);
        }
      });
  }

  ngOnInit() {
  }

}
