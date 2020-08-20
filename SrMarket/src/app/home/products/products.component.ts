import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  spotlights : any;
  collectionList: any;

  constructor() { }

  ngOnInit() {

    this.spotlights = [
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
  this.collectionList = [
    {
      title : "Collection1",
      description: "Collection1 Description",
      imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
   },
   {
     title : "Collection2",
     description: "Collection2 Description",
     imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
  },
  {
   title : "Collection3",
   description: "Collection3 Description",
   imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
},
{
 title : "Collection4",
 description: "Collection4 Description",
 imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
},
{
 title : "Collection5",
 description: "Collection5 Description",
 imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
},
{
  title : "Collection1",
  description: "Collection1 Description",
  imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
},
{
 title : "Collection2",
 description: "Collection2 Description",
 imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
},
{
title : "Collection3",
description: "Collection3 Description",
imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
},
{
title : "Collection4",
description: "Collection4 Description",
imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
},
{
title : "Collection5",
description: "Collection5 Description",
imageUrl : "https://alpdownloaduat.cdn-apple.com/uat/3.0/public/d858e8f3-8fc2-4080-8749-412e8d927cfb/1.0/Spotlight.png"
}
  ]
  }

}
