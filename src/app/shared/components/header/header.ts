import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  router = inject(Router);

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigateByUrl('auth/login');
  }
}
