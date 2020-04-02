import {Component, OnInit} from '@angular/core';
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
    loading = false;
    error: string;

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.error = null;

        this.loginService.login(this.id, this.mdp)
            .subscribe(users => this.user = users,
                error => {
                    this.error = error;
                    this.loading = false;
                }, () => {
                    this.loading = false;
                });
    }

}
