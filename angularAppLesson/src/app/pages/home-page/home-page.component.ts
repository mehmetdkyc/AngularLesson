import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
 
  constructor(private activatedRoute:ActivatedRoute,private route:Router) {

  }
  ngOnInit(): void {

    let page = this.activatedRoute.snapshot.queryParamMap.get("page");
    let pageSize = this.activatedRoute.snapshot.queryParamMap.get("pageSize"); //query ile yollanan urlde ilgili parametrelerin değerini elde etme yöntemi
    console.log("page : "+page+"/ pageSize: "+ pageSize);
   
  }
  goToAboutPage(){
    this.route.navigateByUrl("/about?page=3&pageSize=5");
  }
}
