class Pizza extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, moveSpeed, texture, frame) 
    {
        super(scene, x, y, texture, frame);
        scene.physics.add.existing(this);
        scene.add.existing(this);
        this.speed = moveSpeed
    }

    update() 
    {
    
    }
    
    reset() 
    {
        this.x = Math.random() * wdth;
        this.y = Math.random() * hght;
    }
}