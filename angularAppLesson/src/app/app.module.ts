import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutAgeComponent } from './pages/about-age/about-age.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

let isProd:boolean =false;

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    UpperPipe,
    FormcompComponent,
    ReactiveFormsComponent,
    FirstservicecomponentComponent,
    SecondservicecomponentComponent,
    HomePageComponent,
    AboutAgeComponent,
    ProductPageComponent,
    ProductDetailPageComponent,
    AdminPageComponent,
    UserPageComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  //buradaki useClass'ın özelliği HelperService'ın kullanılmak istenilen yerde Helper2Service instancenı yollamaktır. Sebebi şu belki test ortamında başka bir işlem yapıyoruzdur metodun içerisinde canlıda
  //başkadır o yüzden böyle böyle service instancelarını isteğe göre değiştirilebilmektedir. 
  providers: [
    {provide:HelperService, useClass: isProd ? HelperService : Helper2Service},
    {provide:"baseUrl", useValue:"www.deneme.com"} //string DI provider, useValue bir stringi bir fonksiyonu tutan providerdır.
    //factory provider ve aliased class procider da vardır.
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
