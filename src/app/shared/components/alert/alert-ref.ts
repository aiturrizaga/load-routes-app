import { Dialog } from '@angular/cdk/dialog';
import { inject, Injectable } from '@angular/core';
import { Alert } from './alert';

@Injectable({
  providedIn: 'root'
})
export class AlertRef {
  #dialog = inject(Dialog);

  open(title: string, message: string) {
    this.#dialog.open(Alert, {
      data: {
        title,
        message
      }
    });
  }
}
