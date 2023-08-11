import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  isShow:boolean=false;
  constructor() { }

  toUpper(text:string){
    return text.toUpperCase();
  }
}
