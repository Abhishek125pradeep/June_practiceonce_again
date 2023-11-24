import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincompoComponent } from './admin-login/admincompo.component';


const routes: Routes = [
{path:"admin-login",component:AdmincompoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
