class PlayTwo extends Phaser.Scene 
{
    constructor() 
    {
        super("playScene2");
    }

    preload() 
    {
        // load assets
        this.load.path = "./assets/";

    }
    
    create() 
    {
        this.sceneOver = false;

        // define keys
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);   


        // this.countdown = this.add.text(320, 32);

        // this.timedEvent = this.time.delayedCall(gameTimer, this.onEvent, [], this);



        // this.clock = this.time.delayedCall(gameTimer, () => 
        // {
        //     this.sound.stopAll();

        //     passLevel1 = true;

        //     levelText = 'Level 1';

        //     this.sceneOver = true;

        //     this.scene.start('upgradesScene');

        // }, null, this);
 
    }

    update() 
    {
        // this.countdown.setText(`Time Left: ${parseFloat(gameTimer/1000 - ((this.timedEvent.getProgress())*(gameTimer/1000))).toFixed(2)}`);


    }
    
}