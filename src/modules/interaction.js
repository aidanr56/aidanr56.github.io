import * as PIXI from "../libs/pixi.mjs";
import { appInfo } from "./application.js";


const interaction = Object.create(appInfo);

interaction.interactionWidth = appInfo.width * 0.9;
interaction.interactionHeight = appInfo.height * 0.4;

interaction.x = (appInfo.app.screen.width - interaction.interactionWidth) / 2;
interaction.y = appInfo.app.screen.height - (appInfo.app.screen.height * 0.05) - interaction.interactionHeight;

interaction.textStyle = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 24,
    wordWrap: true,
    wordWrapWidth: interaction.interactionWidth - 10,
    align: 'left',
});

interaction.interactionBox = new PIXI.Graphics();
interaction.displayText = new PIXI.Text("", interaction.textStyle);
interaction.rightArrow = PIXI.Sprite.from("../src/assets/right-arrow.png");
interaction.leftArrow = PIXI.Sprite.from("../src/assets/left-arrow.png");
interaction.pageTracker = new PIXI.Text("", interaction.textStyle);

interaction.screenCount = 1;


interaction.draw_interactionBox = function() {
    this.interactionBox.beginFill('gray', 1);
    this.interactionBox.drawRect(this.x, this.y, this.interactionWidth, this.interactionHeight);
    this.interactionBox.endFill();

    this.app.stage.addChild(this.interactionBox);
};

interaction.calculate_numScreens = function(NPC_text){
    let formatted_text = new PIXI.Text(NPC_text, interaction.textStyle);

    let textArea = formatted_text.height * formatted_text.width;

    let interactionArea = (this.interactionHeight - (appInfo.height * 0.15)) * this.interactionWidth;
    let numScreens = Math.ceil(textArea/interactionArea);

    return numScreens;

};

interaction.draw_text = function(NPC_text, numScreens) {
    this.displayText.position.set(this.x + 10, this.y + 5);

    //let pageTracker_text = "1/" + String(numScreens);
    this.pageTracker.anchor.set(0.5,0.5);
    this.pageTracker.position.set(this.width/2, this.y + (this.y * 0.6));

    let splitText = [];

    if (numScreens > 1){
        let splitCounter = 0;
        for (let i = 0; i < numScreens; i++){
            splitCounter = NPC_text.length/numScreens * i;
            splitText.push(NPC_text.slice(splitCounter, splitCounter+(NPC_text.length/numScreens)));
        }

        let displayCounter = 0;
        this.displayText.text = splitText[displayCounter];
        this.app.stage.addChild(this.displayText);

        this.pageTracker.text = String(displayCounter + 1) + "/" + String(numScreens);
        interaction.app.stage.addChild(this.pageTracker);

        function increase_displayCounter(){
            if (displayCounter < splitText.length - 1){
                displayCounter++;
                interaction.displayText.text = splitText[displayCounter];
                interaction.pageTracker.text = String(displayCounter + 1) + "/" + String(numScreens);
            }
        }
        function decrease_displayCounter(){
            if (displayCounter > 0){
                displayCounter--;
                interaction.displayText.text = splitText[displayCounter];
                interaction.pageTracker.text = String(displayCounter + 1) + "/" + String(numScreens);
            }
        }

        //set up the right arrow
        this.rightArrow.position.set(this.app.screen.width - (this.app.screen.width * .1), this.y + (this.y * 0.55));
        this.rightArrow.width = 50;
        this.rightArrow.height = 50;
    
        this.rightArrow.eventMode = 'static';
        this.rightArrow.buttonMode = true;

        this.rightArrow.on('pointerdown', increase_displayCounter);
        this.app.stage.addChild(this.rightArrow);

        //set up the left arrow
        this.leftArrow.position.set(this.app.screen.width * .1, this.y + (this.y * 0.55));
        this.leftArrow.width = 50;
        this.leftArrow.height = 50;
    
        this.leftArrow.eventMode = 'static';
        this.leftArrow.buttonMode = true;

        this.leftArrow.on('pointerdown', decrease_displayCounter);
        this.app.stage.addChild(this.leftArrow);
    }
    else{
        this.displayText.text = NPC_text;
        this.app.stage.addChild(this.displayText);

        this.pageTracker.text = "1/1";
        interaction.app.stage.addChild(this.pageTracker);
    }
};

interaction.draw_nextArrow = function(){
    this.rightArrow.position.set(this.app.screen.width * 0.2 - 70, this.y + (this.y * 0.6));
    this.rightArrow.width = 50;
    this.rightArrow.height = 50;

    this.rightArrow.eventMode = 'static';
    this.rightArrow.buttonMode = true;

    this.rightArrow.on('pointerdown', function(){this.screenCount++});
};

interaction.INT_clear_all = function () {
    this.app.stage.removeChild(this.interactionBox);
    this.app.stage.removeChild(this.displayText);
    this.app.stage.removeChild(this.rightArrow);
    this.app.stage.removeChild(this.leftArrow);
    this.app.stage.removeChild(this.pageTracker);
};


export{interaction};