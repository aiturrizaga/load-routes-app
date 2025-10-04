import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CustomerApi } from '../services/customer-api';
import { Customer } from '../interfaces/customer';

export const customerDataResolver: ResolveFn<Customer> = (route, state) => {
  const customerId = route.paramMap.get('customerId')!;
  // const customerId = route.params['customerId'];

  const customerApi = inject(CustomerApi);
  return customerApi.getById(customerId);
};
