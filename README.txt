BIBLE TEA — COMPLETE WEBSITE EXPORT
That One Extra Mama / Kayla Halliburton
Updated September 26, 2026

OPEN THE WEBSITE
Unzip the entire folder, then open index.html in a web browser.
Keep the folders and filenames together. No npm install or build is needed.
For public hosting, upload everything in this folder to a static website host.
A simple local server is also supported: python3 -m http.server 8000
Then visit http://localhost:8000 in your browser.

WHAT IS INCLUDED
- The pink, white, and gold book/journal homepage.
- All 66 Bible book index tabs in biblical order.
- 66 written book introductions, each with Quick Tea and All the Tea.
- The original 12 Bible Tea stories and their full text.
- All 24 original custom-voice MP3s: 12 short and 12 full-story recordings.
- Previous Tea / Next Tea through 78 entries, one entry at a time.
- The original story collection at stories.html.
- Compatibility with existing story.html?story=... links.
- Earlier Genesis chapter drafts in journey-data.js, retained for editing.
  These drafts are not currently presented as finished narrated stories.

CONTENT COVERAGE
This is not a completed chapter-by-chapter retelling of all 66 books.
Every book has a written introduction. The 12 original narrated stories cover
selected passages from Genesis through Joshua 10. New introductions do not
have custom voice audio yet; the website labels them clearly.
The original story content and all original MP3 files were preserved.
Bible passage links go to Bible Gateway and require an internet connection.
The local text, styling, navigation, and included audio do not require a CDN.

EDITING GUIDE
index.html: book layout, branding, About Kayla, and The heart.
journal.css: pink/white/gold styling and mobile layouts.
journal.js: routing, index tabs, reading views, Previous/Next, and audio.
book-intros.js: all 66 written book introductions.
stories-data.js: original short stories and full story text used by the journal.
details.json: preserved original full-story dataset.
journey-data.js: book names/chapter counts and earlier Genesis chapter drafts.
stories.html: preserved original collection design and original audio controls.
story.html: compatibility entry point for original full-story links.
audio/: original Quick Tea MP3 recordings.
detail-audio/: original All the Tea MP3 recordings.

To change a narrated story, edit its text in stories-data.js and generate a
matching replacement recording. Keep the audio path in sync. Editing words
alone does NOT change an MP3. details.json and stories.html also preserve the
old collection; update those when changing material there.
To add a new narrated story, add its Quick Tea entry to ORIGINAL_STORIES and
its matching full text to FULL_STORIES in stories-data.js. Match the ID to the
MP3 filename and place its recordings in audio/ and detail-audio/.
The reference must begin with the canonical Bible book name plus a space.
The journal inserts each book's stories in their dataset order, so keep that
order aligned with the chapters. Book introductions are separate from stories.

VOICE SYSTEM AND TRANSFER
The existing recordings were generated with HeyGen using the private custom
voice named "Kayla Bible Tea". The voice status was confirmed complete.
Voice ID: f899ffc0da0c402b8701e1f4645ed1a5
The pace is already baked into the existing MP3s; they are unchanged.
The website plays ordinary MP3 files using the browser's HTML audio element.
It does not call HeyGen while a visitor listens, and it does not substitute
browser text-to-speech or a generic narrator.

YES: the generated voice recordings transfer with this export and can play
on a different host without a live HeyGen connection.
NO: this ZIP does not contain the trained voice model or clone itself.
The private voice remains in the HeyGen account. To make new recordings,
use that account/voice (subject to its available features and credits), then
add the resulting audio files to the website. The export cannot synthesize
new speech by itself. No API keys, account tokens, or original voice-training
sample are included.

CHECKS AND LIMITS
All 24 audio files were compared with the existing version and are unchanged.
Navigation, all book destinations, text views, and local asset paths were
checked programmatically. Responsive rules cover narrow phones and tablets.
A real browser/mobile visual check was unavailable in this environment;
review the live site on your phone before relying on its final layout.
No cinematic scenes, emoji animations, or page-turn animations were added.
