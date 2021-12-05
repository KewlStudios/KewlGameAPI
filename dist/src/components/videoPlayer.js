"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var VideoPlayer = /** @class */ (function (_super) {
    __extends(VideoPlayer, _super);
    function VideoPlayer(videoLink, game, buttonTextureNames, autoplay) {
        if (autoplay === void 0) { autoplay = false; }
        var _this = _super.call(this) || this;
        _this.btnScale = 1;
        _this.autoFit = true;
        _this.game = game;
        _this.videoSprite = new PIXI.Sprite();
        _this.videoSprite.anchor.set(.5);
        if (_this.autoFit)
            //this.game.addItemToResize(this);
            _this.videoLink = videoLink;
        PIXI.Texture.fromURL(_this.videoLink).then(function (res) {
            _this.originalWidth = res.baseTexture.width;
            _this.originalHeight = res.baseTexture.height;
            _this.originalHWRatio = _this.originalHeight / _this.originalWidth;
            _this.videoResource = new PIXI.resources.VideoResource(res.baseTexture.resource.source, { crossorigin: true });
            _this.source = _this.videoResource.source;
            _this.source.crossOrigin = 'anonymous';
            _this.source.muted = true;
            _this.source.onended = function (e) {
                _this.btnReplay.visible = true;
            };
            _this.source.autoplay = autoplay;
            _this.videoTexture = res;
            _this.videoSprite.texture = _this.videoTexture;
            _this.source.play();
            //src.volume = 1;
            if (buttonTextureNames) {
                if (buttonTextureNames.muteBtnTextures) {
                    _this.addMuteButton(buttonTextureNames.muteBtnTextures);
                }
                if (buttonTextureNames.replayBtnTexture) {
                    _this.addReplayButton(buttonTextureNames.replayBtnTexture);
                }
            }
            _this.resize(_this.gameWidth, _this.gameHeight);
        });
        _this.addChild(_this.videoSprite);
        return _this;
    }
    /**
     * addMuteButton
     */
    VideoPlayer.prototype.addMuteButton = function (btnTextures) {
        var _this = this;
        this.btnMute = new PIXI.Sprite(this.game.assetLoader.loader.resources[btnTextures[0]].texture);
        this.btnMute.anchor.set(.5);
        this.addChild(this.btnMute);
        this.btnMute.interactive = true;
        this.btnMute.buttonMode = true;
        this.btnMute.on("pointerup", function () {
            _this.muted ? _this.source.muted = false : _this.source.muted = true;
            _this.muted ? _this.muted = false : _this.muted = true;
            _this.btnMute.texture = _this.muted ? _this.game.assetLoader.loader.resources[btnTextures[0]].texture :
                _this.game.assetLoader.loader.resources[btnTextures[1]].texture;
        });
    };
    /**
     * addReplayButton
     
     */
    VideoPlayer.prototype.addReplayButton = function (btnTexture) {
        var _this = this;
        this.btnReplay = new PIXI.Sprite(this.game.assetLoader.loader.resources[btnTexture].texture);
        this.btnReplay.anchor.set(.5);
        this.btnReplay.visible = false;
        this.addChild(this.btnReplay);
        this.btnReplay.interactive = true;
        this.btnReplay.buttonMode = true;
        this.btnReplay.on("pointerup", function () {
            _this.btnReplay.visible = false;
            _this.source.play();
        });
    };
    /**
     * setScale
     */
    VideoPlayer.prototype.setScale = function (v) {
        this.objectScale = v;
    };
    VideoPlayer.prototype.setFrameSize = function (w, h) {
        this.containerWidth = w;
        this.containerHeight = h;
    };
    VideoPlayer.prototype.setButtonScale = function (s) {
        this.btnScale = s;
    };
    /**
     * resize
     */
    VideoPlayer.prototype.resize = function (w, h) {
        this.gameWidth = w;
        this.gameHeight = h;
        var currentGameW = window.outerWidth;
        var currentGameH = window.outerHeight;
        var viewportWRatioToOrgSize = currentGameW / this.gameWidth;
        var viewportHRatioToOrgSize = currentGameH / this.gameHeight;
        var orgVidWRatio = this.containerWidth / this.gameWidth;
        var orgVidHRatio = this.containerHeight / this.gameHeight;
        var curW = currentGameW * viewportWRatioToOrgSize;
        var curH = currentGameH * viewportHRatioToOrgSize;
        if (this.autoFit) {
            if (viewportWRatioToOrgSize >= viewportHRatioToOrgSize) {
                this.videoHeight = this.gameHeight * orgVidHRatio;
                this.videoWidth = this.gameHeight * orgVidHRatio * (1 - (viewportWRatioToOrgSize - viewportHRatioToOrgSize)) * 1 / this.originalHWRatio;
            }
            else {
                ;
                this.videoWidth = this.gameWidth * orgVidWRatio;
                this.videoHeight = this.gameWidth * orgVidWRatio * (1 - (viewportHRatioToOrgSize - viewportWRatioToOrgSize)) * this.originalHWRatio;
            }
            this.videoSprite.width = this.videoWidth;
            this.videoSprite.height = this.videoHeight;
        }
        else {
        }
        if (this.btnMute) {
            this.btnMute.position.set(this.videoWidth / 2 * .7, this.videoHeight / 2 * .7);
            this.btnReplay.position.set(0, 0);
        }
        if (this.btnReplay) {
            this.btnReplay.scale.set(this.btnScale);
        }
        if (this.btnMute) {
            this.btnMute.scale.set(this.btnScale);
        }
        if (this.btnPlayPause) {
            this.btnPlayPause.scale.set(this.btnScale);
        }
    };
    return VideoPlayer;
}(PIXI.Sprite));
exports.default = VideoPlayer;
//# sourceMappingURL=videoPlayer.js.map