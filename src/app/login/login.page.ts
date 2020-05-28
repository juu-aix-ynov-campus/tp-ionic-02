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
    panier: number[];

    constructor(private loginService: LoginService) {
        this.loginService.panier
            .subscribe(value => {
                this.panier = value;
                console.log('subscribe LoginPage');
            });
    }

    ngOnInit() {
    }

    login() {
        this.loading = true;
        this.error = null;

        this.loginService.login(this.id, this.mdp)
            .subscribe((user) => this.user = user,
                error => {
                    this.error = error;
                    this.loading = false;
                }, () => {
                    this.loading = false;
                });
    }

    addPizza() {
        this.loginService.addPizzaToCart(Math.floor(Math.random() * Math.floor(999)));
    }

    rmPizza(numb: number) {
        this.loginService.deletePizzaFromCart(numb);
    }
}
