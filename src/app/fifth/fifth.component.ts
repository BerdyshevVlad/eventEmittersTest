import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service'
import { ObservableService } from '../services/observable.service';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {

  data: number=0;
  
  constructor(private observableService: ObservableService) { }

  ngOnInit() {
    this.observableService.onChangeData().subscribe((data)=>{
      this.data=data;
      console.log(`I am data from 5 component: ${this.data}`);
    });
  }



}
