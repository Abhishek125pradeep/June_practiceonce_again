import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiService } from '../CommonScreen/common-api.service';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
  ownerdata: any;
  Journey!: string;
  constructor(private rout: Router, private commonApiService: CommonApiService) { }
  ngOnInit() {
    this.getOwnerdata()
    this.Journey = this.commonApiService.Journey;
  }
  Button(data: any) {
    this.commonApiService.OwnerName = data.fullname;
    if (this.ownerdata) {
      let matchObj = this.ownerdata.find((itom: any) => {
        if (itom.userName == data.fullname && itom.Password == data.Password) {
          return itom
        }
      })

      if (matchObj) {
        this.rout.navigateByUrl("/Owner/Ownersuccess")
      }
    }
    else {
      this.rout.navigateByUrl("/Owner/Owner-login")
    }

  }
  getOwnerdata() {
    let endpoint = "Owner"
    this.commonApiService.getownerdata(endpoint).subscribe(response => {
      this.ownerdata = response
    })
  }

}





