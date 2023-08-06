import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit{
  person1:Person={userName:"mehmet", lastname:"dokuyucu", age:25};
  mydate= new Date();
  constructor(){

  }
  ngOnInit(): void {
    
  }

}

class Person{
userName:string | undefined;
lastname:string | undefined;
age:number | undefined;
}