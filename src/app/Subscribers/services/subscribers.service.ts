import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subscriber } from '../models/subscribers.interface';
import { catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class SubscribersService {
  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    return new HttpHeaders({ Authorization: `Bearer ${token}` });
  }

  getAllSubscribers(
    pageSize: number,
    currentPage: number
  ): Observable<Subscriber[]> {
    const headers = this.getHeaders();
    const params = new HttpParams()
      .set('page', (currentPage + 1).toString())
      .set('count', pageSize.toString());
    console.log(
      `${environment.API_URL}subscribers?count=${pageSize}&page=${currentPage}`
    );
    return this.http
      .get(`${environment.API_URL}subscribers`, {
        headers,
        params,
      })
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
  createNewsSubscribers(formData: any): Observable<any[]> {
    const headers = this.getHeaders();
    return this.http
      .post(`${environment.API_URL}subscribers`, formData, { headers })
      .pipe(
        map((res: any) => {
          return res;
        }),
        catchError((error: HttpErrorResponse) => {
          console.log(error.error.Message);
          return throwError(error.error.Message);
        })
      );
  }
}
