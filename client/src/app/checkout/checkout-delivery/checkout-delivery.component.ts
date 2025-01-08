import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CheckoutService } from '../checkout.service';
import { IDeliveryMethod } from '@app/shared/models/deliveryMethod';
import { BasketService } from '@app/basket/basket.service';
import { CommonModule } from '@angular/common';
import { CdkStepperModule } from '@angular/cdk/stepper';

@Component({
  selector: 'app-checkout-delivery',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CdkStepperModule,
  ],
  templateUrl: './checkout-delivery.component.html',
  styleUrl: './checkout-delivery.component.scss'
})
export class CheckoutDeliveryComponent implements OnInit {
  @Input() checkoutForm?: FormGroup;
  deliveryMethods: IDeliveryMethod[] = [];

  constructor(
    private checkoutService: CheckoutService,
    private basketService: BasketService,
  ) { }

  ngOnInit(): void {
    this.checkoutService.getDeliveryMethods().subscribe({
      next: (dm: IDeliveryMethod[]) => {
        this.deliveryMethods = dm;
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  setShippingPrice(deliveryMethod: IDeliveryMethod) {
    this.basketService.setShippingPrice(deliveryMethod);
  }

}
