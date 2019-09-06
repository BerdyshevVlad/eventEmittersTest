import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tag-manager',
  templateUrl: './tag-manager.component.html',
  styleUrls: ['./tag-manager.component.css']
})
export class TagManagerComponent implements OnInit {

  // @Input() availableItems:string[];
  // @Output() selectedItemsEvent = new EventEmitter();
  // @Output() availableItemsEvent = new EventEmitter();

  // private selectedItems=[];
  // private AVAILABLE_ITEMS = this.availableItems;
  // private SELECTED_ITEMS = this.selectedItems;

  // private tmpSelectedItems=[];

  constructor() { }

  ngOnInit() {
  }


  // addItem(){
  //   this.tmpSelectedItems.forEach(element => {
  //     if(this.selectedItems.indexOf(element) === -1) {
  //       this.availableItems.splice(this.availableItems.indexOf(element),1)
  //       this.selectedItems.push(element);
  //     }
  //   });

  //   this.AVAILABLE_ITEMS = this.availableItems;
  //   this.SELECTED_ITEMS = this.selectedItems;

  //   this.changeSelectedItems();
  //   this.changeAvailableItems();
  // }


  // removeItem(){
  //   this.tmpSelectedItems.forEach(element => {
  //     if(this.availableItems.indexOf(element) === -1) {
  //       this.selectedItems.splice(this.selectedItems.indexOf(element),1);
  //       this.availableItems.push(element);
  //     }
  //   });

  //   this.AVAILABLE_ITEMS = this.availableItems;
  //   this.SELECTED_ITEMS = this.selectedItems;

  //   this.changeSelectedItems();
  //   this.changeAvailableItems();
  // }


  // searchItems(event){
  //   if(event.target.name=="availableItems"){
  //     this.availableItems=this.search(event.target.value,this.AVAILABLE_ITEMS);
  //   }

  //   if(event.target.name=="selectedItems"){
  //     this.selectedItems=this.search(event.target.value,this.SELECTED_ITEMS);
  //   }
  // }


  // search(value, data) {
  //   if(!value){
  //     return data;
  //   }
  //   let result=[];
  //   data.forEach(element => {
  //     if(element.toLowerCase().includes(value.toLowerCase())){
  //       result.push(element);
  //     }
  //   });

  //   return result;
  // }


  // changeSelectedItems() {
  //   this.selectedItemsEvent.emit(this.selectedItems);
  // }


  // changeAvailableItems() {
  //   this.availableItemsEvent.emit(this.availableItems);
  // }

}
