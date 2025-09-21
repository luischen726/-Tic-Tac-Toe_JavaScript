import {
  Application,
  Assets,
  Sprite,
  Container,
  Text,
  TextStyle,
} from "pixi.js";

(async () => {
  // Create a new application
  const app = new Application();

  // Initialize the application
  await app.init({ background: "#1099bb", resizeTo: window });

  // Append the application canvas to the document body
  document.getElementById("pixi-container")!.appendChild(app.canvas);

  // Load the bunny texture
  const texture = await Assets.load("/assets/bunny.png");
  const backgroundTexture = await Assets.load("/assets/background.jpg");
  const boardTexture = await Assets.load("/assets/board.png");
  const logoTexture = await Assets.load("/assets/logo.png");

  // Create a bunny Sprite
  const bunny = new Sprite(texture);
  const background = new Sprite(backgroundTexture);
  const board = new Sprite(boardTexture);
  const logo = new Sprite(logoTexture);

  const instructionText = new Text({
    text: "Click to start",
    style: new TextStyle({
      fontFamily: ["Helvetica", "Arial", "sans-serif"],
      fontSize: 36,
      fill: 0x000,
      align: "center",
    }),
  });
  instructionText.pivot.x = instructionText.width / 2;
  instructionText.pivot.y = instructionText.height / 2;

  // Center the sprite's anchor point

  bunny.anchor.set(0.5);
  background.anchor.set(0.5);
  board.anchor.set(0.5);

  // Move the sprite to the center of the screen
  bunny.position.set(app.screen.width / 2, app.screen.height / 2);
  // background.position.set(app.screen.width / 2, app.screen.height / 2);
  // board.position.set(app.screen.width / 2, app.screen.height / 2);
  const titleScreen = new Container();
  logo.pivot.x = logo.width / 2;
  titleScreen.addChild(logo);
  titleScreen.addChild(instructionText);

  titleScreen.position.set(app.screen.width / 2, app.screen.height / 2);

  const gameScene = new Container();
  // add element into screen
  gameScene.addChild(background);
  gameScene.addChild(board);

  gameScene.position.set(app.screen.width / 2, app.screen.height / 2);
  // Add the bunny to the stage
  app.stage.addChild(titleScreen, bunny);
  // app.stage.addChild(gameScene);

  // // Listen for animate update
  // app.ticker.add((time) => {
  //   // Just for fun, let's rotate mr rabbit a little.
  //   // * Delta is 1 if running at 100% performance *
  //   // * Creates frame-independent transformation *
  //   bunny.rotation += 0.1 * time.deltaTime;
  // });
})();
