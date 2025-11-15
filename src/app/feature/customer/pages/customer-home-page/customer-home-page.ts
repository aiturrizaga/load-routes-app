import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomerApi } from '../../services/customer-api';
import { Customer } from '../../interfaces/customer';
import { RouterLink } from '@angular/router';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from "../../../../core/directives/highlight";
import { Button } from "../../../../core/directives/button";
import { BusinessError } from '../../../../core/errors/business-error';

@Component({
  selector: 'app-customer-home-page',
  imports: [RouterLink, DatePipe, Highlight, Button],
  templateUrl: './customer-home-page.html',
  styleUrl: './customer-home-page.scss'
})
export class CustomerHomePage implements OnInit {
  #customerApi = inject(CustomerApi);
  customers = signal<Customer[]>([]);
  date = new Date();

  data: any;

  ngOnInit(): void {
    this.getCustomers();
    this.fakeError();
  }

  getCustomers() {
    this.#customerApi.getAll().subscribe(res => {
      if (res && res.results) {
        this.customers.set(res.results);
      }
    })
  }

  fakeError() {
    const a = this.data?.sort().reduce((a: any, b: any) => a+b)/this.data.length;
  }

  fakeErrorBusiness() {
    throw new BusinessError('Formulario invalidao, el usuario ya existe');
  }

}
