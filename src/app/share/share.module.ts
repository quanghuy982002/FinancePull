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
@NgModule({
  declarations: [
    PickListComponent,
    GalleriaComponent,
    TableComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    PickListModule,
    GalleriaModule,
    TableModule,
    HttpClientModule,
    FileUploadModule,
    ToastModule

  ],
  exports: [PickListComponent, 
            GalleriaComponent, 
            TableComponent, 
            UploadComponent
  ],
})
export class ShareModule { }
