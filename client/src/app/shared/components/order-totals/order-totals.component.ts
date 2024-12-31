import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { IBasketTotals } from '@app/shared/models/basket';
import { BasketService } from '@app/basket/basket.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-totals',
  imports: [CommonModule],
  templateUrl: './order-totals.component.html',
  styleUrl: './order-totals.component.scss'
})
export class OrderTotalsComponent implements OnInit {
  basketTotal$?: Observable<IBasketTotals | null> | null;

  constructor(private basketService: BasketService) { }

  ngOnInit(): void {
    this.basketTotal$ = this.basketService.basketTotal$;
  }
}
