import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html'
})
export class ReactiveFormsComponent {
  frm : FormGroup;

  constructor(private formBuilder:FormBuilder) {
   this.frm=formBuilder.group({
    name:["",[Validators.required, Validators.minLength(3)]],
    surname:[""],
    email:["",[Validators.required, Validators.email]],
    tel:[""],
    address: formBuilder.group({
      country:[""],
      city:[""],
      address:[""],
    })
   })

   this.frm.valueChanges.subscribe({
    next:data =>{
      console.log(data);
    }
    //bu forma subscribe olarak değişiklikleri eş zamanlı anında veerileri direkt çekme 
   })

   this.frm.get("name")?.statusChanges.subscribe({
    next:data =>{
      console.log(data);
    }
      //bu formdaki name alanına subscribe olarak değişiklikleri eş zamanlı anında veerileri direkt çekme 
   })

  }
  get getName(){
    return this.frm.get("name");
  }
  get getEmail(){
    return this.frm.get("email");
  }
  onSubmit(){
    console.log(this.frm?.value);
    console.log(this.frm?.valid);
  }
}
