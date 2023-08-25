import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about-age',
  templateUrl: './about-age.component.html',
  styleUrls: ['./about-age.component.css']
})
export class AboutAgeComponent implements OnInit {

  constructor(private route:Router,private routeSecond:ActivatedRoute) {
    

  }
  ngOnInit(): void {
    let id=this.routeSecond.snapshot.paramMap.get('id'); //eğer urlde id varsa bu yöntemle id'yi alabiliriz.
    console.log(id);

    let page = this.routeSecond.snapshot.queryParamMap.get("page");
    let pageSize = this.routeSecond.snapshot.queryParamMap.get("pageSize"); //query ile yollanan urlde ilgili parametrelerin değerini elde etme yöntemi
    console.log("page : "+page+"/ pageSize: "+ pageSize);
  }
  changeQueryParams(){
    this.route.navigate(["home"],{queryParams:{page:10,pageSize:20}});
  }
  goToHomePage(){
    this.route.navigateByUrl("/home");  //butona basarak componentler arası geçiş
    //this.route.navigate(['home',5]) //parametre alarak routelama işlemi yapmak için
  }
}
