import * as PIXI from "../libs/pixi.mjs";
import { appInfo } from "./application.js";

const stickMan = {}
stickMan.sprite_stickMan = PIXI.Sprite.from('../src/assets/stick-man.png');

const app = appInfo.app

const keys = {};
window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
});

stickMan.draw_stickMan = function (app) {
    this.sprite_stickMan.anchor.set(0.5, 0.5);
    this.sprite_stickMan.position.set(app.screen.width / 2, app.screen.height / 2 - 50);
    this.sprite_stickMan.width = 25;
    this.sprite_stickMan.height = 60;
    app.stage.addChild(this.sprite_stickMan);
}




export { stickMan };