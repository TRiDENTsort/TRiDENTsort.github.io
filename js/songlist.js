const RAW_ALBUMS = [
  {
    id: "advance-generation",
    title: "ADVANCE GENERATION",
    year: 2021,
    cover: "img/albums/AdvanceGeneration.jpg",
    songs: [
      { title: "Opening -the return of us-" },
      { title: "JUST FIGHT" },
      { title: "IMAGINATION" },
      { title: "RIDE ON" },
      { title: "SURVIVOR" },
      { title: "Dystopia" },
      { title: "Ambivalent" },
      { title: "Brand New World" },
      { title: "Continue" },
      { title: "Supernova" },
      { title: "Re:ply" },
      { title: "Last Hope" },
    ],
  },
  {
    id: "blue-dawn",
    title: "BLUE DAWN",
    year: 2025,
    cover: "img/albums/BLUEDAWN.jpg",
    songs: [
      { title: "黎明ノ詩", translation: "Poem of the Dawn" },
      { title: "NEW ERA" },
      { title: "MIRACRAID" },
      { title: "恋のマジックポーション", translation: "Love's Magic Potion cover" },
      { title: "カントリー・ロード", translation: "Country Roads cover" },
    ],
  },
  {
    id: "continue",
    title: "Continue / To be Continued...",
    year: 2020,
    cover: "img/albums/Continue.jpg",
    songs: [
      { title: "Continue" },
      { title: "Last Hope" },
      { title: "CHANGE" },
      { title: "シリアスゲーム", translation: "Serious Game" },
      { title: "Continue ～Instrumental～" },
    ],
  },
  {
    id: "d-x",
    title: "D-X",
    year: 2022,
    cover: "img/albums/D-X.jpg",
    songs: [
      { title: "CRY OUT" },
      { title: "DISCORD" },
      { title: "Spoopy" },
      { title: "Answer" },
      { title: "シグナル", translation: "Signal" },
    ],
  },
  {
    id: "dream-up",
    title: "Dream Up",
    year: 2023,
    cover: "img/albums/DreamUp.jpg",
    songs: [
      { title: "KICKASS" },
      { title: "Repaint" },
      { title: "twinkle" },
      { title: "エンドロール", translation: "Endroll" },
      { title: "NEO FUTURE" },
    ],
  },
  {
    id: "dux",
    title: "DUX",
    year: 2024,
    cover: "img/albums/DUX.png",
    songs: [
      { title: "Opening -follow the DUX-" },
      { title: "KICKASS" },
      { title: "iCON" },
      { title: "Haha!" },
      { title: "twinkle" },
      { title: "NEO FUTURE" },
      { title: "be with you" },
      { title: "Nocturne" },
      { title: "U" },
      { title: "Bite the bullet" },
      { title: "CRY OUT" },
      { title: "シグナル", translation: "Signal" },
    ],
  },
  {
    id: "over-ground",
    title: "OVER GROUND",
    year: 2021,
    cover: "img/albums/Overground.png",
    songs: [
      { title: "DISTINATION" },
      { title: "After rain" },
      { title: "Think of" },
    ],
  },
  {
    id: "spice-x",
    title: 'spice "X"',
    year: 2024,
    cover: "img/albums/SpiceX.jpg",
    songs: [
      { title: "SPICE!" },
      { title: "Bite the bullet" },
      { title: "Nocturne" },
      { title: "iCON" },
      { title: "be with you" },
    ],
  },
  {
    id: "under-ground",
    title: "UNDER GROUND",
    year: 2021,
    cover: "img/albums/Underground.jpg",
    songs: [
      { title: "Alive" },
      { title: "Wake up !!!" },
      { title: "VS" },
    ],
  },
  {
    id: "meihi-tensei",
    title: "メイヒテンセイ (Meihi Tensei)",
    year: 2026,
    cover: "img/albums/MeihiTensei.png",
    isSingle: true,
    songs: [{ title: "メイヒテンセイ)", translation: "Meihi Tensei" }],
  },
  {
    id: "reconstruction",
    title: "再構創 (Reconstruction)",
    year: 2021,
    cover: "img/albums/Reconstruction.jpg",
    songs: [
      { title: "VOLTAGE" },
      { title: "No Regret" },
      { title: "STEP BY STEP" },
      { title: "CHANGE" },
      { title: "START" },
    ],
  },
  {
    id: "reconstruction-2",
    title: "再構創Ⅱ (Reconstruction II)",
    year: 2022,
    cover: "img/albums/Reconstruction2.png",
    songs: [
      { title: "GO CRAZY" },
      { title: "RESISTANCE" },
      { title: "Utopia" },
      { title: "Again" },
      { title: "Never ending" },
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
    for (const song of album.songs) {
      const key = song.title.trim().toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      songs.push({ title: song.title, translation: song.translation, album });
    }
  }
  return songs;
}
