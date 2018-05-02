import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {UsersListComponent} from './user/userslist/users-list.component';
import {LoginComponent} from './auth/login/login.component';

const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    redirectTo: ''
  },
  {
    path: 'user/all',
    component: UsersListComponent
  },
];

export const routing = RouterModule.forRoot(APP_ROUTES);
