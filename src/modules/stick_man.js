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

const xp = {}

//XP trackers

xp.ethics_XP_bar_outline = new PIXI.Graphics;
xp.explainability_XP_bar_outline = new PIXI.Graphics;
xp.data_XP_bar_outline = new PIXI.Graphics;

xp.ethics_XP_bar = new PIXI.Graphics;
xp.explainability_XP_bar = new PIXI.Graphics;
xp.data_XP_bar = new PIXI.Graphics;

xp.xp_bar_x = 10;
xp.xp_bar_y = 10;
xp.xp_bar_width = 150;
xp.xp_bar_height = 20;
xp.xp_bar_padding = 5;

xp.draw_xpBars = function () {
    this.ethics_XP_bar_outline.lineStyle(2, 'red', 0.8);
    this.ethics_XP_bar_outline.drawRect(this.xp_bar_x, this.xp_bar_y, this.xp_bar_width, this.xp_bar_height);

    this.explainability_XP_bar_outline.lineStyle(2, 'blue', 0.8);
    this.explainability_XP_bar_outline.drawRect(this.xp_bar_x, this.xp_bar_y + this.xp_bar_height + this.xp_bar_padding, this.xp_bar_width, this.xp_bar_height);

    this.data_XP_bar_outline.lineStyle(2, 'green', 0.8);
    this.data_XP_bar_outline.drawRect(this.xp_bar_x, this.xp_bar_y + this.xp_bar_height*2 + this.xp_bar_padding*2, this.xp_bar_width, this.xp_bar_height);

    appInfo.app.stage.addChild(this.ethics_XP_bar_outline);
    appInfo.app.stage.addChild(this.explainability_XP_bar_outline);
    appInfo.app.stage.addChild(this.data_XP_bar_outline);
}

xp.update_ethics_XP_bar = function(new_size){
    this.ethics_XP_bar.beginFill('red', 0.8);
    this.ethics_XP_bar.drawRect(this.xp_bar_x, this.xp_bar_y, this.xp_bar_width * new_size, this.xp_bar_height);
    this.ethics_XP_bar.endFill();

    appInfo.app.stage.addChild(this.ethics_XP_bar);
}

xp.update_explainability_XP_bar = function(new_size){
    this.explainability_XP_bar.beginFill('blue', 0.8);
    this.explainability_XP_bar.drawRect(this.xp_bar_x, this.xp_bar_y + this.xp_bar_height + this.xp_bar_padding, this.xp_bar_width * new_size, this.xp_bar_height);
    this.explainability_XP_bar.endFill();

    appInfo.app.stage.addChild(this.explainability_XP_bar);
}

xp.update_data_XP_bar = function(new_size){
    this.ethics_XP_bar.beginFill('green', 0.8);
    this.ethics_XP_bar.drawRect(this.xp_bar_x, this.xp_bar_y + this.xp_bar_height*2 + this.xp_bar_padding*2, this.xp_bar_width * new_size, this.xp_bar_height);
    this.ethics_XP_bar.endFill();

    appInfo.app.stage.addChild(this.ethics_XP_bar);
}




export { stickMan, xp };