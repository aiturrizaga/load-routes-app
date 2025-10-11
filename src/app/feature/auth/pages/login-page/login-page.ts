import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login-page.html',
  styles: ``
})
export class LoginPage implements OnInit {
  loginForm: FormGroup = new FormGroup({});
  fb = inject(FormBuilder);
  router = inject(Router);

  ngOnInit(): void {
    this.initLoginForm();
  }

  login(): void {
    console.log('Login Form:', this.loginForm.value);
    // Mi API respondio y guarde el token
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30');
    this.router.navigateByUrl('console/customers');
  }

  initLoginForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }
}
