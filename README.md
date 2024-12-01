# 📺 RESTIC36 - Streaming de Vídeo

Site de Streaming de Vídeo desenvolvido em [Angular](https://github.com/angular/angular-cli) como forma de avaliação final da Trilha de Desenvolvimento Front-End da RESTIC36.
## 🎨 Protótipo de Design

O Protótipo foi desenvolvido em Figma e pode ser acessado a partir [desse link](https://www.figma.com/design/zKPbhzN8hS5bKsGsbjAXYt/RESTIC36---Projeto-Final?node-id=0-1&t=orP4FqXPnUpyCHbE-1).


## 💻 Demonstração

![Captura de tela](src\assets\images\captura-de-tela.jpeg)


## 🔍 Funcionalidades

- **Autenticação**: Login e logout utilizando Auth0.
- **Visualização de Vídeos**: Exibição de vídeos populares, favoritos e para assistir mais tarde.
- **Interações com Vídeos**: Curtir, favoritar e adicionar vídeos à lista de "assistir mais tarde".
- **Busca de Vídeos**: Busca de vídeos por título, data e visualizações.
- **Ordenação de Vídeos**: Ordenação de vídeos por título, data e visualizações.
- **Compartilhamento de Vídeos**: Copiar URL do vídeo para a área de transferência.
- **Notificações**: Exibição de mensagens de notificação.

## 🛠️ Aspectos Técnicos

### Arquitetura

O sistema é dividido em várias camadas para melhor organização e manutenção do código:

- **Serviços (Services)**: Responsáveis por fazer a comunicação com APIs externas e gerenciar dados da aplicação.
- **Componentes (Components)**: Blocos reutilizáveis de UI que compõem as diferentes partes da aplicação.
- **Views**: Páginas da aplicação que utilizam os componentes para exibir informações ao usuário.
- **Roteamento (Routing)**: Gerencia a navegação entre as diferentes views da aplicação.

### Tecnologias Utilizadas

- **Angular**: Framework principal para desenvolvimento da aplicação.
- **TypeScript**: Linguagem utilizada para escrever o código da aplicação.
- **HTML e CSS**: Utilizados para estruturar e estilizar a interface do usuário.
- **Auth0**: Serviço de autenticação e autorização.
- **json-server**: Utilizado para simular uma API RESTful durante o desenvolvimento.

### Padrões de Projeto

- **Injeção de Dependência**: Utilizada para gerenciar dependências entre os serviços e componentes.
- **Observables**: Utilizados para lidar com operações assíncronas e eventos.
- **Componentização**: Divisão da interface em componentes reutilizáveis para facilitar a manutenção e escalabilidade.

## ❓ Como executar

Para executar o sistema, siga os passos abaixo:

### Pré-requisitos

- Node.js (versão 14 ou superior)
- Angular CLI (versão 12 ou superior)

### Passos

1. **Clone o repositório:**

  ```bash
  git clone https://github.com/oJorta/restic36-projeto-final.git
  cd restic36-projeto-final
  ```

2. **Instale as dependências:**

  ```bash
  npm install
  ```

3. **Execute o servidor de desenvolvimento:**

  ```bash
  ng serve
  ```

4. **Inicie o json-server:**

  ```bash
  npx json-server --watch db.json --port 3000
  ```

5. **Acesse a aplicação:**

  Abra o navegador e acesse `http://localhost:4200`.

Pronto! Agora você deve conseguir ver e interagir com o sistema de streaming de vídeo e seu backend.


## Autores

- [@oJorta](https://www.github.com/ojorta)

