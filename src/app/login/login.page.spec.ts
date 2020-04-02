import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot(), CommonModule,
        FormsModule]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Login', () => {
    expect(component.user).toBeUndefined();

    component.id = 'monId';
    component.mdp = 'moonMdp';

    component.login();

    expect(component.user).toBeDefined();
    expect(component.user.id).toBe('monId');

  });
});
