import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonApiService } from '../common-api.service';

@Component({
  selector: 'app-landingscreen',
  templateUrl: './landingscreen.component.html',
  styleUrls: ['./landingscreen.component.scss']
})
export class LandingscreenComponent {
constructor(private route:Router,private commonApiService:CommonApiService){

}
Admin(){
  this.route.navigateByUrl('/Admin/admin-login')
}
Owner(){
  this.route.navigateByUrl('/Owner/Owner-Landing')
}
User(){
  this.route.navigateByUrl('/User/User-login')
}
// journey(Name:any){
//   this.commonApiService.Journey = Name;
//   this.route.navigateByUrl('/Admin/admin-login')
// }
}
