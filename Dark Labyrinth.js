/*
First time? Check out the tutorial game:
https://sprig.hackclub.com/gallery/getting_started

@title: Dark Labyrinth
@author: 
@tags: []
@addedOn: 2024-00-00
*/

// Future Notes
// Add sounds for door unlock, key pickup, footsteps?, new level

// Game Bitmaps
const background = "t";
const wall = "w";
const player = "y";
const keyOne = "a";
const keyTwo = "s";
const keyThree = "d";
const doorOne = "u";
const doorTwo = "i";
const doorThree = "o";
const lightPost = "q";
const lightLantern = "e";
const hangingLantern = "r";
const box = "0";
const boxKeyOne = "2";
const boxKeyTwo = "3";
const boxKeyThree = "4";


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

// Resources
// Map
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
....................`, // Level 0 || Guide
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
....................`, // Level 1 || Main Menu
  map`
wwwwwwwwwwwwwwwwwwww
w...................
www.wwwwwwww..wwwwww
w.....w............w
w.....w.........r..w
w.....w..r.........w
wwwwwww............w
w.......wwwwwwwwwwww
w.......w..........w
w.......w.....w....w
w.......w.....w...2w
w.......w.....w....w
ww.wwwwwwwwiwwwwwwww
w...................
wwwwwwwwwwwwwwwwwwww`, // Level 2 || Map 1: Level 1
  map`
wwwwwwwwwwwwwwwwwwww
...................o
wwwwwwww....wwwwwwww
w...w..........w...w
ww.ww.r......r.w.www
w..............w...w
ww.ww...r..r...w.www
w...w..........w..dw
ww.ww...r..r...u...w
ws..w..........w...w
ww.ww.r......r.w.www
w...w..........w...w
wwwwwwww....wwwwwwww
...................w
wwwwwwwwwwwwwwwwwwww`, // Level 3 || Map 1: Level 2
  map`
wwwwwwwwwwwwwwwwwwww
w...r..........r....
wwww..wwwwwwwwwwwwww
w......w.....w.....w
w......w.....w.....w
w............w..d..w
w......w.....w.....w
w......wwwwwwwwwww.w
w.wwwwww........u..w
w......w........w.ww
w......w........w..w
w......w........w..w
wwww.wwwww.wwwwwwwww
w...r..........r....
wwwwwwwwwwwwwwwwwwww`, // Level 4 || Map 2: Level 1
  map`
wwwwwwwwwwwwwwwwwwww
....r..........r....
wwwww.wwwwwwwww.wwww
w.....w.....w......w
w.....w.....w......w
w.....w..a..w......w
w.....i.....w......w
w.....w.....w......w
www.wwwwwwwww.wwwwww
w..................w
w..................w
w..................w
wwwwwwwww.wwwwwwwwww
....r..........r....
wwwwwwwwwwwwwwwwwwww`, // Level 5 || Map 2: Level 2
  map`
wwwwwwwwwwwwwwwwwwww
....r............w.o
wwww.wwwwww.wwwwww.w
w..w.ww...w.w......w
w.ww.w.sw...w.wwwwww
w....w.wwwwww.ww...w
w.ww.www....w..w...w
w..w.....wwwww.www.w
ww.w.wwwww.........w
w..w.......wwwwwww.w
w.wwww.wwwww...w...w
w....w.....w.w....ww
wwww.wwwww.wwwwwwwww
....r..........r...w
wwwwwwwwwwwwwwwwwwww`, // Level 6 || Map 2: Level 3
]

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
const playerWithkeyOneCoord = bitmap`
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
const playerWithkeyTwoCoord = bitmap`
......1111......
.....100001.....
....10022001....
...1002222001...
...1022222201...
...10222222017..
...1022222207.7.
...10222222017..
...102222220177.
...10022220017..
....10022001.77.
.....100001.....
.....101101.....
....11011011....
...1000110001...
....111..111....`;
const playerWithkeyThreeCoord = bitmap`
......1111......
.....100001.....
....10022001....
...1002222001...
...1022222201...
...10222222019..
...1022222209.9.
...10222222019..
...102222220199.
...10022220019..
....10022001.99.
.....100001.....
.....101101.....
....11011011....
...1000110001...
....111..111....`;
const keyOneCoord = bitmap`
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
const keyTwoCoord = bitmap`
................
................
................
................
.......7........
......777.......
.....77.77......
......777.......
.......7........
.......777......
.......7........
.......777......
................
................
................
................`;
const keyThreeCoord = bitmap`
................
................
................
................
.......9........
......999.......
.....99.99......
......999.......
.......9........
.......999......
.......9........
.......999......
................
................
................
................`;
const doorOneSprite = bitmap`
....1CCCCCC1....
..CC1CCCCCC1CC..
..CC1CCCCCC1CC..
.1CC1CCCCCC1CC1.
.1CC1CCCCCC1CC1.
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1666C
C1CC1CCCCCC16L6C
C1CC1CCCCCC16L6C
C1CC1CCCCCC1666C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C`;
const doorTwoSprite = bitmap`
....1CCCCCC1....
..CC1CCCCCC1CC..
..CC1CCCCCC1CC..
.1CC1CCCCCC1CC1.
.1CC1CCCCCC1CC1.
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1777C
C1CC1CCCCCC17L7C
C1CC1CCCCCC17L7C
C1CC1CCCCCC1777C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C`;
const doorThreeSprite = bitmap`
....1CCCCCC1....
..CC1CCCCCC1CC..
..CC1CCCCCC1CC..
.1CC1CCCCCC1CC1.
.1CC1CCCCCC1CC1.
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1999C
C1CC1CCCCCC19L9C
C1CC1CCCCCC19L9C
C1CC1CCCCCC1999C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C
C1CC1CCCCCC1CC1C`;
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
const boxSprite = bitmap`
................
.11111111111111.
.1CCCCCCCCCCCC1.
.1LLLLLLLLLLLL1.
.1CCCCCCCCCCCC1.
.1CCCCCCCCCCCC1.
.1LLLLLLLLLLLL1.
.1CCCCCCCCCCCC1.
.1CCCCCCCCCCCC1.
.1LLLLLLLLLLLL1.
.1CCCCCCCCCCCC1.
.1CCCCCCCCCCCC1.
.1LLLLLLLLLLLL1.
.1CCCCCCCCCCCC1.
.11111111111111.
................`;
const conceptBoxSprite = bitmap`
................
.11111111111111.
.1CCCCCCCCCCCC1.
.1LLLL222LLLLL1.
.1CCC22222CCCC1.
.1CCC22C22CCCC1.
.1LLLLLL22LLLL1.
.1CCCCC222CCCC1.
.1CCCCC22CCCCC1.
.1LLLLLLLLLLLL1.
.1CCCCC22CCCCC1.
.1CCCCC22CCCCC1.
.1LLLLLLLLLLLL1.
.1CCCCCCCCCCCC1.
.11111111111111.
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
(Level and key
is saved)`;
let downRGuide = `Back button in
the menu`;
let rightRGuide = `Confirm menu
selection, grabs 
the key in-game`;

// Background Game States
let widthX; // Used (during spawn) to get actual map width
let gameState = 0; // 0 for Main Menu; 1 for In-game
let menuMode = 1; // 1 for Main Menu; 2 for Guide
let pointerOption = 0;
let currentPointer; // Check pointer functions
let backButtonState = "2"; // 1 is Gray (unselected); 2 is White (selected)
let pingError; // Used to ping error soundl (reduce error spam)
let allSprites; // Used to track blocks inside a level
let solidSprites; //  Used to track which blocks are solid

// Configurables
let lightRange = 3; // Used to set the distance the light can reach for displaySpritesInRange()
let playerRange = 3; // Used to set the distance the player can see for displaySpritesInRange()

// In-Game States
let spawnX = 1; // Default X value used to spawn player on start, used to tell where player to spawn in checkBorder()
let spawnY = 1; // Default Y value used to spawn player on start, used to tell where player to spawn in checkBorder()
let level = 1; // 0 for Guide; 1 for Main Menu
let lastLevel = 1; // Tracks level before mainMenu to allow accessing the main menu whilst in game
let currentLevelVal = 1; // Adjust last level to make sense for current level
let currentKey = 3; // Used to track which key the player is holding
let currentPlayer = playerSprite; // Used to track which player sprite to show (based on key)

// Loops
let pointerChangeInterval;
let checkBorderInterval;
let flickerLightsInterval;

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
    if (getFirst(player).x == 0) {
      // Check if at border and move to lasd map
      checkBorder("left")
    }
    getFirst(player).x--
  }
});

onInput("d", () => {
  if (gameState == 0) {
    pointerDown();
  } else if (gameState == 1) {
    if (getFirst(player).x == widthX) {
      // Check if at border and move to next map
      checkBorder("right")
    }
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
    // Check if in-game, then save level and allow to open main menu
    currentLevelVal = level - 1
    lastLevel = level; // Remember last level before mainMenu (if Applicable)
    mainMenu();
  }
});

onInput("l", () => {
  if (gameState == 0) {
    pointerContinue();
  } else if (gameState == 1) {
    itemInteract()
  }
});

afterInput(() => {
  if (gameState == 1) {
    // Updates the visible and invisible blocks when moving
    displaySpritesInRange();
    spawnX = getFirst(player).x
    spawnY = getFirst(player).y
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
  if (level != 0 && level < 2) {
    // Check if game hasn't started yet and is not from the guide then set default level
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
  solidSprites = [player, wall, doorOne, doorTwo, doorThree, box, boxKeyOne, boxKeyTwo, boxKeyThree];
  setSolids(solidSprites);
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
  levelCheck()
  widthX = width() - 1 // Check map actual width
  addSprite(spawnX, spawnY, player)
  allSprites = getAll(); // Grabs all sprites in the map and saves them.
  displaySpritesInRange(); // Make sure the player is in the map when this is runned
}

function checkBorder(direction) {
  let playerY = getFirst(player).y;
  if (direction == "right") {
    spawnX = 0
    spawnY = playerY
    level++
    spawn()
  } else if (direction == "left") {
    spawnX = widthX
    spawnY = playerY
    lastLevel = level
    level--
    spawn()
  }
}

function itemInteract() {
  grabKey();
  grabBox();
  unlockDoor();
}

function grabKey() {
  let playerCoord = getFirst(player);
  let keyOneCoord = getFirst(keyOne);
  let keyTwoCoord = getFirst(keyTwo);
  let keyThreeCoord = getFirst(keyThree);

  if (keyOneCoord && playerCoord.x == keyOneCoord.x && playerCoord.y == keyOneCoord.y) {
    // Player and key are on the same tile
    currentKey = 1
    characterInit();
  } else if (keyTwoCoord && playerCoord.x == keyTwoCoord.x && playerCoord.y == keyTwoCoord.y) {
    // Player and key are on the same tile
    currentKey = 2
    characterInit();
  } else if (keyThreeCoord && playerCoord.x == keyThreeCoord.x && playerCoord.y == keyThreeCoord.y) {
    // Player and key are on the same tile
    currentKey = 3
    characterInit();
  }
}

function grabBox() {
  console.log("Grabbing Box")
  let playerCoord = getFirst(player);
  let surroundingTiles = [
    getTile(playerCoord.x, playerCoord.y + 1)[0], // Tile below player
    getTile(playerCoord.x, playerCoord.y - 1)[0], // Tile above player
    getTile(playerCoord.x + 1, playerCoord.y)[0], // Tile to the right of player
    getTile(playerCoord.x - 1, playerCoord.y)[0], // Tile to the left of playerd
  ];
  let boxOneFound = surroundingTiles.some((tile) => tile && (tile.type == boxKeyOne))
  let boxTwoFound = surroundingTiles.some((tile) => tile && (tile.type == boxKeyTwo))
  let boxThreeFound = surroundingTiles.some((tile) => tile && (tile.type == boxKeyThree))
  console.log(boxOneFound)
  console.log(boxTwoFound)
  console.log(boxThreeFound)

  if (boxOneFound) {
    currentKey = 1
  } else if (boxTwoFound) {
    currentKey = 2
  } else if (boxThreeFound) {
    currentKey = 3
  }
}

function unlockDoor() {
  let playerCoord = getFirst(player);
  let surroundingTiles = [
    getTile(playerCoord.x, playerCoord.y + 1)[0], // Tile below player
    getTile(playerCoord.x, playerCoord.y - 1)[0], // Tile above player
    getTile(playerCoord.x + 1, playerCoord.y)[0], // Tile to the right of player
    getTile(playerCoord.x - 1, playerCoord.y)[0], // Tile to the left of playerd
  ];
  let doorOneFound = surroundingTiles.some((tile) => tile && (tile.type == doorOne))
  let doorTwoFound = surroundingTiles.some((tile) => tile && (tile.type == doorTwo))
  let doorThreeFound = surroundingTiles.some((tile) => tile && (tile.type == doorThree))

  if (doorOneFound && currentKey == 1) {
    solidSprites = solidSprites.filter(item => item != doorOne);
    currentKey = 0
    setSolids(solidSprites);
    characterInit()
  } else if (doorTwoFound && currentKey == 2) {
    solidSprites = solidSprites.filter(item => item != doorTwo);
    currentKey = 0
    setSolids(solidSprites);
    characterInit()
  } else if (doorThreeFound && currentKey == 3) {
    solidSprites = solidSprites.filter(item => item != doorThree);
    currentKey = 0
    setSolids(solidSprites);
    characterInit()
  }
}

function levelCheck() {
  let leftWall = getTile(0, 1)[0]
  console.log(leftWall)
  if (leftWall && lastLevel < level) {
    console.log("Exists")
    if (leftWall.type == wall) {
      console.log("Locked")
      solidSprites = [player, wall, doorOne, doorTwo, doorThree, box, boxKeyOne, boxKeyTwo, boxKeyThree];;
      setSolids(solidSprites);
    }
  }
}

function displaySpritesInRange() {
  console.log(getAll(hangingLantern).length)
  // Filter out the player sprite and wallLantern from allSprites
  const otherSprites = allSprites.filter(sprite => sprite.type != player && sprite.type != hangingLantern);

  // Get the player's coordinates
  let playerCoord = getFirst(player);
  let playerX = playerCoord.x;
  let playerY = playerCoord.y;

  // Return all blocks to level
  for (let allSprite of otherSprites) {
    let spriteX = allSprite.x;
    let spriteY = allSprite.y;
    addSprite(spriteX, spriteY, allSprite.type);
  }

  // Define the range around the player
  let i = 0

  // Fix hanging lantern amount counter (stuck at 1)

  for (let allSprite of otherSprites) {
    let spriteX = allSprite.x;
    let spriteY = allSprite.y;

    // Calculate the distance between the block and the player
    const distancePlayer = Math.abs(spriteX - playerX) + Math.abs(spriteY - playerY);

    // Check if the block is within the specified range around the player or wallLantern
    if (distancePlayer <= playerRange) {
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
    if (getFirst(hangingLantern)) {
      let lanternAmount = getAll(hangingLantern).length
      for (i = 0; i < lanternAmount; i++) {
        let lanternCoord = getAll(hangingLantern)[i];
        let lanternX = lanternCoord.x;
        let lanternY = lanternCoord.y;

        // Calculate the distance between the block and the lantern
        let spriteX = allSprite.x;
        let spriteY = allSprite.y;
        const distanceLantern = Math.abs(spriteX - lanternX) + Math.abs(spriteY - lanternY);

        // Check if the block is within the specified range around the player or wallLantern
        if (distanceLantern <= lightRange) {
          // If block is within range, add it to the game
          addSprite(spriteX, spriteY, allSprite.type);
        }
      }
    }
  }
}

function flickerLights() {
  let randomness = Math.random()
  if (randomness < 0.2) {
    lightRange = 2
  } else if (randomness > 0.8) {
    lightRange = 4
  } else {
    lightRange = 3
  }
  displaySpritesInRange();
}

function characterInit() {
  if (currentKey == 1) {
    currentPlayer = playerWithkeyOneCoord;
  } else if (currentKey == 2) {
    currentPlayer = playerWithkeyTwoCoord;
  } else if (currentKey == 3) {
    currentPlayer = playerWithkeyThreeCoord;
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
        // Game Sprites (Just to make map making easier)
        [hangingLantern, hangingLanternSprite],
        [player, currentPlayer],
        [keyOne, keyOneCoord],
        [keyTwo, keyTwoCoord],
        [keyThree, keyThreeCoord],
        [doorOne, doorOneSprite],
        [doorTwo, doorTwoSprite],
        [doorThree, doorThreeSprite],
        [box, boxSprite],
        [boxKeyOne, boxSprite],
        [boxKeyTwo, boxSprite],
        [boxKeyThree, boxSprite],
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
      [hangingLantern, hangingLanternSprite],
      [player, currentPlayer],
      [keyOne, keyOneCoord],
      [keyTwo, keyTwoCoord],
      [keyThree, keyThreeCoord],
      [doorOne, doorOneSprite],
      [doorTwo, doorTwoSprite],
      [doorThree, doorThreeSprite],
      [box, boxSprite],
      [boxKeyOne, boxSprite],
      [boxKeyTwo, boxSprite],
      [boxKeyThree, boxSprite],
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
    clearInterval(flickerLightsInterval);

    flickerLightsInterval = setInterval(flickerLights, 1000) // Set interval for light flickering
  } else if (gameState == 0) {
    // Clear any existing intervals
    clearInterval(pointerChangeInterval);
    clearInterval(flickerLightsInterval);

    pointerChangeInterval = setInterval(pointerChange, 1000); // Set interval for pointer sprite swap
  } else {
    // Clear intervals during unset state
    clearInterval(pointerChangeInterval);
    clearInterval(flickerLightsInterval);
  }
}
