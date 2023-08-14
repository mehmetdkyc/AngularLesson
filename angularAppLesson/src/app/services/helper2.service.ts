import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Helper2Service {

  isShow:boolean=false;
  constructor() { }

  toUpper(text:string){
    return text.toUpperCase()+ "helper 2 hali";
  }
  SendSms(){
    console.log("fake sms gönderildi.");
  }
}
