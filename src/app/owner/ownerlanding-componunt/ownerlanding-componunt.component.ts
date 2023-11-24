import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerlanding-componunt',
  templateUrl: './ownerlanding-componunt.component.html',
  styleUrls: ['./ownerlanding-componunt.component.scss']
})
export class OwnerlandingComponuntComponent {
  constructor(private rout:Router){}
  OwnersignUp(){
this.rout.navigateByUrl("/Owner/Owner-Signup")
  }
  Back(){
    this.rout.navigateByUrl("/Landingscreen")
  }
  OwnersignIn(){
    this.rout.navigateByUrl("/Owner/Owner-login")
  }
}
