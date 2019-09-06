import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {

  data: number=0;
  
  constructor(private dataService: DataService,private observableService:ObservableService) { }

  ngOnInit() {
    this.observableService.onChangeData().subscribe((data)=>{
      this.data=data;
      console.log(`I am data from 1 component: ${this.data}`);
    });
  }

}
