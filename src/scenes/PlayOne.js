class PlayOne extends Phaser.Scene 
{
    constructor() 
    {
        super("playScene1");
        
    }

    preload() 
    {
        // load assets
        this.load.path = "./assets/";

        // load images
        this.load.image('salad', 'img/salad.png');
        this.load.image('chips', 'img/chips.png');
        
        // load audio
        this.load.audio('cashier', 'audio/cash.mp3');

    }
    
    create() 
    {
        /************************************************************  set up timer ************************************************************/
        this.countdown = this.add.text(20, 32);

        this.dayCount  = this.add.text(wdth - 60, 32);
        this.dayCount.setText('Day ' +  purchaseDate);

        this.timedEvent = this.time.delayedCall(firstTimer, this.onEvent, [], this);
        /************************************************************  set up timer ************************************************************/

        /************************************************************  set up salad sprite ************************************************************/
        this.chefSalad = new Salad(this, Phaser.Math.Between(paddingSize, wdth - paddingSize), Phaser.Math.Between(paddingSize, hght - paddingSize), 0, 'salad').setOrigin(0.5);

        this.chefSalad.setInteractive
        ({
            useHandCursor: true,
        });

        this.chefSalad.once('pointerdown', () => 
        {
            this.chefSalad.destroy();
            purchaseCmplt = true;
            purchaseDate++;
            saladCount++;
        });
        /************************************************************  set up salad sprite ************************************************************/

        /************************************************************  set up chips group ************************************************************/
        this.chipsGroup = this.physics.add.group();
        for (var i = 0; i < purchaseDate*3; i++) 
        {
            let someChips = new Chips(this, Phaser.Math.Between(paddingSize, wdth - paddingSize), Phaser.Math.Between(paddingSize, hght - paddingSize), 0, 'chips').setOrigin(0.5);
            someChips.setInteractive
            ({
                useHandCursor: true,
            });
    
            someChips.once('pointerdown', () => 
            {
                someChips.destroy();
                purchaseCmplt = true;
                purchaseDate++;
            });
            this.chipsGroup.add(someChips, false);
        }
        /************************************************************  set up chips group ************************************************************/

        /************************************************************  set up timed event ************************************************************/
        this.clock = this.time.delayedCall(firstTimer, () => 
        {
            this.chefSalad.destroy();
            purchaseCmplt = true;
            purchaseDate++;
            saladCount++;
        }, null, this);
        /************************************************************  set up timed event ************************************************************/

 
    }

    update() 
    {
        this.countdown.setText(`Time Left: ${parseFloat(firstTimer/1000 - ((this.timedEvent.getProgress())*(firstTimer/1000))).toFixed(2)}`);

        if(purchaseCmplt == true)
        {
            this.sound.play('cashier', 
            { 
                mute: false,
                volume: 0.5,
                rate: 1,
                loop: false 
            });

            purchaseCmplt = false;

            this.clock = this.time.delayedCall(1000, () => 
            {
                this.scene.restart();
            }, null, this);
        }

        if(purchaseDate > 5)
        {
            this.chefSalad.destroy();
            this.chipsGroup.setVisible(false);

            if(saladCount == (purchaseDate - 1))
            {
                this.add.bitmapText(centerX, hght - textSpacer, 'Piacevoli', 'ACHIEVEMENT UNLOCKED: Loyalty', 40).setOrigin(0.5).setTint(0x81007f);
            }
            if(saladCount == 0)
            {
                this.add.bitmapText(centerX, hght - textSpacer, 'Piacevoli', 'ACHIEVEMENT UNLOCKED: Playboy', 40).setOrigin(0.5).setTint(0x81007f);
            }
            this.clock = this.time.delayedCall(3000, () => 
            {
                this.scene.start('cutScene2');
            }, null, this);
        }

    }
    
}