<div align="center" style="font-size:400em">
    <h1>BaseClin</h1>
    <h2>BaseClin — Base de Consolidação e Análise de Dados Hospitalares</h2>

</div>

<code><img title="Git" width="50px" src="https://cdn.worldvectorlogo.com/logos/git-icon.svg"/></code>
<code><img title="SQL" width="50px" src="https://www.vectorlogo.zone/logos/mysql/mysql-icon.svg"/></code>
<code><img title="Composer" width="50px" src="https://cdn.worldvectorlogo.com/logos/composer.svg"/></code>
<code><img title="NodeJS" width="50px" src="https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"/></code>
<code><img title="PHP" width="50px" heigth="80px" src="https://www.php.net/images/logos/new-php-logo.svg"/></code>

## O BaseClin é um projeto de software voltado à consolidação, organização e análise de dados hospitalares.

## A proposta é funcionar como uma camada intermediária entre diferentes fontes de dados e as informações utilizadas para acompanhamento e análise das atividades hospitalares. Os dados poderão ser obtidos de outros sistemas, arquivos ou fontes estruturadas, importados para o BaseClin e posteriormente apresentados por meio de relatórios, indicadores e gráficos.

## O projeto está em desenvolvimento e tem como objetivo evoluir para uma solução capaz de transformar dados hospitalares dispersos em informações organizadas e úteis para acompanhamento, gestão e análise.

## 📌 Objetivo - É criar uma plataforma capaz de:

* Consolidar dados provenientes de diferentes fontes;
* Importar dados hospitalares de forma estruturada;
* Organizar informações para análise;
* Padronizar dados provenientes de diferentes sistemas;
* Disponibilizar indicadores e informações relevantes;
* Gerar relatórios;
* Apresentar dados por meio de gráficos e dashboards;
* Facilitar a análise do funcionamento e dos processos hospitalares;
* Criar uma base preparada para futuras integrações com diferentes sistemas.

## A proposta não é substituir necessariamente os sistemas hospitalares que já realizam suas funções operacionais, mas atuar como uma camada de consolidação e análise de dados hospitalares.

## Contexto

## Hospitais normalmente utilizam diferentes sistemas e fontes para registrar e armazenar informações relacionadas às suas atividades.

## Esses dados podem estar distribuídos entre sistemas hospitalares, bancos de dados, arquivos e outras fontes.

## O BaseClin pretende criar uma camada capaz de receber essas informações, organizá-las e disponibilizá-las de maneira mais adequada para análise.

## Uma representação simplificada da proposta é:

┌──────────────────────────────┐
│     Fontes de dados          │
│                              │
│  Sistemas hospitalares       │
│  Bancos de dados             │
│  Arquivos                    │
│  Outras fontes estruturadas  │
└──────────────┬───────────────┘
               │
               │ Importação
               ▼
┌──────────────────────────────┐
│           BaseClin           │
│                              │
│ Consolidação                 │
│ Organização                  │
│ Padronização                 │
│ Tratamento                   │
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│       Análise de dados       │
│                              │
│ Indicadores                  │
│ Relatórios                   │
│ Gráficos                     │
│ Dashboards                   │
└──────────────────────────────┘

## 🧩 Arquitetura prevista

### O projeto está sendo estruturado inicialmente em duas partes principais:

## Frontend

### A interface utiliza o SB Admin 2, baseada em HTML, CSS e JavaScript, servindo como base visual para dashboards, páginas administrativas, indicadores e futuras funcionalidades do sistema.

### Algumas páginas atualmente utilizam a extensão .php, porém, no estágio atual, esses arquivos funcionam essencialmente como páginas HTML e navegação entre páginas. O processamento principal da aplicação será gradualmente transferido para a API do backend.

## Backend

### O backend está sendo desenvolvido com Node.js, TypeScript e Express.

### Sua responsabilidade prevista inclui:

* Disponibilizar uma API;
* Receber e processar requisições do frontend;
* Implementar regras de negócio;
* Gerenciar acesso aos dados;
* Realizar validações;
* Controlar autenticação e autorização;
* Processar importações;
* Disponibilizar dados para relatórios e dashboards.

## Banco de dados

### O projeto utiliza PostgreSQL como banco de dados.

### O acesso ao banco será realizado utilizando Prisma ORM, permitindo estruturar os modelos
### de dados, consultas e migrações de forma integrada ao backend TypeScript.

## 🛠️ Tecnologias
## Backend

<table>
   <tr>
    <th>TECNOLOGIA</th>
    <td>Node.js</td>
    <td>TypeScript</td>
    <td>Express</td>
    <td>Prisma ORM</td>
    <td>PostgreSQL</td>
    <td>Zod</td>
    <td>JWT</td>
    <td>bcrypt</td> 
    <td>Multer</td>
    <td>CORS</td>
    <td>dotenv</td> 
    </tr>
  <tr>
    <th>FINALIDADE</th>
    <td>Ambiente de execução do backend</td>
    <td>Desenvolvimento do backend com tipagem estática</td>
    <td>Framework para construção da API</td>
    <td>Mapeamento e acesso ao banco de dados</td>
    <td>Banco de dados relacional</td>
    <td>Validação e definição de estruturas de dados</td>
    <td>Autenticação baseada em tokens</td>
    <td>Hash de senhas</td>  
    <td>Processamento de uploads e futuras importações de arquivos</td>
    <td>Controle de comunicação entre frontend e backend</td> 
    <td>Gerenciamento de variáveis de ambiente</td>
  </tr>
</table>
	
## Frontend

<table>
  <tr>
    <th>TECNOLOGIA</th>
    <td>HTML</td>
    <td>CSS / SCSS</td>
    <td>JavaScript</td> 
    <td>Bootstrap</td>
    <td>SB Admin 2</td>
    <td>Chart.js</td>
    <td>DataTables</td>
    </tr>
  <tr>
    <th>FINALIDADE</th>
    <td>Estrutura das páginas</td>
    <td>Estilização</td>
    <td>Interatividade e comportamento da interface</td>
    <td>Componentes e estrutura visual</td>
    <td>Template e base visual do dashboard</td>
    <td>Visualização de dados e gráficos</td>
    <td>Apresentação e manipulação de tabelas</td>
    </tr>
</table>
	
## 📁 Estrutura atual

### O backend está sendo organizado de forma modular:

baseclin-backend/ 
├── public/
├── prisma/
│   └── schema.prisma
├── src/
│   ├── controllers/
│   ├── generated/
│   ├── libs/
│   ├── routers/
│   ├── services/
│   └── server.ts
├── .env
├── .gitignore
├── index.js
├── package.json
├── package-lock.json
└── plan.txt

### A estrutura está preparada para separar responsabilidades entre rotas, controllers, serviços, bibliotecas auxiliares e modelos de dados.

### O backend ainda está em fase inicial de desenvolvimento. As pastas já foram criadas para organização futura, mas as rotas, controllers, serviços, autenticação e demais funcionalidades ainda serão implementados.

🗄️ Modelo de dados

### O modelo de dados ainda está em fase de definição.

### A estrutura deverá considerar conceitos relacionados ao contexto hospitalar, podendo envolver entidades como:

Paciente
   │
   ▼
Atendimento
   │
   ├── Consulta
   │
   └── Internação
           │
           ▼
          Leito

### Além das entidades operacionais, o projeto deverá contemplar estruturas relacionadas à importação, origem e processamento dos dados, permitindo que informações provenientes de diferentes fontes sejam incorporadas ao BaseClin.

### O modelo definitivo será desenvolvido conforme os requisitos do sistema forem consolidados.

## 📥 Importação de dados

### Uma das características centrais previstas para o BaseClin é a possibilidade de receber dados provenientes de outras fontes.

### A ideia é permitir que informações existentes em outros sistemas ou arquivos possam ser importadas, processadas e incorporadas à estrutura do BaseClin.

## O fluxo previsto é:

Fonte externa
     │
     ▼
Arquivo / Dados
     │
     ▼
Importação
     │
     ▼
Validação
     │
     ▼
Padronização
     │
     ▼
BaseClin
     │
     ▼
Relatórios / Gráficos / Indicadores

### Essa abordagem permite que o BaseClin seja utilizado como uma camada de consolidação, em vez de depender exclusivamente de digitação manual.

## 📊 Relatórios e indicadores

### Após a consolidação dos dados, o BaseClin deverá disponibilizar recursos para apresentação das informações, incluindo:

* Dashboards;
* Gráficos;
* Tabelas;
* Indicadores hospitalares;
* Relatórios;
* Filtros e consultas;
* Comparações entre períodos;
* Análises de dados consolidados.

### Os indicadores e relatórios serão definidos conforme as necessidades do projeto e as fontes de dados utilizadas.

## 🔐 Segurança

### O projeto prevê a implementação de mecanismos de segurança para proteger o acesso à aplicação e aos dados.

### Entre os recursos planejados estão:

* Autenticação de usuários;
* Controle de acesso;
* Gerenciamento de permissões;
* Senhas armazenadas de forma segura;
* Tokens de autenticação;
* Validação dos dados recebidos pela API;
* Proteção das variáveis de ambiente;
* Separação entre configurações de desenvolvimento e produção.

### Os mecanismos de segurança serão implementados progressivamente durante o desenvolvimento do backend.

## 🚧 Status do projeto

### Em desenvolvimento.

### Atualmente, o projeto encontra-se na etapa de preparação da arquitetura e das tecnologias que formarão o backend.

Concluído / preparado

Estrutura inicial do projeto

Frontend baseado em SB Admin 2

Inicialização do backend

Node.js

TypeScript

Express

Prisma

PostgreSQL como banco previsto

Estrutura inicial de diretórios

Dependências iniciais do backend

Em desenvolvimento

Definição do modelo de dados

Configuração definitiva do PostgreSQL

Implementação da API

Rotas

Controllers

Services

Validações

Autenticação

Controle de permissões

Importação de dados

Processamento e padronização dos dados

Relatórios

Indicadores

Dashboards

Integração entre frontend e backend

📚 Documentação oficial
Backend
Node.js — Documentação oficial
Ambiente de execução utilizado para o backend.
TypeScript — Documentação oficial
Linguagem utilizada no desenvolvimento do backend.
Express — Documentação oficial
Framework utilizado para construção da API.
Banco de dados
PostgreSQL — Documentação oficial
Sistema de gerenciamento de banco de dados relacional utilizado pelo projeto.
Prisma ORM — Documentação oficial
ORM utilizado para modelagem, acesso e gerenciamento dos dados.
Validação e recursos auxiliares
Zod — Documentação oficial
Biblioteca destinada à validação e definição de estruturas de dados.
JSON Web Token (JWT) — Site oficial
Tecnologia prevista para autenticação baseada em tokens.
bcrypt — Documentação no npm
Biblioteca utilizada para proteção de senhas por meio de hash.
Multer — Documentação oficial
Middleware para processamento de uploads, especialmente útil para futuras funcionalidades de importação.
🗺️ Visão futura

A evolução do BaseClin deverá seguir aproximadamente estas etapas:

1. Fundação
   │
   ├── Backend
   ├── Banco de dados
   └── Arquitetura
   │
   ▼
2. Modelo de dados
   │
   ├── Entidades hospitalares
   ├── Importações
   └── Fontes de dados
   │
   ▼
3. API
   │
   ├── Rotas
   ├── Controllers
   ├── Services
   └── Validações
   │
   ▼
4. Segurança
   │
   ├── Usuários
   ├── Autenticação
   └── Permissões
   │
   ▼
5. Integração
   │
   ├── Frontend
   └── Backend
   │
   ▼
6. Dados
   │
   ├── Importação
   ├── Consolidação
   └── Padronização
   │
   ▼
7. Análise
   │
   ├── Dashboards
   ├── Gráficos
   ├── Indicadores
   └── Relatórios
📌 Conceito

BaseClin é uma camada de consolidação e análise de dados hospitalares.

O projeto busca transformar dados provenientes de diferentes fontes em informações organizadas, permitindo sua utilização para acompanhamento, análise e visualização dos processos e indicadores hospitalares.

👨‍💻 Projeto

BaseClin
Projeto desenvolvido por Genildo Souza.

Projeto de estudo, desenvolvimento e experimentação voltado à aplicação de tecnologia na área de dados e gestão hospitalar.










## ⚙️ Funcionalidades (em desenvolvimento)

:large_blue_circle: Cadastro de pacientes

:large_blue_circle: Histórico e prontuário médico

:large_blue_circle: Controle de agendamentos e atendimentos

:large_blue_circle: Relatórios e indicadores de desempenho

:large_blue_circle: Gestão de usuários e permissões

:large_blue_circle: Painel técnico para registro de atividades de plantão (TI)

---
## 🗂️ Módulos do sistema

:large_blue_circle: Pacientes: Cadastro, internações, histórico

:large_blue_circle: Consultas: Agenda por médico e especialidade

:large_blue_circle: Atendimentos: Triagem e classificação de risco

:large_blue_circle: Leitos: Ocupação, disponibilidade

:large_blue_circle: Óbitos: Registro com indicadores

:large_blue_circle: Relatórios: Exportação e visão gerencial

---
## 🔒 Acesso seguro

:large_blue_circle: Login por usuário e perfil

:large_blue_circle: Controle de permissões (Admin, Enfermagem, Médico)

:large_blue_circle: Boa prática de proteção de dados

:large_blue_circle:

---

## 🧰 Tecnologias utilizadas

:large_blue_circle: Frontend: Bootstrap 4 (SB Admin 2)

:large_blue_circle: Backend: Node.js + Express

:large_blue_circle: Banco de dados: PostgreSQL + Prisma ORM

:large_blue_circle: Controle de versão: Git + GitHub

---

## 🗓️ Futuro do projeto

:large_blue_circle: Integração com prontuário eletrônico

:large_blue_circle: Exportação de relatórios em PDF

:large_blue_circle: Painel de estatísticas semanais

:large_blue_circle: Agendamento online

## 📦 Estrutura do projeto


## Linguagens de Marcação e Estilo
<table>
  <thead>
    <tr align="left">
      <th>Badge</th>
      <th>Markdown</th>
    </tr>
  </thead>
  <tbody align="left">
   <td>
        <img align="center" alt="Markdown" src="https://img.shields.io/badge/Markdown-000?style=for-the-badge&logo=markdown">
      </td>
      <td>
        <code>![Markdown](https://img.shields.io/badge/Markdown-000?style=for-the-badge&logo=markdown)</code>
      </td>
    </tr>
    <tr>
    <tr>
      <td>
        <img align="center" alt="Javascript" src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
      </td>
      <td>
        <code>![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)</code>
      </td>
    </tr>
    <tr>
       <td>
        <img align="center" alt="HTML5" src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
      </td>
      <td>
        <code>![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)</code>
      </td>
    </tr>
    <tr>
      <td>
        <img align="center" alt="CSS3" src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white">
      </td>
      <td>
        <code>![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)</code>
      </td>
    </tr>
    <tr>
      <td>
        <img align="center" alt="Bootstrap" src="https://img.shields.io/badge/-boostrap-0D1117?style=for-the-badge&logo=bootstrap&labelColor=0D1117">
      </td>
      <td>
        <code>![Bootstrap](https://img.shields.io/badge/-boostrap-0D1117?style=for-the-badge&logo=bootstrap&labelColor=0D1117)</code>
      </td>
    </tr>
    
  </tbody>
  <tfoot></tfoot>
</table>

## Bibliotecas e Frameworks
<table>
  <thead>
    <tr align="left">
      <th>Badge</th>
      <th>Markdown</th>
    </tr>
  </thead>
  <tbody align="left">
     <tr>
      <td>
        <img align="center" alt="Express" src="https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square">
      </td>
      <td>
        <code>![Express](https://shields.io/badge/TypeScript-3178C6?logo=TypeScript&logoColor=FFF&style=flat-square)</code>
      </td>
   </tr>
    <tr>
      <td>
        <img align="center" alt="Tailwind" src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white">
      </td>
      <td>
        <code>![Tailwind](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)</code>
      </td>
    </tr>
    </tbody>
  <tfoot></tfoot>
</table>


## Linguagens de Programação
<table>
  <thead>
    <tr align="left">
      <th>Badge</th>
      <th>Markdown</th>
    </tr>
  </thead>
  <tbody align="left">
    <tr>
      <td>
        <img align="center" alt="PHP" src="https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white">
      </td>
      <td>
        <code>![PHP](https://img.shields.io/badge/PHP-777BB4?style=for-the-badge&logo=php&logoColor=white)</code>
      </td>
    </tr>
  </tbody>
  <tfoot></tfoot>
</table>


## Banco de Dados
<table>
  <thead>
    <tr align="left">
      <th>Badge</th>
      <th>Markdown</th>
    </tr>
  </thead>
  <tbody align="left">
    <tr>
      <td>
        <img align="center" alt="MySQL" src="https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white">
      </td>
      <td>
        <code>![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)</code>
      </td>
    </tr>
   </table>

## Ferramentas

<table>
  <thead>
    <tr align="left">
      <th>Badge</th>
      <th>Markdown</th>
    </tr>
  </thead>
  <tbody align="left">
    <tr>
      <td>
        <img align="center" alt="Git" src="https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white">
      </td>
      <td>
        <code>![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)</code>
      </td>
    </tr>
    <tr>
     <tr>
      <td>
        <img align="center" alt="Vscode" src="https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white">
      </td>
      <td>
        <code>![Vscode](https://img.shields.io/badge/Vscode-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white)</code>
      </td>
    </tr>
     <tr>
      <td>
        <img align="center" alt="NodeJS" src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white">
      </td>
      <td>
        <code>![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)</code>
      </td>
    </tr>
    
  </tbody>
  <tfoot></tfoot>
</table>
  
    




