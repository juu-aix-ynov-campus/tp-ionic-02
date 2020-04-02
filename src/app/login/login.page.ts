import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';
import User from '../models/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  id = '';
  mdp = '';

  user: User;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.user = this.loginService.login(this.id, this.mdp);
  }

}
