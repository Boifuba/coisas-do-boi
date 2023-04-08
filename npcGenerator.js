
// choose the folder were your token image are
let directory = await FilePicker.browse("data", "worlds/saburau/npc/random/");
// chose the name of actor do be cloned
let bakaActor = game.actors.getName("baka");
// change the name of the folder to store the actors
let actorFolder = await Folder.create({name: "Temporário", type:"Actor"});

for (let file of directory.files) {
// select the rolltable with names for your tokens. 
const table = game.tables.getName("Nomes Masculinos");
  const draw = await table.draw({displayChat: false});
  const name = draw.results[0].getChatText();

  let newActor = await Actor.create({name: name , type: "character", img: file, folder: actorFolder.id});
  newActor.update({"system": bakaActor.system});
}