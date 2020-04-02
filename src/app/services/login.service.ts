import {Injectable} from '@angular/core';
import User from '../models/User';
import {HttpClient} from '@angular/common/http';
import iUser from '../models/iUser';
import {Observable} from 'rxjs';
import IUser from '../models/iUser';

@Injectable({
    providedIn: 'root'
})
export class LoginService {

    constructor(private http: HttpClient) {
    }

    login(id: string, mdp: string): Observable<IUser[]> {
        return this.http.get<iUser[]>('https://jsonplaceholder.typicode.com/users');
    }
}
