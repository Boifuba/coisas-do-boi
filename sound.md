## Random Sound
 ```js
 const pl = game.playlists.get("id of playlist");
const soundDocs = pl.sounds.contents
const randomSound = soundDocs[Math.floor(Math.random() * soundDocs.length)];
await pl.playSound(randomSound);
```