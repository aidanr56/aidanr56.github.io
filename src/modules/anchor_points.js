import { anchor_points } from "../assets/anchor_points";
import { appInfo } from "./application.js";
import * as PIXI from "../libs/pixi.mjs";



const Anchor = {};

Anchor.anchorMap = [];
Anchor.anchor_list = [];

Anchor.zoom = 4.0;

Anchor.position = {
    posX: 12 * Anchor.zoom,
    poxY: 12 * Anchor.zoom
}

Anchor.create_anchorMap = function() {
    //create a 2d array that represents the collision blocks in the map
    for (let i = 0; i < anchor_points.length; i += 100) {
        this.anchorMap.push(anchor_points.slice(i, i + 100));
    }
}

Anchor.draw_anchorBoundary = function() {
    this.anchorMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 1025){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('blue', 1);
                currentBox.drawRect(0, 0, 12 * this.zoom, 12 * this.zoom);
                currentBox.endFill();

                currentBox.position.set(j * 12 * this.zoom, i * 12 * this.zoom)

                appInfo.app.stage.addChild(currentBox);

                this.anchor_list.push(currentBox);
            }
        })
    });

}

export { Anchor }