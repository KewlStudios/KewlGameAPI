import { EventDispatcher } from "event-dispatch";
import GameController from "./GameController";
import AssetLoader from "./AssetLoader";
import Scene from "./Scene";
export default abstract class GameApp extends PIXI.Application {
    currentScene: Scene;
    assetLoader: AssetLoader;
    gameController: GameController;
    gameWidth: number;
    gameHeight: number;
    eventDispatcher: EventDispatcher;
    aspectRatio: number;
    device: string;
    constructor();
    init(): void;
    resizeAll(): void;
}
