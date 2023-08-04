import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickListComponent } from './pick-list/pick-list.component';

import { PickListModule } from 'primeng/picklist';
import { GalleriaModule } from 'primeng/galleria';
import { TableModule } from 'primeng/table';
import { GalleriaComponent } from './galleria/galleria.component';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    PickListComponent,
    GalleriaComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    PickListModule,
    GalleriaModule,
    TableModule,
  ],
  exports: [PickListComponent, GalleriaComponent, TableComponent],
})
export class ShareModule { }
