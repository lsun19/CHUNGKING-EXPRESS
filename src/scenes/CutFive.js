class CutFive extends Phaser.Scene 
{
    constructor() 
    {
        super("cutScene5");
        
    }

    preload() 
    {
        // load assets
        this.load.path = "./assets/";

    }
    
    create() 
    {
        // add title screen text
        let title01 = this.add.bitmapText(centerX, centerY, 'Piacevoli', 'Thank you for playing!', 64).setOrigin(0.5).setTint(0xffffff);
        let title02 = this.add.bitmapText(centerX, centerY, 'Piacevoli', 'Thank you for playing!', 64).setOrigin(0.5).setTint(0xff0000).setBlendMode('SCREEN');

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

        this.tweens.add
        ({
            targets: title01,
            alphaTopLeft: { value: 1, duration: 7000, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 7000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 7000, ease: 'Power1'},
            yoyo: false,
            loop: -1
        });

        this.tweens.add
        ({
            targets: title02,
            alphaTopLeft: { value: 1, duration: 7000, ease: 'Power1' },
            alphaBottomRight: { value: 1, duration: 7000, ease: 'Power1' },
            alphaBottomLeft: { value: 1, duration: 7000, ease: 'Power1'},
            yoyo: false,
            loop: -1
        });

        let nextButton = this.add.bitmapText(centerX, hght - textSpacer*2, 'Piacevoli', 'RETURN', 40).setOrigin(0.5).setTint(0x81007f);

        nextButton.setInteractive
        ({
            useHandCursor: true,
        });

        nextButton.on('pointermove', () => 
        {
            nextButton.setTint(0xffffff);

            this.clock = this.time.delayedCall(500, () => 
            {
                nextButton.setTint(0x81007f);
            }, null, this);
        }, this);

        nextButton.once('pointerdown', () => 
        {
            FirstClear  = true;
            this.scene.start('menuScene');
        });
 

        if(GetAchvmtOne && GetAchvmtTwo && GetAchvmtThree && GetAchvmtFour)
        {
            let achvmtFive = this.add.bitmapText(centerX, hght - textSpacer, 'Piacevoli', 'ACHIEVEMENT UNLOCKED: CHUNGKING EXPRESS', 40).setOrigin(0.5).setTint(0x81007f);
            GetAchvmtFive = true;
            this.tweens.add
            ({
                targets: achvmtFive,
                alphaTopLeft: { value: 1, duration: 4000, ease: 'Power1' },
                alphaBottomRight: { value: 1, duration: 4000, ease: 'Power1' },
                alphaBottomLeft: { value: 1, duration: 4000, ease: 'Power1'},
                yoyo: false,
                loop: 0
            });
        }
    }

    update() 
    {
        // this.countdown.setText(`Time Left: ${parseFloat(gameTimer/1000 - ((this.timedEvent.getProgress())*(gameTimer/1000))).toFixed(2)}`);


    }
    
}