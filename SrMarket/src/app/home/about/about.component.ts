import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
savedContent : any;
  constructor() { }

  ngOnInit() {
    this.savedContent = [
      {
        title : "SavedContent1",
        description: "SavedContent1 Description",
        imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
     },
     {
       title : "SavedContent2",
       description: "SavedContent2 Description",
       imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
    },
    {
     title : "SavedContent3",
     description: "SavedContent3 Description",
     imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
  },
  {
   title : "SavedContent4",
   description: "SavedContent4 Description",
   imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
 },
 {
   title : "SavedContent5",
   description: "SavedContent5 Description",
   imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
 }
    ]
  }

}
