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
    this.answer = buttons[0].text;

    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
        
    }

    for (let i = 0; i < buttons.length; i++) {
        let current_button = new PIXI.Text(String(i + 1) + ". " + buttons[i].text, textStyle_standard);

        current_button.x = interaction.x;
        current_button.y = (i+1) * this.interactionHeight * 0.25;
        current_button.eventMode = 'static';
        current_button.buttonMode = true;

        /*if (buttons[i].text === this.answer){
            current_button.on('pointerdown', () => this.correct_answer());
        }
        else{
            current_button.on('pointerdown', () => this.wrong_answer());
        }*/
        current_button.on('pointerdown', () => this.answer_selected(buttons[i]))
        
        this.button_holder.push(current_button);
    }

    this.display_buttons();
}


npc.display_buttons = function(){
    for (let i = 0; i < this.button_holder.length; i++) {
        interaction.app.stage.addChild(this.button_holder[i]);
    }
}

npc.clear_buttons = function(){
    console.log("clearing")
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

/*npc.reset_questionTracker = function() {
    this.question_tracker = 1;
}

npc.run_interaction = function(){
    let text_string = "text_" + String(this.question_tracker);
    let question_string = "question_" + String(this.question_tracker);
    interaction.draw_text(this.data[text_string], interaction.calculate_numScreens(this.data[text_string]));
    this.create_buttons(this.data[question_string]);

}*/

npc.answer_selected = function(response) {
    if (response.correct){
        player_1.accuracy.correct += 1;
        player_1.accuracy.questions_correct.push(response.text);
    }
    else{
        player_1.accuracy.incorrect += 1;
        player_1.accuracy.questions_incorrect.push(response.text);
    }

    this.clear_buttons();
    this.run_interaction(response.nextNode);
}

npc.run_interaction = function(current_node) {
    let text = this.data[current_node].text;
    let responses = this.data[current_node].responses;
    interaction.calculate_numScreens(text);
    this.create_buttons(responses);
}

npc.begin_button = new PIXI.Text("Press 'Enter' to talk.");

npc.beginInteraction_button = function() {
    this.begin_button.x = this.sprite.x - (this.begin_button.width/2);
    this.begin_button.y = this.sprite.y - this.sprite.height;
    this.begin_button.eventMode = 'static';
    this.begin_button.buttonMode = true;
    this.begin_button.on('pointerdown', () => this.run_interaction());

    appInfo.app.stage.addChild(this.begin_button);
}

npc.remove_interactionButton = function() {
    appInfo.app.stage.removeChild(this.begin_button);
}


export { npc };

