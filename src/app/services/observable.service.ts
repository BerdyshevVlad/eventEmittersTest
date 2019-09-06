import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {

  eventEmitter = new EventEmitter();

  constructor() { }

  public changeData(param) {
    this.eventEmitter.emit(param);
  }

  onChangeData(){
    return this.eventEmitter;
  }


}