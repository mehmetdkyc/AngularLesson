import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //burada root dediğimiz için provider içinde tanımlanması şart değildir. any olsaydı her isteğe zel instance üretilecek demektir.
}) //Injectable tagini kullanmak istemezsek app-module tarafında provider içerisine helperservice tanımlaması yaparak ta kullanıma devam edebiliriz.
export class HelperService {

  isShow:boolean=false;
  constructor() { }

  toUpper(text:string){
    return text.toUpperCase();
  }
  SendSms(){
    console.log("gerçek sms gönderildi.");
  }
}
