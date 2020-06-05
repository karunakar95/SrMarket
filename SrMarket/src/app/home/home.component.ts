import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  arr = [];
  constructor() { }

  ngOnInit() {
    this.arr = [
      {"name": "karunakar",
       "age" :24,
       "dob" : "Jan 24"
    },
    {
      "name": "Tarun",
      "age" :16,
      "dob" : "June 29"
    },
    {
     "name": "Bhaskar",
     "age" :89,
     "dob" :  "Oct 2"
    },
    {
      "name": "Mahesh",
      "age" :29,
      "dob" : "Dec 29"
    },
    {
      "name": "Pawan",
      "age" :22,
      "dob" : "Nov 18"
    }
  ];
    this.sortedArray(this.arr);
  }

  /*****   Sorting an array  ******/

  sortByName(arr){
    arr.sort((a,b)=>{
      return (a.name.localeCompare(b.name));
    })
    return arr;
  }

  sortByAge(arr){
    arr.sort((a,b)=>{
      if(a.age - b.age){
        return a.age - b.age;
      }
    })
  }

  sortedArray(arr){

    arr.sort((a,b)=> {
      if(a.age-b.age){
        return a.age -b.age;
      }
    })


 /*****  Reverse an array *****/
   // arr.reverse();

  /*  arr.sort((a,b)=>{
     if(a>b){
       return 1;
     } else {
       return -1;
     }
   })  */

   /**** Sort by names ******/
/*
   arr.sort((a,b)=>{
     return (a.name.localeCompare(b.name));
   })
*/

    return arr;
  }

}
