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
var AnimationObject = /** @class */ (function (_super) {
    __extends(AnimationObject, _super);
    function AnimationObject(animArr) {
        var _this = _super.call(this) || this;
        //let animArr: string[] = assets.animaitons[0].A;
        var textureArray = [];
        for (var i = 0; i < animArr.length; i++) {
            var texture = PIXI.Texture.from(animArr[i]);
            textureArray.push(texture);
        }
        ;
        _this.animation = new PIXI.AnimatedSprite(textureArray);
        _this.addChild(_this.animation);
        return _this;
    }
    AnimationObject.prototype.play = function () {
        this.animation.play();
    };
    return AnimationObject;
}(PIXI.Sprite));
exports.default = AnimationObject;
//# sourceMappingURL=animation.js.map