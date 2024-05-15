class Example extends Phaser.Scene {
    constructor() {
      super();
    }
  
    preload() {
      this.load.image('sky', 'https://play.rosebud.ai/assets/Beirut Market.png?3Woa');
      this.load.image('logo', 'https://play.rosebud.ai/assets/Mika-Logo.crop.jpeg?ONaJ');
      this.load.image('red', 'https://play.rosebud.ai/assets/red.png?JJBo');
    }
  
    create() {
      document.title = "Mikas Adventures"; // Changes the title of the webpage
  
      this.add.image(400, 300, 'sky');
  
      const particles = this.add.particles('red');
      const emitter = particles.createEmitter({
        speed: 100,
        scale: { start: 1, end: 0 },
        blendMode: 'ADD',
      });
  
      const logo = this.physics.add.image(400, 100, 'logo');
  
      logo.setVelocity(100, 200);
      logo.setBounce(0.8, 0.8);
      logo.setCollideWorldBounds(true);
  
      emitter.startFollow(logo);
      this.add.text(20, 20, 'Mikas Adventures', { font: 'bold 65px Veranda', fill: '#fdfcfc' });
      this.add.text(20, 100, 'Mika: The Hopelessly Optimistic Hero', { font: 'bold 42px Veranda', fill: '#fdfcfc' });
      this.add.text(20, 200, 'Beirut 1983', { font: 'bold 50px Courier New', fill: '#000000' });
  
      // Create a clickable button or text for scene transition
      const startButton = this.add.text(400, 500, 'Start Game', { font: 'bold 40px Arial', fill: '#000501' });
      startButton.setInteractive();  // Make the text interactive
  
      // Handle click event to switch scenes
      startButton.on('pointerdown', () => {
        this.scene.start('NewScene'); // Replace 'NewScene' with your actual scene key
      });
    }
  }
  
  class NewScene extends Phaser.Scene {
    constructor() {
      super('NewScene');
    }
  
    preload() {
      // Load your new background image here
      this.load.image('newSceneBackground', 'https://play.rosebud.ai/assets/Generate a background image of a Beirut food stall.png?ImMj'); // Replace with your image path
    }
  
    create() {
      // ... other scene elements (if any)
  
      // Add the background image here
      const background = this.add.image(400, 300, 'newSceneBackground');
  
      // Adjust position and scaling as needed
      background.setScale(2); // Example: Scale the image by 2x
  
      // Add "Return to start" button
      const returnButton = this.add.text(400, 500, 'Return to Start', { font: 'bold 40px Arial', fill: '#000501' });
      returnButton.setInteractive();
  
      // Handle click event to switch back to start scene
      returnButton.on('pointerdown', () => {
        this.scene.start('Example');
      });
  
      // Add some text to the NewScene so you can see something
      this.add.text(20, 50, 'New Scene', { font: 'bold 42px Veranda', fill: '#fdfcfc' });
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
        gravity: { y: 200 },
      },
    },
    scene: [Example, NewScene], // Updated this line
  };
  
  window.phaserGame = new Phaser.Game(config);