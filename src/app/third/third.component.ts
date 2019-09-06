import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {

  data: number=0;
  
  constructor(private observableService:ObservableService) { }

  ngOnInit() {
    this.observableService.onChangeData().subscribe((data)=>{
      this.data=data;
      console.log(`I am data from 3 component: ${this.data}`);
    });
  }

}
