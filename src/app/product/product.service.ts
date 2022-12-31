import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  url = 'http://localhost:7000/product';
  httpOptions = {
    headers: new HttpHeaders({
      token: sessionStorage['token'],
    }),
  };

  constructor(private http: HttpClient) {}

  getAllProducts() {
    return this.http.get(this.url, this.httpOptions);
  }
}
