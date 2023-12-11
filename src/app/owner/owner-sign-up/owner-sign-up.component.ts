import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonApiService } from '../CommonScreen/common-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner-sign-up',
  templateUrl: './owner-sign-up.component.html',
  styleUrls: ['./owner-sign-up.component.scss']
})
export class OwnerSIgnUpComponent {
  signUpForm!: FormGroup;
  Apiresponse: any;
  Male = "Male";
  FeMale = "female";
  other = "other";
  isGenderSelected = true;
  PasswordMatch: any;
  ConfirmPaasword: any;
  iSMatch!: boolean;
  constructor(private fb: FormBuilder, private commonApiService: CommonApiService, private rout: Router) { }
  ngOnInit() {
    this.Signupformcontrol()
  }
  Signupformcontrol() {
    this.signUpForm = this.fb.group({
      userName: ['', [Validators.pattern("[A-Za-z ]*$"), Validators.maxLength(20), Validators.minLength(2)]],
      Email: ['', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      MobNo: ['', [Validators.pattern("[0-9]*$"), Validators.maxLength(10), Validators.minLength(10)]],
      Password: [],
      ConfirmPassword: [],
      Gender: [],

    })
  }
  Submit(data: any) {
    console.log("data", data);

    let endpoint = "Owner"
    this.commonApiService.PostApicall(data, endpoint).subscribe(response => {
      this.Apiresponse = response
    });
    let gender = this.signUpForm.value.Gender;
    if (gender) {

      console.log(this.signUpForm.value);
      this.rout.navigateByUrl("/Owner/Ownersuccess")
    }
    else {
      this.isGenderSelected = false;

    }
  }
  gender(data: any) {
    console.log(data);



  }
  Password() {
    console.log("Passwordvalue", this.signUpForm.value.Password);
    this.PasswordMatch = this.signUpForm.value.Password;
    if (this.PasswordMatch == this.ConfirmPaasword) {
      this.iSMatch = true;
    }
    else {
      this.iSMatch = false;
    }
  }

  ConfirmPassword() {
    console.log("Passwordvalue", this.signUpForm.value.ConfirmPassword);
    this.ConfirmPaasword = this.signUpForm.value.ConfirmPassword;
    if (  this.PasswordMatch == this.ConfirmPaasword) {
      this.iSMatch = true
    }
    else {
      this.iSMatch = false
    }
  }
}
