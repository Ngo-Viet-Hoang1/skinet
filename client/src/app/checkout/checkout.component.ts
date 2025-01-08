import { CheckoutPaymentComponent } from './checkout-payment/checkout-payment.component';
import { CdkStepperModule } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { OrderTotalsComponent } from '@app/shared/components/order-totals/order-totals.component';
import { StepperComponent } from '@app/shared/components/stepper/stepper.component';
import { CheckoutAddressComponent } from "./checkout-address/checkout-address.component";
import { CheckoutDeliveryComponent } from "./checkout-delivery/checkout-delivery.component";
import { CheckoutReviewComponent } from './checkout-review/checkout-review.component';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountService } from '@app/account/account.service';
import { BasketService } from '@app/basket/basket.service';


@Component({
  imports: [
    CommonModule,
    OrderTotalsComponent,
    StepperComponent,
    CdkStepperModule,
    CheckoutAddressComponent,
    CheckoutDeliveryComponent,
    CheckoutReviewComponent,
    CheckoutPaymentComponent,
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent implements OnInit {
  checkoutForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private accountService: AccountService, 
    private basketService: BasketService,
  ) { }

  ngOnInit(): void {
    this.createCheckoutForm();
    this.getAddressFormValues();
    this.getDeliveryMethodValue();
  }

  createCheckoutForm(): void {
    this.checkoutForm = this.formBuilder.group({
      addressForm: this.formBuilder.group({
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        street: [null, Validators.required],
        city: [null, Validators.required],
        state: [null, Validators.required],
        zipcode: [null, Validators.required],
      }),
      deliveryForm: this.formBuilder.group({
        deliveryMethod: [null, Validators.required],
      }),
      paymentForm: this.formBuilder.group({
        nameOnCard: [null, Validators.required],
      }),
    });
  }

  getAddressFormValues() {
    this.accountService.getUserAddress().subscribe({
      next: address => {
        address && this.checkoutForm?.get('addressForm')?.patchValue(address)
      }
    })
  }

  getDeliveryMethodValue() {
    const basket = this.basketService.getCurrentBasketValue();
    if (basket && basket.deliveryMethodId) {
      this.checkoutForm?.get('deliveryForm')?.get('deliveryMethod')
        ?.patchValue(basket.deliveryMethodId.toString());
    }
  }

}
