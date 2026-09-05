💻 Portfólio — Welinton Gomes

Portfólio pessoal desenvolvido em Angular, com identidade visual neon (verde/preto) inspirada em terminal, para apresentar minha trajetória, habilidades e projetos como desenvolvedor Full Stack.

🔗 Acesse: [em breve — link do deploy]

🚀 Tecnologias
Angular (standalone components)
TypeScript
Signals (Angular Signals API)
CSS Grid / Flexbox
Material Symbols e Devicon (ícones)
✨ Funcionalidades
Header fixo com navegação por âncoras (scroll suave até cada seção)
Seção Sobre com nome animado (efeito de digitação letra por letra) e scroll reveal via IntersectionObserver
Terminal interativo animado, simulando comandos (whoami, cat sobre.txt, skills --list, status) digitados em tempo real
Seção Habilidades em grid de cards com ícones das tecnologias
Seção Projetos com cards padronizados, consumindo uma lista de projetos e links externos
Footer de contato com ícones de e-mail, telefone e LinkedIn
Totalmente responsivo, com breakpoints para tablet e mobile
🏗️ Estrutura de componentes
app/
├── component/
│   ├── header/       → Navegação fixa com ícones
│   ├── sobre/         → Apresentação pessoal + animação do nome
│   ├── terminal/       → Terminal animado (usado dentro do Sobre)
│   ├── skills/         → Grid de habilidades técnicas
│   ├── projetos/       → Grid de projetos com cards
│   └── contato/       → Footer com informações de contato
└── app.ts / app.html   → Composição de todos os componentes

Cada seção foi construída como um componente standalone independente, favorecendo organização, reuso e manutenção do código.

🖥️ Projetos em destaque
Fintech — API .NET 10 + app mobile .NET MAUI
Fintech-Blazor — Interface web em Blazor WebAssembly
▶️ Como rodar o projeto
bash
# Clone o repositório
git clone https://github.com/welinton19/portfolio-angular.git

# Acesse a pasta do projeto
cd portfolio-angular

# Instale as dependências
npm install

# Execute em modo de desenvolvimento
ng serve

Acesse http://localhost:4200 no navegador.

👨‍💻 Sobre mim

Desenvolvedor Full Stack com foco em .NET/C# e Angular, formado em Análise e Desenvolvimento de Sistemas pela FIAP. Este portfólio reúne minha trajetória e os projetos desenvolvidos ao longo do meu processo de aprendizado.

Desenvolvido por Welinton Gomes
