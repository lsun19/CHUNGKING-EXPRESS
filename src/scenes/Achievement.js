class Achievement extends Phaser.Scene 
{
    constructor() 
    {
        super("achievementScene");
    }

    preload() 
    {
        // load assets
        this.load.path = "./assets/";

    }
    
    create() 
    {
        // create rectangles
        this.rect01 = this.add.rectangle(centerX, centerY, 750, 400, 0x000000, 0.85).setStrokeStyle(5, 0x81007f, 1)

        this.trophy1 = this.add.image(centerX - 2*paddingSize, centerY, 'trophy').setTint(0x81007f);
        this.trophy2 = this.add.image(centerX - paddingSize, centerY, 'trophy').setTint(0x81007f);
        this.trophy3 = this.add.image(centerX, centerY, 'trophy').setTint(0x81007f);
        this.trophy4 = this.add.image(centerX + paddingSize, centerY, 'trophy').setTint(0x81007f);
        this.trophy5 = this.add.image(centerX + 2*paddingSize, centerY, 'trophy').setTint(0x81007f);

        let exitButton = this.add.bitmapText(centerX, centerY + 180, 'Piacevoli', 'BACK', 40).setOrigin(0.5).setTint(0x81007f);

        exitButton.setInteractive
        ({
            useHandCursor: true,
        });

        exitButton.on('pointermove', () => 
        {
            exitButton.setTint(0xffffff);

            this.clock = this.time.delayedCall(500, () => 
            {
                exitButton.setTint(0x81007f);
            }, null, this);
        }, this);

        exitButton.once('pointerdown', () => 
        {
            this.scene.sendToBack().sleep()
            this.scene.start('menuScene');
        });

        if(GetAchvmtOne)
        {
            this.trophy1.setTint(0xffd700);
        }
        if(GetAchvmtTwo)
        {
            this.trophy2.setTint(0xffd700);
        }
        if(GetAchvmtThree)
        {
            this.trophy3.setTint(0xffd700);
        }
        if(GetAchvmtFour)
        {
            this.trophy4.setTint(0xffd700);
        }
        if(GetAchvmtFive)
        {
            this.trophy5.setTint(0xffd700);
        }
    }

    update() 
    {

    }
    
}