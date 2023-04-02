## Change all lights to torch
```js
await canvas.lighting.updateAll({"config.animation.type": "torch",  "config.animation.intensity": 2, "config.animation.speed": 5});
```
## Turn on/off lights
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



## Change background scene
```js
let sceneB = "worlds/japao/scenes/estrada/GL_Crossroads_Caravan_Day.jpg";
let sceneA = "worlds/japao/scenes/estrada/GL_Crossroads_Caravan_Night.jpg";
let src = canvas.scene.background.src === sceneA ? sceneB : sceneA;
 await canvas.scene.update({"background.src": src});

 ```