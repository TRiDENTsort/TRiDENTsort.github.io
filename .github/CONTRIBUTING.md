# Contributing

Thanks for helping keep the TRiDENT Song Sorter up to date. The most common contribution is adding a new release. This guide walks you through that, plus a few smaller edits.

## Adding a new album or mini-album

All song data lives in [`js/data.js`](../js/data.js). One album is one object in the `RAW_ALBUMS` array.

### 1. Save the cover art

Drop the cover image into `img/albums/`. Square aspect ratio is best (the UI crops to 1:1). PNG or JPG both work. Existing covers use PascalCase filenames (e.g. `BLUEDAWN.jpg`, `Reconstruction2.png`) — match that style for consistency.

### 2. Add the album entry

Open `js/data.js` and append a new object to `RAW_ALBUMS`. Order inside the array does not matter — the file sorts by `year` on export.

```js
  {
    id: "blue-dawn",
    title: "BLUE DAWN",
    year: 2024,
    cover: "img/albums/BLUEDAWN.jpg",
    songs: [
      "黎明ノ詩",
      "NEW ERA",
      "MIRACRAID",
      "恋のマジックポーション (Love's Magic Potion cover)",
      "カントリー・ロード (Country Roads cover)",
    ],
  },
```

### 3. Field rules

| Field    | Required | Notes                                                                                                                                          |
|----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------|
| `id`     | yes      | Unique across all albums. Lowercase, hyphen-separated, no spaces. Sluggified album names work well.                                            |
| `title`  | yes      | Human-readable title. Japanese OK. Include edition suffixes verbatim if relevant.                                                              |
| `year`   | yes\*    | Integer release year. Used for chronological sorting on the album-select page. Optional only on singles (see below).                           |
| `cover`  | yes      | Path relative to the repo root. The UI prepends nothing — write the full `img/albums/...` path.                                                |
| `songs`  | yes      | Array of strings, in track order. Duplicate titles across albums are de-duped automatically — only the first occurrence enters the sort.       |
| `single` | no       | Set to `true` for standalone singles. They don't get their own tile; they're bundled under the synthetic "Singles" tile. See section below.    |

### 4. Push your changes to GitHub

No code changes needed elsewhere. Push your changes to GitHub and you're done.

## Adding a single

Same as adding an album, but include `single: true` on the entry. The song still keeps its own cover (shown on the sort cards and in the results list), but it's grouped under the shared "Singles" tile on the album-select page instead of getting its own tile.

```js
  {
    id: "meihi-tensei",
    title: "メイヒテンセイ (Meihi Tensei)",
    year: 2025,
    cover: "img/albums/MeihiTensei.png",
    single: true,
    songs: [
      "メイヒテンセイ (Meihi Tensei)",
    ],
  },
```

If no entries have `single: true`, the Singles tile is hidden entirely.

## Adding songs to an existing album

Find the album in `RAW_ALBUMS` and add the song title to its `songs` array. The order you list them in is the order they appear if anyone inspects the data — it does not affect the sort.

## Renaming or removing an album

- **Rename**: change `title` and/or `cover`. Don't change `id` unless you have a reason — `id` doesn't appear in the UI.
- **Remove**: delete the object. Nothing else references it.
- **Hide temporarily**: comment the object out with `/* ... */`. Easy to re-enable.

## Fixing a song title

Just edit the string in the appropriate `songs` array. Be careful with punctuation: full-width vs. half-width characters (`（` vs. `(`), Japanese vs. English transliteration, and remix suffixes are all visible in the UI exactly as written.

## Testing locally

The site uses ES modules, which require an HTTP server (won't work via `file://`). Pick whichever is easiest:

```bash
# Python 3 (most systems have this)
python -m http.server 8000

# Node (if you have npx)
npx serve .

# PHP
php -S localhost:8000
```

Then open <http://localhost:8000>. After you change `js/data.js`, just refresh the page — there is no build step.

## Verifying your data

A quick sanity check from the command line:

```bash
node --input-type=module -e "
import { ALBUMS, buildSongList } from './js/data.js';
console.log(ALBUMS.length, 'albums');
console.log(ALBUMS.reduce((n, a) => n + a.songs.length, 0), 'songs total');
for (const a of ALBUMS) console.log(a.year ?? '----', '-', a.title, '(' + a.songs.length + ' songs)' + (a.single ? ' [single]' : ''));
"
```

If the script throws an error, you have a syntax issue in `data.js` — usually a missing comma or unclosed quote.
