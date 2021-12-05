import GameApp from '../controllers/GameApp';
import * as PIXI from "pixi.js";
import { IgnorePlugin } from 'webpack';

export interface VideoPlayerButtons {
    muteBtnTextures?: string[],
    replayBtnTexture?:string,
    playBtnTexture?:string,
}

export default class VideoPlayer extends PIXI.Sprite {

    //original video dimensions
    public originalWidth: number;
    public originalHeight: number;

    private videoWidth: number;
    private videoHeight: number;

    private containerWidth: number;
    private containerHeight: number;

    private originalHWRatio:number;
    private btnScale:number = 1;

    //buttons
    private btnPlayPause: PIXI.Sprite;
    private btnReplay: PIXI.Sprite;
    private btnMute: PIXI.Sprite;

    private videoSprite: PIXI.Sprite;

    private videoLink: string;
    private videoTexture: any;

    private source: HTMLVideoElement
    private videoResource: PIXI.resources.VideoResource;

    private muted: boolean;

    public autoFit:boolean = true;
    private game: GameApp;

    //textures
    private btnMuteTextureName:string;
    private btnUnmuteTextureName:string;

    private objectScale:number;

    private gameWidth:number;
    private gameHeight:number;

    constructor(videoLink: string, game: GameApp, buttonTextureNames?:VideoPlayerButtons, autoplay:boolean = false) {
        super();

        this.game = game;

        this.videoSprite = new PIXI.Sprite();
        this.videoSprite.anchor.set(.5);

        if(this.autoFit)
            //this.game.addItemToResize(this);

        this.videoLink = videoLink;
        PIXI.Texture.fromURL(this.videoLink).then((res: PIXI.Texture) => {
            this.originalWidth = res.baseTexture.width;
            this.originalHeight = res.baseTexture.height;
            this.originalHWRatio = this.originalHeight / this.originalWidth;
            
            this.videoResource = new PIXI.resources.VideoResource((res.baseTexture.resource as PIXI.resources.VideoResource).source, { crossorigin: true })
            this.source = this.videoResource.source as HTMLVideoElement;
            this.source.crossOrigin = 'anonymous';
            this.source.muted = true;

            this.source.onended = (e: any) => { 
                this.btnReplay.visible = true; 
            };
            this.source.autoplay = autoplay;

            this.videoTexture = res;
            this.videoSprite.texture = this.videoTexture;

            this.source.play();

            //src.volume = 1;


            if(buttonTextureNames){
                if(buttonTextureNames.muteBtnTextures){
                    this.addMuteButton(buttonTextureNames.muteBtnTextures);
                }
                if(buttonTextureNames.replayBtnTexture){
                    this.addReplayButton(buttonTextureNames.replayBtnTexture);
                }
            }

            this.resize(this.gameWidth, this.gameHeight);
        });

        this.addChild(this.videoSprite);
    }

    /**
     * addMuteButton
     */
    public addMuteButton(btnTextures:string[]) {
        this.btnMute = new PIXI.Sprite(this.game.assetLoader.loader.resources[btnTextures[0]].texture);
        this.btnMute.anchor.set(.5);
        this.addChild(this.btnMute);
        this.btnMute.interactive = true;
        this.btnMute.buttonMode = true;

        this.btnMute.on("pointerup", () => {
            this.muted ? this.source.muted = false : this.source.muted = true;
            this.muted ? this.muted = false : this.muted = true;
            this.btnMute.texture = this.muted ? this.game.assetLoader.loader.resources[btnTextures[0]].texture :
            this.game.assetLoader.loader.resources[btnTextures[1]].texture;
        });
    }

    /**
     * addReplayButton
     
     */
    public addReplayButton(btnTexture:string) {
        this.btnReplay = new PIXI.Sprite(this.game.assetLoader.loader.resources[btnTexture].texture);
        this.btnReplay.anchor.set(.5);
        this.btnReplay.visible = false;
        this.addChild(this.btnReplay);
        this.btnReplay.interactive = true;
        this.btnReplay.buttonMode = true;
        this.btnReplay.on("pointerup", () => {
            this.btnReplay.visible = false;
            this.source.play();
        });
    }

    /**
     * setScale
     */
    public setScale(v:number) {
        this.objectScale = v;
    }

    public setFrameSize(w:number, h:number){
        this.containerWidth = w;
        this.containerHeight = h;
    }

    public setButtonScale(s:number){
        this.btnScale = s;
    }

    /**
     * resize
     */
    public resize(w:number, h:number) {
        this.gameWidth = w;
        this.gameHeight = h;

        let currentGameW:number = window.outerWidth;
        let currentGameH:number = window.outerHeight;

        let viewportWRatioToOrgSize:number = currentGameW / this.gameWidth;
        let viewportHRatioToOrgSize:number = currentGameH / this.gameHeight;

        let orgVidWRatio:number = this.containerWidth / this.gameWidth;
        let orgVidHRatio:number = this.containerHeight / this.gameHeight;

        let curW:number = currentGameW * viewportWRatioToOrgSize;
        let curH:number = currentGameH * viewportHRatioToOrgSize;


        if(this.autoFit){
            if(viewportWRatioToOrgSize >= viewportHRatioToOrgSize){
                this.videoHeight = this.gameHeight * orgVidHRatio;
                this.videoWidth = this.gameHeight * orgVidHRatio * (1 - (viewportWRatioToOrgSize - viewportHRatioToOrgSize))  * 1/this.originalHWRatio;
            }else{;
                this.videoWidth = this.gameWidth * orgVidWRatio;
                this.videoHeight =  this.gameWidth * orgVidWRatio * (1 - (viewportHRatioToOrgSize - viewportWRatioToOrgSize)) * this.originalHWRatio;
            }

            this.videoSprite.width = this.videoWidth;
            this.videoSprite.height = this.videoHeight;
        }else{
            
        }

        if(this.btnMute){
            this.btnMute.position.set(this.videoWidth/2 * .7, this.videoHeight/2 * .7);
            this.btnReplay.position.set(0, 0);
        }
        
        if(this.btnReplay){
            this.btnReplay.scale.set(this.btnScale);
        }
        
        if(this.btnMute){
            this.btnMute.scale.set(this.btnScale);
        }
        
        if(this.btnPlayPause){
            this.btnPlayPause.scale.set(this.btnScale);
        }
    }
}