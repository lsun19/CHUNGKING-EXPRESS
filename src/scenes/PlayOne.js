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
        this.load.image('pizza', 'img/pizza.png')
        
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

        /************************************************************  set up pizza group ************************************************************/
        this.pizzaGroup = this.physics.add.group();
        for (var i = 0; i < purchaseDate*3; i++) 
        {
            let somepizza = new Pizza(this, Phaser.Math.Between(paddingSize, wdth - paddingSize), Phaser.Math.Between(paddingSize, hght - paddingSize), 0, 'pizza').setOrigin(0.5);
            somepizza.setInteractive
            ({
                useHandCursor: true,
            });
    
            somepizza.once('pointerdown', () => 
            {
                somepizza.destroy();
                purchaseCmplt = true;
                purchaseDate++;
            });
            this.pizzaGroup.add(somepizza, false);
        }
        /************************************************************  set up pizza group ************************************************************/

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

            this.clock = this.time.delayedCall(500, () => 
            {
                this.scene.restart();
            }, null, this);
        }

        if(purchaseDate > 29)
        {
            this.chefSalad.destroy();
            this.chipsGroup.setVisible(false);
            this.pizzaGroup.setVisible(false);

            if(saladCount == (purchaseDate - 1))
            {
                let achvmtOne = this.add.bitmapText(centerX, hght - textSpacer, 'Piacevoli', 'ACHIEVEMENT UNLOCKED: Loyalty', 40).setOrigin(0.5).setTint(0x81007f).setAlpha(0);
                GetAchvmtOne = true;
                this.tweens.add
                ({
                    targets: achvmtOne,
                    alphaTopLeft: { value: 1, duration: 4000, ease: 'Power1' },
                    alphaBottomRight: { value: 1, duration: 4000, ease: 'Power1' },
                    alphaBottomLeft: { value: 1, duration: 4000, ease: 'Power1'},
                    yoyo: false,
                    loop: 0
                });
            }
            if(saladCount == 0)
            {
                let achvmtTwo = this.add.bitmapText(centerX, hght - textSpacer, 'Piacevoli', 'ACHIEVEMENT UNLOCKED: Playboy', 40).setOrigin(0.5).setTint(0x81007f).setAlpha(0);
                GetAchvmtTwo = true;
                this.tweens.add
                ({
                    targets: achvmtTwo,
                    alphaTopLeft: { value: 1, duration: 4000, ease: 'Power1' },
                    alphaBottomRight: { value: 1, duration: 4000, ease: 'Power1' },
                    alphaBottomLeft: { value: 1, duration: 4000, ease: 'Power1'},
                    yoyo: false,
                    loop: 0
                });
            }
            this.clock = this.time.delayedCall(3000, () => 
            {
                this.scene.start('cutScene2');
            }, null, this);
        }

    }
    
}