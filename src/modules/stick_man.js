import * as PIXI from "../libs/pixi.mjs";
import { appInfo } from "./application.js";

const sprite_stickMan = PIXI.Sprite.from('../src/assets/stick-man.png');

const app = appInfo.app

const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

function draw_stickMan(app) {
    sprite_stickMan.anchor.set(0.5, 0.5);
    sprite_stickMan.position.set(app.screen.width / 2, app.screen.height / 2);
    sprite_stickMan.width = 25;
    sprite_stickMan.height = 60;
    app.stage.addChild(sprite_stickMan);
}


function move_stickMan(){
    if (sprite_stickMan.x > app.screen.width){
        sprite_stickMan.x = 0;
    }
    if (sprite_stickMan.x < 0){
        sprite_stickMan.x = app.screen.width;
    }
    if (sprite_stickMan.y > app.screen.height){
        sprite_stickMan.y = 0;
    }
    if (sprite_stickMan.y < 0){
        sprite_stickMan.y = app.screen.height;
    }

    if (keys['ArrowUp']) {
        sprite_stickMan.y -= 0;
        appInfo.map.tilePosition.y += 5;
    }
    if (keys['ArrowDown']) {
        sprite_stickMan.y += 0;
        appInfo.map.tilePosition.y -= 5;
    }
    if (keys['ArrowLeft']) {
        sprite_stickMan.x -= 0;
        appInfo.map.tilePosition.x += 5;
    }
    if (keys['ArrowRight']) {
        sprite_stickMan.x += 0;
        appInfo.map.tilePosition.x -= 5;
    }
}

export {draw_stickMan, move_stickMan};