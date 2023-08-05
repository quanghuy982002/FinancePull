import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataViewComponent } from './share/data-view/data-view.component';
import { PickListComponent } from './share/pick-list/pick-list.component';
import { TableComponent } from './share/table/table.component';
import { GalleriaComponent } from './share/galleria/galleria.component';
import { UploadComponent } from './share/upload/upload.component';
import { OrgtreeComponent } from './share/orgtree/orgtree.component';
import { MenuComponent } from './share/menu/menu.component';
import { OrderListComponent } from './share/order-list/order-list.component';
import { AccordionComponent } from './share/accordion/accordion.component';
import { SplitterComponent } from './share/splitter/splitter.component';

const routes: Routes = [
  { path: 'accordion', component: AccordionComponent },
  { path: 'dataview', component: DataViewComponent },
  { path: 'galleria', component: GalleriaComponent },
  { path: 'picklist', component: PickListComponent },
  { path: 'table', component: TableComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'orgtree', component: OrgtreeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'orderlist', component: OrderListComponent },
  { path: 'splitter', component: SplitterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
