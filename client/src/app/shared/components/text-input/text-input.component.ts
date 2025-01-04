import { CommonModule } from '@angular/common';
import { Component, ElementRef, Input, OnInit, Self, ViewChild } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  imports: [CommonModule],
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', { static: true }) input?: ElementRef;
  @Input() type = 'text';
  @Input() label = '';

  constructor(
    @Self() public controlDir: NgControl
  ) {
    this.controlDir.valueAccessor = this
  }

  ngOnInit() {
    const control = this.controlDir.control;
    if (control) {
      const validators = control.validator ? [control.validator] : [];
      const asyncValidators = control.asyncValidator ? [control.asyncValidator] : [];

      control.setValidators(validators);
      control.setAsyncValidators(asyncValidators);
      control.updateValueAndValidity();
    }
  }

  onChange(value: string) { }

  onTouched() { }

  writeValue(obj: any): void {
    if (this.controlDir.control) {
      this.controlDir.control.setValue(obj, { emitEvent: false });
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    if (this.input) {
      this.input.nativeElement.disabled = isDisabled;
    }
  }

  handleInput(event: Event): void {
    const value = (event.target as HTMLInputElement).value;
    this.onChange(value);
    this.controlDir.control?.setValue(value);
  }

  handleBlur(): void {
    this.onTouched();
  }

}
