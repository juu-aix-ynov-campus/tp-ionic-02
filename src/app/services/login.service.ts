import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  login(id: string, mdp: string): User {
    return new User(id, 'Nom', 'Prénom', 'email@ynov.com');
  }
}
