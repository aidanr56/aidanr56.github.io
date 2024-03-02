import {appInfo, createApplication} from "./modules/application.js";
import {draw_stickMan, move_stickMan} from "./modules/stick_man.js";
//import {interaction} from "./modules/interaction.js";
import {npc_1_data} from "./npc_data/npc_data.js"
import {npc} from "./modules/NPC.js";

const { app } = appInfo

createApplication();
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

app.ticker.add(() => {
    move_stickMan();

    if (keys['Enter'] && !keyPressed) {
        npc_1.draw_interactionBox();
        npc_1.run_interaction();

        keyPressed = true;
    }
    if (keys['z']) {
        npc_1.INT_clear_all();
        npc_1.NPC_clear_all();
    }
});