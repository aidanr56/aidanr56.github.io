//create pixi application
//import { Application } from "./pixi.mjs";
import * as PIXI from "../libs/pixi.mjs";
import * as PIXI_UI from "@pixi/ui";

const windowHeight = window.innerHeight;
const windowWidth = window.innerWidth;

const width = windowWidth * 0.7;
const aspectRatio = 16/9;
const height = (1/aspectRatio) * width;
const app = new PIXI.Application({ width: width, height: height, backgroundColor: 'green' });

function createApplication(){
    document.body.appendChild(app.view);
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
}


export {appInfo, createApplication};