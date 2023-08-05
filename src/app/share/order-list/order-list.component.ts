import { Component } from '@angular/core';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
})
export class OrderListComponent {
  products: any[] = [
    {
      id: '1000',
      code: 'f230fh0g3',
      name: 'Bamboo Watch',
      description: 'Product Description',
      image: 'https://cdn-amz.woka.io/images/I/61ZUokJX2PL.jpg',
      price: 65,
      category: 'Accessories',
      quantity: 24,
      inventoryStatus: 'INSTOCK',
      rating: 5,
    },
    {
      name: 'Blue T-shirts',
      rating: 4,
      category: 'Fashion',
      inventoryStatus: 'INSTOCK',
      price: 10.99,
      image:
        'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS22S137.jpg',
    },
    {
      name: 'Sony Headphones ',
      rating: 5,
      category: 'Electronics',
      inventoryStatus: 'INSTOCK',
      price: 49.99,
      image:
        'https://www.jbhifi.com.au/cdn/shop/products/623346-Product-0-I-638126569045796477_1024x1024.jpg',
    },
    {
      name: 'Light Blue T-shirts',
      rating: 3,
      category: 'Fashion',
      inventoryStatus: 'INSTOCK',
      price: 10.99,
      image:
        'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS22S137-SC013.jpg',
    },
    {
      name: 'Nike Air Force 1 Shadow',
      rating: 3,
      category: 'Fashion',
      inventoryStatus: 'LOWSTOCK',
      price: 39.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/470ab209-df88-4686-b67a-9f729c0b3fe2/air-force-1-shadow-shoes-mN8Glx.png',
    },
    {
      name: 'Red T-shirts',
      rating: 4,
      category: 'Fashion',
      inventoryStatus: 'INSTOCK',
      price: 10.99,
      image:
        'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS22S137-SR021.jpg',
    },
    {
      name: 'Headphones Gaming',
      rating: 4,
      category: 'Electronics',
      inventoryStatus: 'LOWSTOCK',
      price: 29.99,
      image: 'https://m.media-amazon.com/images/I/71HOHZLEF6L.jpg',
    },
    {
      name: 'Headphones Sony',
      rating: 4,
      category: 'Electronics',
      inventoryStatus: 'INSTOCK',
      price: 29.99,
      image:
        'https://bizweb.dktcdn.net/100/479/913/products/tai-nghe-bluetooth-sony-wh-xb910n-2.jpg?v=1681970504010',
    },
    {
      name: 'BLACK BEAR BRICK',
      rating: 4,
      category: 'Toy',
      inventoryStatus: 'INSTOCK',
      price: 149.99,
      image:
        'https://fado.vn/blog/wp-content/uploads/2021/09/ban-biet-gi-ve-bearbrick-400-mon-do-choi-dat-do-cua-tin-do-thoi-trang-2-min.jpg',
    },
    {
      name: 'Green T-shirts',
      rating: 4.5,
      category: 'Fashion',
      inventoryStatus: 'OUTOFSTOCK',
      price: 10.99,
      image:
        'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS23S033-SG043.jpg',
    },
    {
      name: 'Air Jordan 1 Elevate Low ',
      rating: 4,
      category: 'Fashion',
      inventoryStatus: 'LOWSTOCK',
      price: 29.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b51fd349-3ed2-493d-bd94-221534f79964/air-jordan-1-elevate-low-shoes-XlkVrM.png',
    },
    {
      name: 'Air Jordan 1 Elevate Low',
      rating: 4,
      category: 'Fashion',
      inventoryStatus: 'OUTOFSTOCK',
      price: 29.99,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ded10b30-74d9-4d8c-931e-54a5911654eb/air-jordan-1-low-shoes-459b4T.png',
    },
  ];

  getSeverity(product: any): string {
    if (product.inventoryStatus === 'OUTOFSTOCK') {
      return 'danger';
    } else if (product.inventoryStatus === 'LOWSTOCK') {
      return 'warning';
    } else {
      return 'success';
    }
  }
}
