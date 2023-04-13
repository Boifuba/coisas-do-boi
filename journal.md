## Replace text

```js
const page = game.journal.get("jaDzfsUIp7o8PrFQ").pages.get("hZMuGYMESkuvjEsY");
const text = page.text.content.replaceAll(/¥/g, 'X');
await page.update({"text.content": text});
```




### Site on Journal with iframe trick

```html
<div style="overflow: hidden; padding-top: 100%; position: relative;"><iframe style="border: 0; height: 100%; left: 0; position: absolute; top: 0; width: 100%;" src="https://crobi.github.io/dnd5e-quickref/preview/quickref.html" width="100%" height="100%" allowfullscreen="true;"></iframe></div>
```


### Open a journal 
```js 
const updates = game.actors.map(a => ({
    _id: a.id,
    "prototypeToken.name": a.name
}));
Actor.updateDocuments(updates);
console.log(updates.length, "nomes foram alterados")
```


### Sorteia 5 itens da primeira coluna em uma tabela que estiver dentro de um journal

```js
const firstTdContents = [];

const page = game.journal.get("LiaHIKDjrDENzQBP").pages.get("cJRV8e30RpXpHjEi");
const html = page.text.content;

// Crie um elemento de div temporário e defina o conteúdo HTML para o conteúdo de texto da página
const tempDiv = document.createElement('div');
tempDiv.innerHTML = html;

// Encontre todos os elementos <td> na primeira coluna da tabela
const tdElements = tempDiv.querySelectorAll('td:first-child');

// Crie uma matriz aleatória de índices para os elementos <td>
const indices = [];
while (indices.length < 5 && indices.length < tdElements.length) {
  const index = Math.floor(Math.random() * tdElements.length);
  if (!indices.includes(index)) {
    indices.push(index);
  }
}

// Obtenha o conteúdo de texto dos cinco primeiros elementos <td> selecionados aleatoriamente
indices.forEach((index) => {
  firstTdContents.push(tdElements[index].textContent.trim());
});
ChatMessage.create({ content: firstTdContents.map((name, index) => `${index + 1}. ${name}`).join("<br>") });

console.log(firstTdContents);
```

### Login dentro do Journal

Crie um form  de login e senha e quando pressionar o botão o codigo vai substituir o html do journal 
ps: os inputs e botões tem que ser simples sem nenhum type definido e o botão tem que ser role=button
```js
Hooks.on("renderJournalPageSheet", (app, html, datal) => {
let button = html.find(".journal_button");
const nomeInput = document.getElementById("nome");
const senhaInput = document.getElementById("senha");
const display = document.querySelector('.master-container');

button.click(() => {
if (nomeInput.value === 'user' && senhaInput.value === '123') {
const novoConteudo = `INSIRA O HTML AQUI E FODA-SE`
display.innerHTML = novoConteudo;
html.find("#login-form").remove();
} else {
ui.notifications.error('ACESSO NEGADO!!!');
}
});
});
```
