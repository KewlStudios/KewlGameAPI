
import { EventDispatcher } from "event-dispatch";
import GameController from "./GameController";
import AssetLoader from "./AssetLoader";
import Scene from "./Scene";

export default abstract class GameApp extends PIXI.Application{

    public currentScene: Scene;
    declare assetLoader: AssetLoader;
    public gameController: GameController;
    public gameWidth: number;
    public gameHeight: number;
    public eventDispatcher: EventDispatcher;
    public aspectRatio: number;
    public device: string

    constructor(){
        super();
    };

    public init(){

    }

    public resizeAll(){

    }
}