import { Component, forwardRef, inject, Injector, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from '@angular/forms';
@Component({
  selector: 'app-input-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputFieldComponent),
      multi: true
    }
  ]
})
export class InputFieldComponent implements ControlValueAccessor, OnInit {
  @Input() type: 'text' | 'number' | 'date' = 'text';
  @Input() id: string = "";
  value: string | number | Date = "";
  onChange!: (value: string | number | Date) => void;
  onTouched!: () => void;
  ngControl!: NgControl;
  constructor(private injector: Injector) { }

  ngOnInit() {
    this.ngControl = this.injector.get(NgControl);
  }

  writeValue(value: string | number | Date) {
    this.value = value ? value : '';
  }

  registerOnChange(fn: (value: string | number | Date) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.onTouched();
    }
  }

  onInputChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.value = input.value;

    this.onChange(this.value);
    this.onTouched();
  }
}
