import { collisions } from "../assets/collision-data";
import { appInfo } from "./application.js";
import * as PIXI from "../libs/pixi.mjs";



const Collisions = {};

Collisions.collisionsMap = [];
Collisions.boundaries = [];

Collisions.position = {
    posX: 12 * 5.5,
    poxY: 12 * 5.5
}

Collisions.create_collisionMap = function() {
    //create a 2d array that represents the collision blocks in the map
    for (let i = 0; i < collisions.length; i += 50) {
        this.collisionsMap.push(collisions.slice(i, i + 50));
    }
}

Collisions.draw_collisionBoundary = function() {
    this.collisionsMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 1025){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('red', 1);
                currentBox.drawRect(j * 12 * 5.5 - 200, i * 12 * 5.5 - 150, 12 * 5.5, 12 * 5.5);
                currentBox.endFill();

                appInfo.app.stage.addChild(currentBox);

                this.boundaries.push(currentBox);
            }
        })
    });

}

export { Collisions }

