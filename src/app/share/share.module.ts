import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PickListComponent } from './pick-list/pick-list.component';
import { PickListModule } from 'primeng/picklist';

@NgModule({
  declarations: [PickListComponent],
  imports: [
    CommonModule,
    PickListModule,
  ],
  exports: [PickListComponent],
})
export class ShareModule { }
