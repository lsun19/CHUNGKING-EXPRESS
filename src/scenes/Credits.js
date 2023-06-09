class Credits extends Phaser.Scene 
{
    constructor() 
    {
        super("creditScene");
    }

    preload() 
    {
        // load assets
        this.load.path = "./assets/";

    }
    
    create() 
    {
        // create rectangles
        this.rect01 = this.add.rectangle(centerX, centerY, 400, 400, 0x000000, 0.85).setStrokeStyle(5, 0x81007f, 1)

        this.add.bitmapText(centerX, centerY, 'Piacevoli', 'Font: fontenddev.com/fonts/piacevoli/\nSFX: https://freesfx.co.uk/sfx\nTileSet: limezu.itch.io/moderninteriors\nMusicRemix: LIYU SUN\nArt&UI: LIYU SUN\nProgramming: LIYU SUN\nDesign: LIYU SUN\nWriting: LIYU SUN\nAdapted From : Wong Kar-Wai\'s CHUNGKING EXPRESS (1994)', 28).setOrigin(0.5);

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
    }

    update() 
    {

    }
    
}