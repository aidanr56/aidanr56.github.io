import { interaction } from "./interaction.js";
import * as PIXI from "../libs/pixi.mjs";
import { Button } from '@pixi/ui';
import { textStyle_standard } from "./text_styles.js";
import { appInfo } from "./application.js";
import { player_data } from "../data/player_data.js";

textStyle_standard.wordWrapWidth = interaction.interactionWidth;


const player_1 = Object.create(player_data);

const npc = Object.create(interaction);


npc.sprite_location = "";
npc.set_spriteLocation = function (location) {
    this.sprite_location = location;
    npc.sprite = PIXI.Sprite.from(location);
}

npc.draw_sprite = function (x, y, width, height) {
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(x, y);
    this.sprite.width = width;
    this.sprite.height = height;
    interaction.app.stage.addChild(this.sprite);
}

npc.move_x = function(vel) {
    this.sprite.x += vel;
}

npc.move_y = function(vel) {
    this.sprite.y += vel;
}

npc.data = null;

npc.set_data = function(data){
    this.data = data;
}

npc.button_holder = [];
npc.answer = "";
npc.question_tracker = 1;
npc.answer;

npc.xp_tracker = null;
npc.set_xpTracker = function (xp_tracker){
    this.xp_tracker = xp_tracker;
}

npc.correct_answer = function () {
    console.log("Correct");
    this.question_tracker++
    this.answer = "correct"
    this.NPC_clear_all();
    this.run_interaction();
}
npc.wrong_answer = function () {
    console.log("Wrong");
    this.question_tracker++
    this.answer = "wrong"
    this.NPC_clear_all();
    this.run_interaction();
}

npc.create_buttons = function(buttons) {
    if(buttons[0].text === 'Continue'){
        let current_button = new PIXI.Text("Continue");
        current_button.x = interaction.x + interaction.interactionWidth/2 - current_button.width/2;
        current_button.y = interaction.y - interaction.interactionHeight * 0.2;

        current_button.eventMode = 'static';
        current_button.buttonMode = true;

        current_button.on('pointerdown', () => this.answer_selected(buttons[0]))

        let button_box = new PIXI.Graphics;
        button_box.beginFill('white', 0.8)
        button_box.drawRoundedRect(current_button.x - 5, current_button.y, current_button.width + 10, current_button.height, 5);
        button_box.endFill();

        this.button_holder.push(button_box);
        this.button_holder.push(current_button);
        
    }
    else if (buttons[0].text === 'Leave'){
        let current_button = new PIXI.Text("Leave");
        current_button.x = interaction.x + interaction.interactionWidth/2 - current_button.width/2;
        current_button.y = interaction.y - interaction.interactionHeight * 0.2;

        current_button.eventMode = 'static';
        current_button.buttonMode = true;

        current_button.on('pointerdown', () => this.end_interaction());

        let button_box = new PIXI.Graphics;
        button_box.beginFill('white', 0.8)
        button_box.drawRoundedRect(current_button.x - 5, current_button.y, current_button.width + 10, current_button.height, 5);
        button_box.endFill();

        this.button_holder.push(button_box);
        this.button_holder.push(current_button);
    }
    else{
        for (let i = buttons.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
            
        }

        for (let i = 0; i < buttons.length; i++) {
            let current_button = new PIXI.Text(String(i + 1) + ". " + buttons[i].text, textStyle_standard);

            current_button.x = interaction.x;
            current_button.y = (i+1) * this.interactionHeight * 0.25 + 50;
            current_button.eventMode = 'static';
            current_button.buttonMode = true;

            current_button.on('pointerdown', () => this.answer_selected(buttons[i]))

            let button_box = new PIXI.Graphics;
            button_box.beginFill('white', 0.8)
            button_box.drawRoundedRect(current_button.x - 5, current_button.y, current_button.width + 10, current_button.height, 5);
            button_box.endFill();

            this.button_holder.push(button_box);
            
            this.button_holder.push(current_button);
        }
    }
    this.display_buttons();
}


npc.display_buttons = function(){
    for (let i = 0; i < this.button_holder.length; i++) {
        interaction.app.stage.addChild(this.button_holder[i]);
    }
}

npc.clear_buttons = function(){
    for (let i = 0; i < this.button_holder.length; i++) {
        interaction.app.stage.removeChild(this.button_holder[i]);
    }
    this.button_holder = [];
}

npc.NPC_clear_all = function(){
    for (let i = 0; i < this.button_holder.length; i++) {
        interaction.app.stage.removeChild(this.button_holder[i]);
    }
    this.button_holder = [];
    appInfo.app.stage.removeChild(this.begin_button);
}

npc.round_accuracy = 0;
npc.round_length = 0;
npc.answer_selected = function(response) {
    if (this.data[0].interaction_complete){
        this.data[0].interaction_complete = false;
    }
    if (response.correct){
        player_1.accuracy.correct += 1;
        player_1.accuracy.questions_correct.push(response.text);

        this.round_accuracy += 1;
    }
    else if (response.correct === false){
        player_1.accuracy.incorrect += 1;
        player_1.accuracy.questions_incorrect.push(response.text);
    }
    this.round_length += 1;

    this.clear_buttons();
    this.run_interaction(this.data[response.nextNode]);
}

npc.run_interaction = function(current_node) {
    if (this.data[0].interaction_complete){
        let text = "Since you have already interacted with this character, you will not receive XP for this interaction."
        let responses = [{text: "Continue", correct: null, nextNode: 1}];
        interaction.calculate_numScreens(text);
        this.create_buttons(responses);    
    }
    else{
        let text = current_node.text;
        let responses = current_node.responses;
        interaction.calculate_numScreens(text);
        this.create_buttons(responses);
    }
}

npc.begin_button = new PIXI.Text("Press 'Enter' to talk.");

npc.beginInteraction_button = function() {
    this.begin_button.x = this.sprite.x - (this.begin_button.width/2);
    this.begin_button.y = this.sprite.y - this.sprite.height;
    this.begin_button.eventMode = 'static';
    this.begin_button.buttonMode = true;
    this.begin_button.on('pointerdown', () => this.run_interaction(this.data[1]));

    appInfo.app.stage.addChild(this.begin_button);
}

npc.remove_interactionButton = function() {
    appInfo.app.stage.removeChild(this.begin_button);
}

npc.end_interaction = function() {
    interaction.INT_clear_all();
    this.NPC_clear_all();

    let ethics_xp_gain;
    let explainable_xp_gain;
    let data_xp_gain;

    if (!this.data[0].interaction_complete){
        ethics_xp_gain = (this.round_accuracy/this.round_length) * this.data[0].ethics_reward;
        explainable_xp_gain = (this.round_accuracy/this.round_length) * this.data[0].explainability_reward;
        data_xp_gain = (this.round_accuracy/this.round_length) * this.data[0].data_reward;
    }
    else{
        ethics_xp_gain = 0;
        explainable_xp_gain = 0;
        data_xp_gain = 0;
    }

    this.data[0].interaction_complete = true;
    
    this.round_accuracy = 0;
    this.round_length = 0;

    this.xp_tracker.update_ethics_XP_bar(ethics_xp_gain/100);
    this.xp_tracker.update_explainability_XP_bar(explainable_xp_gain/100);
    this.xp_tracker.update_data_XP_bar(data_xp_gain/100);
}


export { npc };

