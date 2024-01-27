import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, pipe, of, catchError, throwError } from 'rxjs';

import { Person } from '../github-user-profile';

// the variable holds an object that contains the HttpHeaders configuration which is imported
/* const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'X-My-Custom-Header': `${environment.API_KEY}`,
    // use wildcard => browser should allow request code from the origin
    'Access-Control-Allow-Origin': '*',
  }),
}; */

@Injectable({
  providedIn: 'root',
})
export class ChartService {
  // private baseUrl = 'https://api.coinranking.com/v2/coins';
  // private proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  constructor(private http: HttpClient) {}

  fetchData(url: string): Observable<Person[]> {
    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

    /* const url = `https://api.openweathermap.org/data/2.5/weather?lat=${70}&lon=${30}&appid=${
      environment.API_KEY
    }`; */
    //const url = `${this.proxyUrl}${this.baseUrl}`;

    // return the fetched data from the REST API
    // return this.http.get(url, httpOptions);
    return this.http.get<Person[]>(url).pipe(
      catchError(() => {
        const errorMessage =
          'Fetching the data was not successful! The following data was not fetched correctly: ';

        return throwError(() => new Error(errorMessage));
      })
    );
  }
}
