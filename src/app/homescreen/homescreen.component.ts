import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homescreen',
  templateUrl: './homescreen.component.html',
  styleUrls: ['./homescreen.component.scss']
})
export class HomescreenComponent {
constructor(private rout:Router){}


  Admin(){
    this.rout.navigateByUrl("/Admin/admincompo")
  }
  Owner(){
    this.rout.navigateByUrl("/Owner/Ownercompo")
  }
  Users(){
    this.rout.navigateByUrl("/User/Usercompo")
  }
}
