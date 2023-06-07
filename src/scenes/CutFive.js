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