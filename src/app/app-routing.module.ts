import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickListComponent } from './share/pick-list/pick-list.component';

const routes: Routes = [
  {path: 'picklist', component: PickListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
