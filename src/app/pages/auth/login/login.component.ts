import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import { AuthLayoutComponent } from '../components/auth-layout/auth-layout.component';
import { FormGroupComponent } from "../components/form-group/form-group.component";

@Component({
  selector: 'app-login',
  imports: [
    AuthLayoutComponent,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    RouterLink,
    AuthLayoutComponent,
    FormGroupComponent
],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  isPasswordVisible = signal<boolean>(false);

  togglePassword() {
    this.isPasswordVisible.set(!this.isPasswordVisible());
  }
}
