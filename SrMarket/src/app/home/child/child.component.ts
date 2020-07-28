import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { RecommendationserviceService } from './../../shared/services/recommendationservice.service'
import { of, from, interval, Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  animations: [trigger(
    'dismissAnimation', [
    transition("active => void",[
      style({ transform: '*', opacity: 1 }),
      animate('300ms ease-out',
        style({ transform: 'translateY(100px)', opacity: 0}))
      // animate('2000ms ease-out',
      //    style({ transform: 'translateX(200px)', opacity: 1, backgroundColor: 'blue'})),
      // animate('1s ease-out',
      // style({ transform: 'translateX(-400px)', opacity:1, backgroundColor: 'green' })),
      // animate('1s ease-out',
      // style({ transform: 'translateY(-200px)', opacity:1}))
    ])
  ])]
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() data;
  title;
  heroes : any[]
  intervalsubscription : Subscription;
  @ViewChild('myelement') listRef: ElementRef<HTMLDivElement>;
  activeAlerts = ['Alert1','Alert2','Alert3','Alert4','Alert5'];
  animate : boolean;
  dismissedAlerts : any[] = [];


  constructor(
    public recommended : RecommendationserviceService,
    private cdr : ChangeDetectorRef) {

    console.log('Child Constructor!!');
  }

  get ActivealertList() {
const filteredAlerts = this.activeAlerts.filter(al => !this.dismissedAlerts.includes(al));
console.log('Filtered Alerts', filteredAlerts);

return filteredAlerts;
  }

  ngOnInit() {

    const myObservable = of(1,2,3,4);

    myObservable.subscribe({
      next: res => {
        console.log('myObservable values==',res);

      }
    })

    console.log('Child NgOnInIt!!');
    this.title = 'Tour of Heroes';
    this.heroes = [{
      "name" : "karunakar",
      "Age" : 25
    },
    {
      "name" : "Deepak",
      "Age" : 45
    },
    {
      "name" : "Sharang",
      "Age" : 26
    },
    {
      "name" : "Pallavi",
      "Age" : 27
    }
  ]


  const recsubscription =  this.recommended.data$.subscribe({
    next: res => {
      console.log('result', res);
    },

    error: err => {
      console.log('Error', err);
    },

    complete: () => {
console.log('completed');

    }
  })

  //Creating observable from a Promise

  const useingrxjsfrom =  from(fetch('../assets/Recommendations.json'))

  useingrxjsfrom.subscribe({
    next : res => {
      console.log('Using RXJS from',res);
    }
  })

  //Creating an Observable using timer

  const conterobservable = interval(1000);

  this.intervalsubscription = conterobservable.subscribe({
    next : res => {
      console.log(`its been ${res} seconds from subscribing`);
    }
  })

setTimeout(() => {
  this.intervalsubscription.unsubscribe();
}, 10000);

const el = document.getElementById('myelement');
console.log('element', el);

const ajaxre =  ajax('../assets/Recommendations.json');

ajaxre.subscribe({
  next : res => {
    console.log('AJAX RES==', res);

  }
})


  }

  ngOnChanges() {
    console.log('data got passed from Parent to Child!', this.data);
    console.log('Child NgOnChanges!!');
  }

  openAddress(addressHtml: HTMLElement) {

    console.log('HTML ELE', addressHtml
    );
  }

  closingAlert(alert) {
    this.animate = true;
    this.cdr.detectChanges();
    this.animate = false;
    this.dismissedAlerts.push(alert);
    console.log('Dimsmissed Alerts', this.dismissedAlerts);
  }
}
