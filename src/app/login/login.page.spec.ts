import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {LoginService} from '../services/login.service';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;
  let httpTestingController: HttpTestingController;

  const mockData = [
    {
      id: 1,
      name: 'Le nom de Bret',
      username: 'Bret',
      email: 'Sincere@april.biz'
    }
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), CommonModule, HttpClientTestingModule,
        FormsModule],
      providers: [LoginService]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();

    httpTestingController = TestBed.get(HttpTestingController);
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login', () => {
    // a l initialisation le user doit etre undefined
    expect(component.user).toBeUndefined();

    // saisi du username a tester
    const username = 'Bret';
    component.id = username;
    component.mdp = 'moonMdp';

    // lancement de la methode de connexion
    component.login();

    // attente de la requete
    const req = httpTestingController.expectOne('https://jsonplaceholder.typicode.com/users?username=' + username);
    // reponse a la requete
    req.flush(mockData);
    // verification que toutes les requetes soient terminees
    httpTestingController.verify();

    // on veut que la variable user soit maintent definie
    expect(component.user).toBeDefined();
    // on veut egalement que le nom du user renseigne soit le meme que la reponse du mock
    expect(component.user.nom).toBe(mockData[0].name);

  });
});
