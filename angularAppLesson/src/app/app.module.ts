import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './pipes/pipe/pipe.component';
import { UpperPipe } from './pipes/upper.pipe';
import { FormcompComponent } from './forms/formcomp/formcomp.component';
import { ReactiveFormsComponent } from './forms/reactive-forms/reactive-forms.component';
import { FirstservicecomponentComponent } from './component/firstservicecomponent/firstservicecomponent.component';
import { SecondservicecomponentComponent } from './component/secondservicecomponent/secondservicecomponent.component';
import { HelperService } from './services/helper.service';
import { Helper2Service } from './services/helper2.service';

let isProd:boolean =false;

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    UpperPipe,
    FormcompComponent,
    ReactiveFormsComponent,
    FirstservicecomponentComponent,
    SecondservicecomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //buradaki useClass'ın özelliği HelperService'ın kullanılmak istenilen yerde Helper2Service instancenı yollamaktır. Sebebi şu belki test ortamında başka bir işlem yapıyoruzdur metodun içerisinde canlıda
  //başkadır o yüzden böyle böyle service instancelarını isteğe göre değiştirilebilmektedir. 
  providers: [{provide:HelperService, useClass: isProd ? HelperService : Helper2Service}],
  bootstrap: [AppComponent]
})
export class AppModule { }
