import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {map, shareReplay} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RecommendationserviceService {

  public data : any;
  public data$ : Observable<any>

  constructor(
    private http: HttpClient
    ) {

    // this.data$ = this.http.get<any>('../assets/Recommendations.json').pipe(map(
    //   res => {
    //     this.data = res.recommendations;
    //     console.log('Just after Mapping==', this.data);

    //     return this.data;
    //   }), shareReplay());
    // console.log('Recommended data$ = ', this.data$);
    // console.log('Recommended data = ', this.data);

    this.data$ = this.http.get<any>('../assets/Recommendations.json')

  }

}
