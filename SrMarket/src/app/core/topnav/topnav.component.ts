import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {


  signInOptions : any [];
  constructor(
    public router : Router
  ) { }

  ngOnInit() {

    this.signInOptions = ['LogIn', 'SignIn', 'Cart'];
  }

  logout(){
  this.router.navigate(['/app-login']);
  }

}
