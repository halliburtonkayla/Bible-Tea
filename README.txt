Bible Drama v6

Changes:
- Kayla narration speed changed to 1.25x.
- Summary, Drama Dialogue, and Takeaway now have separate audio players.
- Creation, Adam & Eve in Eden, and Cain & Abel have newly generated 1.25x Kayla audio.
- Those three stories were rewritten in a mini-play format with Narrator and character lines.
- Added a 'Read It in the Bible' tab to every story showing the Scripture reference and a link to open the passage online.
- Bible text is not reproduced inside the package; the site directs readers to the full passage.
- Other stories keep their existing content while awaiting the same mini-play/audio treatment.

Finishing pass (October 2026)
- Preserves all 97 existing dramatic retellings and connects the existing
  introductions for all 66 books. A book introduction is not a completed
  chapter-by-chapter or dramatic story collection.
- index.html loads drama-data.js, book-intros.js, main.js and finishing.css.
  Keep these together when hosting; there is no build step.
- Stories have keyboard-accessible buttons and shareable ?story=title-slug links.
  The native dialog supports Escape, focus return, Back/Forward and audio pause
  when switching sections or closing. Recordings display a useful error state.
- story.html restores the existing full-length legacy stories. Local MP3 files
  were absent from the repository, so legacy pages no longer offer broken players.
- Scripture links open NKJV passages on Bible Gateway; this repository does not
  reproduce the complete translation.

Development and checks
- Install Node.js 22 or newer, then run npm ci.
- npm run check: syntax checks for the current homepage and story reader.
- npm test: data, DOM, search, modal and legacy-link regression checks.
- npx playwright install chromium; npm run test:browser: real desktop/mobile
  browser checks. Set CHROMIUM_PATH if using an existing Chromium executable.
- Serve the repository using any static web server, for example
  python3 -m http.server 8000, and visit http://localhost:8000.

Still outstanding
- Only three of the 97 retellings have section recordings in this repository.
  No new voice audio has been generated in this finishing pass.
- Individual retellings for the remaining 36 books and fuller editorial review
  are still needed for the original all-books storytelling ambition.
- No build pipeline, publication, merge, or deployment is included in this pass.
