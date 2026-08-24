# Mahmoud × Sara 💌

A little private corner of the internet, built by Mahmoud for Sara.

Plain HTML/CSS/JavaScript on the front end, a tiny Express server on the
back end. No database, no accounts, no tracking — just a personal site.

---

## 1. Install

Open the project folder in a terminal (or use the built-in terminal in
Visual Studio Code) and run:

```bash
npm install
```

## 2. Run

```bash
npm start
```

## 3. Open it

Go to:

```
http://localhost:3000
```

in your browser. On your phone, if you're testing on the same Wi-Fi
network, you can also open `http://YOUR-COMPUTER-IP:3000`.

---

## Where things live

```
mahmoud-sara/
├── package.json
├── server.js              ← tiny Express server, nothing to edit here
├── README.md               ← you're reading it
└── public/
    ├── index.html          ← page structure / sections
    ├── style.css           ← all styling (Pink Burgundy theme)
    ├── script.js           ← SITE_CONFIG + all interactivity (see below)
    ├── images/             ← real photos used on the site
    │   └── README.txt
    └── audio/               ← put our-song.mp3 here
        └── README.txt
```

---

## Everything you'll want to edit lives in `public/script.js`

Near the top of `public/script.js` there's a single object called
`SITE_CONFIG`. That's the control panel for the whole site. You don't
need to touch `index.html` or `style.css` for any of the changes below.

### Change the dates

```js
firstConversationDate: "2023-04-21", // "The beginning of our story."
relationshipStartDate: "2025-08-28", // counter counts from this one
```

Use `YYYY-MM-DD` format. The big counter ("How long have we been us?")
always counts from `relationshipStartDate`.

### Edit the letter

```js
letter: `your text here...`,
```

It's one big template string (the backticks let it span multiple lines
and multiple paragraphs — leave a blank line between paragraphs and the
site will fade each one in separately). Arabic renders right-to-left
automatically.

### Add or edit timeline moments

```js
timeline: [
  { date: "21.04.2023", title: "The first conversation", description: "..." },
  { date: "28.08.2025", title: "The day we became us", description: "..." },
  // add more milestones here, in any order you like
]
```

### Add or edit memories (photos + captions)

```js
memories: [
  {
    photo: "images/your-photo.jpg",
    title: "A short title",
    date: "whatever label you want",
    description: "A sentence or two about it."
  },
]
```

Put the actual image file in `public/images/` first, then reference its
filename here. Tapping any memory photo opens it in a full-screen
lightbox.

### Change the "Make Sara smile" messages

```js
smileMessages: [
  "Okay Sara, mission accomplished. Did you smile? 😂",
  "...",
]
```

Add as many as you like — a random one shows up each tap, and the same
message won't repeat twice in a row.

### Change "Little things I love about you"

```js
favoriteThings: [
  "ضحكتك",
  "عيونك",
  "...",
]
```

### Add the song file

Drop your own legally-owned mp3 into:

```
public/audio/our-song.mp3
```

The player will pick it up automatically. It will never autoplay —
someone has to press the play button. If the file isn't there yet, the
player just shows a small note instead of breaking.

---

## The Easter egg

There's a small hidden star near the very end of the site. Five taps on
it reveals a little secret message. No spoilers here — go find it.

---

## Notes on design

- **Pink Burgundy** (`#8F3F58` / `#682C42`) is the site's dominant color,
  used for buttons, headings, the timeline, the envelope, and the music
  player.
- Built mobile-first — it's meant to be opened on a phone first,
  with desktop as a secondary experience.
- Respects `prefers-reduced-motion` — animations quiet down automatically
  if that's enabled on the visitor's device.
- No external image hosting or stock photos — every photo on the site is
  a real uploaded photo.

---

Made with a little too much care by Mahmoud, for Sara. ❤
