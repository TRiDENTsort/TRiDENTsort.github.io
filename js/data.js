// Album catalog. To add a new album, append a new object to ALBUMS with:
//   id     - unique kebab-case slug (used as DOM value, must be unique)
//   title  - human-readable album name (shown in UI)
//   year   - release year (used to sort albums chronologically)
//   cover  - path to cover image, relative to the page
//   songs  - array of song titles in track order (duplicates across albums are fine)
//   single - (optional) true if this is a standalone single — gets bundled into the
//            "Singles" tile on the album grid instead of getting its own tile.
//
// Albums are sorted by year on export, so insertion order in this array does not matter.
// Source order below is alphabetical by title to make manual edits easier to scan.

const RAW_ALBUMS = [
  {
    id: "advance-generation",
    title: "ADVANCE GENERATION",
    year: 2021,
    cover: "img/albums/AdvanceGeneration.jpg",
    songs: [
      "Opening -the return of us-",
      "JUST FIGHT",
      "IMAGINATION",
      "RIDE ON",
      "SURVIVOR",
      "Dystopia",
      "Ambivalent",
      "Brand New World",
      "Continue",
      "Supernova",
      "Re:ply",
      "Last Hope",
    ],
  },
  {
    id: "blue-dawn",
    title: "BLUE DAWN",
    year: 2025,
    cover: "img/albums/BLUEDAWN.jpg",
    songs: [
      "黎明ノ詩",
      "NEW ERA",
      "MIRACRAID",
      "恋のマジックポーション (Love's Magic Potion cover)",
      "カントリー・ロード (Country Roads cover)",
    ],
  },
  {
    id: "continue",
    title: "Continue / To be Continued...",
    year: 2020,
    cover: "img/albums/Continue.jpg",
    songs: [
      "Continue",
      "Last Hope",
      "CHANGE",
      "シリアスゲーム (Serious Game)",
      "Continue～Instrumental～",
    ],
  },
  {
    id: "d-x",
    title: "D-X",
    year: 2022,
    cover: "img/albums/D-X.jpg",
    songs: [
      "CRY OUT",
      "DISCORD",
      "Spoopy",
      "Answer",
      "シグナル (Signal)"
    ],
  },
  {
    id: "dream-up",
    title: "Dream Up",
    year: 2023,
    cover: "img/albums/DreamUp.jpg",
    songs: [
      "KICKASS",
      "Repaint",
      "twinkle",
      "エンドロール (Endroll)",
      "NEO FUTURE"
    ],
  },
  {
    id: "dux",
    title: "DUX",
    year: 2024,
    cover: "img/albums/DUX.png",
    songs: [
      "Opening -follow the DUX-",
      "KICKASS",
      "iCON",
      "Haha!",
      "twinkle",
      "NEO FUTURE",
      "be with you",
      "Nocturne",
      "U",
      "Bite the bullet",
      "CRY OUT",
      "シグナル (Signal)",
    ],
  },
  {
    id: "over-ground",
    title: "OVER GROUND",
    year: 2021,
    cover: "img/albums/Overground.png",
    songs: [
      "DISTINATION",
      "After rain",
      "Think of",
    ],
  },
  {
    id: "spice-x",
    title: "spice \"X\"",
    year: 2024,
    cover: "img/albums/SpiceX.jpg",
    songs: [
      "SPICE!",
      "Bite the bullet",
      "Nocturne",
      "iCON",
      "be with you"
    ],
  },
  {
    id: "under-ground",
    title: "UNDER GROUND",
    year: 2021,
    cover: "img/albums/Underground.jpg",
    songs: [
      "Alive",
      "Wake up !!!",
      "VS",
    ],
  },
  {
    id: "meihi-tensei",
    title: "メイヒテンセイ (Meihi Tensei)",
    year: 2026,
    cover: "img/albums/MeihiTensei.png",
    single: true,
    songs: [
      "メイヒテンセイ (Meihi Tensei)",
    ],
  },
  {
    id: "reconstruction",
    title: "再構創 (Reconstruction)",
    year: 2021,
    cover: "img/albums/Reconstruction.jpg",
    songs: [
      "VOLTAGE",
      "No Regret",
      "STEP BY STEP",
      "CHANGE",
      "START",
    ],
  },
  {
    id: "reconstruction-2",
    title: "再構創Ⅱ (Reconstruction II)",
    year: 2022,
    cover: "img/albums/Reconstruction2.png",
    songs: [
      "GO CRAZY",
      "RESISTANCE",
      "Utopia",
      "Again",
      "Never ending",
    ],
  },
];

// Sort.sort is stable, so albums sharing a year preserve their RAW_ALBUMS order.
export const ALBUMS = [...RAW_ALBUMS].sort((a, b) => a.year - b.year);

export function buildSongList(selectedAlbumIds) {
  const songs = [];
  const seen = new Set();
  for (const album of ALBUMS) {
    if (!selectedAlbumIds.has(album.id)) continue;
    for (const title of album.songs) {
      const key = title.trim().toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      songs.push({ title, album });
    }
  }
  return songs;
}
