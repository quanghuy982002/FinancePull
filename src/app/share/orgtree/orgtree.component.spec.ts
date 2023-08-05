import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgtreeComponent } from './orgtree.component';

describe('OrgtreeComponent', () => {
  let component: OrgtreeComponent;
  let fixture: ComponentFixture<OrgtreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OrgtreeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgtreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
