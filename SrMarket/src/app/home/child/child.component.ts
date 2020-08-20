import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { RecommendationserviceService } from './../../shared/services/recommendationservice.service'
import { of, from, interval, Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit{

  @Input() data;
  title;
  heroes : any[]
  intervalsubscription : Subscription;
  @ViewChild('myelement') listRef: ElementRef<HTMLDivElement>;
  activeAlerts = ['Alert1','Alert2','Alert3','Alert4','Alert5'];
  animate : boolean;
  dismissedAlerts : any[] = [];
  Recommendations : any;
  programTasks: any;
  leaderboardsList: any;


  constructor(
    public recommended : RecommendationserviceService,
    private cdr : ChangeDetectorRef) {

    //console.log('Child Constructor!!');
  }

  get ActivealertList() {
const filteredAlerts = this.activeAlerts.filter(al => !this.dismissedAlerts.includes(al));
console.log('Filtered Alerts', filteredAlerts);

return filteredAlerts;
  }

  ngOnInit() {

  }

}
