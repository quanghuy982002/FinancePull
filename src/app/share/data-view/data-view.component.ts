import { Component } from '@angular/core';

@Component({
  selector: 'app-data-view',
  templateUrl: './data-view.component.html',
  styleUrls: ['./data-view.component.scss'],
})
export class DataViewComponent {
  products: any[] = [
    {
      name: 'Bear Brick KAWS',
      rating: 5,
      category: 'Đồ chơi',
      inventoryStatus: 'Còn hàng',
      price: 1500000,
      image:
        'https://product.hstatic.net/200000200733/product/kaws_companion_bearbrick_grey_blue_b4a4d960ec8243d9a7c959aa132e9f4a_master.png',
      information:
        'Chất liệu bằng nhựa với thiết kế của chú gấu này được xây dựng bởi một cấu trúc đơn giản với phần đầu gấu và phần thân vẫn gồm 9 bộ phận như Kubrick. Nhưng ở phiên bản mới này, Bearbrick cho phép tùy biến xoay chuyển các khớp, để tạo ra những tư thế đa dạng và đẹp mắt, tùy vào sự sáng tạo của người chơi.',
    },
    {
      name: 'Áo phông (xanh)',
      rating: 4,
      category: 'Thời trang',
      inventoryStatus: 'Còn hàng',
      price: 150000,
      image:
        'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS22S137.jpg',
      information:
        'Chất vải cotton dày dặn, đường may chắc chắn. Với khả năng thấm mồ hôi - thoáng khí gấp 3 lần Cotton thường, áo phông còn luôn đổi mới với dải màu on trend nhất, để bạn luôn tự tin dù trong bất kỳ hoàn cảnh nào.',
    },
    {
      name: 'Tai nghe không dây Sony WH-CH520 ',
      rating: 5,
      category: 'Phụ kiện điện thoại',
      inventoryStatus: 'Còn hàng',
      price: 1300000,
      image:
        'https://www.jbhifi.com.au/cdn/shop/products/623346-Product-0-I-638126569045796477_1024x1024.jpg',
      information:
        'WH-CH520 là tai nghe không dây trên tai nhẹ để sử dụng thông thường. Thời lượng pin dài, sạc nhanh và các cuộc gọi thoại rảnh tay, với đa điểm, cũng khiến chiếc tai nghe đáng giá này trở thành một lựa chọn dễ dàng. Ứng dụng đồng hành đầu tiên dành cho danh mục tai nghe này cung cấp nhiều tính năng, bao gồm âm thanh có thể điều chỉnh và các cài đặt tùy chỉnh khác.',
    },
    {
      name: 'Camera IMOU IPC-C22EP',
      rating: 5,
      category: 'Phụ kiện giám sát',
      inventoryStatus: 'Còn hàng',
      price: 430000,
      image:
        'https://sieuthidienthongminh.vn/media/product/250_2964_imou_c22ep.JPG',
      information:
        'IPC-C22EP là dòng camera IP cơ bản lắp trong nhà, có giá thành vô cùng cạnh tranh nhưng được trang bị rất đầy đủ các tính năng. Độ nét chuẩn Full HD1080P 2.0 Megapixel cho khả năng quan sát rõ nét. Kết nối Wifi tiện lợi dễ dàng cài đặt. C22EP có góc quan sát cực rộng lên tới 115 độ cho khả năng bao quát toàn bộ khu vực cần giảm sát. Tích hợp Mic thu âm và Loa để đàm thoại 2 chiều. Có hồng ngoại quan sát ngày đêm. Lưu trữ với thẻ nhớ hoặc đám mây để phục vụ giám sát xem lại. Thiết kế chân đế Nam châm cực kỳ tiện lợi, dễ dàng lắp đặt chắc chắn: Đặt bàn, Gắn tường, Gắn trần',
    },
    {
      name: 'Giầy thể thao Nike Air Force 1',
      rating: 3,
      category: 'Thời trang',
      inventoryStatus: 'Hàng mới',
      price: 500000,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/470ab209-df88-4686-b67a-9f729c0b3fe2/air-force-1-shadow-shoes-mN8Glx.png',
      information:
        'Các lớp phủ được khâu ở phía trên thêm phong cách di sản, độ bền và hỗ trợ. Được thiết kế ban đầu cho các vòng hiệu suất, đệm Nike Air tăng thêm sự nhẹ nhàng, thoải mái cả ngày. Hình bóng cắt thấp thêm một cái nhìn gọn gàng, hợp lý. Cổ áo đệm tạo cảm giác mềm mại và thoải mái.',
    },
    {
      name: 'Áo phông (đỏ)',
      rating: 4,
      category: 'Thời trang',
      inventoryStatus: 'Còn hàng',
      price: 150000,
      image:
        'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS22S137-SR021.jpg',
      information:
        'Được làm từ chất liệu Cotton tự nhiên mềm mịn, xốp, nhẹ, thấm hút mồ hôi vượt trội. Mềm mại tuyệt đối, thoải mái cho cả ngày dài. Độ bền vượt trội nhờ cải tiến cấu trúc sợi vải dài & dai hơn',
    },
    {
      name: 'Tai nghe không dây Gaming',
      rating: 4,
      category: 'Phụ kiện điện thoại',
      inventoryStatus: 'Hàng mới',
      price: 1500000,
      image: 'https://m.media-amazon.com/images/I/71HOHZLEF6L.jpg',
      information:
        'Tai nghe cung cấp âm thanh định vị rõ ràng và chính xác để có trải nghiệm chơi game chìm đắm hơn. Nó cũng có bọt hoạt tính đặc trưng của HyperX và giả da mềm giúp bạn thoải mái khi chơi game trong thời gian dài. Micrô khử tiếng ồn có thể tháo rời giúp âm thanh xung quanh không làm gián đoạn cuộc trò chuyện thoại của bạn và có thể dễ dàng tháo ra. Tai nghe đám mây được tối ưu hóa cho cách bạn chơi và nổi tiếng với âm thanh huyền thoại, sự thoải mái và độ bền.',
    },
    {
      name: 'Tai nghe không dây Sony WH-CH520 (Đen)',
      rating: 4,
      category: 'Phụ kiện điện thoại',
      inventoryStatus: 'Còn hàng',
      price: 1450000,
      image:
        'https://bizweb.dktcdn.net/100/479/913/products/tai-nghe-bluetooth-sony-wh-xb910n-2.jpg?v=1681970504010',
      information:
        'WH-CH520 là tai nghe không dây trên tai nhẹ để sử dụng thông thường. Thời lượng pin dài, sạc nhanh và các cuộc gọi thoại rảnh tay, với đa điểm, cũng khiến chiếc tai nghe đáng giá này trở thành một lựa chọn dễ dàng. Ứng dụng đồng hành đầu tiên dành cho danh mục tai nghe này cung cấp nhiều tính năng, bao gồm âm thanh có thể điều chỉnh và các cài đặt tùy chỉnh khác.',
    },
    {
      name: 'BLACK BEAR BRICK',
      rating: 4,
      category: 'Đồ chơi',
      inventoryStatus: 'Còn hàng',
      price: 680000,
      image:
        'https://fado.vn/blog/wp-content/uploads/2021/09/ban-biet-gi-ve-bearbrick-400-mon-do-choi-dat-do-cua-tin-do-thoi-trang-2-min.jpg',
      information:
        'Nhờ sự yêu thích và lăng xê của các ngôi sao nổi tiếng thế giới mà món đồ chơi mô hình mang hình tượng chú gấu “bụng phệ” này đã trở thành biểu tượng trong giới sưu tập đồ chơi và được sản xuất ra với rất nhiều phiên bản có thiết kế, chủ đề, nhân vật, kích cỡ và chất liệu khác nhau.',
    },
    {
      name: 'Áo phông (xanh lá cây)',
      rating: 4.5,
      category: 'Thời trang',
      inventoryStatus: 'Hết hàng',
      price: 160000,
      image:
        'https://onoff.vn/media/catalog/product/cache/ecd9e5267dd6c36af89d5c309a4716fc/18TS23S033-SG043.jpg',
      information:
        'Được làm từ chất liệu Cotton tự nhiên mềm mịn, xốp, nhẹ, thấm hút mồ hôi vượt trội. Mềm mại tuyệt đối, thoải mái cho cả ngày dài. Độ bền vượt trội nhờ cải tiến cấu trúc sợi vải dài & dai hơn',
    },
    {
      name: 'Giầy thể thao Air Jordan 1 Elevate Low ',
      rating: 4,
      category: 'Thời trang',
      inventoryStatus: 'Hàng mới',
      price: 700000,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b51fd349-3ed2-493d-bd94-221534f79964/air-jordan-1-elevate-low-shoes-XlkVrM.png',
      information:
        'Các lớp phủ được khâu ở phía trên thêm phong cách di sản, độ bền và hỗ trợ. Được thiết kế ban đầu cho các vòng hiệu suất, đệm Nike Air tăng thêm sự nhẹ nhàng, thoải mái cả ngày. Hình bóng cắt thấp thêm một cái nhìn gọn gàng, hợp lý. Cổ áo đệm tạo cảm giác mềm mại và thoải mái.',
    },
    {
      name: 'Giầy thể thao Air Jordan 1 Elevate Low',
      rating: 4,
      category: 'Thời trang',
      inventoryStatus: 'Hết hàng',
      price: 750000,
      image:
        'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ded10b30-74d9-4d8c-931e-54a5911654eb/air-jordan-1-low-shoes-459b4T.png',
      information:
        'Các lớp phủ được khâu ở phía trên thêm phong cách di sản, độ bền và hỗ trợ. Được thiết kế ban đầu cho các vòng hiệu suất, đệm Nike Air tăng thêm sự nhẹ nhàng, thoải mái cả ngày. Hình bóng cắt thấp thêm một cái nhìn gọn gàng, hợp lý. Cổ áo đệm tạo cảm giác mềm mại và thoải mái.',
    },
  ];

  getSeverity(product: any): string {
    if (product.inventoryStatus === 'Hết hàng') {
      return 'danger';
    } else if (product.inventoryStatus === 'Hàng mới') {
      return 'warning';
    } else {
      return 'success';
    }
  }
}
