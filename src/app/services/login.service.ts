import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import iUser from '../models/iUser';
import {Observable} from 'rxjs';
import User from '../models/User';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

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
}
