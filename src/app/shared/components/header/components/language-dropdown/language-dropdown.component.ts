import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { languages } from '@app/components/header/consts/languages';
import { SvgComponent } from '@app/components/svg/svg.component';

@Component({
  selector: 'app-language-dropdown',
  imports: [MatMenuModule, MatIconModule, MatButtonModule, SvgComponent],
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.scss',
})
export class LanguageDropdownComponent {
  languageList = languages;
}
