import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header';
import { SobreComponent } from './component/sobre/sobre';
import { SkillsComponent } from './component/skills/skills';
import { CardsComponent } from './component/cards/cards';
import { FooterComponent } from "./component/footer/footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, SobreComponent, SkillsComponent, CardsComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
