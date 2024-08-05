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
const fenceWall = "p";
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
const boxKeyOne = "1";
const boxKeyTwo = "2";
const boxKeyThree = "3";



// Main Menu Bitmaps
const arrow = "z";
const buttonW = "x";
const buttonA = "c";
const buttonS = "v";
const buttonD = "b";
const buttonI = "n";
const buttonK = "m";
const buttonJ = "h";
const buttonL = "j";
let buttonActive = "k";
const tipBoxOne = "9";
const tipBoxTwo = "8";
const tipBoxThree = "7";
const tipBoxFour = "6";
const tipBoxFive = "5";
let tipBoxActive = "l"

// Resources
// Map
const levels = [
  map`
....................
....................
....................
....................
....x..........n....
...c.b........h.j...
....v..........m....
....................
....................
..9..08..7y..6a..5..
....................
....................
......j.............
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
w.....w..r......r..w
w.....w............w
w.....w..r......r..w
wwwwwww............w
w.......wwwwwwwwwwww
w.......w..........w
w.......w.....w...0w
w.......w.....w0..1w
w.......w.....w00..w
ww.wwwwwwwwiwwwwwwww
w...................
wwwwwwwwwwwwwwwwwwww`, // Level 2 || Map 1: Level 1
  map`
wwwwwwwwwwwwwwwwwwww
...................o
wwwwwwww....wwwwwwww
w...w..........w...w
ww.ww..........w.www
w...w.r......r.w...w
w..............w.www
ww.ww...r..r...w..dw
w...w..........w.www
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
w.w..w...w.w.w.w.w.w
w....w.w...w.w...w.w
wwww.wwwww.wwwwwwwww
....r..........r...w
wwwwwwwwwwwwwwwwwwww`, // Level 6 || Map 2: Level 3
  map`
wwwwwwwwwwwwwwwwwwww
w...r..........r....
wwwwww.wwwwww.wwwwww
w.0w............w0.w
w..u...r....r......w
w3.w............w.0w
wwwwwwwww..wwwwwwwww
w..............r....
w...r...............
wwww.wwwwwwwwww.wwww
w......w0000w....00w
w0.....r....r.....0w
w00....w....w......w
www.wwwwwwwwwwww.www
w...r..........r....
wwwwwwwwwwwwwwwwwwww`, // Level 7 || Map 3: Level 1
  map`
wwwwwwwwwwwwwwwwwwww
....r..........r...o
wwwwwwwww..wwwwwwwww
w.w0..0w....w0000w0w
w.r....r....r....r.w
w2w.0..w....w....w0w
wwwwwwwww..wwwwwwwww
...............r...w
....r..............w
wwwwwwwww..wwwwwwwww
w.......w..w00...0aw
w.r...r....i.0.0.0.w
w.......w..w...0...w
wwwwwwwww..wwwwwwwww
....r..........r...w
wwwwwwwwwwwwwwwwwwww`, // Level 8 || Map 3: Level 2
  map`
wwwwwwwwwwwwwwwwwwww
w........r........sw
wwwwwwwww.wwwwwwwwww
w...w...w.u.......3w
w.w.w.w.w.wwwwwwwwww
w.w.w.w.w....0...1.w
w.w.w.w.w..0...0...w
w.w.w.w.wiwww.wwwwww
w.w.w0w.....w....w.o
w.w.wwwwwwwww.ww.w.w
w.w.w.........w..w.w
w.w.wwwwwwwwwww.ww.w
w.w..............w.w
w.wwwwwwwwwwwwwwww.w
w..................w
wwwwwwwwwwwwwwwwwwww`, // Level 9 || Map 4: Level 1
  map`
wwwwwwwwwwwwwwwwwwww
w00...00w..w00...00w
w0.....0w..w0.....0w
w..020..u......0...w
w..000..w..w..0r0..w
w0.....0w..w0.....0w
w00...00w..w00...00w
wwwwwwwww..wwwwwwwww
w..r...r....r...r...
wwwwwwwww..wwwwwwwww
w0000000w..w.......w
w...0...w..w.....r.w
w.0.3.0.w..w.......w
w.0...0.i....r.....w
w0000000w..w.......w
wwwwwwwwwwwwwwwwwwww`, // Level 10 || Map 5: Level 1
  map`
wwwwwwwwwwwwwwwwwwww
w...r..........r...w
wwwwwww..wwwwwwww..w
w...............w..w
w.r.......r.....wr.w
w.....r.......r.w..w
w...............w..w
wwwwwwwwwwwwwwwww..w
...r...r....r...r..w
wwwwwwwwwwwwwwwww..w
w00..w....w.....w..w
w0.............1wr.w
w....w....w...00w..w
wwwwwww..wwwwwwww..w
w...r..........r...o
wwwwwwwwwwwwwwwwwwww`, // Level 11 || Map 5: Level 2
  map`
wwwwwwwwwwwwwwwwwwww
w02000000ww00000000w
w0r......ww......r0w
w0.wwwwwuwwiwwwww.0w
w0.w000..00..000w.0w
w0.w0...0000...0w.3w
w0.w00.00..00.00w.0w
wwww0.....00...0wwww
w..w0...0......0w..w
w..w00.000.00.00w..w
w..w0...0..0...0w..w
w..w000......000w..w
w..wwwwww..wwwwww..w
w.r..............r.w
w..................o
wwwwwwwwwwwwwwwwwwww`, // Level 12 || Map 6: Level 1
  
  map`
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
....................
...e...e....e...e...
...q...q....q...q...
pppqpppqppppqpppqppp
wwwwwwwwwwwwwwwwwwww`, // Level last || End Screen
]

// Active Sprites
const buttonLSprite = bitmap`
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
const buttonWInactiveSprite = bitmap`
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
const buttonAInactiveSprite = bitmap`
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
const buttonSInactiveSprite = bitmap`
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
const buttonDInactiveSprite = bitmap`
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
const buttonIInactiveSprite = bitmap`
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
const buttonJInactiveSprite = bitmap`
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
const buttonKInactiveSprite = bitmap`
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
const buttonLInactiveSprite = bitmap`
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
const tipBoxSprite = bitmap`
..LLLLLLLLLLLL..
.LLLLLLLLLLLLLL.
LLLLL111111LLLLL
LLLL11111111LLLL
LLLL111LL111LLLL
LLLLL11LL111LLLL
LLLLLLLLL111LLLL
LLLLLLLL111LLLLL
LLLLLLL1111LLLLL
LLLLLLL111LLLLLL
LLLLLLLLLLLLLLLL
LLLLLLL111LLLLLL
LLLLLLL111LLLLLL
LLLLLLL111LLLLLL
.LLLLLLLLLLLLLL.
..LLLLLLLLLLLL..`;

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
const tipHighlightSprite = bitmap`
..222222222222..
.22111111111122.
2211122222211122
2111222222221112
2111222112221112
2111122112221112
2111111112221112
2111111122211112
2111111222211112
2111111222111112
2111111111111112
2111111222111112
2111111222111112
2211111222111122
.22111111111122.
..222222222222..`;
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
const fenceWallSprite = bitmap`
................
................
................
................
................
................
................
................
.LLLLLL..LLLLLL.
.L1111L..L1111L.
.L1111L..L1111L.
.L1111L..L1111L.
LLLLLLLLLLLLLLLL
111L11111111L111
111L11111111L111
111L11111111L111`;
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
const playerBrightSprite = bitmap`
......6666......
.....600006.....
....60022006....
...6002222006...
...6022222206...
...6022222206...
...6022222206...
...6022222206...
...6022222206...
...6002222006...
....60022006....
.....600006.....
.....606606.....
....66066066....
...6000660006...
....666..666....`;
const playerWeakBrightSprite = bitmap`
......FFFF......
.....F0000F.....
....F002200F....
...F00222200F...
...F02222220F...
...F02222220F...
...F02222220F...
...F02222220F...
...F02222220F...
...F00222200F...
....F002200F....
.....F0000F.....
.....F0FF0F.....
....FF0FF0FF....
...F000FF000F...
....FFF..FFF....`;
const playerWithKeyOneSprite = bitmap`
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
const playerWithKeyTwoSprite = bitmap`
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
const playerWithKeyThreeSprite = bitmap`
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
const keyOneSprite = bitmap`
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
const keyTwoSprite = bitmap`
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
const keyThreeSprite = bitmap`
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
const boxOneHighlightSprite = bitmap`
................
.11111111111111.
.1CCCCCCCCCCCC1.
.1LLLLL66LLLLL1.
.1CCCC6CC6CCCC1.
.1CCCC6CC6CCCC1.
.1LLLLL66LLLLL1.
.1CCCCC6CCCCCC1.
.1CCCCC6CCCCCC1.
.1LLLLL666LLLL1.
.1CCCCC6CCCCCC1.
.1CCCCC6CCCCCC1.
.1LLLLLL66LLLL1.
.1CCCCCCCCCCCC1.
.11111111111111.
................`;
const boxTwoHighlightSprite = bitmap`
................
.11111111111111.
.1CCCCCCCCCCCC1.
.1LLLLL77LLLLL1.
.1CCCC7CC7CCCC1.
.1CCCC7CC7CCCC1.
.1LLLLL77LLLLL1.
.1CCCCC7CCCCCC1.
.1CCCCC7CCCCCC1.
.1LLLLL777LLLL1.
.1CCCCC7CCCCCC1.
.1CCCCC7CCCCCC1.
.1LLLLLL77LLLL1.
.1CCCCCCCCCCCC1.
.11111111111111.
................`;
const boxThreeHighlightSprite = bitmap`
................
.11111111111111.
.1CCCCCCCCCCCC1.
.1LLLLL99LLLLL1.
.1CCCC9CC9CCCC1.
.1CCCC9CC9CCCC1.
.1LLLLL99LLLLL1.
.1CCCCC9CCCCCC1.
.1CCCCC9CCCCCC1.
.1LLLLL999LLLL1.
.1CCCCC9CCCCCC1.
.1CCCCC9CCCCCC1.
.1LLLLLL99LLLL1.
.1CCCCCCCCCCCC1.
.11111111111111.
................`;

// Menu Sounds
const errorSFX = tune`
60: C4^60,
60: C4~60,
60,
60: C4^60,
60: C4~60,
1620`;
const menuSFX = tune`
333.3333333333333: C4~333.3333333333333,
10333.333333333332`;
const clickSFX = tune`
60: C4~60 + D4~60,
1860`;

// Game Sounds
const keyFoundSFX = tune`
50: F5^50,
50: G5^50,
50: G5^50,
50: G5^50,
1400`;
const stepSFX = tune`
100: C4~100,
3100`;
const unlockSFX = tune`
100: D4-100,
100: C4-100,
3000`;
const nextMapSFX = tune`
100: B4~100 + A4^100,
100: B4~100 + G4^100,
100: B4~100 + A4^100,
2900`;
const flashSFX = tune`
37.5: B5^37.5,
37.5: B5^37.5,
37.5: B5^37.5,
37.5: B5^37.5,
1050`;
const dingSFX = tune`
100: B5/100 + A5/100,
100: A5/100,
3000`;

// Music
const gameOneStem = tune`
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300,
300: C4~300,
300`;
const gameTwoStem = tune`
300,
300: B4/300,
300: F5^300,
900,
300: E4^300,
600,
300: B4/300,
300: F5^300,
300: F5^300,
600,
300: E4^300,
600,
300: B4/300,
300: F5^300,
900,
300: E4^300,
600,
300: B4/300,
300: F5^300,
300: F5^300,
600,
300: E4^300,
300`;
const gameThreeStem = tune`
600,
300: B4~300,
900,
300: E4~300 + B4~300,
900,
300: B4~300,
300: B4~300,
600,
300: E4~300 + B4~300,
900,
300: B4~300,
900,
300: E4~300 + B4~300,
900,
300: B4~300,
300: B4~300,
600,
300: E4~300 + B4~300,
300`;
const gameFourStem = tune`
300: E4^300,
1500,
300: D4^300,
300: E4^300,
2400,
300: E4^300,
1500,
300: D4^300,
300: E4^300,
2400`;
const endSong = tune`
250: D5^250,
250: D5^250,
250,
250: B4^250,
250: C4~250,
250: B4^250,
250: C4~250,
250: B4^250,
250,
250: D5^250,
250: D5^250,
250,
250: B4^250,
250,
250: B4^250,
250,
250: B4^250,
250,
250: B4~250,
250: C5~250,
250: B4~250,
250: C5~250,
250,
250: D5~250,
250: D5~250,
250: D5~250,
250: G4~250,
250: G4~250,
250: G4~250,
750`;

// Main Menu Text
let currentLevelText;

let titleText = `
  Black
  
Labyrinth`;

let mainMenuOptions = `
  Start Game
  ----------
  
  Guide
  -----`;

let backButton = `
Back
----`;

// Guide Text
let menuGuide = `Press   

to activate`;

// Controls Text
let upLGuide = `Moves player 
upward`;
let leftLGuide = `Moves player to 
the left`;
let downLGuide = `Moves player 
downward`;
let rightLGuide = `Moves player to 
the right`;
let upRGuide = `Flashes the map
in-game`;
let leftRGuide = `Returns to menu
(Progress
is saved)`;
let downRGuide = `Back button in
the menu, lazy key
picker in game`;
let rightRGuide = `Confirm menu
selection, grabs 
the key in-game`;

// Tip Text
let tipOneGuide = `Look across levels
to find the key
for the doors`

let tipTwoGuide = `Checking a box
scans left, right,
up and down.`

let tipThreeGuide = `Lost?
Use the   button
to see farther
around the player`

let tipFourGuide = `Stuck?
Use the   button
to cycle through
the keys you need`

let tipFiveGuide = `Try to complete
the game without
these assists ;)`

// Game Text
let keyFoundText = `
You found a 
       key`;
let keyNeededText = `
You need a 
       key`;
let keyOneText = `yellow`;
let keyTwoText = `blue`;
let keyThreeText = `orange`;
let boxEmptyText = `
There's nothing in
the box`;

// Credits
let farewellText = `
Thanks for
 playing!`;

let noAssistText = `
You finished the
  game without
using assists :O`;

// Configurables
let defaultSolids = [player, wall, doorOne, doorTwo, doorThree, box, boxKeyOne, boxKeyTwo, boxKeyThree]; // Used to keep track of the default solid blocks
let lightRange = 3; // Used to set the distance the light can reach for displaySpritesInRange()
let playerRange = 3; // Used to set the distance the player can see for displaySpritesInRange()
let toastDelay = 3000; // Used to set the delay for text that appears when a key is found or door is unlocked, and how long the player is paused
let shortToastDelay = 1500; // Used to set the delay for text that appears when no key is found or door is locked, and how long the player is paused
let textHeightOffset = 4; // Used to set which height the toast texts appear
let flashBrightness = 10; // Used to set how far the player can light up when doing mapFlash()

// Background Game States
let stemOne; // Used to control playback of game stem one (music)
let stemTwo; // Used to control playback of game stem one (music)
let stemThree; // Used to control playback of game stem one (music)
let stemFour; // Used to control playback of game stem one (music)
let widthX; // Used (during spawn) to get actual map width
let gameState; // menu for Main Menu; game for In-game; pause for etc; end for End Screen
let menuMode = 1; // 1 for Main Menu; 2 for Guide
let pointerOption = 0;
let currentPointer; // Check pointer functions
let backButtonState = "2"; // 1 is Gray (unselected); 2 is White (selected)
let pingError; // Used to ping error soundl (reduce error spam)
let allSprites; // Used to track blocks inside a level
let solidSprites = defaultSolids; //  Used to track which blocks are solid
let currentPlayerCoord; // Used to track player's last position. Used in stepPing()
let keyFound; // Used to track if a key was found. Used to feature key while gameState paused, for setSprites()
let textHeight; // Used to set which height the toast texts appear
let flashingMap; // Used to track if the player pressed the map flash button, used to adjust player texture
let usedAssist; // Used to track if the player ever used the assists (flash map and key magic)

// In-Game States
let spawnX = 1; // Default X value used to spawn player on start, used to tell where player to spawn in checkBorder()
let spawnY = 1; // Default Y value used to spawn player on start, used to tell where player to spawn in checkBorder()
let level = 1; // 0 for Guide; 1 for Main Menu
let lastLevel = 1; // Tracks level before mainMenu to allow accessing the main menu whilst in game
let currentLevelVal = 1; // Adjust last level to make sense for current level
let currentKey; // Used to track which key the player is holding
let currentPlayer = playerSprite; // Used to track which player sprite to show (based on key)

// Loops
let pointerChangeInterval;
let flickerLightsInterval;

// Start the main menu
mainMenu();

// Controls
onInput("w", () => {
  if (gameState == "menu") {
    pointerUp();
  } else if (gameState == "game") {
    getFirst(player).y--
  }
});

onInput("s", () => {
  if (gameState == "menu") {
    pointerDown();
  } else if (gameState == "game") {
    getFirst(player).y++
  }
});

onInput("a", () => {
  if (gameState == "menu") {
    pointerUp();
  } else if (gameState == "game") {
    if (getFirst(player).x == 0) {
      // Check if at border and move to last map
      levelCheck("down");
    }
    if (getFirst(player)) {
      getFirst(player).x--;
    }
  }
});

onInput("d", () => {
  if (gameState == "menu") {
    pointerDown();
  } else if (gameState == "game") {
    if (getFirst(player).x == widthX) {
      // Check if at border and move to next map
      levelCheck("up");
    }
    if (getFirst(player)) {
      getFirst(player).x++
    }
  }
});

onInput("i", () => {
  if (gameState == "game") {
    mapFlash();
  }
});

onInput("k", () => {
  if (gameState == "menu") {
    pointerContinue("k");
    pointerBack();
  } else if (gameState == "game") {
    // usedAssist = true
    if (currentKey == 1) {
      currentKey = 2
      characterInit();
    } else if (currentKey == 2) {
      currentKey = 3
      characterInit();
    } else if (currentKey == 3) {
      currentKey = 0
      characterInit();
    } else {
      currentKey = 1
      characterInit();
    }
  }
});

onInput("j", () => {
  if (gameState == "game") {
    // Check if in-game, then save level and allow to open main menu
    currentLevelVal = level - 1;
    lastLevel = level; // Remember last level before mainMenu (if Applicable)
    mainMenu();
  }
});

onInput("l", () => {
  if (gameState == "menu") {
    pointerContinue();
  } else if (gameState == "game") {
    itemInteract()
  }
});

afterInput(() => {
  if (gameState == "game") {
    // Updates the visible and invisible blocks when moving
    stepPing();
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
  gameState = "menu";
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

  addText(titleText, { x: 5, y: 1, color: color`2` });
  addText(mainMenuOptions, { x: 3, y: 7, color: color`2` });
  addText(currentLevelText, { x: 2, y: 15, color: color`1` });
}

// Sets up the guide
function guideScreen() {
  gameState = "menu";
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
  clearTile(9, 12); // Resets the button Sprite spawned by tip guide 2 & 3
  if (pointerOption == 1) {
    if (getTile(6, 12) !== undefined) {
      clearTile(6, 12);
    }
    updateSprite(buttonW);
  } else if (pointerOption == 2) {
    updateSprite(buttonA);
  } else if (pointerOption == 3) {
    updateSprite(buttonS);
  } else if (pointerOption == 4) {
    updateSprite(buttonD);
  } else if (pointerOption == 5) {
    updateSprite(buttonI);
  } else if (pointerOption == 6) {
    updateSprite(buttonJ);
  } else if (pointerOption == 7) {
    updateSprite(buttonK);
  } else if (pointerOption == 8) {
    updateSprite(buttonL);
  } else if (pointerOption == 9) {
    updateSprite(tipBoxOne);
  } else if (pointerOption == 10) {
    updateSprite(tipBoxTwo);
  } else if (pointerOption == 11) {
    updateSprite(tipBoxThree);
  } else if (pointerOption == 12) {
    updateSprite(tipBoxFour);
  } else if (pointerOption == 13) {
    updateSprite(tipBoxFive);
  } else {
    pointerOption = 0;
    updateSprite();
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
    if (pointerOption < 13) {
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
      playTune(clickSFX);
      initializeGame();
    } else if (pointerOption == 1) {
      // Go to Guide
      playTune(clickSFX);
      pointerOption = 0; // Return to first option
      guideScreen();
    }
  } else if (menuMode == 2) {
    // Guide
    if (triggered == "k") {
      // Check if triggered by back button
      if (pointerOption == 0) {
        playTune(clickSFX);
        mainMenu();
      }
    } else if (pointerOption == 0) {
      playTune(clickSFX);
      pointerOption = 0; // Return to first option
      mainMenu();
    } else if (pointerOption > 0) {
      playTune(clickSFX);
      guideText();
    }
  }
}

// Update current selected item Sprite to highlight in the guid
function updateSprite(activeOption) {
  if (pointerOption == 0) {
    buttonActive = "g"; // Reset buttonActive and activeOption when switching back
    tipBoxActive = "l"; // Reset tipBoxActive and activeOption when switching back
  } else if (pointerOption > 0 && pointerOption < 9) {
    tipBoxActive = "l"; // Reset tipBoxActive and activeOption when switching back
    buttonActive = activeOption;
  } else if (pointerOption > 8 && pointerOption < 14) {
    buttonActive = "g"; // Reset buttonActive and activeOption when switching back
    tipBoxActive = activeOption;
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
  } else if (pointerOption == 9) {
    addBack();
    addText(tipOneGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 10) {
    addBack();
    addText(tipTwoGuide, { x: 1, y: 12, color: color`2` });
  } else if (pointerOption == 11) {
    addBack();
    addSprite(9, 12, buttonI);
    addText(tipThreeGuide, { x: 1, y: 11, color: color`2` });
  } else if (pointerOption == 12) {
    addBack();
    addSprite(9, 12, buttonK);
    addText(tipFourGuide, { x: 1, y: 11, color: color`2` });
  } else if (pointerOption == 13) {
    addBack();
    addSprite(9, 12, buttonI);
    addText(tipFiveGuide, { x: 1, y: 12, color: color`2` });
  }
}

// Setup the game
function initializeGame() {
  characterInit();
  setSolids(solidSprites);
  setBackground(background);
  level = lastLevel; // Restore lastLevel if applicable
  // level = 6
  playMusic("game");
  spawn(); // Start Game
}

// Spawn Code
function spawn() {
  clearText(); // Cleans stuff before it
  gameState = "game";
  characterInit();
  updateGameIntervals();
  setMap(levels[level]);
  levelCheck("wall")
  widthX = width() - 1 // Check map actual width
  addSprite(spawnX, spawnY, player)
  allSprites = getAll(); // Grabs all sprites in the map and saves them.
  displaySpritesInRange(); // Make sure the player is in the map when this is runned
}

function mapFlash() {
  usedAssist = true;
  playerRange = flashBrightness;
  gameState = "pause"
  flashingMap = 2;
  displaySpritesInRange();
  characterInit();
  playTune(flashSFX)
  setTimeout(() => {
    playerRange = 4
    flashingMap = 1;
    characterInit();
    displaySpritesInRange();
  }, 1000);
  setTimeout(() => {
    playerRange = 3
    gameState = "game"
    flashingMap = 0;
    characterInit();
    displaySpritesInRange();
  }, 3000);
}

function itemInteract() {
  textHeight = height() - textHeightOffset
  grabKey(); // Check if on a key and grab it
  grabBox(); // Check if next to a box and if it has a key and grab it
  unlockDoor(); // Check if next to a door and unlock it
  characterInit(); // Refreshes character sprite for every interaction
}

function grabKey() {
  let playerCoord = getFirst(player);
  let keyOneCoord = getFirst(keyOne);
  let keyTwoCoord = getFirst(keyTwo);
  let keyThreeCoord = getFirst(keyThree);

  if (keyOneCoord && playerCoord.x == keyOneCoord.x && playerCoord.y == keyOneCoord.y) {
    // Player and key are on the same tile
    currentKey = 1;
    keyFound = true;
    gameState = "pause"
    playTune(keyFoundSFX);
    addText(keyFoundText, { x: 1, y: textHeight, color: color`2` });
    addText(keyOneText, { x: 1, y: textHeight + 2, color: color`6` });
    setTimeout(toastTextClear, toastDelay);
  } else if (keyTwoCoord && playerCoord.x == keyTwoCoord.x && playerCoord.y == keyTwoCoord.y) {
    // Player and key are on the same tile
    currentKey = 2;
    keyFound = true;
    gameState = "pause";
    playTune(keyFoundSFX);
    addText(keyFoundText, { x: 1, y: textHeight, color: color`2` })
    addText(keyTwoText, { x: 1, y: textHeight + 2, color: color`7` });
    setTimeout(toastTextClear, toastDelay);
  } else if (keyThreeCoord && playerCoord.x == keyThreeCoord.x && playerCoord.y == keyThreeCoord.y) {
    // Player and key are on the same tile
    currentKey = 3;
    keyFound = true;
    gameState = "pause";
    playTune(keyFoundSFX);
    addText(keyFoundText, { x: 1, y: textHeight, color: color`2` })
    addText(keyThreeText, { x: 1, y: textHeight + 2, color: color`9` });
    setTimeout(toastTextClear, toastDelay);
  }
}

function grabBox() {
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
  let boxFound = surroundingTiles.some((tile) => tile && (tile.type == box))

  if (boxOneFound) {
    currentKey = 1;
    keyFound = true
    gameState = "pause";
    playTune(keyFoundSFX);
    addText(keyFoundText, { x: 1, y: textHeight, color: color`2` })
    addText(keyOneText, { x: 1, y: textHeight + 2, color: color`6` });
    setTimeout(toastTextClear, toastDelay);
  } else if (boxTwoFound) {
    currentKey = 2;
    keyFound = true
    gameState = "pause";
    playTune(keyFoundSFX);
    addText(keyFoundText, { x: 1, y: textHeight, color: color`2` });
    addText(keyTwoText, { x: 1, y: textHeight + 2, color: color`7` });
    setTimeout(toastTextClear, toastDelay);
  } else if (boxThreeFound) {
    currentKey = 3;
    keyFound = true
    gameState = "pause";
    playTune(keyFoundSFX);
    addText(keyFoundText, { x: 1, y: textHeight, color: color`2` });
    addText(keyThreeText, { x: 1, y: textHeight + 2, color: color`9` });
    setTimeout(toastTextClear, toastDelay);
  } else if (boxFound) {
    gameState = "pause";
    playTune(keyFoundSFX);
    addText(boxEmptyText, { x: 1, y: textHeight, color: color`2` });
    setTimeout(toastTextClear, shortToastDelay);
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
  let doorOneFound = surroundingTiles.some((tile) => tile && (tile.type == doorOne));
  let doorTwoFound = surroundingTiles.some((tile) => tile && (tile.type == doorTwo));
  let doorThreeFound = surroundingTiles.some((tile) => tile && (tile.type == doorThree));

  if (doorOneFound) {
    if (currentKey == 1) {
      // Checks if player has key 1
      solidSprites = solidSprites.filter(item => item != doorOne);
      currentKey = 0;
      setSolids(solidSprites);
      playTune(unlockSFX);
    } else if (solidSprites.includes(doorOne)) {
      // Checks if the door is locked
      gameState = "pause";
      addText(keyNeededText, { x: 1, y: textHeight, color: color`2` })
      addText(keyOneText, { x: 1, y: textHeight + 2, color: color`6` });
      setTimeout(toastTextClear, shortToastDelay);
    }
  } else if (doorTwoFound) {
    if (currentKey == 2) {
      // Checks if player has key 2
      solidSprites = solidSprites.filter(item => item != doorTwo);
      currentKey = 0;
      setSolids(solidSprites);
      playTune(unlockSFX);
    } else if (solidSprites.includes(doorTwo)) {
      // Checks if the door is locked
      gameState = "pause";
      addText(keyNeededText, { x: 1, y: textHeight, color: color`2` });
      addText(keyTwoText, { x: 1, y: textHeight + 2, color: color`7` });
      setTimeout(toastTextClear, shortToastDelay);
    }
  } else if (doorThreeFound) {
    if (currentKey == 3) {
      // Checks if player has key 3
      solidSprites = solidSprites.filter(item => item != doorThree);
      currentKey = 0;
      setSolids(solidSprites);
      playTune(unlockSFX);
    } else if (solidSprites.includes(doorThree)) {
      // Checks if the door is locked
      gameState = "pause";
      addText(keyNeededText, { x: 1, y: textHeight, color: color`2` })
      addText(keyThreeText, { x: 1, y: textHeight + 2, color: color`9` });
      setTimeout(toastTextClear, shortToastDelay);
    }
  }
}

function toastTextClear() {
  clearText();
  keyFound = false;
  gameState = "game"
  characterInit();
}

function levelCheck(move) {
  if (level == levels.length - 2) {
    if (move == "up") {
      level++;
      endScreen();
    } else if (move == "down") {
      playerY = getFirst(player).y
      spawnX = widthX;
      spawnY = playerY;
      lastLevel = level;
      level--;
      spawn();
    }
  } else if (level < levels.length - 1) {
    let leftWall = getTile(0, 1)[0]
    if (move == "up") {
      playerY = getFirst(player).y
      spawnX = 0;
      spawnY = playerY;
      level++;
      spawn();
    } else if (move == "down") {
      playerY = getFirst(player).y
      spawnX = widthX;
      spawnY = playerY;
      lastLevel = level;
      level--;
      spawn();
    }
    if (leftWall && lastLevel < level && move == "wall") {
      if (leftWall.type == wall) {
        currentKey = 0 // Make sure the player does not bring over a key
        solidSprites = defaultSolids;
        characterInit();
        setSolids(solidSprites);
        playTune(nextMapSFX);
      }
    }
  }
}

function displaySpritesInRange() {
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
  if (flashingMap == 1) {
    currentPlayer = playerWeakBrightSprite;
  } else if (flashingMap == 2) {
    currentPlayer = playerBrightSprite;
  } else if (currentKey == 1) {
    currentPlayer = playerWithKeyOneSprite;
  } else if (currentKey == 2) {
    currentPlayer = playerWithKeyTwoSprite;
  } else if (currentKey == 3) {
    currentPlayer = playerWithKeyThreeSprite;
  } else {
    currentPlayer = playerSprite;
  }
  setSprites();
}

function endScreen() {
  // Initialize
  gameState = "end";
  updateGameIntervals();
  setSprites();
  setMap(levels[level]);
  addSprite(0, 14, player);
  const playback = playTune(endSong, Infinity);

  // Body
  setTimeout(moveRight, 500);
  setTimeout(moveRight, 1000);
  setTimeout(moveRight, 1500);
  setTimeout(moveRight, 2000);
  setTimeout(moveRight, 2500);
  setTimeout(moveRight, 3000);
  setTimeout(moveRight, 3500);
  setTimeout(moveRight, 4000);

  addText(titleText, { x: 5, y: 0, color: color`2` });

  setTimeout(() => {
    clearText();
    addText(titleText, { x: 5, y: 0, color: color`1` });
    addText(farewellText, { x: 5, y: 6, color: color`2` });
  }, 5000);

  if (usedAssist != true) {
    setTimeout(() => {
      clearText();
      addText(titleText, { x: 5, y: 0, color: color`1` });
      addText(farewellText, { x: 5, y: 4, color: color`1` });
      addText(noAssistText, { x: 2, y: 7, color: color`6` });
      playTune(dingSFX);
    }, 8000);
  }

  // Exit
  setTimeout(() => {
    playback.end();
    level = 1;
    currentLevelVal = 1;
    spawnX = 1;
    spawnY = 1;
    solidSprites = defaultSolids;
    mainMenu();
  }, 15000);
}

function moveRight() {
  getFirst(player).x++;
  playTune(stepSFX);
}

function setSprites() {
  // This function loads the required Sprites for each gameState and menuMode
  if (gameState == "menu") {
    // Main Menu or Guide check
    if (menuMode == 1) {
      setLegend(
        [background, backgroundSprite],
        [wall, wallSprite],
        [lightPost, lightPostSprite],
        [lightLantern, lightLanternSprite],
        [arrow, arrowSprite],
        [buttonL, buttonLSprite],
        // Game Sprites (Just to make map making easier)
        [tipBoxOne, tipBoxSprite],
        [tipBoxTwo, tipBoxSprite],
        [tipBoxThree, tipBoxSprite],
        [tipBoxFour, tipBoxSprite],
        [tipBoxFive, tipBoxSprite],
        [fenceWall, fenceWallSprite],
        [hangingLantern, hangingLanternSprite],
        [player, currentPlayer],
        [keyOne, keyOneSprite],
        [keyTwo, keyTwoSprite],
        [keyThree, keyThreeSprite],
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
        [buttonW, buttonWInactiveSprite],
        [buttonA, buttonAInactiveSprite],
        [buttonS, buttonSInactiveSprite],
        [buttonD, buttonDInactiveSprite],
        [buttonI, buttonIInactiveSprite],
        [buttonJ, buttonJInactiveSprite],
        [buttonK, buttonKInactiveSprite],
        [buttonL, buttonLInactiveSprite],
        [buttonActive, buttonHighlightSprite],
        [tipBoxOne, tipBoxSprite],
        [tipBoxTwo, tipBoxSprite],
        [tipBoxThree, tipBoxSprite],
        [tipBoxFour, tipBoxSprite],
        [tipBoxFive, tipBoxSprite],
        [tipBoxActive, tipHighlightSprite],
        [player, currentPlayer],
        [keyOne, keyOneSprite],
        [box, boxSprite],
      );
    }
  } else if (gameState == "game") {
    setLegend(
      [background, backgroundSprite],
      [wall, wallSprite],
      [fenceWall, fenceWallSprite],
      [hangingLantern, hangingLanternSprite],
      [player, currentPlayer],
      [keyOne, keyOneSprite],
      [keyTwo, keyTwoSprite],
      [keyThree, keyThreeSprite],
      [doorOne, doorOneSprite],
      [doorTwo, doorTwoSprite],
      [doorThree, doorThreeSprite],
      [box, boxSprite],
      [boxKeyOne, boxSprite],
      [boxKeyTwo, boxSprite],
      [boxKeyThree, boxSprite],
    );
  } else if (gameState == "pause") {
    if (keyFound) {
      setLegend(
        [background, backgroundSprite],
        [wall, wallSprite],
        [fenceWall, fenceWallSprite],
        [hangingLantern, hangingLanternSprite],
        [player, currentPlayer],
        [keyOne, keyOneSprite],
        [keyTwo, keyTwoSprite],
        [keyThree, keyThreeSprite],
        [doorOne, doorOneSprite],
        [doorTwo, doorTwoSprite],
        [doorThree, doorThreeSprite],
        [box, boxSprite],
        [boxKeyOne, boxOneHighlightSprite],
        [boxKeyTwo, boxTwoHighlightSprite],
        [boxKeyThree, boxThreeHighlightSprite],
      );
    } else {
      setLegend(
        [background, backgroundSprite],
        [wall, wallSprite],
        [fenceWall, fenceWallSprite],
        [hangingLantern, hangingLanternSprite],
        [player, currentPlayer],
        [keyOne, keyOneSprite],
        [keyTwo, keyTwoSprite],
        [keyThree, keyThreeSprite],
        [doorOne, doorOneSprite],
        [doorTwo, doorTwoSprite],
        [doorThree, doorThreeSprite],
        [box, boxSprite],
        [boxKeyOne, boxSprite],
        [boxKeyTwo, boxSprite],
        [boxKeyThree, boxSprite],
      );
    }
  } else if (gameState == "end") {
    setLegend(
      [lightPost, lightPostSprite],
      [lightLantern, lightLanternSprite],
      [background, backgroundSprite],
      [wall, wallSprite],
      [fenceWall, fenceWallSprite],
      [hangingLantern, hangingLanternSprite],
      [player, currentPlayer],
      [keyOne, keyOneSprite],
      [keyTwo, keyTwoSprite],
      [keyThree, keyThreeSprite],
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

// Music Engine
function playMusic(mode) {
  if (mode == "game") {
    stemOne = playTune(gameOneStem, Infinity)
    setTimeout(() => {
      stemTwo = playTune(gameTwoStem, Infinity)
    }, 2400);
    setTimeout(() => {
      stemThree = playTune(gameThreeStem, Infinity)
    }, 4800);
    setTimeout(() => {
      stemTwo.end()
      stemThree.end()
      stemThree = playTune(gameFourStem, Infinity)
    }, 12000);
    setTimeout(() => {
      stemThree.end();
      stemTwo = playTune(gameTwoStem, Infinity)
    }, 26400);
    setTimeout(() => {
      stemThree = playTune(gameThreeStem, Infinity)
    }, 28800);
  }
}

// Error Player Code
function errorPing() {
  if (pingError == true) {
    playTune(errorSFX);
    pingError = false;
  }
}

function stepPing() {
  currentPlayerCoord = getFirst(player)
  if (currentPlayerCoord.dx != 0 || currentPlayerCoord.dy != 0) {
    playTune(stepSFX);
  }
}

function updateGameIntervals() {
  errorPingInterval = setInterval(errorPing, 500); // Set interval for error sound being played
  if (gameState == "game" || gameState == "pause") {
    // Clear any existing intervals
    clearInterval(pointerChangeInterval);
    clearInterval(flickerLightsInterval);

    flickerLightsInterval = setInterval(flickerLights, 1000) // Set interval for light flickering
  } else if (gameState == "menu") {
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
