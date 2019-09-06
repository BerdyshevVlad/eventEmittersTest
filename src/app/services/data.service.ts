import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from 'rxjs';
import { ObservableService } from './observable.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient,private observableService: ObservableService) { }

  getData(data:number):Observable<Number>{
    data++;
    this.observableService.changeData(data);
    let event = of(data);

    event = new Observable(observer =>{
      setTimeout(() => {observer.next(data);}, 1000)
    }
    );

    //setTimeout(()=>{data++;this.observableService.changeData(data);},1000);
    //return of(data);
    return event;
  }

}