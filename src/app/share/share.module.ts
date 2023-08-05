import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickListComponent } from './pick-list/pick-list.component';

import { PickListModule } from 'primeng/picklist';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { GalleriaComponent } from './galleria/galleria.component';
import { TableComponent } from './table/table.component';
import { UploadComponent } from './upload/upload.component';

import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from 'primeng/fileupload';
import { ToastModule } from 'primeng/toast';
import { OrgtreeComponent } from './orgtree/orgtree.component';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { AccordionModule } from 'primeng/accordion';
import { TreeTableModule } from 'primeng/treetable';
import { MenuComponent } from './menu/menu.component';
import { TabMenuModule } from 'primeng/tabmenu';


@NgModule({
  declarations: [
    PickListComponent,
    GalleriaComponent,
    TableComponent,
    UploadComponent,
    TableComponent,
    MenuComponent,
    OrgtreeComponent,
  ],
  imports: [
    CommonModule,
    PickListModule,
    GalleriaModule,
    TableModule,
    HttpClientModule,
    FileUploadModule,
    ToastModule,
    OrganizationChartModule,
    AccordionModule,
    TreeTableModule,
    TabMenuModule,
  ],
  exports: [
    PickListComponent,
    GalleriaComponent,
    TableComponent,
    UploadComponent,
    MenuComponent,
  ],
})
export class ShareModule {}
