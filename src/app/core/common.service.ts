import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map } from 'rxjs';
@Injectable()
export class CommonService {

  constructor(private http: HttpClient) { }


  getUserData() {

    return {
      name: 'Jack',
      role: 'admin',
      email: 'jack@ci.io'
    }

  }

  getSurveys() {
    const url = 'https://run.mocky.io/v3/954fd8d2-02b2-4cbb-979a-cbb8fc94bdb7';
    return new Promise((resolve) => {
      this.get(url).subscribe(res => {
        resolve(res);
      }
      );
    });
  }

  get(apiUrl: string): Observable<any> {

    return this.http.get(apiUrl).pipe(
      map(response => {
        return response;
      }),
      catchError(err => { throw err }));
  }
}
