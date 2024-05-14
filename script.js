class Example extends Phaser.Scene
{
    constructor ()
    {
        super();
    }

    preload ()
    {
        this.load.image('sky', `https://play.rosebud.ai/assets/Beirut Market.png?3Woa`);
        this.load.image('logo', `https://play.rosebud.ai/assets/Mika-Logo.crop.jpeg?ONaJ`);
        this.load.image('red', `https://play.rosebud.ai/assets/red.png?JJBo`);
    }

    create ()
    {
        document.title = "Mika"; // Changes the title of the webpage

        this.add.image(400, 300, 'sky');

        const particles = this.add.particles('red');
        const emitter = particles.createEmitter({
            speed: 100,
            scale: { start: 1, end: 0 },
            blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 200);
        logo.setBounce(0.8, 0.8);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);

        

                this.add.text(20, 50, 'Mika: The Hopelessly Optimistic Hero', { font: 'bold 42px Arial', fill: '#ee930b' });
                this.add.text(20, 20, 'Beirut 1983', { font: 'bold 32px Arial', fill: '#8B0000' });
        this.time.addEvent({
            delay: 3000,
            loop: false,
            callback: () => {
                // this.scene.start('new-scene');
                // this.switchScene();
            },
        });
    }
}

const container = document.getElementById('renderDiv');
const config = {
    type: Phaser.AUTO,
    parent: 'renderDiv',
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 200 }
        }
    },
    scene: Example
};

window.phaserGame = new Phaser.Game(config);