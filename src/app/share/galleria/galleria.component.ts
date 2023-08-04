import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.scss']
})
export class GalleriaComponent implements OnInit {
  images: any[] = []

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 5
    },
    {
      breakpoint: '768px',
      numVisible: 3
    },
    {
      breakpoint: '560px',
      numVisible: 1
    }
  ];


  ngOnInit(): void {
    this.images = [
      {
        itemImageSrc: 'https://wallpapercave.com/dwp2x/wp4190384.jpg',
        thumbnailImageSrc: 'https://wallpapercave.com/dwp2x/wp4190384.jpg',
        alt: 'Vịnh Hạ Long là một trong những điểm du lịch nổi tiếng và đẹp nhất của Việt Nam, nằm ở phía bắc của đất nước, cách thủ đô Hà Nội khoảng 170 km. Vịnh Hạ Long là một phần của Quần đảo Hạ Long, gồm khoảng 1.600 đảo và hòn đá kỳ quái nổi lên từ biển, tạo nên một bức tranh thiên nhiên tuyệt đẹp và hùng vĩ.',
        title: 'Title 1'
      },
      {
        itemImageSrc: 'https://wallpapercave.com/dwp2x/wp4190386.jpg',
        thumbnailImageSrc: 'https://wallpapercave.com/dwp2x/wp4190386.jpg',
        alt: 'Vịnh Hạ Long được UNESCO công nhận là Di sản Thế giới vào năm 1994, và nó là một trong những điểm đến hàng đầu của du khách quốc tế cũng như trong nước. Vịnh nổi tiếng với cảnh quan độc đáo, với hàng loạt các đá và đảo có hình dáng kỳ quái và động thiên nhiên hùng vĩ.',
        title: 'Title 2'
      },
      {
        itemImageSrc: 'https://wallpapercave.com/dwp2x/wp4190507.jpg',
        thumbnailImageSrc: 'https://wallpapercave.com/dwp2x/wp4190507.jpg',
        alt: 'Du khách khi đến Vịnh Hạ Long có thể tham gia vào nhiều hoạt động thú vị như đi thuyền kayak để khám phá từng ngóc ngách của vịnh, thăm các hang động độc đáo như Hang Đầu Gỗ (Wooden Stake Cave) và Hang Sửng Sốt (Surprise Cave), hay tham gia vào các hoạt động lặn biển để thưởng ngoạn vẻ đẹp của dưới biển.',
        title: 'Title 3'
      },
      {
        itemImageSrc: 'https://wallpapercave.com/dwp2x/wp4190486.jpg',
        thumbnailImageSrc: 'https://wallpapercave.com/dwp2x/wp4190486.jpg',
        alt: 'Ngoài ra, Vịnh Hạ Long còn có nền văn hóa lịch sử đa dạng, với các ngôi chùa, đền thờ và các di tích cổ được bảo tồn. Đặc biệt, vùng này còn là nơi sinh sống và làm việc của những người dân nghề du thuyền, tạo nên một phần không gian văn hóa độc đáo.',
        title: 'Title 4'
      },
      {
        itemImageSrc: 'https://wallpapercave.com/dwp2x/wp4190504.jpg',
        thumbnailImageSrc: 'https://wallpapercave.com/dwp2x/wp4190504.jpg',
        alt: 'Với cảnh quan tuyệt đẹp và giá trị văn hóa lịch sử độc đáo, Vịnh Hạ Long đã trở thành một điểm đến hấp dẫn cho du khách trên khắp thế giới, thu hút hàng triệu lượt du khách mỗi năm.',
        title: 'Title 5'
      },
  
    ]
  }

}
