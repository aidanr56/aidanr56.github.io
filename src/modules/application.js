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

const texture = PIXI.Texture.from('../src/assets/FYPGameMap.png');
const map = new PIXI.TilingSprite(texture, app.screen.width, app.screen.height);
map.tilePosition.x = -200;
map.tilePosition.y = -150;

function createApplication(){
    document.body.appendChild(app.view);
    app.stage.addChild(map);
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
  map: map
}


export {appInfo, createApplication};