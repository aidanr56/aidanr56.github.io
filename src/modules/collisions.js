import { collisions } from "../assets/collision-data";
import { appInfo } from "./application.js";
import * as PIXI from "../libs/pixi.mjs";



const Collisions = {};

//NPC Anchors
Collisions.spawn_anchor;
Collisions.alan_anchor;
Collisions.joseph_anchor;
Collisions.clemens_anchor;
Collisions.tara_anchor;
Collisions.sarah_anchor;

Collisions.collisionsMap = [];
Collisions.boundaries = [];

Collisions.anchors = [];

Collisions.zoom = 4.0;

Collisions.position = {
    posX: 12 * Collisions.zoom,
    poxY: 12 * Collisions.zoom
};

Collisions.create_collisionMap = function() {
    //create a 2d array that represents the collision blocks in the map
    for (let i = 0; i < collisions.length; i += 100) {
        this.collisionsMap.push(collisions.slice(i, i + 100));
    }
}

Collisions.draw_collisionBoundary = function() {
    this.collisionsMap.forEach((row, i) => {
        row.forEach((symbol, j) => {
            if (symbol === 1025){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('red', 0.01);
                currentBox.drawRect(0, 0, 12 * this.zoom, 12 * this.zoom);
                currentBox.endFill();

                currentBox.position.set(j * 12 * this.zoom, i * 12 * this.zoom);

                appInfo.app.stage.addChild(currentBox);

                this.boundaries.push(currentBox);
            }
            else if (symbol === 2059){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('blue', 0.01);
                currentBox.drawRect(0, 0, 12 * this.zoom, 12 * this.zoom);
                currentBox.endFill();

                currentBox.position.set(j * 12 * this.zoom, i * 12 * this.zoom)

                appInfo.app.stage.addChild(currentBox);

                this.anchors.push(currentBox);

                this.joseph_anchor = currentBox;
            }
            else if (symbol === 2060){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('green', 0.01);
                currentBox.drawRect(0, 0, 12 * this.zoom, 12 * this.zoom);
                currentBox.endFill();

                currentBox.position.set(j * 12 * this.zoom, i * 12 * this.zoom)

                appInfo.app.stage.addChild(currentBox);

                this.anchors.push(currentBox);

                this.alan_anchor = currentBox;
            }
            else if (symbol === 2061){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('black', 0.01);
                currentBox.drawRect(0, 0, 12 * this.zoom, 12 * this.zoom);
                currentBox.endFill();

                currentBox.position.set(j * 12 * this.zoom, i * 12 * this.zoom)

                appInfo.app.stage.addChild(currentBox);

                this.anchors.push(currentBox);

                this.tara_anchor = currentBox;
            }
            else if (symbol === 2062){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('purple', 0.01);
                currentBox.drawRect(0, 0, 12 * this.zoom, 12 * this.zoom);
                currentBox.endFill();

                currentBox.position.set(j * 12 * this.zoom, i * 12 * this.zoom)

                appInfo.app.stage.addChild(currentBox);

                this.anchors.push(currentBox);

                this.clemens_anchor = currentBox;
            }
            else if (symbol === 2063){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('yellow', 0.01);
                currentBox.drawRect(0, 0, 12 * this.zoom, 12 * this.zoom);
                currentBox.endFill();

                currentBox.position.set(j * 12 * this.zoom, i * 12 * this.zoom)

                appInfo.app.stage.addChild(currentBox);

                this.anchors.push(currentBox);

                this.home_anchor = currentBox;
            }
            else if (symbol === 2064){
                const currentBox = new PIXI.Graphics();
                currentBox.beginFill('blue', 0.01);
                currentBox.drawRect(0, 0, 12 * this.zoom, 12 * this.zoom);
                currentBox.endFill();

                currentBox.position.set(j * 12 * this.zoom, i * 12 * this.zoom)

                appInfo.app.stage.addChild(currentBox);

                this.anchors.push(currentBox);

                this.sarah_anchor = currentBox;
            }
        })
    });

}

export { Collisions }

