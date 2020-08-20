import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { RecommendationserviceService } from 'src/app/shared/services/recommendationservice.service';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, OnChanges {

  data: any;
  @Input() dataToParent;

  // constructor() {
  //   console.log('Parent Constructor!!');

  // }

  constructor(private recommendations : RecommendationserviceService) {


    this.recommendations.data$.subscribe((data)=> {console.log('Recoms parentComponent subscribe===', data)});

    console.log('Parent Constructor!!');
    setTimeout(() => {
      this.data = 'Karunakar Second string!';
    }, 10000);

    setTimeout(() => {
      this.data = 'Karunakar 3rd String!!';
    }, 15000);
  }

  ngOnInit() {

    console.log('Parent ngOnIt!!');


    this.data = 'Karunakar first string!';


  }

  ngOnChanges() {
    console.log('data got passed from Home to Parent Component!');
    console.log('ParentNgOnchnages!!');
  }

}
