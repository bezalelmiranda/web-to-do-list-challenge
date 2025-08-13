# 📝 To-Do List

> Aplicação de controle de tarefas no estilo **to-do list**, desenvolvida como desafio proposto pela **Rocketseat**.

---

## 📜 Descrição

É desenvolvida uma aplicação de controle de tarefas, contendo as seguintes funcionalidades:

- ➕ Adicionar uma nova tarefa  
- ✅ Marcar e desmarcar uma tarefa como concluída  
- 🗑 Remover uma tarefa da listagem  
- 📊 Mostrar o progresso de conclusão das tarefas

---

## 🎯 Objetivo do Projeto

- Trabalhar **estados no React**
- Aplicar **imutabilidade do estado**
- Manipular **listas e chaves no ReactJS**
- Praticar **propriedades e componentização**

---

## 🎨 Demonstração Visual

- **Protótipo no Figma:** [Clique aqui para visualizar](https://www.figma.com/design/0n0zDN7zbzhRbaEO74Xesx/ToDo-List-%E2%80%A2-Desafio-React/duplicate?node-id=56-96&p=f)  
<p align="center">
  <img src="/empty-list.png" alt="Lista de tarefas vazia" width="45%" style="margin-right: 10px;"/>
  <img src="/task-list.png" alt="Lista de tarefas com itens" width="45%"/>
</p>

---

## 🚀 Instalação e Uso

### **Pré-requisitos**
- [Node.js](https://nodejs.org/) **>= 18** (recomendado)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/) instalado

---

### **Clonando o repositório**
```bash
git clone https://github.com/bezalelmiranda/web-to-do-list-challenge.git
cd to-do-list

## Instalando as dependências
npm install
# ou
yarn install

## Rodando em ambiente de desenvolvimento
npm run dev
# ou
yarn dev
```

---

## Estrutura do Projeto
```bash
src/
 ├── assets/               # Arquivos SVG e imagens
 ├── components/           # Componentes reutilizáveis
 │    ├── Header.tsx
 │    ├── Header.module.css
 │    ├── NewTaskButton.tsx
 │    ├── NewTaskButton.module.css
 │    ├── NewTaskInput.tsx
 │    ├── NewTaskInput.module.css
 │    ├── Task.tsx
 │    ├── Task.module.css
 │    ├── TaskList.tsx
 │    ├── TaskList.module.css
 ├── App.tsx
 ├── App.module.css
 ├── global.css
 ├── main.tsx
 └── vite-env.d.ts
 ```

---

## Tecnologias Utilizadas

- React 19
- TypeScript
- Vite
- Phosphor Icons
- ESLint

## Créditos
Idealizado por: **Rocketseat**