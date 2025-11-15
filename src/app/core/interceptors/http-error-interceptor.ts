import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { HttpBusinessError } from '../errors/http-business-error';

export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {

      if (error.status === 500) {
        return throwError(() => new HttpBusinessError('Estamos teninedo problemas con el servidor.'));
      }

      if (error.status === 401) {
        return throwError(() => new HttpBusinessError('No tienes acceso a este recurso.'));
      }

      return throwError(() => new Error('Error en obtener los datos de la petición.'));
    })
  );
};
