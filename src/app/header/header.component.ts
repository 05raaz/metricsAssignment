import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from '../services/country-details.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  disableSearchBtn: boolean = true;
  countryName: any;
  countryList  =[];
  loading = false;

  constructor(private countryDetailsSer: CountryDetailsService) { }

  ngOnInit(): void {
  }

  // enableSerachBtn(): void{
  //   this.disableSearchBtn = this.countryName.length >0 ? false : true;
  //   console.log(this.countryName);
  // }

  

}
