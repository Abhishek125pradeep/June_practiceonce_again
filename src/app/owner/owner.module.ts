import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerComponent } from './Owner-login/owner.component';
import { LandingscreenComponent } from './CommonScreen/landingscreen/landingscreen.component';
import { SharedModule } from '../shared/shared.module';
import { OwnerSIgnUpComponent } from './owner-sign-up/owner-sign-up.component';
import { OwnerlandingComponuntComponent } from './ownerlanding-componunt/ownerlanding-componunt.component';


@NgModule({
  declarations: [
    OwnerComponent,
    LandingscreenComponent,
    OwnerSIgnUpComponent,
    OwnerlandingComponuntComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule
  ]
})
export class OwnerModule { }
