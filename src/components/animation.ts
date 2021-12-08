import * as PIXI from "pixi.js";


export default class AnimationObject extends PIXI.Sprite {

    public animation: PIXI.AnimatedSprite;

    constructor(animArr: string[]) {
        super();

        //let animArr: string[] = assets.animaitons[0].A;
        let textureArray: PIXI.Texture[] = [];
        for (let i = 0; i < animArr.length; i++) {
            let texture = PIXI.Texture.from(animArr[i]);
            textureArray.push(texture);
        };

        this.animation = new PIXI.AnimatedSprite(textureArray);

        this.addChild(this.animation);
    }

    public play(): void {
        this.animation.play();
    }
}