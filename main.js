/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Dark Labyrinth
@author: 
@tags: []
@addedOn: 2024-00-00
*/

// Game Bitmaps
const background = "t";
const wall = "w";
const player = "p";
const key = "y";
const lightPost = "q";
const lightLantern = "e";
const hangingLantern = "r";


// Main Menu Bitmaps
const arrow = "z";
const buttonW = "x";
const buttonA = "c";
const buttonS = "v";
const buttonD = "b";
const buttonI = "n";
const buttonK = "m";
const buttonJ = "j";
const buttonL = "k";
let buttonActive = "l";

let currentPointer; // Check pointer functions
let pingError;

let pointerChangeInterval;

// Resources
// Active Sprites
const buttonLGlyph = bitmap`
................
................
................
................
.....222222.....
....22000222....
....22022022.2..
....22000222.22.
....22022022.22.
....22022022.2..
....22022022....
.....222222.....
................
................
................
................`;

// Inactive Sprites
const buttonWInactiveGlyph = bitmap`
................
.......11.......
......1111......
................
.....111111.....
....11011111....
....11011111....
....11011111....
....11011111....
....11011111....
....11000011....
.....111111.....
................
................
................
................`;
const buttonAInactiveGlyph = bitmap`
................
................
................
................
.....111111.....
....11011111....
..1.11011111....
.11.11011111....
.11.11011111....
..1.11011111....
....11000011....
.....111111.....
................
................
................
................`;
const buttonSInactiveGlyph = bitmap`
................
................
................
................
.....111111.....
....11011111....
....11011111....
....11011111....
....11011111....
....11011111....
....11000011....
.....111111.....
................
......1111......
.......11.......
................`;
const buttonDInactiveGlyph = bitmap`
................
................
................
................
.....111111.....
....11011111....
....11011111.1..
....11011111.11.
....11011111.11.
....11011111.1..
....11000011....
.....111111.....
................
................
................
................`;
const buttonIInactiveGlyph = bitmap`
................
.......11.......
......1111......
................
.....111111.....
....11000111....
....11011011....
....11000111....
....11011011....
....11011011....
....11011011....
.....111111.....
................
................
................
................`;
const buttonJInactiveGlyph = bitmap`
................
................
................
................
.....111111.....
....11000111....
..1.11011011....
.11.11000111....
.11.11011011....
..1.11011011....
....11011011....
.....111111.....
................
................
................
................`;
const buttonKInactiveGlyph = bitmap`
................
................
................
................
.....111111.....
....11000111....
....11011011....
....11000111....
....11011011....
....11011011....
....11011011....
.....111111.....
................
......1111......
.......11.......
................`;
const buttonLInactiveGlyph = bitmap`
................
................
................
................
.....111111.....
....11000111....
....11011011.1..
....11000111.11.
....11011011.11.
....11011011.1..
....11011011....
.....111111.....
................
................
................
................`;

// Highlight Sprites
const buttonHighlightSprite = bitmap`
................
................
................
.....222222.....
....21111112....
...2111111112...
...2111111112...
...2111212112...
...2112121112...
...2111111112...
...2111111112...
....21111112....
.....222222.....
................
................
................`;
const arrowSprite = bitmap`
........22......
........222.....
........2222....
........22222...
.2222222222222..
.22222222222222.
.22222222222222.
.2222222222222..
........22222...
........2222....
........222.....
........22......
................
................
................
................`;

// Game Sprites
const backgroundSprite = bitmap`
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000
0000000000000000`;
const wallSprite = bitmap`
LLLLLLLLLLLLLLLL
11111L1111111L11
11111L1111111L11
11111L1111111L11
LLLLLLLLLLLLLLLL
1111L1111L1111L1
1111L1111L1111L1
1111L1111L1111L1
LLLLLLLLLLLLLLLL
111L111111L11111
111L111111L11111
111L111111L11111
LLLLLLLLLLLLLLLL
1111111L111111L1
1111111L111111L1
1111111L111111L1`;
const playerSprite = bitmap`
......1111......
.....100001.....
....10022001....
...1002222001...
...1022222201...
...1022222201...
...1022222201...
...1022222201...
...1022222201...
...1002222001...
....10022001....
.....100001.....
.....101101.....
....11011011....
...1000110001...
....111..111....`;
const playerWithKeySprite = bitmap`
......1111......
.....100001.....
....10022001....
...1002222001...
...1022222201...
...10222222016..
...1022222206.6.
...10222222016..
...102222220166.
...10022220016..
....10022001.66.
.....100001.....
.....101101.....
....11011011....
...1000110001...
....111..111....`;
const keySprite = bitmap`
................
................
................
................
.......6........
......666.......
.....66.66......
......666.......
.......6........
.......666......
.......6........
.......666......
................
................
................
................`;
const lightPostSprite = bitmap`
....L00LL00L....
....LL0LL0LL....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
.....L0LL0L.....
....LL0LL0LL....
....L00LL00L....`;
const lightLanternSprite = bitmap`
................
......1111......
.....1LLLL1.....
....1LLLLLL1....
...1LLLLLLLL1...
...2LLLLLLLL2...
...2L6LLLL6L2...
...2L6L66L6L2...
...2L6L66L6L2...
...2L6L66L6L2...
...2L6L66L6L2...
...2L6L66L6L2...
...2L6L66L6L2...
...2LLL66LLL2...
...100LLLL001...
....L000000L....`;
const hangingLanternSprite = bitmap`
................
................
................
......6666......
.....611116.....
....611LL116....
...611L11L116...
...61L1111L16...
...61L1111L16...
...611L11L116...
....611LL116....
.....611116.....
......6666......
................
................
................`;


// Sounds
const errorSFX = tune`
60: C4-60,
60: C4-60,
60,
60: C4-60,
60: C4-60,
1620`;

const menuSFX = tune`
500: C4^500 + E4^500,
15500`

// Texts
let currentLevelText;

let mainMenuTitle = `
  Dark
  
Labyrinth
`;

let mainMenuOptions = `
  Start Game
  ----------
  
  Guide
  -----
`;

let backButton = `
Back
----
`;

// Guide Texts
let menuGuide = `Press   

to activate`;

// Controls
let upLGuide = `Moves player 
upward`;
let leftLGuide = `Moves player to 
the left`;
let downLGuide = `Moves player 
downward`;
let rightLGuide = `Moves player to 
the right`;
let upRGuide = `Skips the level
in-game`;
let leftRGuide = `Returns to menu
(Level is saved)`;
let downRGuide = `Back button in
the menu`;
let rightRGuide = `Confirm menu
selection, grabs 
the key in-game`;

// Game Default States
let gameState = 0; // 0 for Main Menu; 1 for In-game
let menuMode = 1; // 1 for Main Menu; 2 for Guide
let pointerOption = 0;
let backButtonState = "2"; // 1 is Gray (unselected); 2 is White (selected)
let level = 1; // 0 for Guide; 1 for Main Menu
let lastLevel = 1; // Tracks level before mainMenu to allow accessing the main menu whilst in game
let currentLevelVal = lastLevel - 1; // Adjust last level to make sense for current level
let currentPlayer = playerSprite;
let allSprites; // Used to track blocks inside a level

const levels = [
  map`
....................
....................
....................
....................
....x..........n....
...c.b........j.k...
....v..........m....
....................
....................
....................
....................
....................
......k.............
....................
....................
....................`, // Guide
  map`
...wwwwwwwwwwwwww...
...w............w...
...w..........e.w...
...w..........q.w...
...w..........q.w...
...wwwwwwwwwwwwww...
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................`, // Main Menu
  map`
wwwwwwwwwwwwwwwwwwww
wp..........w......w
www.w.wwwww...wwww.w
w...w..w.w..w.w..www
w.wwwwww.w.ww.ww.w.w
w....w......w......w
wwwwww.wwwwwwwwwwwww
w....w........w...yw
w.w..w.wwwww..w..w.w
www.ww..w..w.ww.ww.w
w.......w.....w..w.w
w.wwwww.wwwwwwwwww.w
w....w..w..........w
w.ww.w.ww..r..www.ww
w.w..w........w....w
wwwwwwwwwwwwwwwwwwww`,
]

// Start the main menu
mainMenu();

// Controls
onInput("w", () => {
  if (gameState == 0) {
    pointerUp();
  } else if (gameState == 1) {
    getFirst(player).y--
  }
});

onInput("s", () => {
  if (gameState == 0) {
    pointerDown();
  } else if (gameState == 1) {
    getFirst(player).y++
  }
});

onInput("a", () => {
  if (gameState == 0) {
    pointerUp();
  } else if (gameState == 1) {
    getFirst(player).x--
  }
});

onInput("d", () => {
  if (gameState == 0) {
    pointerDown();
  } else if (gameState == 1) {
    getFirst(player).x++
  }
});

onInput("i", () => {
  if (gameState == 1) {
    // Insert Character Movement code here
    // add nextLevel()
  }
});

onInput("k", () => {
  if (gameState == 0) {
    pointerContinue("k");
    pointerBack();
  } else if (gameState == 1) {
    // Insert Character Movement code here
  }
});

onInput("j", () => {
  if (gameState == 1) {
    // Check if in-game and allow to open main menu
    mainMenu();
  }
});

onInput("l", () => {
  if (gameState == 0) {
    pointerContinue();
  } else if (gameState == 1) {
    grabKey();
  }
});

afterInput(() => {
  if (gameState == 1) {
    // Updates the visible and invisible blocks when moving
    displaySpritesInRange();
  }
});

// Menu Code (Derived from Up, Down, Top-down)
// Sets up the main menu
function mainMenu() {
  pointerX = 3;
  pointerY = 8;
  gameState = 0;
  menuMode = 1;
  pointerOption = 0;
  updateGameIntervals();

  // Check for current level
  if (level > 2) {
    // Check if current level is a in-game level
    lastLevel = level; // Remember last level before mainMenu (if Applicable)
  } else {
    lastLevel = 2;
  }
  currentLevelText = `Current level: ${currentLevelVal}`; // Grab level and add to text
  clearText();
  setSprites();
  level = 1;
  setMap(levels[level]);
  setBackground(background);
  pointerChange(); // Trigger pointer spawning in advance (Rather than wait for interval)

  addText(mainMenuTitle, {
    x: 5,
    y: 1,
    color: color`2`,
  });
  addText(mainMenuOptions, {
    x: 3,
    y: 7,
    color: color`2`,
  });
  addText(currentLevelText, {
    x: 2,
    y: 15,
    color: color`1`,
  });
}

// Sets up the guide
function guideScreen() {
  gameState = 0;
  menuMode = 2;
  updateGameIntervals();
  clearText();
  setSprites();
  level = 0;
  setMap(levels[level]);
  setBackground(background);
  addBack();
  addText(menuGuide, { x: 1, y: 12, color: color`1` });
}

function addBack() {
  clearText();
  addText(backButton, {
    x: 2,
    y: 0,
    color: backButtonState,
  });
}

// Handles pointer blinking and spawning
function pointerChange() {
  if (menuMode == 1) {
    // Point to selected
    if (currentPointer == arrow) {
      clearTile(pointerX, pointerY);
      addSprite(pointerX, pointerY, buttonL);
    } else {
      clearTile(pointerX, pointerY);
      addSprite(pointerX, pointerY, arrow);
    }
    currentPointer = getTile(pointerX, pointerY)[0].type;
  }
}

// Handles pointer selection in guide on-demand
function pointerUpdate() {
  if (pointerOption == 1) {
    if (getTile(6, 12) !== undefined) {
      clearTile(6, 12);
    }
    updateGlyph(buttonW);
  } else if (pointerOption == 2) {
    updateGlyph(buttonA);
  } else if (pointerOption == 3) {
    updateGlyph(buttonS);
  } else if (pointerOption == 4) {
    updateGlyph(buttonD);
  } else if (pointerOption == 5) {
    updateGlyph(buttonI);
  } else if (pointerOption == 6) {
    updateGlyph(buttonJ);
  } else if (pointerOption == 7) {
    updateGlyph(buttonK);
  } else if (pointerOption == 8) {
    updateGlyph(buttonL);
  } else {
    pointerOption = 0;
    updateGlyph();
  }
  // Change back button color
  if (pointerOption == 0) {
    backButtonState = color`2`;
    addBack();
  } else {
    backButtonState = color`1`;
    addBack();
  }
}

// Handles pointer movement (downwards)
function pointerDown() {
  if (menuMode == 1) {
    if (pointerOption == 0) {
      clearTile(pointerX, pointerY);
      pointerY += 3;
      pointerOption++;
      pointerChange();
      playTune(menuSFX);
    } else {
      pingError = true;
    }
  } else if (menuMode == 2) {
    if (pointerOption < 8) {
      pointerOption++;
      pointerUpdate();
      playTune(menuSFX);
    } else {
      pingError = true;
    }
  }
}

// Handles pointer movement (upwards)
function pointerUp() {
  if (menuMode == 1) {
    if (pointerOption == 1) {
      clearTile(pointerX, pointerY);
      pointerY -= 3;
      pointerOption--;
      pointerChange();
      playTune(menuSFX);
    } else {
      pingError = true;
    }
  } else if (menuMode == 2) {
    if (pointerOption > 0) {
      pointerOption--;
      pointerUpdate();
      playTune(menuSFX);
    } else {
      pingError = true;
    }
  }
}

// Allows pointer to jump back to the first option
function pointerBack() {
  if (menuMode == 1) {
    if (pointerOption == 1) {
      clearTile(pointerX, pointerY);
      pointerY -= 3;
      pointerOption = 0;
      pointerChange();
    } else {
      pingError = true;
    }
  } else if (menuMode == 2) {
    if (pointerOption > 0) {
      pointerOption = 0;
      pointerUpdate();
    }
  }
}

// Handles pointer selection and runs/displays them accordingly
function pointerContinue(triggered) {
  if (menuMode == 1) {
    // Main Menu
    if (triggered == "k") {
      // Check if triggered by back button
      if (pointerOption == 0) {
        pingError = true;
      }
    } else if (pointerOption == 0) {
      // Start the Game
      initializeGame();
    } else if (pointerOption == 1) {
      // Go to Guide
      pointerOption = 0; // Return to first option
      guideScreen();
    }
  } else if (menuMode == 2) {
    // Guide
    if (triggered == "k") {
      // Check if triggered by back button
      if (pointerOption == 0) {
        mainMenu();
      }
    } else if (pointerOption == 0) {
      pointerOption = 0; // Return to first option
      mainMenu();
    } else if (pointerOption > 0) {
      guideText();
    }
  }
}

// Update current selected item Sprite to highlight in the guid
function updateGlyph(activeOption) {
  if (pointerOption == 0) {
    buttonActive = "g"; // Reset buttonActive and activeOption when switching from buttons to back
  } else if (pointerOption > 0 && pointerOption < 9) {
    buttonActive = activeOption;
  }
  setSprites();
}

function guideText() {
  if (pointerOption == 1) {
    addBack(); // Clears text and rewrites the back button
    addText(upLGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 2) {
    addBack();
    addText(leftLGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 3) {
    addBack();
    addText(downLGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 4) {
    addBack();
    addText(rightLGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 5) {
    addBack();
    addText(upRGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 6) {
    addBack();
    addText(leftRGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 7) {
    addBack();
    addText(downRGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 8) {
    addBack();
    addText(rightRGuide, { x: 1, y: 12, color: color`2` });
  }
}

// Setup the game
function initializeGame() {
  characterInit();
  setSolids([player, wall]);
  setBackground(background);
  level = lastLevel; // Restore lastLevel if applicable
  spawn(); // Start Game
}

// Spawn Code
function spawn() {
  clearText(); // Cleans stuff before it
  gameState = 1;
  characterInit();
  updateGameIntervals();
  setMap(levels[level]);
  allSprites = getAll(); // Grabs all sprites in the map and saves them.
  displaySpritesInRange(); // Make sure the player is in the map when this is runned
}

function grabKey() {
  let playerSprite = getFirst(player);
  let keySprite = getFirst(key);

  if (playerSprite && keySprite && playerSprite.x == keySprite.x && playerSprite.y == keySprite.y) {
    // Player and key are on the same tile
    // Proceed with the logic
    characterInit(true);
  }
}

function displaySpritesInRange() {
  // Filter out the player sprite and wallLantern from allSprites
  const otherSprites = allSprites.filter(sprite => sprite.type !== player && sprite.type !== hangingLantern);

  if (getFirst(player)) {
    // Get the player's coordinates
    let playerCoord = getFirst(player);
    let playerX = playerCoord.x;
    let playerY = playerCoord.y;

    let lanternCoord = getFirst(hangingLantern);
    let lanternX = lanternCoord.x;
    let lanternY = lanternCoord.y;

    // Define the range around the player
    const range = 3;

    for (let allSprite of otherSprites) {
      let spriteX = allSprite.x;
      let spriteY = allSprite.y;

      // Calculate the distance between the block and the player
      const distancePlayer = Math.abs(spriteX - playerX) + Math.abs(spriteY - playerY);
      const distanceLantern = Math.abs(spriteX - lanternX) + Math.abs(spriteY - lanternY);

      // Check if the block is within the specified range around the player or wallLantern
      if (distancePlayer <= range || distanceLantern <= range) {
        if (!getTile(spriteX, spriteY)) {
          // If block is within range, add it to the game
          addSprite(spriteX, spriteY, allSprite.type);
        }
      } else {
        if (getTile(spriteX, spriteY)) {
          // If block exceeds the range, remove it from the game
          clearTile(spriteX, spriteY);
        }
      }
    }
  }
}

function characterInit(holdsKey) {
  if (holdsKey) {
    currentPlayer = playerWithKeySprite;
  } else {
    currentPlayer = playerSprite;
  }
  setSprites();
}

function setSprites() {
  // This function loads the required Sprites for each gameState and menuMode
  if (gameState == 0) {
    // Main Menu or Guide check
    if (menuMode == 1) {
      setLegend(
        [background, backgroundSprite],
        [wall, wallSprite],
        [lightPost, lightPostSprite],
        [lightLantern, lightLanternSprite],
        [arrow, arrowSprite],
        [buttonL, buttonLGlyph],
        // Game Sprites
        [wall, wallSprite],
        [player, currentPlayer],
        [hangingLantern, hangingLanternSprite],
        [key, keySprite],
      );
    } else if (menuMode == 2) {
      setLegend(
        [background, backgroundSprite],
        [wall, wallSprite],
        [buttonW, buttonWInactiveGlyph],
        [buttonA, buttonAInactiveGlyph],
        [buttonS, buttonSInactiveGlyph],
        [buttonD, buttonDInactiveGlyph],
        [buttonI, buttonIInactiveGlyph],
        [buttonJ, buttonJInactiveGlyph],
        [buttonK, buttonKInactiveGlyph],
        [buttonL, buttonLInactiveGlyph],
        [buttonActive, buttonHighlightSprite],
      );
    }
  } else if (gameState == 1) {
    setLegend(
      [background, backgroundSprite],
      [wall, wallSprite],
      [player, currentPlayer],
      [hangingLantern, hangingLanternSprite],
      [key, keySprite],
    );
  }
}

// Error Player Code
function errorPing() {
  if (pingError == true) {
    playTune(errorSFX);
    pingError = false;
  }
}

function updateGameIntervals() {
  errorPingInterval = setInterval(errorPing, 1000); // Set interval for error sound being played
  if (gameState == 1) {
    // Clear any existing intervals
    clearInterval(pointerChangeInterval);
    /// clearInterval(yourInterval);

    // Add your intervals here
  } else if (gameState == 0) {
    // Clear any existing intervals
    clearInterval(pointerChangeInterval);
    /// clearInterval(yourInterval);

    pointerChangeInterval = setInterval(pointerChange, 1000); // Set interval for pointer Sprite swap
  } else {
    // Clear intervals if game is not active
    clearInterval(pointerChangeInterval);
    /// clearInterval(yourInterval);
  }
}
