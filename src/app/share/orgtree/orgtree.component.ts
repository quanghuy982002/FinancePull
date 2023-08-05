import { Component, OnInit } from '@angular/core';
import { TreeNode } from 'primeng/api';

@Component({
  selector: 'app-orgtree',
  templateUrl: './orgtree.component.html',
  styleUrls: ['./orgtree.component.scss'],
})
export class OrgtreeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  data: TreeNode[] = [
    {
      expanded: true,
      type: 'person',
      styleClass: 'bg-indigo-500 text-white',
      data: {
        image: 'assets/amyelsner.png',
        name: 'Amy Elsner',
        title: 'CEO',
        information: 'I am a CEO', //script
      },
      children: [
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-purple-500 text-white',
          data: {
            image: 'assets/annafali.png',
            name: 'Anna Fali',
            title: 'CMO',
            information: 'I am a CMO', //script
          },
          children: [
            {
              label: 'Sales',
              styleClass: 'bg-purple-500 text-white',
              // style: ' border-radius: 12px'
            },
            {
              label: 'Marketing',
              styleClass: 'bg-purple-500 text-white',
              // style: ' border-radius: 12px'
            },
          ],
        },
        {
          expanded: true,
          type: 'person',
          styleClass: 'bg-teal-500 text-white',
          data: {
            image: 'assets/stephenshaw.png',
            name: 'Stephen Shaw',
            title: 'CTO',
            information: 'i am a CTO', //script
          },
          children: [
            {
              label: 'Development',
              styleClass: 'bg-teal-500 text-white',
            },
            {
              label: 'UI/UX Design',
              styleClass: 'bg-teal-500 text-white',
            },
          ],
        },
      ],
    },
  ];
}
