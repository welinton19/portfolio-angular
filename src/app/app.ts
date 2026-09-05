import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './component/header/header';
import { SobreComponent } from './component/sobre/sobre';
import { SkillsComponent } from './component/skills/skills';
import { CardsComponent } from './component/cards/cards';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent,SobreComponent, SkillsComponent,CardsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
