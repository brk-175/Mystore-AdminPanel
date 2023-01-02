import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'mystore-adminpanel';

  constructor(private router: Router) {}

  onLogout() {
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
