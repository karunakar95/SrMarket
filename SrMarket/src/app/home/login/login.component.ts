import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName : any
  Password : any
  constructor(
public router : Router
  ) { }

  ngOnInit() {

  }

  logIn() {
    if(this.userName == 'GoHome' && this.Password == 'Okay'){
      this.router.navigate(['/home']);
    } else {
      alert('Given creds are wrong! Please try again!!');
    }

  }

}
