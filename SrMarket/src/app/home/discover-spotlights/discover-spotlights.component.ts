import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discover-spotlights',
  templateUrl: './discover-spotlights.component.html',
  styleUrls: ['./discover-spotlights.component.scss']
})
export class DiscoverSpotlightsComponent implements OnInit {

  spotlightList : any;
  constructor() { }

  ngOnInit() {
    this.spotlightList = [
      {
        title : "SpotLight1",
        description: "SpotLight1 Description",
        imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
     },
     {
       title : "SpotLight2",
       description: "SpotLight2 Description",
       imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
    },
    {
     title : "SpotLight3",
     description: "SpotLight3 Description",
     imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
  },
  {
   title : "SpotLight4",
   description: "SpotLight4 Description",
   imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
 },
 {
   title : "SpotLight5",
   description: "SpotLight5 Description",
   imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
 }
    ]
  }

}
