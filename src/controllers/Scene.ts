import * as PIXI from "pixi.js";
import GameController from "./GameController";

export default class Scene extends PIXI.Container{
    
    public displayObject:PIXI.Sprite = new PIXI.Sprite();
    constructor(game:GameController){
        super();
        this.pivot.set(.5);
    }

    public resize(w:number, h:number){
        //this.position.x = w/2;
        //this.position.y = h/2;
        //this.width = w;
        //this.height = h;
    };
}