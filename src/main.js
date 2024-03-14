import {appInfo, change_mapPos, createApplication} from "./modules/application.js";
import {stickMan, xp} from "./modules/stick_man.js";
//import {interaction} from "./modules/interaction.js";
import {npc} from "./modules/NPC.js";
import { Collisions } from "./modules/collisions.js";
import { Anchor } from "./modules/anchor_points.js";
import * as PIXI from "./libs/pixi.mjs";
import { interaction } from "./modules/interaction.js";

//npc data imports
import {npc_1_data} from "./data/npc_data.js"
import {data_privacy} from "./data/data_privacy.js"

const { app } = appInfo

createApplication();


const collision_map = Collisions;
collision_map.create_collisionMap();
collision_map.draw_collisionBoundary();

/*const anchor_map = Anchor;
anchor_map.create_anchorMap();
anchor_map.draw_anchorBoundary();*/


//change_mapPos(-1750, -1540);
//anchor_map.anchor_list[0].position.set(-1750, -1540);
//console.log(anchor_map.anchor_list[0].position.x);

/*change_mapPos(anchor_map.anchor_list[0].position.x, anchor_map.anchor_list[0].position.y);*/


const stickMan_1 = Object.create(stickMan);
stickMan_1.draw_stickMan(app);

const xp_tracker = Object.create(xp);

const npc_list = [];

const npc_1 = Object.create(npc);
npc_1.set_data(npc_1_data);
npc_1.set_spriteLocation('../src/assets/gregory.png');
//npc_1.draw_sprite(app.screen.width / 2 - 50, app.screen.height / 2 - 50, 100, 100);
npc_1.set_xpTracker(xp_tracker);
npc_list.push(npc_1);

const alan = Object.create(npc);
alan.set_data(data_privacy);
alan.set_spriteLocation('../src/assets/Joseph.png');
//alan.draw_sprite(app.screen.width / 2 - 50, app.screen.height / 2 - 150, 100, 100);
alan.set_xpTracker(xp_tracker);
npc_list.push(alan);


let leftColliding = false;
let rightColliding = false;
let topColliding = false;
let bottomColliding = false;

let leftColliding_detected = false; 
let rightColliding_detected = false; 
let bottomColliding_detected = false; 
let topColliding_detected = false; 

function collisionDetection(collisionBox) { 
    let stick_x = stickMan_1.sprite_stickMan.position.x
    let stick_y = stickMan_1.sprite_stickMan.position.y
    let stick_height = stickMan_1.sprite_stickMan.height/2
    let stick_width = stickMan_1.sprite_stickMan.width/2

    const buffer = 10;

    if (
        //left side of box
        stick_x + stick_width + buffer > collisionBox.x &&
        stick_x + stick_width < collisionBox.x + collisionBox.width &&
        stick_y + stick_height > collisionBox.y &&
        stick_y - stick_height < collisionBox.y + (collisionBox.height)
    ) {
        leftColliding_detected = true;
    }
    else{
        leftColliding_detected = false;
    }

    if (
        //right side of box
        stick_x - stick_width > collisionBox.x &&
        stick_x - stick_width - buffer < collisionBox.x + collisionBox.width &&
        stick_y + stick_height > collisionBox.y &&
        stick_y - stick_height < collisionBox.y + (collisionBox.height)
    ) {
        rightColliding_detected = true;
    }
    else{
        rightColliding_detected = false;
    }

    if (
        //top side of box
        stick_x + stick_width > collisionBox.x &&
        stick_x - stick_width < collisionBox.x + collisionBox.width &&
        stick_y + stick_height + buffer > collisionBox.y &&
        stick_y + stick_height < collisionBox.y + collisionBox.height
    ) {
        topColliding_detected = true;
    }
    else{
        topColliding_detected = false;
    }

    if (
        //bottom side of box
        stick_x + stick_width > collisionBox.x &&
        stick_x - stick_width < collisionBox.x + collisionBox.width &&
        stick_y - stick_height - buffer < collisionBox.y + collisionBox.height &&
        stick_y - stick_height > collisionBox.y 
    ) {
        bottomColliding_detected = true;
    }
    else {
        bottomColliding_detected = false;
    }

    return (
        [[leftColliding_detected, rightColliding_detected, topColliding_detected, bottomColliding_detected],
        stick_x + stick_width + buffer >= collisionBox.x &&
        stick_x - stick_width - buffer <= collisionBox.x + collisionBox.width &&
        stick_y - stick_height - buffer <= collisionBox.y + collisionBox.height &&
        stick_y + stick_height + buffer >= collisionBox.y]
    )
}

let total_collision_list = [];
let detection_list = [];
function collisionLoop() {
    total_collision_list = []
    detection_list = []

    collision_map.boundaries.forEach((collisionBox, index) => { 
        const detection = collisionDetection(collisionBox);
        total_collision_list.push(detection[1])
        detection_list.push(detection[0])
    })

    if (total_collision_list.includes(true)){
        leftColliding = detection_list[total_collision_list.indexOf(true)][0]
        rightColliding = detection_list[total_collision_list.indexOf(true)][1]
        topColliding = detection_list[total_collision_list.indexOf(true)][2]
        bottomColliding = detection_list[total_collision_list.indexOf(true)][3]
    }
    else {
        leftColliding = false;
        rightColliding = false;
        topColliding = false;
        bottomColliding = false;
    }
}

let in_interaction = false;

function distance_toNPC(current_npc) {
    /*const a = Math.abs((current_npc.sprite.position.x - stickMan_1.sprite_stickMan.position.x)) ^ 2;
    const b = Math.abs((current_npc.sprite.position.y - stickMan_1.sprite_stickMan.position.y)) ^ 2;*/

    const a = Math.abs((collision_map.anchors[0].position.x - stickMan_1.sprite_stickMan.position.x)) ^ 2;
    const b = Math.abs((collision_map.anchors[0].position.y - stickMan_1.sprite_stickMan.position.y)) ^ 2;
    const c = Math.sqrt(a + b);
    
    if (c <= 10 && !in_interaction){
        console.log('hello');
        current_npc.beginInteraction_button();
    }
    else if (c > 10 && in_interaction) {
        const xp_gain = current_npc.end_interaction();

        in_interaction = false;
    }
    else if (c > 10){
        interaction.INT_clear_all();
        current_npc.NPC_clear_all();
    }
}


xp_tracker.draw_xpBars();

let velocityX = 5;
let velocityY = 5;

const keys = {};
var keyPressed = false;


window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
    keyPressed = false;
});

app.ticker.add(() => {
    npc_list.forEach((current_npc) => {
        distance_toNPC(current_npc);

        if (keys['Enter'] && !keyPressed) {
            in_interaction = true;
            current_npc.remove_interactionButton();
            current_npc.draw_interactionBox();
            current_npc.run_interaction(current_npc.data[1]);

            keyPressed = true;
        }
    });


    
    if (keys['ArrowUp'] && !(bottomColliding)) {
        collisionLoop();
        appInfo.map.tilePosition.y += velocityY;

        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.y += velocityY;
        });
        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.y += velocityY;
        });

        npc_list.forEach((current_npc) => {
            current_npc.move_y(velocityY);
        });

    }


    else if (keys['ArrowDown'] && !(topColliding)) {
        collisionLoop();
        appInfo.map.tilePosition.y -= velocityY;

        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.y -= velocityY;
        });
        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.y -= velocityY;
        });

        //npc_list.forEach((current_npc) => {
            //current_npc.move_y(-velocityY);
        //});

        //alan.move_y(-velocityY);
        npc_1.move_y(-velocityY);

    }


    else if (keys['ArrowLeft'] && !(rightColliding)) {
        collisionLoop();
        appInfo.map.tilePosition.x += velocityX;

        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.x += velocityX;
        });
        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.x += velocityX;
        });

        npc_list.forEach((current_npc) => {
            current_npc.move_x(velocityX);
        });

    }


    else if (keys['ArrowRight'] && !(leftColliding)) {
        collisionLoop();
        appInfo.map.tilePosition.x -= velocityX;

        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.x -= velocityX;
        });
        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.x -= velocityX;
        });

        npc_list.forEach((current_npc) => {
            current_npc.move_x(-velocityX);
        });
    }
});