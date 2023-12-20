import { Component } from '@angular/core';
import { CommonApiService } from '../CommonScreen/common-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  Hoteldetails: any;
  ownername: any;
  HoteldetailsBooking!: any[];
  HotelData = ['HotelName', 'Hotel Number', 'Hotel Address', 'rooms','Edit','Delete'];
  Showrecrds: boolean = false;
  constructor(private commonApiService: CommonApiService,private rout:Router) { }
  ngOnInit() {
    this.ownername = this.commonApiService.OwnerName;
    this.showHotelDetails()
  }

  async showHotelDetails() {
    this.HoteldetailsBooking = [];
    this.Hoteldetails = await this.commonApiService.getownerdata('HotelDetails').toPromise();
    console.log("hotelDetails", this.Hoteldetails);
    this.getHotelByOwner()
  }
  getHotelByOwner() {
    this.Hoteldetails.forEach((element: any) => {
      if (element.Name == this.ownername) {
        this.HoteldetailsBooking.push(element)
      }
    });
    if (this.HoteldetailsBooking.length > 0) {
      this.Showrecrds = true;
    }
    console.log("HotelBooking", this.HoteldetailsBooking);

    console.log("HotelListBy Owner", this.Hoteldetails);

  }
  edit(data:any) {
    let recordByid:any = [];
    console.log('id',data);
    this.Hoteldetails.forEach((ele:any)=>{
     if (ele.id == data){
      recordByid.push(ele)
     }
    })
    
    console.log("recordbyid",recordByid);
    this.commonApiService.recordById = recordByid;
    this.commonApiService.id = data;
    this.rout.navigateByUrl("/Owner/Owner-registration")
   }
  delete(data:any) { 
    console.log('id',data);
    
  }
}
