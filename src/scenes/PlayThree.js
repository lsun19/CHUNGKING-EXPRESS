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

        this.load.atlas('faye_atlas', 'atlas/FayeSprite.png', 'atlas/FayeSprite.json')

        this.load.image('bear1', 'img/bear1.png')
        this.load.image('bear2', 'img/bear2.png')
        this.load.image('rack1', 'img/clothRack1.png')
        this.load.image('rack2', 'img/clothRack2.png')

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

        this.anims.create
        ({
            key: 'fish',
            frameRate: 8,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('fishTank', 
            {
                start: 0,
                end: 5
            })
        })

        if(findFirst)
        {
            this.fishTank.play('fish');
        }


        this.bear = this.physics.add.sprite(248, 77, 'bear1', 0)

        if(findSecond)
        {
            this.newBear = this.physics.add.sprite(248, 77, 'bear2', 0)
        }

        this.rack = this.physics.add.sprite(328, 116, 'rack1', 0)

        if(findThird)
        {
            this.newBear = this.physics.add.sprite(328, 116, 'rack2', 0)
        }

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
            if (purchaseDate>6)
            {
                if(findFirst && findSecond && findThird)
                {
                    let achvmtThree = this.add.bitmapText(189, 272, 'Piacevoli', 'ACHIEVEMENT UNLOCKED: Sleepwalking', 16).setOrigin(0.5).setTint(0x81007f);
                    GetAchvmtFour = true;
                    this.tweens.add
                    ({
                        targets: achvmtThree,
                        alphaTopLeft: { value: 1, duration: 4000, ease: 'Power1' },
                        alphaBottomRight: { value: 1, duration: 4000, ease: 'Power1' },
                        alphaBottomLeft: { value: 1, duration: 4000, ease: 'Power1'},
                        yoyo: false,
                        loop: 0
                    });
                }

                this.clock = this.time.delayedCall(5000, () => 
                {
                    this.scene.start('cutScene4');
                    
                }, null, this);
            }
            else
            {

                this.clock = this.time.delayedCall(2000, () => 
                {
                    this.scene.restart();
                    timerEnd  = false;
                }, null, this);
            }
        }
        else
        {
            if (Math.abs(this.faye.x - this.fishTank.x) < 70 
            &&  Math.abs(this.faye.y - this.fishTank.y) < 70 
            && Phaser.Input.Keyboard.JustDown(this.cursors.space)
            && !findFirst)
            {
                this.fishTank.play('fish');
                findFirst = true;

                this.clock = this.time.delayedCall(1000, () => 
                {
                    purchaseDate++;
                    this.scene.restart();
                    timerEnd  = false;
                }, null, this);
            }
    
            if (Math.abs(this.faye.x - this.bear.x) < 20 
            &&  Math.abs(this.faye.y - this.bear.y) < 20 
            && Phaser.Input.Keyboard.JustDown(this.cursors.space)
            && !findSecond)
            {
                this.bear.destroy();
                findSecond = true;

                this.clock = this.time.delayedCall(1000, () => 
                {
                    purchaseDate++;
                    this.scene.restart();
                    timerEnd  = false;
                }, null, this);
            }
    
            if (Math.abs(this.faye.x - this.rack.x) < 20 
            &&  Math.abs(this.faye.y - this.rack.y) < 20 
            && Phaser.Input.Keyboard.JustDown(this.cursors.space)
            && !findThird)
            {
                this.rack.destroy();
                findThird = true;

                this.clock = this.time.delayedCall(1000, () => 
                {
                    purchaseDate++;
                    this.scene.restart();
                    timerEnd  = false;
                }, null, this);
            }

        }

    }
    
}