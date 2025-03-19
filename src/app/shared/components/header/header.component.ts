import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SvgComponent } from "../svg/svg.component";
import { LanguageDropdownComponent } from "./components/language-dropdown/language-dropdown.component";
import { SearchBarComponent } from "./components/search-bar/search-bar.component";
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SvgComponent, LanguageDropdownComponent, SearchBarComponent, MatIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
