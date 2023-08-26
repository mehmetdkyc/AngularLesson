import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AboutAgeComponent } from './pages/about-age/about-age.component';
import { ProductPageComponent } from './pages/product-page/product-page.component';
import { ProductDetailPageComponent } from './pages/product-detail-page/product-detail-page.component';
import { canActivateGuard, canActiveChildGuard, canDeactivate, isAdminGuard, isUserGuard, resolveGuard } from './guards/guards';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'}, //eğer ki baseurl ise anasayfaya yönlendir demek, patchmatch full demek verdiğimiz path tamamen eşleşek demek, path:prefix ise yazılan ilk path eşleşiyorsa yeterli demek home/5 yazsak bile home'a gider 
  {path:'home', component:HomePageComponent},  //burada componentlere gideceğimiz pathleri declare edip sonrasında hreflerde hangi pathi veriyorsak ona gider ilgili yönlendirme
  {path:'about', component:AboutAgeComponent},
  {path:'user', component:UserPageComponent,canMatch:[isUserGuard]},
  {path:'admin', component:AdminPageComponent,canMatch:[isAdminGuard]}, // aynı pathtte hangi componentin yükleneceğine karar verir.
  {path:'about/:id', component:AboutAgeComponent},
  {path:'product',resolve:[resolveGuard],canDeactivate:[canDeactivate], component:ProductPageComponent,canActivate:[canActivateGuard],children:[ //buradaki canActivateGourd'ı product componentine erişip erişemeyeceğini kontrol eden bir yapıdır. eğer false dönüyorsa ilgili componente erişilemeyecektir.
    {path:'detail',canActivateChild:[canActiveChildGuard],component:ProductDetailPageComponent} //bu da children olan componentler için canactivechildguard örneği
  ]}, //candeactivate özelliği ise başka bir componente route yapılırken izin vermesidir. false ise başka componente geçiş yapılamaz.
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
