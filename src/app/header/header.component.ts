import {Component, OnInit} from '@angular/core';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    count: number;

    constructor(private loginService: LoginService) {
    }

    ngOnInit() {
        const sub = this.loginService.panier
            .subscribe(value => {
                this.count = value.length;
                console.log('subscribe HeaderComponent');
            });

        setTimeout(() => {
            sub.unsubscribe();
            console.log('unsubscribe HeaderComponent');
        }, 10000);
    }

}
