import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutAgeComponent } from './pages/about-age/about-age.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'}, //eğer ki baseurl ise anasayfaya yönlendir demek, patchmatch full demek verdiğimiz path tamamen eşleşek demek, path:prefix ise yazılan ilk path eşleşiyorsa yeterli demek home/5 yazsak bile home'a gider 
  {path:'home', component:HomePageComponent},  //burada componentlere gideceğimiz pathleri declare edip sonrasında hreflerde hangi pathi veriyorsak ona gider ilgili yönlendirme
  {path:'about', component:AboutAgeComponent},
  {path:'about/:id', component:AboutAgeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
