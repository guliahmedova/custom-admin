import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthLayoutComponent } from '../components/auth-layout/auth-layout.component';
import { FormGroupComponent } from "../components/form-group/form-group.component";

@Component({
  selector: 'app-register',
  imports: [
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    AuthLayoutComponent,
    FormGroupComponent
],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  isPasswordVisible1 = signal<boolean>(false);
  isPasswordVisible2 = signal<boolean>(false);

  togglePassword(showPassword: { set: (value: boolean) => void; (): boolean }) {
    showPassword.set(!showPassword());
  }
}
