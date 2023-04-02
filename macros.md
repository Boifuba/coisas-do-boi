### List active macros
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




## One macro calling other macros
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