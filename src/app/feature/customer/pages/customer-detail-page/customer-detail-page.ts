import { Component, inject, input, OnInit, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Customer } from '../../interfaces/customer';
import { HighlightPipe } from '../../../../core/pipes/highlight-pipe';
import { CustomerApi } from '../../services/customer-api';

@Component({
  selector: 'app-customer-detail-page',
  imports: [HighlightPipe],
  templateUrl: './customer-detail-page.html',
  styleUrl: './customer-detail-page.scss'
})
export class CustomerDetailPage {
  customer = input.required<Customer>();
  customerApi = inject(CustomerApi);

  // #route = inject(ActivatedRoute);
  // customer = signal<Customer | null>(null);

  ngOnInit(): void {
    this.customerApi.getData().subscribe();
  }

}
