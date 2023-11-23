import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmincompoComponent } from './admincompo/admincompo.component';

const routes: Routes = [
{path:"admincompo",component:AdmincompoComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
