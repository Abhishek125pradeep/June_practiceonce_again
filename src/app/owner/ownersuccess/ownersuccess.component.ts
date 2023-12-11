import { Component } from '@angular/core';
import { CommonApiService } from '../CommonScreen/common-api.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {
  Hoteldetails: any;
  ownername: any;
  HoteldetailsBooking:any=[];
  HotelData =['HotelName','Hotel Number','Hotel Menu','rooms']
  constructor(private commonApiService: CommonApiService) { }
  ngOnInit() {
    this.commonApiService.OwnerName = this.ownername;
  }

  async showHotelDetails() {
    this.HoteldetailsBooking =[];
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
    console.log("HotelListBy Owner",this.Hoteldetails);
    
  }
}
