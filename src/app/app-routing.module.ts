import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PickListComponent } from './share/pick-list/pick-list.component';
import { TableComponent } from './share/table/table.component';
import { GalleriaComponent } from './share/galleria/galleria.component';
import { UploadComponent } from './share/upload/upload.component';
import { OrgtreeComponent } from './share/orgtree/orgtree.component';
import { MenuComponent } from './share/menu/menu.component';

const routes: Routes = [
  { path: 'galleria', component: GalleriaComponent },
  { path: 'picklist', component: PickListComponent },
  { path: 'table', component: TableComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'orgtree', component: OrgtreeComponent },
  { path: 'menu', component: MenuComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
