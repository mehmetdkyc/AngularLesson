import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-firstservicecomponent',
  templateUrl: './firstservicecomponent.component.html',
  styleUrls: ['./firstservicecomponent.component.css']
})
export class FirstservicecomponentComponent implements OnInit   {
  constructor(private helperService:HelperService,private title:Title) {
    
  }
  ngOnInit():void{
    console.log(this.helperService.toUpper("mehmet"));
    this.title.setTitle("Angular Fatih and Gençay's Tutorials");
  }
}
