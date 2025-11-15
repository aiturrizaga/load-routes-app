import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { Pagination } from '../../../core/interfaces/pagination';

@Injectable({
  providedIn: 'root'
})
export class CustomerApi {
  #http = inject(HttpClient);

  getAll() {
    return this.#http.get<Pagination<Customer>>(`https://thesimpsonsapi.com/api/characters`)
  }

  getById(customerId: string) {
    return this.#http.get<Customer>(`https://thesimpsonsapi.com/api/characters/${customerId}`)
  }

  getData() {
    return this.#http.get('https://b2b-api.wowperu.pe/ms-contractor/v1/contractors');
  }
}
