import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonApiService } from '../CommonScreen/common-api.service';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.scss']
})
export class HotelregistrationComponent {
  Hotelregistration!:FormGroup;
  OwnerApi: any;
  constructor(private route:Router,private fb:FormBuilder, private commonApiService:CommonApiService, private rout:Router){}
  ngOnInit(){
    this.registrationformControl()
  }
  registrationformControl(){
    this.Hotelregistration= this.fb.group({
      Name:['',[Validators.pattern("[A-Za-z ]*$"),Validators.maxLength(15),Validators.minLength(2)]],
      MobNo:['',[Validators.pattern("[0-9]*$")]],
      Hotelname:['',[Validators.pattern("[A-Za-z ]*$")]],
      HotelAddress:['',[Validators.required]],
      roomAvailable:['',],
      Usercheck:['',],
      userpass:['',]
    })
  }

  Submit(data:any){
    
console.log(data);
let Ownerendpoint="HotelDetails"
this.commonApiService.PostApicall(data,Ownerendpoint).subscribe(Ownerresponser=>{
  this.OwnerApi =Ownerresponser;
 
})
alert('Hotel Registration Successfully....!!');
this.route.navigateByUrl('/Owner/Ownersuccess')
  }
  Back(){
    // this.rout.navigateByUrl("/Owner/Ownersuccess")
  }
}
