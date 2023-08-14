import { Component, Inject, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HelperService } from 'src/app/services/helper.service';
import { Helper2Service } from 'src/app/services/helper2.service';

@Component({
  selector: 'app-firstservicecomponent',
  templateUrl: './firstservicecomponent.component.html',
  styleUrls: ['./firstservicecomponent.component.css']
})
export class FirstservicecomponentComponent implements OnInit   {
  constructor(@Inject(Helper2Service) private helperServiceManuel :any, private helperService:HelperService,private title:Title) {
    //yukarıda Inject tag'i ile de ilgili instance'ı DI olarak elde edeceğimizi belirtebiliriz.
    //Eğer ki HelperServicein içinde de bağımlı olduğu bir service var ise onu providerda tanımlamamız lazım ki @Inject ile belirttiğimiz servicemiz instance oluşturacağı zaman içerisinde kullandığı servisin instance'ını da eş zamanlı oluştuurlsun.
  }
  ngOnInit():void{
    console.log(this.helperService.toUpper("mehmet"));
    this.title.setTitle("Angular Fatih and Gençay's Tutorials");
  }
  SendSms(){
    this.helperService.SendSms();
    console.log("first component");
  }
}
