import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import iUser from '../models/iUser';
import {BehaviorSubject, Observable} from 'rxjs';
import User from '../models/User';
import {map} from 'rxjs/operators';

@Injectable()
export class LoginService {

    panier: BehaviorSubject<number[]> = new BehaviorSubject<number[]>([]);

    constructor(private http: HttpClient) {
    }

    login(id: string, mdp: string): Observable<User> {
        return this.http.get<iUser[]>('https://jsonplaceholder.typicode.com/users?username=' + id)
            .pipe(
                map(value => {
                  if (value.length > 0) {
                    return value[0];
                  } else {
                    throw new Error ('Aucun utilisateur trouvé');
                  }
                }),
                map(value => new User(value.id, value.name, value.email))
            );
    }

    addPizzaToCart(myNumb: number) {
        const tmp = this.panier.getValue();
        tmp.push(myNumb);
        this.panier.next(this.panier.getValue());
    }
    deletePizzaFromCart(myNumb: number) {
        const index = this.panier.getValue().indexOf(myNumb);
        this.panier.getValue().splice(index, 1);
        this.panier.next(this.panier.getValue());
    }
}
