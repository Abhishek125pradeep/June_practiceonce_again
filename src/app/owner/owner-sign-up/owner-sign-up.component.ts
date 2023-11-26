import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonApiService } from '../CommonScreen/common-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.scss']
})
export class OwnerSIgnUpComponent {
  signUpForm!: FormGroup
  Apiresponse: any;
  Male="Male";
  FeMale="female";
  other="other"
  constructor(private fb: FormBuilder,private commonApiService:CommonApiService, private rout:Router ) { }
  ngOnInit() {
    this.Signupformcontrol()
  }
  Signupformcontrol() {
    this.signUpForm = this.fb.group({
      userName:[],
      Email:[],
      MobNo:[],
      Password:[],
      ConfirmPassword:[],
      Gender:[]
    })
  }
  Submit(data:any){
console.log("data",data);
this.rout.navigateByUrl("/Owner/Ownersuccess")
let endpoint="Owner"
this.commonApiService.PostApicall(data,endpoint).subscribe(response =>{
  this.Apiresponse = response
})
  }
}
