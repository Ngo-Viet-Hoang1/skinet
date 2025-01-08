import { CdkStepper, CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BasketService } from '@app/basket/basket.service';
import { ToastrService } from 'ngx-toastr';
import { BasketSummaryComponent } from "../../shared/components/basket-summary/basket-summary.component";

@Component({
  selector: 'app-checkout-review',
  imports: [
    ReactiveFormsModule,
    CommonModule,
    CdkStepperModule,
    BasketSummaryComponent
],
  templateUrl: './checkout-review.component.html',
  styleUrl: './checkout-review.component.scss'
})
export class CheckoutReviewComponent {
  @Input() appStepper?: CdkStepper;

  constructor(
    private basketService: BasketService, 
    private toastr: ToastrService,
  ) { }

  createPaymentIntent() {
    this.basketService.createPaymentIntent().subscribe({
      next: () => {
        this.appStepper?.next();
      },
      error: error => this.toastr.error(error.message)
    })
  }

}
