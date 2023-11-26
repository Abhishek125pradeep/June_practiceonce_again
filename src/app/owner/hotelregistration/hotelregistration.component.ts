import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  constructor(private route:Router,private fb:FormBuilder, private commonApiService:CommonApiService){}
  ngOnInit(){
    this.registrationformControl()
  }
  registrationformControl(){
    this.Hotelregistration= this.fb.group({
      Name:['',],
      MobNo:['',],
      Hotelname:['',],
      HotelAddress:['',],
      roomAvailable:['',],
      Usercheck:['',],
      userpass:['',]
    })
  }

  Submit(data:any){
console.log(data);
let Ownerendpoint="HotelBooking"
this.commonApiService.PostApicall(data,Ownerendpoint).subscribe(Ownerresponser=>{
  this.OwnerApi =Ownerresponser
})
  }
}
