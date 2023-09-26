import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject, Observable } from 'rxjs';
export function CheckNull(value){
  if(value != '' || value != undefined || value != null){
    return true
  }else{
    return false
  }
}
@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private subject$ = new Subject<any> //holds all value it doesn't have any initial value
  private behaviorSubject$ = new BehaviorSubject<any>(0) // only holds last value and have initial value
  private replySubject$ = new ReplaySubject<any> // it does not have any initial value & holds all the value also have buffer size

  constructor() {
  }

  sendMessage(message: string) {
    this.subject$.next(message);
  }

  receiveMessag(): Observable<string> {
    return this.subject$.asObservable();
  }

  setCount(number){
    if(CheckNull(number)){
    this.subject$.next(number + 1)
    }else{
      this.subject$.next(0)
    }
  } 
  getcount(): Observable<any>{
    return this.subject$.asObservable();
  }
  
  setTimer() {
    var count = 60;
    // var time = min;
    setInterval(() => {
      if (count != 0) {
        count = count - 1
        let value = String(count).length == 1 ? `00.0${count}` : `00.${count}`
        this.behaviorSubject$.next(value)
      }
    })
  }
}
