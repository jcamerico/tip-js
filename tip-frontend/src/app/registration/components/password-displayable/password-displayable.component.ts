import { ChangeDetectionStrategy, Component, DestroyRef, Input, forwardRef, inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, noop, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-password-displayable',
  templateUrl: './password-displayable.component.html',
  styleUrls: ['./password-displayable.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordDisplayableComponent),
      multi: true,
    },
  ],

})
export class PasswordDisplayableComponent {

  @Input()
  name!: string;

  @Input()
  formGroup!: FormGroup;

  formControl: FormControl = new FormControl<string>('');
  showPassword = false;

  destroyRef: DestroyRef = inject(DestroyRef);

  onChange: (value: string) => void = noop;
  onTouch: () => void = noop;

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouch = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    isDisabled ? this.formControl.disable() : this.formControl.enable();
  }

  writeValue(value: string): void {
    this.formControl.setValue(value, { emitEvent: false });
  }

  ngOnInit(): void {
    this.formControl.valueChanges
      .pipe(
        debounceTime(200),
        tap(value => this.onChange(value)),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe();
  }

  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  
}
