
### Change all lights to torch
```js
await canvas.lighting.updateAll({"config.animation.type": "torch",  "config.animation.intensity": 2, "config.animation.speed": 5});
```
### Turn on/off lights
```js
//passing args through function 

function lights(){
    if (args === "on") {
      canvas.lighting.updateAll({hidden: false});
    }
    else if (args === "off") {
      canvas.lighting.updateAll({hidden: true});
    }
  }
```
### Change sizes
```js
const s = token.document.width === 1 ? 2 : 1;
await token.document.update({width: s, height: s});
```
## Macros

### Active macros
```js
let mods = '';
game.modules.forEach(m => {
  let a = m.active ? 'Enabled' : 'Disabled';
  mods = mods.concat(`${m.id}: ${a}\n`);
});

let d = new Dialog({
  title: `Enabled Mods`,
  content: `<textarea style="height: 500px;" type="text" id="modslist" name="modslist">${mods}</textarea>`,
  buttons: {
    copy: {
      label: `Copy to clipboard`,
      callback: () => {
        $("#modslist").select();
        document.execCommand('copy');
      }
    },
    close: {
      icon: "<i class='fas fa-tick'></i>",
      label: `Close`
    },
  },
  default: "close",
  close: () => {}
});

d.render(true);
```




### One macro calling other macros
```js
let map = {
  "Player1": "macro1",
  "Boifuba": "macro2",
  "Pimpao": "macro3",
  "Nose66": "crazymacro"
}
let macroname = map[game.user.name]
let macros = Object.values(game.macros.entries).filter(m => m.name == macroname)
if (macros.length > 0) 
  macros[0].execute()
  ```
### Change scene
```js
let sceneB = "worlds/japao/scenes/estrada/GL_Crossroads_Caravan_Day.jpg";
let sceneA = "worlds/japao/scenes/estrada/GL_Crossroads_Caravan_Night.jpg";
let src = canvas.scene.background.src === sceneA ? sceneB : sceneA;
 await canvas.scene.update({"background.src": src});

 ```




 ## Sound
 ### Random Sound
 ```js
 const pl = game.playlists.get("id of playlist");
const soundDocs = pl.sounds.contents
const randomSound = soundDocs[Math.floor(Math.random() * soundDocs.length)];
await pl.playSound(randomSound);
```


## Tokens

### Delete all tokens on map 

```js
await Promise.all(game.scenes.map(s=> { return s.deleteEmbeddedDocuments("Token", s.tokens.filter(i=>i.actor?.id==actor.id).map(t=>t._id))}))
```

### Swap places

```js
const sourceToken = token.document;
const targetToken = game.user.targets.first().document;
const sourceTokenLocation = {x: sourceToken.x, y: sourceToken.y};
const targetTokenLocation = {x: targetToken.x, y: targetToken.y};
await sourceToken.update(targetTokenLocation);
await targetToken.update(sourceTokenLocation);
```


