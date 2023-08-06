import { Component } from '@angular/core';

@Component({
  selector: 'app-formcomp',
  templateUrl: './formcomp.component.html',
  styleUrls: ['./formcomp.component.css']
})
export class FormcompComponent {

constructor() {
  
}
save(input:string){
console.log(input);
}
}
