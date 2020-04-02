import {TestBed} from '@angular/core/testing';

import {LoginService} from './login.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import User from '../models/User';

describe('LoginService', () => {

    let httpTestingController: HttpTestingController;
    const mockData = [
        {
            id: '1',
            name: 'Le nom de Bret',
            username: 'Bret',
            email: 'Sincere@april.biz'
        }
    ];

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule]
        });

        httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should be created', () => {
        const service: LoginService = TestBed.get(LoginService);
        expect(service).toBeTruthy();
    });

    it('login', () => {
        const service: LoginService = TestBed.get(LoginService);
        const idTest = 'Plop';
        let userReturned: User;

        service.login(idTest, 'replop')
            .subscribe(user => {
                userReturned = user;
            });

        // attente de la requete
        const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username=' + idTest);
        // reponse a la requete
        req.flush(mockData);
        // verification que toutes les requetes soient terminees
        httpTestingController.verify();

        expect(userReturned.nom).toBe(mockData[0].name);
        expect(userReturned.id).toBe(mockData[0].id);
        expect(userReturned.email).toBe(mockData[0].email);
    });
});
