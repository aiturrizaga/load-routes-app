import { Component, inject, OnInit, signal } from '@angular/core';
import { CustomerApi } from '../../services/customer-api';
import { Customer } from '../../interfaces/customer';
import { RouterLink } from '@angular/router';
import { DatePipe, LowerCasePipe, UpperCasePipe } from '@angular/common';
import { Highlight } from "../../../../core/directives/highlight";
import { Button } from "../../../../core/directives/button";

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

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers() {
    this.#customerApi.getAll().subscribe(res => {
      if (res && res.results) {
        this.customers.set(res.results);
      }
    })
  }

}
