import { Component, OnInit } from '@angular/core';
import { CountryDetailsService } from '../services/country-details.service';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import swal, { SweetAlertType } from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  countryList = [];
  detailedinfo: any;
  modalReference: any;
  closeResult: string;
  startIndex = 0;
  endIndex = 20;
  countryName: any;
  loading = false;
  error: boolean;

  constructor(private countryDetailsSer: CountryDetailsService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loading = true;
    this.countryDetailsSer.getCountryDetails().subscribe((response: any) => {
      this.countryList = response;
      this.loading = false;
      this.countryList.sort((a, b) => (a['name']['common'] < b['name']['common'] ? -1 : 1));
    })

  }

  //To show details of specific country in pop-up.
  getDetails(countryName: string, content: any) {
    this.countryList.filter((ele: any) => {
      if (countryName === ele['name']['common']) {
        this.detailedinfo = ele;
      }
    });
    this.open(content);
  }

  //To open the pop-up model.
  open(content: any) {
    this.modalService.open(content, { windowClass: 'custom-class' });
  }

  //To fetch next 5 Rows of data to be displyed
  next() {
    this.countryList.length;
    this.endIndex = this.endIndex + 20;
  }

  //Search functionality for countries name
  searchForCountry() {
    this.loading = true;
    this.countryDetailsSer.searchCountry(this.countryName).subscribe((response: any) => {
      this.loading = false;
      this.countryList = response;
    },
      error => {
        this.error = error;
        this.loading = false;
        this.swalAlert(error, "Error", 'error');
      })
  }

  //Showing Error Msg in pop-up if search api return error response
  swalAlert(description: string, submitType: string, alertType: SweetAlertType) {
    swal({
      title: submitType,
      text: description,
      type: alertType
    }).then(
      function () {
        if (submitType == "Submitted") {

        }
      }
    );
  }

}
