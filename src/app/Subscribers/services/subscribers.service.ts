import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Subscriber } from '../models/subscribers.interface';
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
}
