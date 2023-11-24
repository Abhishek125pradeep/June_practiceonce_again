import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdmincompoComponent } from './admin-login/admincompo.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AdmincompoComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
