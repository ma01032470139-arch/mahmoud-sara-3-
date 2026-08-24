This folder holds the site's real photos.

Currently used:
- childhood-1.jpg   → Sara as a baby (opens the "before we became us" story)
- childhood-2.jpg   → Sara as a young child, smiling (second story reveal)
- sara-collage.jpg  → collage of Sara, used in the Memories section
- sara-2.jpg        → another photo of Sara, used in Memories
- mahmoud-1.jpg     → photo of Mahmoud, used in Memories
- mahmoud-2.jpg     → second photo of Mahmoud, used in Memories

To add a new memory photo:
1. Drop the image file in this folder (e.g. new-memory.jpg).
2. Open public/script.js and find the SITE_CONFIG.memories array near the top.
3. Add a new entry:
   {
     photo: "images/new-memory.jpg",
     title: "Your title",
     date: "Whatever date/label you want",
     description: "A short sentence about the memory."
   }

That's it — the memories grid rebuilds itself from that array automatically.
