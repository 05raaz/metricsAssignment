import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryDetailsService {

  constructor(private http: HttpClient) { }

  getCountryDetails() {
    return this.http.get("https://restcountries.com/v3.1/all");
  }

  searchCountry(name: any) {
    let url = 'https://restcountries.com/v3.1/name/';
    return this.http.get(url+name);
  }
}
