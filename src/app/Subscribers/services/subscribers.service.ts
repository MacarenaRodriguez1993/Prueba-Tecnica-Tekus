import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  getAllSubscribers(): Observable<Subscriber[]> {
    const headers = this.getHeaders();
    return this.http
      .get(`${environment.API_URL}subscribers`, {
        headers,
      })
      .pipe(
        map((res: any) => {
          return res.Data;
        })
      );
  }
}
