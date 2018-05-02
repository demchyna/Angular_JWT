///<reference path="../../node_modules/@angular/core/src/metadata/lifecycle_hooks.d.ts"/>
import {Component, Input} from '@angular/core';
import {AuthService} from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular JWT';

  constructor(private authService: AuthService) {}
}
