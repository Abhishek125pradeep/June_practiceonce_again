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
  id:any;
  recordbyid:any
  constructor(private route:Router,private fb:FormBuilder, private commonApiService:CommonApiService, private rout:Router){}
  ngOnInit(){
    this.id = this.commonApiService.id;
    this.recordbyid = this.commonApiService.recordById;
    console.log('recordby',this.id,this.recordbyid);
    
    this.registrationformControl()
  }
  registrationformControl(){
    this.Hotelregistration= this.fb.group({
      Name:[this.recordbyid ? this.recordbyid[0].Name : '',[Validators.pattern("[A-Za-z ]*$"),Validators.maxLength(15),Validators.minLength(2)]],
      MobNo:[this.recordbyid?this.recordbyid[0].MobNo:'',[Validators.pattern("[0-9]*$")]],
      Hotelname:[this.recordbyid?this.recordbyid[0].Hotelname:'',[Validators.pattern("[A-Za-z ]*$")]],
      HotelAddress:[this.recordbyid?this.recordbyid[0].HotelAddress:'',Validators.required],
      roomAvailable:[this.recordbyid?this.recordbyid[0].roomAvailable:'',Validators.required],
      Usercheck:['',],
      userpass:['',],
      hotelMenu:['',]
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
  // Update(){
  //  this.commonApiService.pathchapicall(Ownerendpoint,this.id,this.Hotelregistration.value).subscribe(res =>{
  //   this.route.navigateByUrl("")
  //  })
  // }
}
