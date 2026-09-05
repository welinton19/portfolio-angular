import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, signal, WritableSignal } from '@angular/core';
import { TerminalComponent } from '../terminal/terminal';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule, TerminalComponent],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class SobreComponent implements OnInit, AfterViewInit {
  @ViewChild('sobreSection') sobreSection!: ElementRef;

  letras = ['G', 'O', 'M', 'E', 'S'];
  visiveis: WritableSignal<boolean[]> = signal([false, false, false, false, false]);

  ngOnInit() {
    this.animar();
    setInterval(() => this.animar(), 4000);
  }

  ngAfterViewInit() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visivel-scroll');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(this.sobreSection.nativeElement);
  }

  animar() {
    this.letras.forEach((_, i) => {
      setTimeout(() => {
        this.visiveis.update((arr: any) => {
          const novo = [...arr];
          novo[i] = true;
          return novo;
        });
      }, i * 200);
    });

    setTimeout(() => {
      for (let i = this.letras.length - 1; i >= 0; i--) {
        const delay = (this.letras.length - 1 - i) * 200;
        setTimeout(() => {
          this.visiveis.update((arr: any) => {
            const novo = [...arr];
            novo[i] = false;
            return novo;
          });
        }, delay);
      }
    }, this.letras.length * 200 + 1000);
  }
}