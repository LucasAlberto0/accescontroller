import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEntry } from '../interface/IEntry';
import { IResponse } from '../interface/IResponse';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private url = 'http://localhost:8080/api/v1/accesscontroller/'

  constructor(private http: HttpClient) { }

  registerEntry(entry: IEntry) {
    return this.http.post<IResponse>(`${this.url}register-entry`, entry)
      .pipe(map(res => res));
  }

  registerExit(exit: IEntry) {
    return this.http.post<IResponse>(`${this.url}register-exit`, exit)
      .pipe(map(res => res));
  }
}
