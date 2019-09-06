import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // private availableItems = ['Alabama', 'Alchevsk', 'London', 'LA',
  // 'Paris','Barselona','Alkmaar','Tokyo','New York','Mexico','Sao Paolo'];
  // private selectedItems = []; 

  constructor() {
  }

  ngOnInit(){
  }

  // selectedItemsEvent(selectedItems) {
  //   console.log(`SelectedItems: ${selectedItems}`);
  //   this.selectedItems=selectedItems;
  // }


  // availableItemsEvent(availableItems) {
  //   console.log(`AvailableItems: ${availableItems}`);
  //   this.selectedItems=availableItems;
  // }

  // a(b:number):number;

  // a(b:string):string;

  // a(x:any):any{
  //   x=x+2;
  // }

}
