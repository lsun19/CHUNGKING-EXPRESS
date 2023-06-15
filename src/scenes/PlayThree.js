class PlayThree extends Phaser.Scene 
{
    constructor() 
    {
        super("playScene3");

        this.VEL = 300;
    }

    preload() 
    {
        // load assets
        this.load.path = "./assets/";

        this.load.image('tilesetImage', 'tile/tileset.png')
        this.load.tilemapTiledJSON('tilemapJSON', 'tile/area01.json')

        this.load.atlas('faye_atlas', 'atlas/FayeSprite.png', 'atlas/FayeSprite.json');

        this.load.spritesheet('fishTank', 'img/fishTank.png', 
        {
            frameWidth: 48, frameHeight: 48
        })
    }
    
    create() 
    {
        const map = this.add.tilemap('tilemapJSON')
        const tileset = map.addTilesetImage('tileset', 'tilesetImage')
        
        // add layers
        const backgroundLayer   = map.createLayer('Background', tileset, 32, 32);
        const interiorLayer     = map.createLayer('Interior', tileset, 32, 32);
        const furnitureLayer    = map.createLayer('Furniture', tileset, 32, 32);

        // this.countdown = this.add.text(320, 32);

        // this.timedEvent = this.time.delayedCall(gameTimer, this.onEvent, [], this);

        this.cam1 = this.cameras.main.setViewport(5, 5, 390, 290);
        this.cam2 = this.cameras.add(405, 5, 390, 290);
        this.cam3 = this.cameras.add(5, 305, 390, 290);
        this.cam4 = this.cameras.add(405, 305, 390, 290);

        // add player
        this.faye = this.physics.add.sprite(189, 252, 'faye_atlas', 0);

        this.anims.create
        ({ 
            key: 'idling', 
            frames: this.anims.generateFrameNames('faye_atlas', 
            {      
                prefix: 'sprite',
                start: 23,
                end: 28,
                suffix: '',
                zeroPad: 0
            }), 
            frameRate: 3,
            repeat: -1 
        });
        this.faye.play('idling');

        this.faye.body.setCollideWorldBounds(true);

        // enable collisions
        backgroundLayer.setCollisionByProperty({collides:true})
        this.physics.add.collider(this.faye, backgroundLayer)

        interiorLayer.setCollisionByProperty({collides:true})
        this.physics.add.collider(this.faye, interiorLayer)

        furnitureLayer.setCollisionByProperty({collides:true})
        this.physics.add.collider(this.faye, furnitureLayer)

        // cameras
        this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels)

        // expand the physics world bound
        this.physics.world.bounds.setTo(32, 32, map.widthInPixels, map.heightInPixels);

        // input
        this.cursors = this.input.keyboard.createCursorKeys();


        this.fishTank = this.physics.add.sprite(216, 175, 'fishTank', 0)

        /************************************************************  set up timer ************************************************************/
        this.countdown = this.add.text(20, 12);

        this.dayCount  = this.add.text(320, 12);
        this.dayCount.setText('Day ' +  purchaseDate);

        this.timedEvent = this.time.delayedCall(firstTimer, this.onEvent, [], this);
        /************************************************************  set up timer ************************************************************/

        /************************************************************  set up timed event ************************************************************/
        this.clock = this.time.delayedCall(firstTimer, () => 
        {
            timerEnd = true;
            purchaseDate++;
        }, null, this);
        /************************************************************  set up timed event ************************************************************/
    }

    update() 
    {
        this.countdown.setText(`Time Left: ${parseFloat(firstTimer/1000 - ((this.timedEvent.getProgress())*(firstTimer/1000))).toFixed(2)}`);

        this.direction = new Phaser.Math.Vector2(0);
        if(this.cursors.left.isDown)
        {
            this.direction.x = -1;
            console.log('x: ' + this.faye.x + ', y: ' + this.faye.y);
        }
        else if(this.cursors.right.isDown)
        {
            this.direction.x = 1;
            console.log('x: ' + this.faye.x + ', y: ' + this.faye.y);
        }

        if(this.cursors.up.isDown)
        {
            this.direction.y = -1;
            console.log('x: ' + this.faye.x + ', y: ' + this.faye.y);
        }
        else if(this.cursors.down.isDown)
        {
            this.direction.y = 1;
            console.log('x: ' + this.faye.x + ', y: ' + this.faye.y);
        }

        this.direction.normalize();
        this.faye.setVelocity(this.VEL * this.direction.x, this.VEL * this.direction.y);

        if(timerEnd)
        {
            this.scene.restart();
            timerEnd = false;
        }


    }
    
}