import { Component, OnInit } from '@angular/core';
import { flatMap } from 'rxjs/operators';

import { DataService } from '../services/data.service';
import { ObservableService } from '../services/observable.service';
import { of, Observable } from 'rxjs';

@Component({
  selector: 'app-forth',
  templateUrl: './forth.component.html',
  styleUrls: ['./forth.component.css']
})
export class ForthComponent implements OnInit {

  data: number=0;
  
  constructor(private dataService: DataService,private observableService:ObservableService) { }

  ngOnInit() { 
    this.onDataChange();

    this.dataService.getData(4)    
    .pipe(
      flatMap((res)=>{
        console.log(`I am from 4 component located in flatMap! Res is ${res}`);
        let tmp = this.dataService.getData(44);
        return tmp;
      })
    )
    .subscribe((result:number)=>{
      this.data=result;
      console.log(`I am data/result from 4 component: ${this.data}!!!!!!`);
    });

   
  }


  onDataChange(){
    this.observableService.onChangeData().subscribe((data)=>{
        this.data=data;
        console.log(`I am data from 4 component: ${this.data}`);
    });
  }
}
