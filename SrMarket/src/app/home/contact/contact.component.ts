import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  listItems: any;
  constructor() { }

  ngOnInit() {
    this.listItems = [
      {
     title : "Experiance Points"
    },
    {
      title : "Report an Issue"
     },
     {
      title : "Frequently Asked Questions"
     },
     {
      title : "Terms Of Service"
     },
     {
      title : "SignOut"
     }
  ]
  }

}
