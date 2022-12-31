import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  url: string = 'http://localhost:7000/admin';

  constructor(private http: HttpClient) {}

  onLogin(email: string, password: string) {
    const body = {
      email: email,
      password: password,
    };
    return this.http.post(this.url + '/login', body);
  }
}
