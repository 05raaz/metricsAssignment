import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailId: any;

  constructor() { }

  ngOnInit(): void {
  }

  subscribe() {
    window.alert("Thank you for subscribing: "+" "+this.emailId);
  }
}
