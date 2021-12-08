import GameApp from '../controllers/GameApp';
import * as PIXI from "pixi.js";
export interface VideoPlayerButtons {
    muteBtnTextures?: string[];
    replayBtnTexture?: string;
    playBtnTexture?: string;
}
export default class VideoPlayer extends PIXI.Sprite {
    originalWidth: number;
    originalHeight: number;
    private videoWidth;
    private videoHeight;
    private containerWidth;
    private containerHeight;
    private originalHWRatio;
    private btnScale;
    private btnPlayPause;
    private btnReplay;
    private btnMute;
    private videoSprite;
    private videoLink;
    private videoTexture;
    private source;
    private videoResource;
    private muted;
    autoFit: boolean;
    private game;
    private btnMuteTextureName;
    private btnUnmuteTextureName;
    private objectScale;
    private gameWidth;
    private gameHeight;
    constructor(videoLink: string, game: GameApp, buttonTextureNames?: VideoPlayerButtons, autoplay?: boolean);
    /**
     * addMuteButton
     */
    addMuteButton(btnTextures: string[]): void;
    /**
     * addReplayButton
     
     */
    addReplayButton(btnTexture: string): void;
    /**
     * setScale
     */
    setScale(v: number): void;
    setFrameSize(w: number, h: number): void;
    setButtonScale(s: number): void;
    /**
     * resize
     */
    resize(w: number, h: number): void;
}
