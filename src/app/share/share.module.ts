import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { PickListModule } from 'primeng/picklist';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { OrderListModule } from 'primeng/orderlist';
import { ToastModule } from 'primeng/toast';
import { OrganizationChartModule } from 'primeng/organizationchart';
import { AccordionModule } from 'primeng/accordion';
import { TreeTableModule } from 'primeng/treetable';
import { TabMenuModule } from 'primeng/tabmenu';
import { DividerModule } from 'primeng/divider';
import { SplitterComponent } from './splitter/splitter.component';
import { SplitterModule } from 'primeng/splitter';
import { DataViewComponent } from './data-view/data-view.component';
import { PickListComponent } from './pick-list/pick-list.component';
import { FileUploadModule } from 'primeng/fileupload';
import { GalleriaComponent } from './galleria/galleria.component';
import { TableComponent } from './table/table.component';
import { UploadComponent } from './upload/upload.component';
import { OrgtreeComponent } from './orgtree/orgtree.component';
import { MenuComponent } from './menu/menu.component';
import { OrderListComponent } from './order-list/order-list.component';
import { AccordionComponent } from './accordion/accordion.component';


@NgModule({
  declarations: [
    DataViewComponent,
    PickListComponent,
    GalleriaComponent,
    UploadComponent,
    TableComponent,
    MenuComponent,
    OrgtreeComponent,
    OrderListComponent,
    AccordionComponent,
    SplitterComponent,
  ],
  imports: [
    CommonModule,
    TableModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    ButtonModule,
    PickListModule,
    GalleriaModule,
    HttpClientModule,
    FileUploadModule,
    ToastModule,
    OrganizationChartModule,
    AccordionModule,
    TreeTableModule,
    TabMenuModule,
    OrderListModule,
    TagModule,
    DividerModule,
    SplitterModule
  ],
  exports: [
    PickListComponent,
    GalleriaComponent,
    TableComponent,
    UploadComponent,
    MenuComponent,
    DataViewComponent,
    OrderListComponent,
    AccordionComponent,
  ],
})
export class ShareModule {}
