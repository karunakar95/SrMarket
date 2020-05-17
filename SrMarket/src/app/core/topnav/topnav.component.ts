import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  navList : any [];
  signInOptions : any [];
  constructor() { }

  ngOnInit() {
    this.navList = ['Products', 'Deals', 'About', 'Contact'];
    this.signInOptions = ['LogIn', 'SignIn', 'Cart'];
  }

}
