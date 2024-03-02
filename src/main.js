import {appInfo, createApplication} from "./modules/application.js";
import {draw_stickMan, sprite_stickMan} from "./modules/stick_man.js";
//import {interaction} from "./modules/interaction.js";
import {npc_1_data} from "./npc_data/npc_data.js"
import {npc} from "./modules/NPC.js";
import { Collisions } from "./modules/collisions.js";

const { app } = appInfo


createApplication();

const collision_map = Collisions;
collision_map.create_collisionMap();
collision_map.draw_collisionBoundary();

draw_stickMan(app);

const npc_1 = Object.create(npc);
npc_1.set_data(npc_1_data);


const keys = {};
var keyPressed = false;


window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
    keyPressed = false;
});

function collisionDetection() {
    const currentPlayer = {
        x: sprite_stickMan.x,
        y: sprite_stickMan. y,
        width: sprite_stickMan.width,
        height: sprite_stickMan.height
    }

    collision_map.boundaries.forEach((collisionBox) => {
        if (
            currentPlayer.x >= collisionBox.x &&
            currentPlayer.x <= collisionBox.x + collisionBox.width &&
            currentPlayer.y <= collisionBox.y + collisionBox.height &&
            currentPlayer.y >= collisionBox.y
        ) {
            velocityX = 0;
            velocityY = 0;
        }
        else{
            velocityX = 5;
            velocityY = 5;
        }
    })

}

let velocityX = 5;
let velocityY = 5;

app.ticker.add(() => {

    collisionDetection();

    if (keys['Enter'] && !keyPressed) {
        npc_1.draw_interactionBox();
        npc_1.run_interaction();

        keyPressed = true;
    }
    if (keys['z']) {
        npc_1.INT_clear_all();
        npc_1.NPC_clear_all();
    }


    
    if (keys['ArrowUp']) {
        appInfo.map.tilePosition.y += velocityY;
        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.y += velocityY;
        });
    }
    if (keys['ArrowDown']) {
        appInfo.map.tilePosition.y -= velocityY;
        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.y -= velocityY;
        });
    }
    if (keys['ArrowLeft']) {
        appInfo.map.tilePosition.x += velocityX;
        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.x += velocityX;
        });
    }
    if (keys['ArrowRight']) {
        appInfo.map.tilePosition.x -= velocityX;
        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.x -= velocityX;
        });
    }
    
});