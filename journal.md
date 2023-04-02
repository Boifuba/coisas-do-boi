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