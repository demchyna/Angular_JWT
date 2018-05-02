import { Component, OnInit } from '@angular/core';
import User from '../../models/User';
import {UserService} from '../user.service';
import {HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-userslist',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAllUsers()
      .subscribe((response: HttpResponse<any>) => {
        if (response) {
          this.users = response.body;
          const jwtToken = response.headers.get('Authorization');
          sessionStorage.setItem('jwt-token', jwtToken);
        }
      });
  }
}
