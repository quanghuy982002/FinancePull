import { Component } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  menu = [
    { name: 'Accordion', url: '/accordion' },
    { name: 'Carousel', url: '/carousel' },
    { name: 'DataView', url: '/dataview' },
    { name: 'Galleria', url: '/galleria' },
    { name: 'Image', url: '/image' },
    { name: 'Menu', url: '/menu' },
    { name: 'Orderlist', url: '/orderlist' },
    { name: 'PickList', url: '/picklist' },
    { name: 'Splitter Img', url: '/splitter' },
    { name: 'Table', url: '/table' },
    { name: 'Upload Img', url: '/upload' },
    { name: 'Splitter Img', url: '/splitter'}
  ];
}
