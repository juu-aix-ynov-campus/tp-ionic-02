import { Component, OnInit } from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  id = '';
  mdp: string = '';

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {
    this.loginService.login(this.id, this.mdp);
  }

}
