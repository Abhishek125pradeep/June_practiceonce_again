import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomescreenComponent } from './homescreen/homescreen.component';

const routes: Routes = [
  {path : "", component:HomescreenComponent},
  {path : "Home", component:HomescreenComponent},
  {path:"Admin",loadChildren:()=>import("./admin/admin.module").then(mod => mod.AdminModule)},
  {path:"Owner",loadChildren:()=>import("./owner/owner.module").then(mod => mod.OwnerModule)},
  {path:"User",loadChildren:()=>import("./user/user.module").then(mod => mod.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
