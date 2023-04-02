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

  ## Prototype name = actor name 
  ```js 
  const updates = game.actors.map(a => ({
    _id: a.id,
    "prototypeToken.name": a.name
}));
Actor.updateDocuments(updates);
console.log(updates.length, "nomes foram alterados")
```

## Token Image

```js
const a = "PATH TO IMAGE A"
const b = "PATH TO IMAGE B"
const src = token.document.texture.src === a ? b : a
await token.document.update({"texture.src": src})
```
## Invisibility

```js
//Neck's macro
 active = !GURPS.LastActor.effects.some(e => e.flags.core.statusId === "invisible")
GURPS.LastTokenDocument.toggleActiveEffect({id: "invisible", icon: "icons/svg/invisible.svg", label: "EFFECT.StatusInvisible"}, {active: active})
```

```js
await Promise.all(game.scenes.map(s=> { return s.deleteEmbeddedDocuments("Token", s.tokens.filter(i=>i.actor?.id==actor.id).map(t=>t._id))}))
```

## Swap places

```js
const sourceToken = token.document;
const targetToken = game.user.targets.first().document;
const sourceTokenLocation = {x: sourceToken.x, y: sourceToken.y};
const targetTokenLocation = {x: targetToken.x, y: targetToken.y};
await sourceToken.update(targetTokenLocation);
await targetToken.update(sourceTokenLocation);
```

## Change sizes
```js
const s = token.document.width === 1 ? 2 : 1;
await token.document.update({width: s, height: s});
```
