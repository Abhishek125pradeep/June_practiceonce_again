import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent {
  constructor(private rout:Router){}
  Button(data:any){
    console.log("data",data);
    this.rout.navigateByUrl("/Owner/Ownersuccess")
  }
}
