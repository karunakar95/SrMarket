import { Component, OnInit, OnChanges, Input, ViewChild, ElementRef } from '@angular/core';
import { RecommendationserviceService } from './../../shared/services/recommendationservice.service'
import { of, from, interval, Subscription } from 'rxjs'
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges {

  @Input() data;
  title;
  heroes : any[]
  intervalsubscription : Subscription;
  @ViewChild('myelement') listRef: ElementRef<HTMLDivElement>;


  constructor(public recommended : RecommendationserviceService) {

    console.log('Child Constructor!!');
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





}
