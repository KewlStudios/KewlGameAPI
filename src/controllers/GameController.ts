import * as PIXI from "pixi.js";
import Scene from "./Scene";
import GameApp from "./GameApp";



export default class GameController{
    public game:GameApp;
    constructor(game:GameApp){
        this.game = game;
    }
}