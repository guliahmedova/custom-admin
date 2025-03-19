import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-form-group',
  imports: [MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule],
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss',
})
export class FormGroupComponent {
  type = input<'password' | 'text' | 'email'>('text');
  isPassword = input<boolean>(false);
  placeholder = input<string>('');
  inputId = input<string>('');
  label = input<string>('');
  name = input<string>('');
  togglePasswordEvent = output();
  isPasswordVisible = input<boolean>(false);

  togglePassword() {
    this.togglePasswordEvent.emit();
  }
}
