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
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
