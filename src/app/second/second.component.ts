import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  data: number=0;
  
  constructor(private dataService: DataService,private observableService:ObservableService) { }

  ngOnInit() {

    this.observableService.onChangeData().subscribe((data)=>{
      this.data=data;
      console.log(`I am data from 2 component: ${this.data}`);
    });
  }

}
