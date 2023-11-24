import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landingscreen',
  templateUrl: './landingscreen.component.html',
  styleUrls: ['./landingscreen.component.scss']
})
export class LandingscreenComponent {
constructor(private route:Router){

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
}
