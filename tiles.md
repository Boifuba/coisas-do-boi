## Change tiles img
```js
const updates = canvas.scene.tiles.map(s => ({_id: s.id, "texture.src": "/img/empty.webp"}));
await canvas.scene.updateEmbeddedDocuments("Tile", updates);
```