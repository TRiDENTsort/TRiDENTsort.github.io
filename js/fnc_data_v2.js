// 2008/7/3 Scripted by K-Factory@migiwa
// 2009/1/27 Modified by K-Factory@migiwa

// *****************************************************************************
str_CenterT = 'Tie!';
str_CenterB = 'Undo last choice';

str_ImgPath = 'img/';
// 0:順番に　1:昔の
var bln_ResultMode = 1;
// 0:テキスト　1:イラスト　2:テキスト＋イラスト
var int_ResultImg = 2;
// イラスト表示時、何位までをイラスト表示にするか。
var int_ResultRank = 3;

// ソート用のテーブルを
// 0:残す　1:消す
var bln_ResultStyle = 0;

// ソート進捗バーの表示
// 0:表示　1:消す
var bln_ProgessBar = 1;

// Maximum number of result rows before being broken off into another table.
var maxRows = 35;

// * タイトル情報（編集可能。最後の行に”,”を付けないようにしてください）
var int_Colspan = 3;
var ary_TitleData = [
  "ADVANCE GENERATION",
  "spice \"X\"",
  "Dream Up",
  "D-X",
  "再構創",
  "再構創Ⅱ",
  "OVER GROUND",
  "UNDER GROUND",
  "WE ARE THE WORLD",
  "JUST DO IT !!!",
  "Continue / To be Continued..."
];

// * キャラクター情報（編集可能。最後の行に”,”を付けないようにしてください）
// * 使用フラグ（0にするとソートに入りません）, 
//   "タイトルID"（先頭から0, 1, 2...）, 
//   {タイトル別参加フラグ}（1を入れると対象タイトルに入ります）,
//   "キャラクター名", "画像（空白の場合、キャラクター名が使用されます）"
//                                      [1,2,3,4,5,6,7,8,9,
var ary_CharacterData = [
  [1, "Opening -the return of us-",                       [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "JUST FIGHT",                                       [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "IMAGINATION",                                      [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "RIDE ON",                                          [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "SURVIVOR",                                         [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "Dystopia",                                         [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "Ambivalent",                                       [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "Brand New World'",                                 [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "Continue",                                         [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "Supernova",                                        [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "Re:ply",                                           [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],
  [1, "Last Hope",                                        [1,0,0,0,0,0,0,0,0,0,0], "albums/AdvanceGeneration.jpg"],

  [1, "SPICE!",                                           [0,1,0,0,0,0,0,0,0,0,0], "albums/SpiceX.jpg"],
  [1, "Bite the bullet",                                  [0,1,0,0,0,0,0,0,0,0,0], "albums/SpiceX.jpg"],
  [1, "Nocturne",                                         [0,1,0,0,0,0,0,0,0,0,0], "albums/SpiceX.jpg"],
  [1, "iCON",                                             [0,1,0,0,0,0,0,0,0,0,0], "albums/SpiceX.jpg"],
  [1, "be with you",                                      [0,1,0,0,0,0,0,0,0,0,0], "albums/SpiceX.jpg"],

  [1, "KICKASS",                                          [0,0,1,0,0,0,0,0,0,0,0], "albums/DreamUp.jpg"],
  [1, "Repaint",                                          [0,0,1,0,0,0,0,0,0,0,0], "albums/DreamUp.jpg"],
  [1, "twinkle",                                          [0,0,1,0,0,0,0,0,0,0,0], "albums/DreamUp.jpg"],
  [1, "エンドロール",                                       [0,0,1,0,0,0,0,0,0,0,0], "albums/DreamUp.jpg"],
  [1, "NEO FUTURE",                                       [0,0,1,0,0,0,0,0,0,0,0], "albums/DreamUp.jpg"],


  [1, "CRY OUT",                                          [0,0,0,1,0,0,0,0,0,0,0], "albums/D-X.jpg"],
  [1, "DISCORD",                                          [0,0,0,1,0,0,0,0,0,0,0], "albums/D-X.jpg"],
  [1, "Spoopy",                                           [0,0,0,1,0,0,0,0,0,0,0], "albums/D-X.jpg"],
  [1, "Answer",                                           [0,0,0,1,0,0,0,0,0,0,0], "albums/D-X.jpg"],
  [1, "シグナル",                                          [0,0,0,1,0,0,0,0,0,0,0], "albums/D-X.jpg"],

  [1, "VOLTAGE",                                          [0,0,0,0,1,0,0,0,0,0,0], "albums/Reconstruction.jpg"],
  [1, "No Regret",                                        [0,0,0,0,1,0,0,0,0,0,0], "albums/Reconstruction.jpg"],
  [1, "STEP BY STEP",                                     [0,0,0,0,1,0,0,0,0,0,0], "albums/Reconstruction.jpg"],
  [1, "CHANGE",                                           [0,0,0,0,1,0,0,0,0,0,0], "albums/Reconstruction.jpg"],  
  [1, "START",                                            [0,0,0,0,1,0,0,0,0,0,0], "albums/Reconstruction.jpg"],

  [1, "GO CRAZY",                                         [0,0,0,0,0,1,0,0,0,0,0], "albums/Reconstruction2.png"],
  [1, "RESISTANCE",                                       [0,0,0,0,0,1,0,0,0,0,0], "albums/Reconstruction2.png"],
  [1, "Utopia",                                           [0,0,0,0,0,1,0,0,0,0,0], "albums/Reconstruction2.png"],
  [1, "Again",                                            [0,0,0,0,0,1,0,0,0,0,0], "albums/Reconstruction2.png"],
  [1, "Never ending",                                     [0,0,0,0,0,1,0,0,0,0,0], "albums/Reconstruction2.png"],

  [1, "DISTINATION",                                      [0,0,0,0,0,0,1,0,0,0,0], "albums/Overground.png"],
  [1, "After rain",                                       [0,0,0,0,0,0,1,0,0,0,0], "albums/Overground.png"],
  [1, "Think of",                                         [0,0,0,0,0,0,1,0,0,0,0], "albums/Overground.png"],

  [1, "Alive",                                            [0,0,0,0,0,0,0,1,0,0,0], "albums/Underground.jpg"],
  [1, "Wake up !!!",                                      [0,0,0,0,0,0,0,1,0,0,0], "albums/Underground.jpg"],
  [1, "VS",                                               [0,0,0,0,0,0,0,1,0,0,0], "albums/Underground.jpg"],

  [1, "RIDE ON",                                          [0,0,0,0,0,0,0,0,1,0,0], "albums/WeAreTheWorld.jpg"],
  [1, "SURVIVOR",                                         [0,0,0,0,0,0,0,0,1,0,0], "albums/WeAreTheWorld.jpg"],
  [1, "Brand New World",                                  [0,0,0,0,0,0,0,0,1,0,0], "albums/WeAreTheWorld.jpg"],

  [1, "JUST FIGHT",                                       [0,0,0,0,0,0,0,0,0,1,0], "albums/JustDoIt.jpg"],
  [1, "Ambivalent",                                       [0,0,0,0,0,0,0,0,0,1,0], "albums/JustDoIt.jpg"],
  [1, "Re:ply",                                           [0,0,0,0,0,0,0,0,0,1,0], "albums/JustDoIt.jpg"],

  [1, "Continue",                                         [0,0,0,0,0,0,0,0,0,0,1], "albums/Continue.jpg"],
  [1, "Last Hope",                                        [0,0,0,0,0,0,0,0,0,0,1], "albums/Continue.jpg"],
  [1, "シリアスゲーム",                                      [0,0,0,0,0,0,0,0,0,0,1], "albums/Continue.jpg"],
  [1, "CHANGE",                                           [0,0,0,0,0,0,0,0,0,0,1], "albums/Continue.jpg"],  
  [1, "Continue～Instrumental～",                          [0,0,0,0,0,0,0,0,0,0,1], "albums/Continue.jpg"],
];
