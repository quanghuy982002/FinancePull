import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  first: number = 0;

  rows: number = 10;
  products: Product[] = [
    {name: 'milk', code: '123', category: 'dairy', quantity: 1},
    {name: 'bread', code: '456', category: 'bakery', quantity: 2},
    {name: 'eggs', code: '789', category: 'dairy', quantity: 3},
    {name: 'chicken', code: '101', category: 'meat', quantity: 4},
    {name: 'pork', code: '112', category: 'meat', quantity: 5},
    {name: 'beef', code: '131', category: 'meat', quantity: 6},
    {name: 'lettuce', code: '415', category: 'produce', quantity: 7},
    {name: 'tomato', code: '161', category: 'produce', quantity: 8},
    {name: 'potato', code: '718', category: 'produce', quantity: 9},
    {name: 'onion', code: '192', category: 'produce', quantity: 10},
    {name: 'carrot', code: '021', category: 'produce', quantity: 11},
    {name: 'celery', code: '324', category: 'produce', quantity: 12},
    {name: 'apple', code: '425', category: 'produce', quantity: 13},
    {name: 'orange', code: '526', category: 'produce', quantity: 14},
    {name: 'banana', code: '627', category: 'produce', quantity: 15},
    {name: 'grapes', code: '728', category: 'produce', quantity: 16},
    {name: 'strawberries', code: '829', category: 'produce', quantity: 17},
    {name: 'blueberries', code: '930', category: 'produce', quantity: 18},

  ]
}

interface Product {
  name: string;
  code: string;
  category: string;
  quantity: number;
}

