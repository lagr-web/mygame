import * as PIXI from 'pixi.js'
import { Sprite } from 'pixi.js';
import Stage from './Stage';

class Game{

    constructor(){

    this.myStage = new Stage();
    this.scene = this.myStage.scene;
    this.scene.sortableChildren = true;
    this.background = this.myStage.bg;
    this.si = this.myStage.stageInfo;
 
    
     let assets = [

        '../assets/spritesheet/ninjarack.json',
        '../assets/spritesheet/circle.json',
        './assets/images/background.jpg',
        '../assets/images/ninja-jump.png',
        '../assets/images/play.png'

     ]

     const loader = PIXI.Loader.shared
     .add(assets)
     .add('alienspine', '../assets/spritesheet/alien-spine/alienboss.json')
     .load( (loader, res)=>{

         let bgTexture = PIXI.Texture.from('./assets/images/background.jpg');
         let _bg = new PIXI.Sprite(bgTexture);
         this.background.addChild(_bg);

            
         let sheet = PIXI.Loader.shared.resources['../assets/spritesheet/ninjarack.json'].spritesheet;
            this.ninja = new PIXI.AnimatedSprite(sheet.animations['alien']);
            this.ninja.anchor.set(0.5);
            this.ninja.x=512;
            this.ninja.y=768 - 150;

            this.ninja.interactive=true;
            this.ninja.zIndex = 2;
            this.ninja.animationSpeed=0.5;
             this.ninja.play();
            this.scene.addChild(this.ninja);

            this.si.app.stage.interactive = true;



     })//END load

    }
}

export default Game;