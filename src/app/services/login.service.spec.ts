import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';

describe('LoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoginService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });

  it('login', () => {
    const service: LoginService = TestBed.get(LoginService);
    const user = service.login('plop', 'replop');
    expect(user.id).toBe('plop');
  });
});
