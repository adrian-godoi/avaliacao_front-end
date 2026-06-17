# Portal do Candidato - ENEM

Este projeto é um sistema de duas páginas (Login e Cadastro) desenvolvido para o Portal do Candidato do ENEM, seguindo diretrizes visuais governamentais.

## 📁 Estrutura de Arquivos
Todos os arquivos devem ficar na mesma pasta:
* `index.html` - Tela Inicial de Login
* `style.css` - Estilo da Tela de Login
* `script.js` - Validação e Navegação do Login
* `cadastro.html` - Ficha Completa do Candidato
* `cadastro.css` - Estilo da Tela de Cadastro
* `cadastro.js` - Validação e Navegação do Cadastro

## ⚙️ Funcionalidades
* **Cabeçalho e Rodapé:** Fixos nas extremidades da tela com as cores padrão (Azul Escuro).
* **Navegação:** Feita inteiramente via JavaScript ao clicar nos botões (sem usar links `<a>`).
* **Validações:** Impede o envio se o e-mail não tiver `@` ou se a senha não tiver 8 caracteres e uma letra maiúscula.
* **Erros:** Mensagens exibidas em texto vermelho diretamente na tela (proibido o uso de `alert` para erros).
* **Sucesso:** Emite um `alert` de sucesso e retorna para a tela de login após cadastrar corretamente.
