import { interaction } from "./interaction.js";
import * as PIXI from "../libs/pixi.mjs";
import { Button } from '@pixi/ui';
import { textStyle_standard } from "./text_styles.js";
textStyle_standard.wordWrapWidth = interaction.interactionWidth;

const npc = Object.create(interaction);

npc.sprite_location = "";
npc.set_spriteLocation = function (location) {
    this.sprite_location = location;
    npc.sprite = PIXI.Sprite.from(this.sprite_location);
}

npc.draw_sprite = function () {
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.position.set(150, 50);
    this.sprite.width = 25;
    this.sprite.height = 60;
    interaction.app.stage.addChild(this.sprite);
}

npc.data = "";

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
    this.answer = buttons[0];

    for (let i = buttons.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [buttons[i], buttons[j]] = [buttons[j], buttons[i]];
        
    }

    for (let i = 0; i < buttons.length; i++) {
        let current_button = new PIXI.Text(String(i + 1) + ". " + buttons[i], textStyle_standard);

        current_button.x = interaction.x;
        current_button.y = (i+1) * this.interactionHeight * 0.25;
        current_button.e
        current_button.eventMode = 'static';
        current_button.buttonMode = true;

        if (buttons[i] === this.answer){
            current_button.on('pointerdown', () => this.correct_answer());
        }
        else{
            current_button.on('pointerdown', () => this.wrong_answer());
        }
        
        this.button_holder.push(current_button);
    }

    this.display();
}


npc.display = function(){
    for (let i = 0; i < this.button_holder.length; i++) {
        interaction.app.stage.addChild(this.button_holder[i]);
    }
}

npc.NPC_clear_all = function(){
    for (let i = 0; i < this.button_holder.length; i++) {
        interaction.app.stage.removeChild(this.button_holder[i]);
    }
    this.button_holder = [];
}

npc.run_interaction = function(){
    let text_string = "text_" + String(this.question_tracker);
    let question_string = "question_" + String(this.question_tracker);
    interaction.draw_text(this.data[text_string], interaction.calculate_numScreens(this.data[text_string]));
    this.create_buttons(this.data[question_string]);

}


export { npc };

