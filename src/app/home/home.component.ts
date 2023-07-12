import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from '../services/country-details.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countryList  =[];
  detailedinfo: any;
  modalReference: any;
  closeResult: string;
  startIndex = 0;
  endIndex = 20;
  countryName: any;
  loading = false;

  constructor(private countryDetailsSer: CountryDetailsService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.countryDetailsSer.getCountryDetails().subscribe((response: any) => {
      this.countryList = response;
      this.countryList.sort((a, b) => (a['name']['common'] < b['name']['common'] ? -1 : 1));
    })

  }

  getDetails(countryName: string, content: any) {
    this.countryList.filter( (ele: any) => {
      if (countryName ===  ele['name']['common']) {
        this.detailedinfo = ele;
      }
    });
    console.log(this.detailedinfo);
    this.open(content);
  }

  open(content: any) {
    this.modalService.open(content, {  windowClass: 'custom-class' });
  }

  next () {
    this.countryList.length;
    this.endIndex = this.endIndex+20;
    console.log(this.startIndex,this.endIndex);
  }

  searchForCountry() {
    this.loading = true;
    this.countryDetailsSer.searchCountry(this.countryName).subscribe((response: any) =>{
      this.loading = false;
      this.countryList = response;
    })
  }
}
