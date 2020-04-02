import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';
import iUser from '../models/iUser';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    id = '';
    mdp = '';

    user: iUser;
    loading = false;

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.loginService.login(this.id, this.mdp)
            .subscribe(users => {
                this.user = users[0];
                this.loading = false;
            });
    }

}
