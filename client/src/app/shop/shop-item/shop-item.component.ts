import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketService } from '@app/basket/basket.service';
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

  constructor(
    private basketService: BasketService,
  ) { }

  addItemToBasket() {
    this.basketService.addItemToBasket(this.product);
  }
}
