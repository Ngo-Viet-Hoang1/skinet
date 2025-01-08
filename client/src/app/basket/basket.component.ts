import { Component, OnInit } from '@angular/core';
import { BasketService } from './basket.service';
import { Observable } from 'rxjs';
import { IBasket, IBasketItem } from '@app/shared/models/basket';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderTotalsComponent } from "../shared/components/order-totals/order-totals.component";
import { BasketSummaryComponent } from "../shared/components/basket-summary/basket-summary.component";

@Component({
  selector: 'app-basket',
  imports: [CommonModule, RouterModule, OrderTotalsComponent, BasketSummaryComponent],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.scss'
})
export class BasketComponent implements OnInit {
  basket$?: Observable<IBasket | null> | null;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  removeBasketItem(item: IBasketItem) {
    this.basketService.removeItemFromBasket(item);
  }

  incrementItemQuantity(item: IBasketItem) {
    this.basketService.incrementItemQuantity(item);
  }

  decrementItemQuantity(item: IBasketItem) {
    this.basketService.decrementItemQuantity(item);
  }

}
