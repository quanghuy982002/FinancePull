import { Component } from '@angular/core';
import { PRODUCTS_DATA } from 'src/app/data';
import { Product } from 'src/app/product';

@Component({
  selector: 'app-pick-list',
  templateUrl: './pick-list.component.html',
  styleUrls: ['./pick-list.component.scss'],
})
export class PickListComponent {
  sourceProducts: Product[] = PRODUCTS_DATA;

  targetProducts: Product[] = [];
}
