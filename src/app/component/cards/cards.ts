import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Projeto {
  nome: string;
  descricao: string;
  link: string;
  
}

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cards.html',
  styleUrl: './cards.css',
})
export class CardsComponent {
  projetos: Projeto[] = [
    {
      nome: 'Sistema de Notficações Multicanais',
      descricao: 'Sistema desenvolvido em C# e API REST para envio de notificações em múltiplos canais, desenvolvida em .NET 10 com Clean Architecture.',
      link: 'https://github.com/welinton19/NotficacoesMultcanais/tree/master'
    },
    {
      nome: 'API Documentos Brasileiros',
      descricao: 'API desenvolvida em C# e API REST para controle de estoque, desenvolvida em .NET 10 com Clean Architecture.',
      link: 'https://github.com/welinton19/DocumentosBrasileiros/tree/master'
    },
    {
      nome: 'Fintech',
      descricao: 'Aplicação Fintech desenvolvida em .NET 10, estruturada em Clean Architecture e orquestrada com .NET Aspire, com um aplicativo mobile nativo em .NET MAUI consumindo uma API.',
      link: 'https://github.com/welinton19/Fintech/tree/master'
    },
    {
      nome: 'Fintech-Blazor',
      descricao: 'Interface web do ecossistema Fintech, desenvolvida no Blazor WebAssembly, consumindo a API principal do projeto Fintech e integrando dados financeiros externos em tempo real para exibição de gráficos.',
      link: 'https://github.com/welinton19/Fintech-Blazor/tree/master'
    },
    {
      nome: 'CrmWTC — Gestão de Relacionamento com o Cliente',
      descricao: 'API RESTful desenvolvida em .NET 9 com MongoDB Atlas , arquitetura em camadas, autenticação JWT, mensagens em tempo real via SignalR e deploy automatizado no Microsoft Azure .',
      link: 'https://github.com/welinton19/CrmWTC.Dotnet/tree/master'
    },
    {
      nome: 'JogoJusto API',
      descricao: 'O Jogo Justo é uma plataforma de HRTech voltada para integração e retenção de talentos diversos nas organizações. A combinação de soluções de trilhas de capacitação baseadas em microlearning, mentoria com identificação de camadas culturais e acompanhamento de indicadores ESG para tornar o processo de onboarding mais estruturado, inclusivo e eficiente e deploy automatizado no Microsoft Azure .',
      link: 'https://github.com/welinton19/JogoJusto/tree/master'
    },
    {
      nome: 'Projeto Alura — Plataforma de Cursos Online',
      descricao: 'Plataforma completa de gerenciamento de cursos online com autenticação JWT, controle de acesso por funções e implantação automatizada na nuvem.Tecnologias utilizadas: C#, .NET 10, Clean Architecture, Entity Framework Core, Angular, TypeScript, PostgreSQL, Docker e Azure.',
      link: 'https://github.com/welinton19/projeto_alura/tree/main'
    }
  ];
}
