import * as PIXI from "pixi.js";
import GameController from "./GameController";
export default class Scene extends PIXI.Container {
    displayObject: PIXI.Sprite;
    constructor(game: GameController);
    resize(w: number, h: number): void;
}
