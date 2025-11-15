import { ErrorHandler, inject, Injectable } from '@angular/core';
import { AlertRef } from '../../shared/components/alert/alert-ref';
import { BusinessError } from './business-error';
import { HttpBusinessError } from './http-business-error';

@Injectable({
  providedIn: 'root'
})
export class GlobalErrorHandler implements ErrorHandler {

  alert = inject(AlertRef);

  handleError(error: any): void {
    // Send log 
    console.log('Global handler error executed');

    if (error instanceof BusinessError) {
      this.alert.open('Error de negocio', error.message);
      return;
    }

    if (error instanceof HttpBusinessError) {
      this.alert.open('Error de respuesta', error.message);
      return;
    }

    this.alert.open('Error global', error ? error.message : 'Este es un error de sistema');
  }
  
}
