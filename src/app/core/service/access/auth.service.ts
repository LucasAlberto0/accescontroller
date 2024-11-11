import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://localhost:8080/api/v1/accesscontroller/get-token';

  constructor(private http: HttpClient) { }

  getToken(depot: string) {
    const body = {
      "DEPOT": depot
    }

    return this.http.post<any>(this.url, body)
      .pipe(map(res => res));
  }
} 
