import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './Owner-login/owner.component';
import { OwnerSIgnUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerlandingComponuntComponent } from './ownerlanding-componunt/ownerlanding-componunt.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { HotelregistrationComponent } from './hotelregistration/hotelregistration.component';


const routes: Routes = [
  {path:"Owner-login",component:OwnerComponent},
  {path:"Owner-Signup",component:OwnerSIgnUpComponent},
  {path:"Owner-Landing",component:OwnerlandingComponuntComponent},
  {path:"Ownersuccess",component:OwnersuccessComponent},
  {path:"Owner-registration",component:HotelregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
