class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload()
    {
        // load assets
        this.load.path = "./assets/";

        // load images
        // this.load.image('', 'img/.png');

        // load font
        this.load.bitmapFont('Piacevoli', 'font/Piacevoli_Font.png', 'font/Piacevoli_Font.xml');

        // load spritesheet for vfx
        this.load.spritesheet('neon', 'vfx/neon.png', {
            frameWidth: 16,
            frameHeight: 16
        })

        //load background music
        // this.load.audio('', 'audio/.mp3');

    }

    create() 
    {
        // // menu art
        // const menuConfig = 
        // {
        //     key: 'menuArt',
        //     x: game.config.width/2,
        //     y: game.config.height/2
        // };

        // // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/sprites/create%20from%20config.js
        // this.make.sprite(menuConfig);

        // adapted from Phaser 3 example: https://labs.phaser.io/view.html?src=src/game%20objects/particle%20emitter/add%20emit%20zone.js
        // shape for "CHUNG"
        const shape1 = new Phaser.Geom.Line(-280, -150, -210, -150);
        const shape2 = new Phaser.Geom.Line(-300, -120, -180, -120);
        const shape3 = new Phaser.Geom.Line(-245, -150, -245, 30);
        const shape4 = new Phaser.Geom.Rectangle(-280, -90, 70, 60);
        const shape5 = new Phaser.Geom.Line(-280, -60, -210, -60);
        const shape6 = new Phaser.Geom.Line(-280, 0, -210, 0);
        const shape7 = new Phaser.Geom.Line(-300, 30, -180, 30);

        // shape for "KING"
        const shape8 = new Phaser.Geom.Line(-90, -150, -90, -135);
        const shape9 = new Phaser.Geom.Line(-150, -135, -30, -135);
        const shape10 = new Phaser.Geom.Line(-150, -135, -150, 30);
        const shape11 = new Phaser.Geom.Rectangle(-150, -115, 120, 30);
        const shape12 = new Phaser.Geom.Line(-110, -135, -110, -85);
        const shape13 = new Phaser.Geom.Line(-70, -135, -70, -85);
        const shape14 = new Phaser.Geom.Line(-150, -65, -30, -65);
        const shape15 = new Phaser.Geom.Line(-30, -65, -30, -45);
        const shape16 = new Phaser.Geom.Line(-130, -45, -130, -35);
        const shape17 = new Phaser.Geom.Line(-90, -50, -90, -40);
        const shape18 = new Phaser.Geom.Line(-45, -45, -45, -35);
        const shape19 = new Phaser.Geom.Line(-110, -40, -110, -25);
        const shape20 = new Phaser.Geom.Line(-110, -25, -65, -25);
        const shape21 = new Phaser.Geom.Line(-65, -25, -65, -35);
        const shape22 = new Phaser.Geom.Line(-120, -15, -120, 0);
        const shape23 = new Phaser.Geom.Line(-120, -8, -55, -8);
        const shape24 = new Phaser.Geom.Line(-55, -8, -120, 30);
        const shape25 = new Phaser.Geom.Line(-120, -8, -45, 30);

        // shape for Forest
        const shape26 = new Phaser.Geom.Line(60, -150, 60, -60);
        const shape27 = new Phaser.Geom.Line(30, -120, 90, -120);
        const shape28 = new Phaser.Geom.Line(60, -120, 20, -70);
        const shape29 = new Phaser.Geom.Line(60, -120, 100, -70);

        const shape30 = new Phaser.Geom.Line(30, -60, 30, 30);
        const shape31 = new Phaser.Geom.Line(0, -30, 60, -30);
        const shape32 = new Phaser.Geom.Line(30, -30, -10, 20);
        const shape33 = new Phaser.Geom.Line(30, -30, 70, 20);

        const shape34 = new Phaser.Geom.Line(90, -60, 90, 30);
        const shape35 = new Phaser.Geom.Line(60, -30, 120, -30);
        const shape36 = new Phaser.Geom.Line(90, -30, 50, 20);
        const shape37 = new Phaser.Geom.Line(90, -30, 130, 20);

        const shape38 = new Phaser.Geom.Line(150, -80, 210, -80);
        const shape39 = new Phaser.Geom.Line(180, -130, 180, 30);
        const shape40 = new Phaser.Geom.Line(180, -80, 140, 10);
        const shape41 = new Phaser.Geom.Line(180, -80, 220, 10);

        const shape42 = new Phaser.Geom.Line(210, -80, 270, -80);
        const shape43 = new Phaser.Geom.Line(240, -130, 240, 30);
        const shape44 = new Phaser.Geom.Line(240, -80, 200, 10);
        const shape45 = new Phaser.Geom.Line(240, -80, 280, 10);


        const emitter = this.add.particles(400, 250, 'neon', {
            frame: {
                frames: [1, 2, 3]
            },
            lifespan: { min: 10, max: 50000, steps: 250 },
            yoyo: true,
            quantity: 1,
            scale: { start: 1, end: 0.5 }
        });

        emitter.addEmitZone({ type: 'edge', source: shape1, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape2, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape3, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape4, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape5, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape6, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape7, quantity: 64, total: 64 });


        emitter.addEmitZone({ type: 'edge', source: shape8, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape9, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape10, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape11, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape12, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape13, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape14, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape15, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape16, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape17, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape18, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape19, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape20, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape21, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape22, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape23, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape24, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape25, quantity: 64, total: 64 });


        emitter.addEmitZone({ type: 'edge', source: shape26, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape27, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape28, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape29, quantity: 64, total: 64 });

        emitter.addEmitZone({ type: 'edge', source: shape30, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape31, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape32, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape33, quantity: 64, total: 64 });

        emitter.addEmitZone({ type: 'edge', source: shape34, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape35, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape36, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape37, quantity: 64, total: 64 });
        

        emitter.addEmitZone({ type: 'edge', source: shape38, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape39, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape40, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape41, quantity: 64, total: 64 });

        emitter.addEmitZone({ type: 'edge', source: shape42, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape43, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape44, quantity: 64, total: 64 });
        emitter.addEmitZone({ type: 'edge', source: shape45, quantity: 64, total: 64 });

        this.clock = this.time.delayedCall(1000, () => 
        {
            // add title screen text
            let title01 = this.add.bitmapText(centerX, centerY + paddingSize, 'Piacevoli', 'CHUNGKING EXPRESS', 64).setOrigin(0.5).setTint(0xffffff);
            let title02 = this.add.bitmapText(centerX, centerY + paddingSize, 'Piacevoli', 'CHUNGKING EXPRESS', 64).setOrigin(0.5).setTint(0xff0000).setBlendMode('SCREEN');

            // title text tweens https://github.com/nathanaltice/Paddle-Parkour-P360
            let yoyoTweenA = this.tweens.add
            ({
                targets: title01,
                duration: 2500,
                angle: { from: -1, to: 1 },
                yoyo: true,
                repeat: -1
            });

            yoyoTweenA.on('yoyo', () => { this.cameras.main.shake(100, 0.0025); });
            let yoyoTweenB = this.tweens.add
            ({
                targets: title02,
                duration: 2500,
                angle: { from: 1, to: -1 },
                yoyo: true,
                repeat: -1
            });
            yoyoTweenB.on('yoyo', () => { this.cameras.main.shake(100, 0.0025); });

            // glowing bitmap https://github.com/photonstorm/phaser3-examples/blob/master/public/src/fx/glow/glow%20bitmaptext.js
            const fx1 = title01.postFX.addGlow(0xff0000, 0, 0, false, 0.1, 10);

            this.tweens.add
            ({
                targets: fx1,
                outerStrength: 4,
                yoyo: true,
                loop: -1,
                ease: 'sine.inout'
            });

            this.add.bitmapText(centerX, hght - textSpacer*2, 'Piacevoli', 'LIYU SUN', 32).setOrigin(0.5);

            let startButton = this.add.bitmapText(centerX - textSpacer*3, hght - textSpacer, 'Piacevoli', 'START', 40).setOrigin(0.5).setTint(0x81007f);
            let achievementButton = this.add.bitmapText(centerX, hght - textSpacer, 'Piacevoli', 'ACHIEVEMENT', 40).setOrigin(0.5).setTint(0x81007f);
            let creditsButton = this.add.bitmapText(centerX + textSpacer*3, hght - textSpacer, 'Piacevoli', 'CREDITS', 40).setOrigin(0.5).setTint(0x81007f);

            startButton.setInteractive
            ({
                useHandCursor: true,
            });

            startButton.on('pointermove', () => 
            {
                startButton.setTint(0xffffff);

                this.clock = this.time.delayedCall(500, () => 
                {
                    startButton.setTint(0x81007f);
                }, null, this);
            }, this);

            startButton.once('pointerdown', () => 
            {
                
            });

            achievementButton.setInteractive
            ({
                useHandCursor: true,
            });

            achievementButton.on('pointermove', () => 
            {
                achievementButton.setTint(0xffffff);

                this.clock = this.time.delayedCall(500, () => 
                {
                    achievementButton.setTint(0x81007f);
                }, null, this);
            }, this);

            achievementButton.once('pointerdown', () => 
            {
                
            });

            creditsButton.setInteractive
            ({
                useHandCursor: true,
            });

            creditsButton.on('pointermove', () => 
            {
                creditsButton.setTint(0xffffff);

                this.clock = this.time.delayedCall(500, () => 
                {
                    creditsButton.setTint(0x81007f);
                }, null, this);
            }, this);

            creditsButton.once('pointerdown', () => 
            {
                
            });

        }, null, this);

        // define keys
        // keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        // keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        // keyF = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        // keyU = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);

    }

    update()
    {



    }
}