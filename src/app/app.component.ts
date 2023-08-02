import { Component } from '@angular/core';

interface Product {
  code: number;
  name: string;
  category: string;
  quantity: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'finance';
  products: Product[] = [
    {code: 1321, name: "IPhone 14", category: "phone", quantity: 15},
    {code: 2349, name: "Dell XPS", category: "laptop", quantity: 8},
    {code: 2394, name: "Airpod", category: "headphone", quantity: 32},
    {code: 3948, name: "Samsung Galaxy Note 23", category: "phone", quantity: 17},
    {code: 4820, name: "Lenovo Legion", category: "laptop", quantity: 10},
  ];
}
