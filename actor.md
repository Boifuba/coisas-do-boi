## duplicate actor

```js
let actorData = token.actor.toObject();
actorData.token = token.document.toObject();
actorData.name= `${token.actor.name} (Token)`;
await Actor.create(actorData)
```