import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login.interface';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(credencials: Login): Observable<any> {
    return this.http
      .post(`${environment.API_URL}account/login`, credencials)
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error.error);
        })
      );
  }
}
