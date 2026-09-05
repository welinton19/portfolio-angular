import { CommonModule } from '@angular/common';
import { Component, OnInit, signal, WritableSignal } from '@angular/core';

interface Linha {
  prompt: string;
  comando: string;
  resposta?: string[];
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './terminal.html',
  styleUrl: './terminal.css',
})
export class TerminalComponent implements OnInit {
  linhas: Linha[] = [
    { prompt: '~', comando: 'whoami', resposta: ['welinton_gomes'] },
    { prompt: '~', comando: 'cat sobre.txt', resposta: ['Dev Full Stack .NET/C# e Angular', 'Formado em ADS pela FIAP'] },
    { prompt: '~', comando: 'skills --list', resposta: ['C#, .NET, Angular, TypeScript, POSTGRESSQL, Git, DOCKER , AZURE'] },
    { prompt: '~', comando: 'status', resposta: ['Disponível para novas oportunidades ✓'] },
  ];

  textoExibido: WritableSignal<string> = signal('');
  linhasFinalizadas: WritableSignal<Linha[]> = signal([]);
  cursorPiscando: WritableSignal<boolean> = signal(true);

  ngOnInit() {
    this.rodarSequencia();
  }

  async rodarSequencia() {
    for (const linha of this.linhas) {
      await this.digitar(linha.comando);
      await this.esperar(400);

      this.linhasFinalizadas.update(arr => [...arr, linha]);
      this.textoExibido.set('');
      await this.esperar(1200);
    }
  }

  digitar(texto: string): Promise<void> {
    return new Promise(resolve => {
      let i = 0;
      const intervalo = setInterval(() => {
        this.textoExibido.set(texto.slice(0, i + 1));
        i++;
        if (i === texto.length) {
          clearInterval(intervalo);
          resolve();
        }
      }, 70);
    });
  }

  esperar(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
