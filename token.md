## Change Sizes

```js 
const s = token.document.width === 1 ? 2 : 1;
await token.document.update({width: s, height: s});
```

## Changes token name using table

```js 
const draw = await game.tables.getName("Nomes Masculinos").draw({displayChat: false});
const nome = draw.results[0].text
async function rename(token) {
  token.document.update({name: nome});
}
  canvas.tokens.controlled.map(token => rename(token));
  ```