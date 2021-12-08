import * as PIXI from "pixi.js";
export default class AnimationObject extends PIXI.Sprite {
    animation: PIXI.AnimatedSprite;
    constructor(animArr: string[]);
    play(): void;
}
