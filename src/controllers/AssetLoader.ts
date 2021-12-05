import assets from "../assetsList";
import * as PIXI from "pixi.js";

export default class AssetLoader {
    public loader:PIXI.Loader;
    public renderer:PIXI.Renderer;
    public animatedSpriteTextures:PIXI.Texture[][]

    constructor() {
        this.loader = new PIXI.Loader();
    }

    loadAll(onAssetsLoaded:any) {
        assets.images.forEach(img => {
            for(const [key, value] of Object.entries(img)) {
                let name:string = key;
                let path:string = value;
                this.loader.add(name, path);
            };
        });

        if(assets.animaitons.length > 0){
            assets.animaitons.forEach(anim => {
                
                //this.loader.add(anim);
                /*for(const [key, value] of Object.entries(anim)) {
                    let name:string = key;
                    this.loader.add(value);
                };*/
            });
        }

        this.loader.load(onAssetsLoaded);
    }

    async loadAssets() {

    }
}
