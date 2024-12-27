import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IProduct } from 'app/shared/models/product';

@Component({
  selector: 'app-shop-item',
  imports: [
    CommonModule,
    RouterModule,
  ],
  templateUrl: './shop-item.component.html',
  styleUrl: './shop-item.component.scss'
})
export class ShopItemComponent {
  @Input() product!: IProduct;
}
