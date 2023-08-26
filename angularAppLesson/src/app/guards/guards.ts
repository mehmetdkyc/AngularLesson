import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, Route, RouterStateSnapshot, UrlSegment } from "@angular/router";

export const canActivateGuard: CanActivateFn =(route: ActivatedRouteSnapshot,state:RouterStateSnapshot)=>{
    console.log("Canactivate guard"); //burada işlemler yapılıyor tabii.
    return true;
}

export const canActiveChildGuard : CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)=>{
    console.log("canactivatechild guard works.")
    return true;
}

export const canDeactivate : CanDeactivateFn<any> = (component: any, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot) =>{
    console.log("candeactivate guard works.")
    return true;
}

export const resolveGuard : ResolveFn<any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{
    const httpClient =  inject(HttpClient); // ilgili componentte api çağırımı bittikten sonra yüklemesi tamamlanır. yani cevap geldi sayfa artık hazırsa componentin gösterimi yapılır.
}

export const isAdminGuard: CanMatchFn= (route: Route, segments: UrlSegment[]) =>{
    return !!localStorage.getItem("admin");
}

export const isUserGuard: CanMatchFn= (route: Route, segments: UrlSegment[]) =>{
    return !localStorage.getItem("admin");
}