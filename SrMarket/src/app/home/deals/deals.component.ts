import { Component, OnInit, Input, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { of, from, interval, Subscription } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { RecommendationserviceService } from './../../shared/services/recommendationservice.service';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.scss'],
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
export class DealsComponent implements OnInit {

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

    this.programTasks = [
      {
        title: "program1",
        Desc : "Test Program1"
      },
      {
        title: "program2",
        Desc : "Test Program2"
      },
      {
        title: "program3",
        Desc : "Test Program3"
      },
      {
        title: "program4",
        Desc : "Test Program4"
      }

    ]
    const myObservable = of(1,2,3,4);

    this.leaderboardsList = [
      {
      title: "LeaderBoard1",
      startDate: "29th July",
      endDate: "8th Aug",
      rank: 28
      },
      {
        title: "LeaderBoard2",
        startDate: "21st July",
        endDate: "18th Aug",
        rank: 25
        },
        {
          title: "LeaderBoard3",
          startDate: "10th Aug",
          endDate: "8th Aug",
          rank: 48
          },
          {
            title: "LeaderBoard4",
            startDate: "24th July",
            endDate: "12th Aug",
            rank: 20
            },
            {
              title: "LeaderBoard5",
              startDate: "2nd July",
              endDate: "14th Aug",
              rank: 21
           },
           {
            title: "LeaderBoard6",
            startDate: "22nd July",
            endDate: "31st Aug",
            rank: 27
         },
         {
          title: "LeaderBoard7",
          startDate: "14th July",
          endDate: "13th Aug",
          rank: 87
       }
  ]

    myObservable.subscribe({
      next: res => {
       // console.log('myObservable values==',res);

      }
    })

   // console.log('Child NgOnInIt!!');
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
      this.Recommendations = res.recommendations;
     // console.log('REÉ',this.Recommendations);

    },

    error: err => {
      console.log('Error', err);
    },

    complete: () => {
//console.log('completed');

    }
  })

  //Creating observable from a Promise

  const useingrxjsfrom =  from(fetch('../assets/Recommendations.json'))

  useingrxjsfrom.subscribe({
    next : res => {
    //  console.log('Using RXJS from',res);
    }
  })

  //Creating an Observable using timer

  const conterobservable = interval(1000);

  this.intervalsubscription = conterobservable.subscribe({
    next : res => {
     // console.log(`its been ${res} seconds from subscribing`);
    }
  })

setTimeout(() => {
  this.intervalsubscription.unsubscribe();
}, 10000);

const el = document.getElementById('myelement');
//console.log('element', el);

const ajaxre =  ajax('../assets/Recommendations.json');

ajaxre.subscribe({
  next : res => {
  //  console.log('AJAX RES==', res);

  }
})


  }

  ngOnChanges() {
   // console.log('data got passed from Parent to Child!', this.data);
   // console.log('Child NgOnChanges!!');
  }

  openAddress(addressHtml: HTMLElement) {

    //console.log('HTML ELE', addressHtml
   // );
  }

  closingAlert(alert) {
    this.animate = true;
    this.cdr.detectChanges();
    this.animate = false;
    this.dismissedAlerts.push(alert);
   // console.log('Dimsmissed Alerts', this.dismissedAlerts);
  }
}
