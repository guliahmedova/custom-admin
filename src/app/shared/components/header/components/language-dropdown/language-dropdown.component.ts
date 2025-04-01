import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { languages } from '@app/components/header/consts/languages';
import { Language } from '@app/components/header/types';

@Component({
  selector: 'app-language-dropdown',
  imports: [
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    NgFor,
  ],
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.scss',
})
export class LanguageDropdownComponent {
  languageList = languages;
  selected: Language = this.languageList[0];

  selectLanguage(selectedLanguage: Language) {
    this.selected = selectedLanguage;
  }
}
