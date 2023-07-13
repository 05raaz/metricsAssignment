import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  constructor(private http: HttpClient) { }

  getCountryDetails() {
    return this.http.get("https://restcountries.com/v3.1/all");
  }

  searchCountry(name: any):Observable<any> {
    // let url = 'https://restcountries.com/v3.1/name/';
    // return this.http.get(url+name);
    let apiUrl = 'https://restcountries.com/v3.1/name/';
    return this.http.get<any>(apiUrl+name)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  
  // getUsers(): Observable<any> {
  //   let apiUrl = 'https://restcountries.com/v3.1/name/';
  //   return this.http.get<any>(apiUrl)
  //     .pipe(
  //       retry(1),
  //       catchError(this.handleError)
  //     );
  // }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    // window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
