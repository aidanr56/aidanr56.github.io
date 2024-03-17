import {appInfo, createApplication} from "./modules/application.js";
import {stickMan, xp, AChar } from "./modules/stick_man.js";
//import {interaction} from "./modules/interaction.js";
import {npc} from "./modules/NPC.js";
import { Collisions } from "./modules/collisions.js";
import * as PIXI from "./libs/pixi.mjs";
import { interaction } from "./modules/interaction.js";

//npc data imports
import {npc_1_data} from "./data/welcome.js";
import {data_privacy} from "./data/data_privacy.js";
import { welcome } from "./data/welcome.js";
import { accountability } from "./data/accountability.js";
import { data_xai } from "./data/xai.js";
import { data_literacy } from "./data/data_literacy.js";
import { ip } from "./data/intellectual_property.js";

//const app = appInfo
createApplication();


const collision_map = Collisions;
collision_map.create_collisionMap();
collision_map.draw_collisionBoundary();


const stickMan_1 = Object.create(stickMan);
//stickMan_1.draw_stickMan(appInfo);

const allAnchors = [];


const xp_tracker = Object.create(xp);

const AChar_1 = Object.create(AChar);
AChar_1.draw_AChar(appInfo.app, 'Down');

const npc_list = [];

const alan = Object.create(npc);
alan.set_data(data_privacy);
alan.set_spriteLocation('../src/assets/alan.png');
alan.draw_sprite(0, 0, 100, 100);
alan.set_xpTracker(xp_tracker);
alan.set_anchor(collision_map.alan_anchor);
npc_list.push(alan);

const tara = Object.create(npc);
tara.set_data(accountability);
tara.set_spriteLocation('../src/assets/tara.png');
tara.draw_sprite(0, 0, 100, 100);
tara.set_xpTracker(xp_tracker);
tara.set_anchor(collision_map.tara_anchor);
npc_list.push(tara);

const clemens = Object.create(npc);
clemens.set_data(ip);
clemens.set_spriteLocation('../src/assets/clemens.png');
clemens.draw_sprite(0, 0, 100, 100);
clemens.set_xpTracker(xp_tracker);
clemens.set_anchor(collision_map.clemens_anchor);
npc_list.push(clemens);

const joseph = Object.create(npc);
joseph.set_data(data_xai);
joseph.set_spriteLocation('../src/assets/joseph.png');
joseph.draw_sprite(0, 0, 100, 100);
joseph.set_xpTracker(xp_tracker);
joseph.set_anchor(collision_map.joseph_anchor);
npc_list.push(joseph);

const sarah = Object.create(npc);
sarah.set_data(welcome);
sarah.set_spriteLocation('../src/assets/sarah.png');
sarah.draw_sprite(0, 0, 100, 100);
sarah.set_xpTracker(xp_tracker);
sarah.set_anchor(collision_map.sarah_anchor);
npc_list.push(sarah);

const beck = Object.create(npc);
beck.set_data(data_literacy);
beck.set_spriteLocation('../src/assets/beck.png');
beck.draw_sprite(0, 0, 100, 100);
beck.set_xpTracker(xp_tracker);
beck.set_anchor(collision_map.beck_anchor);
npc_list.push(beck);



let current_collisions = [];

function collision_system(direction) {
    current_collisions = [];

    for (let i = 0; i < collision_map.boundaries.length; i++){
        const collisionBox = collision_map.boundaries[i]

        const collisionX = collisionBox.position.x + collisionBox.width/2
        const collisionY = collisionBox.position.y + collisionBox.height/2

        //const stickY = stickMan_1.sprite_stickMan.position.y;
        //const stickX = stickMan_1.sprite_stickMan.position.x;
        const stickY = AChar_1.get_position(lastDirection).y;
        const stickX = AChar_1.get_position(lastDirection).x;


        const a = Math.abs((collisionX - stickX)) ^ 2;
        const b = Math.abs((collisionY - stickY)) ^ 2;
        const c = Math.sqrt(a + b);


        if (c < 8){
            current_collisions.push(true);
            const diffX = stickX - collisionX;
            const diffY = stickY - collisionY;
            switch (direction){
                case 'up':
                    if (diffY > 0) {
                        velocityDown = -5;
                        velocityUp = 0;
                    }
                    break;
                case 'down':
                    if (diffY < 0){
                        velocityDown = 0;
                        velocityUp = 5;
                    }
                    break;
                case 'left':
                    if (diffX > 0){
                        velocityRight = -5;
                        velocityLeft = 0;
                    }
                    break;
                case 'right':
                    if (diffX < 0){
                        velocityRight = 0;
                        velocityLeft = 5;
                    }
                    break;
            }
        }
    }

    if (current_collisions.length === 0){
    
        velocityUp = 5;
        velocityDown = -5;
        velocityRight = -5;
        velocityLeft = 5;
    }
}

let in_interaction = false;
let current_npc = null;

function distance_toNPC() {
    if (!in_interaction){
        for (let i = 0; i < npc_list.length; i++) {
            current_npc = npc_list[i];
    
            // const a = Math.abs(((current_npc.sprite.position.x + current_npc.sprite.width/2) - stickMan_1.sprite_stickMan.position.x)) ^ 2;
            // const b = Math.abs((current_npc.sprite.position.y - stickMan_1.sprite_stickMan.position.y + 50)) ^ 2;
            // const c = Math.sqrt(a + b);

            const a = Math.abs(((current_npc.sprite.position.x + current_npc.sprite.width/2) - AChar_1.get_position(lastDirection).x)) ^ 2;
            const b = Math.abs((current_npc.sprite.position.y - AChar_1.get_position(lastDirection).y + 50)) ^ 2;
            const c = Math.sqrt(a + b);
            
            if (c <= 10 && !in_interaction){
                current_npc.beginInteraction_button();
                break;
            }
            else if (c > 10 && in_interaction) {
                current_npc.end_interaction();
                in_interaction = false;
            }
            else if (c > 10){
                interaction.INT_clear_all();
                current_npc.NPC_clear_all();
            }
        }
    }

    else{
        const a = Math.abs(((current_npc.sprite.position.x + current_npc.sprite.width/2) - AChar_1.get_position(lastDirection).x)) ^ 2;
        const b = Math.abs((current_npc.sprite.position.y - AChar_1.get_position(lastDirection).y + 50)) ^ 2;
        const c = Math.sqrt(a + b);
        
        if (c > 10 && in_interaction) {
            current_npc.end_interaction();
            in_interaction = false;
        }
        else if (c > 10){
            interaction.INT_clear_all();
            current_npc.NPC_clear_all();
        }
    }
}


xp_tracker.draw_xpBars();

let velocityUp = 0;
let velocityDown = 0;
let velocityRight = 0;
let velocityLeft = 0;


const keys = {};
var keyPressed = false;

let called = false;
let lastDirection = 'Down'


window.addEventListener('keydown', (e) => {
    keys[e.key] = true;
});

window.addEventListener('keyup', (e) => {
    keys[e.key] = false;
    keyPressed = false;
    called = false;
    //AChar_1.remove_AChar(app);
    //AChar_1.draw_ACharLeftMoving(ACharMoving);
    AChar_1.draw_ACharStop(appInfo.app, lastDirection);
});

//console.log(alan_anchorMap.anchor_point[0].x, alan_anchorMap.anchor_point[0].y);

let initial_load = true;
// const initial_positionY = collision_map.anchors[4].position.y - appInfo.height/2 + stickMan_1.sprite_stickMan.height * 2;
// const initial_positionX = collision_map.anchors[4].position.x - appInfo.width/2;
const initial_positionY = collision_map.anchors[4].position.y - appInfo.height/2 + 60 * 2;
const initial_positionX = collision_map.anchors[4].position.x - appInfo.width/2;

appInfo.app.ticker.add(() => {
    if (initial_load){
        appInfo.map.tilePosition.y -= initial_positionY;
        appInfo.map.tilePosition.x -= initial_positionX;

        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.y -= initial_positionY;
            collisionBox.x -= initial_positionX;
        });

        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.y -= initial_positionY;
            collisionBox.x -= initial_positionX;
        });

        allAnchors.forEach((anchor) => {
            console.log(anchor.x)
            anchor.y -= initial_positionY;
            anchor.x -= initial_positionX;
        })


        npc_list.forEach((current_npc) => {
            current_npc.set_initialPos();
        });



        initial_load = false;
    }
    

    // npc_list.forEach((current_npc) => {
    //     distance_toNPC(current_npc);

    //     if (keys['Enter']) {
    //         in_interaction = true;
    //         current_npc.remove_interactionButton();
    //         current_npc.draw_interactionBox();
    //         current_npc.run_interaction(current_npc.data[1]);

    //         keyPressed = true;
    //     }
    // });

    distance_toNPC();

    if (keys['Enter']) {
        in_interaction = true;
        current_npc.remove_interactionButton();
        current_npc.draw_interactionBox();
        current_npc.run_interaction(current_npc.data[1]);

        keyPressed = true;
    }


    
    if (keys['ArrowUp']) {
        AChar_1.remove_AChar(appInfo.app);    
        // run the animation. function called once. Start()
        if (!called) {
            AChar_1.draw_ACharMoving(appInfo.app, 'Up');
            called = true; 
        }
        lastDirection = 'Up'

        collision_system('up');

        appInfo.map.tilePosition.y += velocityUp;
    
        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.y += velocityUp;
        });
        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.y += velocityUp;
        });

        npc_list.forEach((current_npc) => {
            current_npc.move_y(velocityUp);
        });
    }


    else if (keys['ArrowDown']) {
        AChar_1.remove_AChar(appInfo.app);   
        if (!called) {
            AChar_1.draw_ACharMoving(appInfo.app, 'Down');
            called = true;     
        }
        lastDirection = 'Down'

        collision_system('down');

        appInfo.map.tilePosition.y += velocityDown;
    
        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.y += velocityDown;
        });
        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.y += velocityDown;
        });

        npc_list.forEach((current_npc) => {
            current_npc.move_y(velocityDown);
        });

    }


    else if (keys['ArrowLeft']) {
        AChar_1.remove_AChar(appInfo.app); 
        // run the animation. function called once. Start()
        if (!called) {
            AChar_1.draw_ACharMoving(appInfo.app, 'Left');
            called = true;
        }              
        lastDirection = 'Left'

        collision_system('left');

        appInfo.map.tilePosition.x += velocityLeft;

        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.x += velocityLeft;
        });
        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.x += velocityLeft;
        });

        npc_list.forEach((current_npc) => {
            current_npc.move_x(velocityLeft);
        });

    }


    else if (keys['ArrowRight']) {
        AChar_1.remove_AChar(appInfo.app);            
        if (!called) {
            AChar_1.draw_ACharMoving(appInfo.app, 'Right');
            called = true;
        }
        lastDirection = 'Right'

        collision_system('right');
        
        appInfo.map.tilePosition.x += velocityRight;

        collision_map.boundaries.forEach((collisionBox) => {
            collisionBox.x += velocityRight;
        });
        collision_map.anchors.forEach((collisionBox) => {
            collisionBox.x += velocityRight;
        });

        npc_list.forEach((current_npc) => {
            current_npc.move_x(velocityRight);
        });
    }
});