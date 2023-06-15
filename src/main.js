// LIYU SUN_CMPM 120
// CHUNGKING EXPRESS
// 60+ HOURS
/* 
   CITATIONS:

        Play Music          : https://github.com/photonstorm/phaser3-examples/blob/master/public/src/audio/Web%20Audio/play%20audio%20file.js
        Menu&End Bitmap     : https://github.com/nathanaltice/Paddle-Parkour-P360
        Text Wipe Effect    : https://github.com/photonstorm/phaser3-examples/blob/master/public/src/fx/wipe/reveal%20text.js
        KeyComboMatch       : https://github.com/nathanaltice/LowKey/tree/master
        Text/Dialog Machine : https://github.com/nathanaltice/Dialogging
        Camera Effects      : https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/graphics/multiple%20cameras.js
        Particle Effects    : https://github.com/nathanaltice/PartyCoolFX

        "Piacevoli" Font    : https://fontenddev.com/fonts/piacevoli/
        Tileset             : "Modern Interior" FULL VERSION LICENSE purchased from https://limezu.itch.io/moderninteriors
        SFX                 : https://freesfx.co.uk/sfx

        Music Remix         : LIYU SUN
        Game Writing        : LIYU SUN
        Game Art & UI       : LIYU SUN
        Game Programing     : LIYU SUN
        General Design      : LIYU SUN
        Adapted From        : Wong Kar-Wai's CHUNGKING EXPRESS (1994)
    
    Uses of Phaser's major components
        - physics systems   : Sprites using aracde physics in scene playOne and playTwo
        - cameras           : Camera vfx in all the playscenes and menuscene, multiple camera in scene playThree
        - particle effects  : Drawing Chinese Characters / KANJI with particle in the menuScene
        - text objects      : Making text clickable objects in every scene & text game in scene playTwo
        - animation manager : Creating Animation from texture atlas in scne playThree
        - tween manager     : Applying tween effects on title arts, achievement text, etc.
        - timers            : Using timers for switch game rounds in all play scenes
        - tilemaps          : Integrating tilemaps in the scene playThree with functioning collision

    Grade "tilt"
        - Genral Design     : The game's mechanics and art seamlessly harmonize with the movie's theme creating an immersive experience
        - Various Cutscenes : The four cutscene conversations effectively weaves a clear storyline based on the movie
        - Menu Art          : Particle effect driven menu art (i.e., drawing chinese characters one stroke at a time)
        - Text-Based Quiz   : The second playscene incorporates a text-entry game that mirrors the protagonist's tumultuous inner world.
        - Achievement System: A system tracking all the player's achievement throughout the gameplay
        - First Clear Bonus : Activate extra hint after going through the game for the first time
*/

'use strict';

let config =
{
    type    : Phaser.AUTO,
    width   : 800,
    height  : 600,
    scale: 
    {
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    physics: 
    {
        default: 'arcade',
        arcade: 
        {
            debug: false,
            gravity: 
            {
                x: 0,
                y: 0
            }
        }
    },
    scene   : [ Menu, Achievement, Credits, CutOne, CutTwo, CutThree, CutFour, CutFive, PlayOne, PlayTwo, PlayThree, Over ] 
}

let game = new Phaser.Game(config);

// def globals for positioning
let centerX         = game.config.width/2;
let centerY         = game.config.height/2;
let wdth            = game.config.width;
let hght            = game.config.height;
const textSpacer    = 64;
const paddingSize   = 100;


// def globals for functional var
let purchaseCmplt   = false;
let purchaseDate    = 1;
let saladCount      = 0;
let firstTimer      = 15000;

let typeTimeOut     = false;
let firstAnsFin     = false;
let secondAnsFin    = false;
let thirdAnsFin     = false;
let firstAns        = false;
let secondAns       = false;
let thirdAns        = false;

let findFirst       = false;
let findSecond      = false;
let findThird       = false;

let timerEnd        = false;

let GetAchvmtOne    = false;
let GetAchvmtTwo    = false;
let GetAchvmtThree  = false;
let GetAchvmtFour   = false;
let GetAchvmtFive   = false;

let FirstClear      = false;

// reserve keyboard variables
let keyW, keyA, keyS, keyD, keyY, keyU, keyI, keyO, keyP, keyF;

let cursors = null;