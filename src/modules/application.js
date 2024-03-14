//create pixi application
//import { Application } from "./pixi.mjs";
import * as PIXI from "../libs/pixi.mjs";
import * as PIXI_UI from "@pixi/ui";

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const width = windowWidth * 0.7;
const aspectRatio = 16/9;
const height = (1/aspectRatio) * width;
const app = new PIXI.Application({ width: width, height: height });

const texture = PIXI.Texture.from('../src/assets/FYP_Map.png');
const map = new PIXI.TilingSprite(texture, app.screen.width, app.screen.height);

const position = {
  posX: 0,
  posY: 0
}

map.tilePosition.x = position.posX;
map.tilePosition.y = position.posY;

function createApplication(){
    document.body.appendChild(app.view);
    app.stage.addChild(map);
}

function change_mapPos(x ,y) {
 map.tilePosition.x = x;
 map.tilePosition.y = y;
}


const textStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 24,
    wordWrap: true,
    align: 'left',
});

const appInfo = {
  app: app,
  width: width,
  height: height,
  aspectRatio: aspectRatio,
  textStyle: textStyle,
  map: map,
  position: position
}


export {appInfo, createApplication, change_mapPos};