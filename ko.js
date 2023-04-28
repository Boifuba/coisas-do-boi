

    Hooks.on("updateCombatant", function(combatant, change){
        if(game.user.isGM && (change.defeated === true)) {
        warpgate.plugin.notice(combatant.token.object.center, {pan: true, zoom: 1, receivers: warpgate.USERS.ALL})
        // // Execute pan for GM only!! 
        // const {x,y} = combatant.token;
        // canvas.animatePan({x,y, scale:1});
    
        
    new Sequence()
      .effect()
        .delay(2000)      
        .file(`worlds/parachronics/img/ko.webm`)
        .atLocation(combatant.token)
        .scale(1)
        .play()
    }
        })
