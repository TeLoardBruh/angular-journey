import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  loggIn = false;

  isAuthenticated() {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggIn);
      }, 800);
    });
    return promise;
  }
  login() {
    this.loggIn = true;
  }

  logout() {
    this.loggIn = false;
  }
}
