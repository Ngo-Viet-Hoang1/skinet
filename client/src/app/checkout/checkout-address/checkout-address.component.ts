import { CdkStepperModule } from '@angular/cdk/stepper';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountService } from '@app/account/account.service';
import { TextInputComponent } from '@app/shared/components/text-input/text-input.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-address',
  imports: [
    TextInputComponent, 
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    CdkStepperModule,
  ],
  templateUrl: './checkout-address.component.html',
  styleUrl: './checkout-address.component.scss'
})
export class CheckoutAddressComponent {
  @Input() checkoutForm!: FormGroup;

  constructor(
    private accountService: AccountService, 
    private toastr: ToastrService
  ) {}

  saveUserAddress() {
    this.accountService.updateUserAddress(this.checkoutForm?.get('addressForm')?.value).subscribe({
      next: () => {
        this.toastr.success('Address saved');
        this.checkoutForm?.get('addressForm')?.reset(this.checkoutForm?.get('addressForm')?.value);
      }
    })
  }

}
