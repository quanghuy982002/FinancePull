import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent {
  menu = [
    { name: 'Item 1', url: '#' },
    { name: 'PickList', url: '/picklist' },
  ];
}
