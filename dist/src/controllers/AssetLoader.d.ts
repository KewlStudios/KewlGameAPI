import * as PIXI from "pixi.js";
export default class AssetLoader {
    loader: PIXI.Loader;
    renderer: PIXI.Renderer;
    animatedSpriteTextures: PIXI.Texture[][];
    constructor();
    loadAll(onAssetsLoaded: any): void;
    loadAssets(): Promise<void>;
}
