BIBLE TEA — FRESH COZY APP PROTOTYPE

What works now:
- Cozy responsive Home / Bible / Bible Tea / My Bible navigation.
- All 66 Bible books and correct chapter counts in the Bible finder.
- Direct reference search (example: John 3:16).
- Bible reader loads public-domain KJV text at runtime from bible-api.com. Internet access is required.
- Verse tools: highlight, bookmark, note, and Get the Tea.
- Saved study data persists in this browser/device using localStorage.
- Genesis Bible Tea is divided into chronological sections that account for Genesis 1–50.
- Quick Tea + All the Tea.
- Existing Kayla audio is reused where a matching Genesis story already exists (Garden, Noah, Abraham, Joseph).
- Short “So, let me make sure I got this right…” check-in quiz.
- Existing 24 audio files from the rescued Work project are preserved in audio/ and detail-audio/.

Important limitations / next build:
- This is NOT yet a real cloud account system. A backend such as Supabase/Firebase is needed for sign-in and cross-device sync. The UI/data model is designed so that can be added next.
- Bible Tea content beyond Genesis is intentionally marked Tea is brewing instead of filling 65 books with shallow placeholder summaries.
- NKJV is copyrighted. This prototype uses public-domain KJV for the in-app Bible reader. A licensed NKJV provider/API can be connected later.
- New Kayla voice recordings are not generated here. Existing recordings are preserved and reused.

To publish on GitHub Pages: upload the CONTENTS of this folder so index.html is at the repository root, then enable Pages from the repository's main branch/root.
