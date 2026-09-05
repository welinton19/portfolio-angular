import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Skill {
  nome: string;
  icone: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './skills.html',
  styleUrl: './skills.css',
})
export class SkillsComponent {
    skills: Skill[] = [
    { nome: 'C#', icone: 'csharp' },
    { nome: '.NET', icone: 'dotnetcore' },
    { nome: 'Angular', icone: 'angularjs' },
    { nome: 'TypeScript', icone: 'typescript' },
    { nome: 'PostgreSQL', icone: 'postgresql' },
    { nome: 'Git', icone: 'git' },
    { nome: 'Docker', icone: 'docker' },
    { nome: 'Azure', icone: 'azure' },
  ];
}
