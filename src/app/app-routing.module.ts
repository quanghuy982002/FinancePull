import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickListComponent } from './share/pick-list/pick-list.component';
import { TableComponent } from './share/table/table.component';
import { GalleriaComponent } from './share/galleria/galleria.component';
import { UploadComponent } from './share/upload/upload.component';

const routes: Routes = [
  { path: 'galleria', component: GalleriaComponent },
  { path: 'picklist', component: PickListComponent },
  { path: 'table', component: TableComponent },
  { path: 'upload', component: UploadComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
