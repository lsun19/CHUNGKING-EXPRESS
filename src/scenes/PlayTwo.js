class PlayTwo extends Phaser.Scene 
{
    constructor() 
    {
        super("playScene2");


    }
    
    create() 
    {
        // update instruction text
        document.getElementById('text').innerHTML = 'Type your answer and press space to continue';

        cursors = this.input.keyboard.createCursorKeys();

        // menu art
        const backgroundConfig = 
        {
            key: 'menuArt',
            x: game.config.width/2,
            y: game.config.height/2
        };

        // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/sprites/create%20from%20config.js
        this.make.sprite(backgroundConfig);

        if(!firstAnsFin)
        {
            if(FirstClear)
            {
                const soapConfig = 
                {
                    key: 'soap',
                    x: game.config.width/2,
                    y: game.config.height/2
                };

                // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/sprites/create%20from%20config.js
                this.soap = this.make.sprite(soapConfig).setAlpha(0.05);
            }

            /****************************** text wipe fx for text to simulate protagonist's inner conversation ******************************/
            // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/fx/wipe/reveal%20text.js
            let line = 0;

            const message = [
                'Ever since she left, ',
                'everything around me is sad.',
                'I have to comfort them all.',
                'You\'ve lost a lot of weight, you know.',
                'You were so chubby before.',
                'Now look at yourself.',
                'You\'re so skinny.',
                'Have more confidence in yourself, Mrs.S___'
            ];

            const textOne = this.add.text(400, 300, message[line], { fontFamily: 'Bradley Hand ITC', fontSize: 40 });

            const gradient = textOne.context.createLinearGradient(0, 0, 0, textOne.height);

            gradient.addColorStop(0, '#cfcfcf');
            gradient.addColorStop(0.5, '#dcdcdc');
            gradient.addColorStop(0.5, '#e9e9e9');
            gradient.addColorStop(1, '#f5f5f5');

            textOne.setFill(gradient);
            textOne.setOrigin(0.5, 0.5);

            const fx = textOne.preFX.addReveal();

            this.tweens.add
            ({
                targets: fx,
                progress: 1,
                hold: 500,
                duration: 3000,
                repeat: 7,
                onRepeat: () => {

                    line++;

                    if (line === message.length)
                    {
                        line = 0;
                    }

                    textOne.setText(message[line]);

                    fx.progress = 0;

                }
            });
            /****************************** text wipe fx for text to simulate protagonist's inner conversation ******************************/

            const textEntry = this.add.text(10, hght - 60, '', { fontFamily: 'Bradley Hand ITC', fontSize: 40, fill: '#ffffff' });

            this.input.keyboard.on('keydown', event =>
            {

                if (event.keyCode === 8 && textEntry.text.length > 0)
                {
                    textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
                }
                else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
                {
                    textEntry.text += event.key;
                }

            });

            // you can type this one as slow as you want
            let firstCombo = this.input.keyboard.createCombo('soap', {
                resetOnWrongKey: true,  // if they press the wrong key is the combo reset?
                maxKeyDelay: 0,         // max delay (ms) between each key press (0 = disabled)
                resetOnMatch: true,     // if matched before, does pressing first key of combo reset?
                deleteOnMatch: false    // if combo matches, will it delete itself?
            });

            // watch for keycombomatches
            this.input.keyboard.on('keycombomatch', (combo, event) => 
            {
                if (combo === firstCombo) 
                { 
                    firstAns = true;
                    console.log('firstAns is' + firstAns);
                }
            });


            this.clock = this.time.delayedCall(15000, () => 
            {
                typeTimeOut = true;
                console.log('time out is' + typeTimeOut);
            }, null, this);
        }
 

        if(firstAnsFin && !secondAnsFin)
        {
            if(FirstClear)
            {
                const towelConfig = 
                {
                    key: 'towel',
                    x: game.config.width/2,
                    y: game.config.height/2
                };

                // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/sprites/create%20from%20config.js
                this.towel = this.make.sprite(towelConfig).setAlpha(0.05);
            }

            /****************************** text wipe fx for text to simulate protagonist's inner conversation ******************************/
            // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/fx/wipe/reveal%20text.js
            let line = 0;

            const message = [
                'I told you to stop crying.',
                'How long are you going to cry?',
                'You have to be strong.',
                'You\'re so limp and shapeless.',
                'Look at you.',
                'I\'ll help you.',
                'There. Isn\'t that more comfy, Miss.T____?',
            ];

            const textOne = this.add.text(400, 300, message[line], { fontFamily: 'Bradley Hand ITC', fontSize: 40 });

            const gradient = textOne.context.createLinearGradient(0, 0, 0, textOne.height);

            gradient.addColorStop(0, '#cfcfcf');
            gradient.addColorStop(0.5, '#dcdcdc');
            gradient.addColorStop(0.5, '#e9e9e9');
            gradient.addColorStop(1, '#f5f5f5');

            textOne.setFill(gradient);
            textOne.setOrigin(0.5, 0.5);

            const fx = textOne.preFX.addReveal();

            this.tweens.add
            ({
                targets: fx,
                progress: 1,
                hold: 500,
                duration: 3000,
                repeat: 6,
                onRepeat: () => {

                    line++;

                    if (line === message.length)
                    {
                        line = 0;
                    }

                    textOne.setText(message[line]);

                    fx.progress = 0;

                }
            });
            /****************************** text wipe fx for text to simulate protagonist's inner conversation ******************************/

            const textEntry = this.add.text(10, hght - 60, '', { fontFamily: 'Bradley Hand ITC', fontSize: 40, fill: '#ffffff' });

            this.input.keyboard.on('keydown', event =>
            {

                if (event.keyCode === 8 && textEntry.text.length > 0)
                {
                    textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
                }
                else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
                {
                    textEntry.text += event.key;
                }

            });

            // you can type this one as slow as you want
            let secondCombo = this.input.keyboard.createCombo('towel', 
            {
                resetOnWrongKey: true,  // if they press the wrong key is the combo reset?
                maxKeyDelay: 0,         // max delay (ms) between each key press (0 = disabled)
                resetOnMatch: true,     // if matched before, does pressing first key of combo reset?
                deleteOnMatch: false    // if combo matches, will it delete itself?
            });

            // watch for keycombomatches
            this.input.keyboard.on('keycombomatch', (combo, event) => {
                if (combo === secondCombo) 
                { 
                    secondAns = true;
                    console.log('secondAns is' + secondAns);
                }
            });

            this.clock = this.time.delayedCall(15000, () => 
            {
                typeTimeOut = true;
                console.log('time out is' + typeTimeOut);
            }, null, this);
        }

        if(firstAnsFin && secondAnsFin && !thirdAnsFin)
        {
            if(FirstClear)
            {
                const blouseConfig = 
                {
                    key: 'blouse',
                    x: game.config.width/2,
                    y: game.config.height/2
                };

                // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/game%20objects/sprites/create%20from%20config.js
                this.blouse = this.make.sprite(blouseConfig).setAlpha(0.05);
            }

            /****************************** text wipe fx for text to simulate protagonist's inner conversation ******************************/
            // see: https://github.com/photonstorm/phaser3-examples/blob/master/public/src/fx/wipe/reveal%20text.js
            let line = 0;

            const message = [
                'Don\'t be mad at her.',
                'We all have moments of doubt.',
                'Give her a chance. Okay?',
                'Feeling lonely?',
                'You\'re a real mess.',
                'Feelin cold?',
                'I\'ll warm you up., Miss.B____',
            ];

            const textOne = this.add.text(400, 300, message[line], { fontFamily: 'Bradley Hand ITC', fontSize: 40 });

            const gradient = textOne.context.createLinearGradient(0, 0, 0, textOne.height);

            gradient.addColorStop(0, '#cfcfcf');
            gradient.addColorStop(0.5, '#dcdcdc');
            gradient.addColorStop(0.5, '#e9e9e9');
            gradient.addColorStop(1, '#f5f5f5');

            textOne.setFill(gradient);
            textOne.setOrigin(0.5, 0.5);

            const fx = textOne.preFX.addReveal();

            this.tweens.add
            ({
                targets: fx,
                progress: 1,
                hold: 500,
                duration: 3000,
                repeat: 6,
                onRepeat: () => {

                    line++;

                    if (line === message.length)
                    {
                        line = 0;
                    }

                    textOne.setText(message[line]);

                    fx.progress = 0;

                }
            });
            /****************************** text wipe fx for text to simulate protagonist's inner conversation ******************************/

            const textEntry = this.add.text(10, hght - 60, '', { fontFamily: 'Bradley Hand ITC', fontSize: 40, fill: '#ffffff' });

            this.input.keyboard.on('keydown', event =>
            {

                if (event.keyCode === 8 && textEntry.text.length > 0)
                {
                    textEntry.text = textEntry.text.substr(0, textEntry.text.length - 1);
                }
                else if (event.keyCode === 32 || (event.keyCode >= 48 && event.keyCode < 90))
                {
                    textEntry.text += event.key;
                }

            });

            // you can type this one as slow as you want
            let thirdCombo = this.input.keyboard.createCombo('blouse', 
            {
                resetOnWrongKey: true,  // if they press the wrong key is the combo reset?
                maxKeyDelay: 0,         // max delay (ms) between each key press (0 = disabled)
                resetOnMatch: true,     // if matched before, does pressing first key of combo reset?
                deleteOnMatch: false    // if combo matches, will it delete itself?
            });

            // watch for keycombomatches
            this.input.keyboard.on('keycombomatch', (combo, event) => {
                if (combo === thirdCombo) 
                { 
                    thirdAns = true;
                    console.log('thirdAns is' + thirdAns);
                }
            });

            this.clock = this.time.delayedCall(15000, () => 
            {
                typeTimeOut = true;
                console.log('time out is' + typeTimeOut);
            }, null, this);
        }
    }

    update() 
    {
        if (typeTimeOut && cursors.space.isDown) 
        {
            if(!firstAnsFin)
            {
                firstAnsFin = true;
            }
            else if(firstAnsFin && !secondAnsFin)
            {
                secondAnsFin = true;
            }
            else if(firstAnsFin && secondAnsFin && !thirdAnsFin)
            {
                thirdAnsFin = true;
            }

            if(firstAnsFin && secondAnsFin && thirdAnsFin)
            {
                if(firstAns && secondAns && thirdAns)
                {
                    let achvmtThree = this.add.bitmapText(centerX, hght - textSpacer, 'Piacevoli', 'ACHIEVEMENT UNLOCKED: sad boi', 40).setOrigin(0.5).setTint(0x81007f);
                    GetAchvmtThree = true;
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

                this.clock = this.time.delayedCall(3000, () => 
                {
                    this.scene.start('cutScene3');
                }, null, this);
            }
            else
            {
                typeTimeOut = false;
                this.scene.restart();
            }

        }

    }
    
    
}