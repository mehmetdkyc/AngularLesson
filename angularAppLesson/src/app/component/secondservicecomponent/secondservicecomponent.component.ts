import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-secondservicecomponent',
  templateUrl: './secondservicecomponent.component.html',
  styleUrls: ['./secondservicecomponent.component.css']
})
export class SecondservicecomponentComponent implements OnInit  {

  constructor(private helperService:HelperService,private meta:Meta) {

  }
  ngOnInit():void{
    console.log(this.helperService.toUpper("dokuyucu"));
    this.meta.addTag({author:"Gençay"});
  }
}
