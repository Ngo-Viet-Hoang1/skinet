import { CommonModule } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BasketService } from '@app/basket/basket.service';
import { IBasket, IBasketItem } from '@app/shared/models/basket';
import { Observable } from 'rxjs';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-basket-summary',
  imports: [
    RouterModule,
    CommonModule,
  ],
  templateUrl: './basket-summary.component.html',
  styleUrl: './basket-summary.component.scss'
})
export class BasketSummaryComponent implements OnInit {
  basket$!: Observable<IBasket | null>;
  @Output() decrement: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() increment: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Output() remove: EventEmitter<IBasketItem> = new EventEmitter<IBasketItem>();
  @Input() isBasket = true;

  constructor(
    private basketService: BasketService,
  )
  { }

  ngOnInit(): void {
    this.basket$ = this.basketService.basket$;
  }

  decrementItemQuantity(item: IBasketItem): void {
    this.decrement.emit(item);
  }

  incrementItemQuantity(item: IBasketItem): void {
    this.increment.emit(item);
  }

  removeBasketItem(item: IBasketItem): void {
    this.remove.emit(item);
  }
}
