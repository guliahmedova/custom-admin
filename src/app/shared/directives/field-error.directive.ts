import { AfterViewInit, Directive, ElementRef, inject } from '@angular/core';
import { MatFormField } from '@angular/material/form-field';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';

@Directive({
  selector: '[appFieldError]',
  standalone: true,
})
export class FieldErrorDirective implements AfterViewInit {
  private formField = inject(MatFormField);
  private elementRef = inject(ElementRef);

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.setupErrorHandling();
    });
  }

  private setupErrorHandling(): void {
    const formFieldControl = this.formField._control;

    if (!formFieldControl || !formFieldControl.ngControl) {
      console.warn(
        'FieldErrorDirective: No ngControl found in parent MatFormField'
      );
      return;
    }

    const control = formFieldControl.ngControl.control;
    if (!control) {
      console.warn('FieldErrorDirective: No form control found');
      return;
    }

    merge(control.valueChanges, control.statusChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => {
        const showErrors =
          control.invalid && (control.dirty || control.touched);

        if (showErrors && control.errors) {
          const firstErrorKey = Object.keys(control.errors)[0];
          const errorValue = control.errors[firstErrorKey];
          const errorMessage = this.getErrorMessage(firstErrorKey, errorValue);
          this.elementRef.nativeElement.textContent = errorMessage;
        } else {
          this.elementRef.nativeElement.textContent = '';
        }
      });
  }

  private getErrorMessage(error: string, errorValue: any): string {
    const errorMessages: Record<string, string | ((value: any) => string)> = {
      required: 'This field is required',
      email: 'Please enter a valid email address',
      minlength: (value) =>
        `Must be at least ${value.requiredLength} characters`,
      maxlength: (value) =>
        `Cannot be longer than ${value.requiredLength} characters`,
      min: (value) => `Must be at least ${value.min}`,
      max: (value) => `Cannot be more than ${value.max}`,
      pattern: (value) => {
        if (
          error === 'pattern' &&
          typeof value === 'object' &&
          value.requiredPattern
        ) {
          if (
            value.requiredPattern.includes(
              '(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])'
            )
          ) {
            return 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character';
          }
        }
        return 'Invalid format';
      },
    };

    const messageHandler = errorMessages[error];
    if (!messageHandler) {
      return `Invalid value: ${error}`;
    }

    return typeof messageHandler === 'function'
      ? messageHandler(errorValue)
      : messageHandler;
  }
}
