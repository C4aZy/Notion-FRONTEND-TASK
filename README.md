# Notion Club Workshop — VIT Bhopal

Event landing page for the Notion Club Workshop hosted at VIT Bhopal on **23rd July 2026**.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | Page structure and content |
| `styles.css` | All styling and layout |
| `script.js` | Countdown timer and registration form logic |

---

## index.html

The main HTML file. It is divided into these sections:

- **Navbar** — Sticky top navigation with links to each section and a Register Now button.
- **Hero** — Event title, tagline, date/time/venue meta, and the workshop poster image (`Notion_workshop.png`).
- **Countdown** — Live countdown timer to the event start time (23rd July 2026, 10:00 AM).
- **Announcements** — Three cards covering Event Details, Rules & Instructions, and Venue & Platform.
- **Schedule** — Full day timeline from 9:00 AM to 4:00 PM.
- **Speakers & Guests** — Speaker cards plus the Organizing Team list.
- **FAQ** — Eight collapsible questions using native `<details>`/`<summary>` elements.
- **Footer** — Brand info, nav links, registration CTA, and copyright line.
- **Registration Modal** — Overlay form triggered by any "Register Now" button.

> The poster image `Notion_workshop.png` must be placed in the same folder as `index.html` for it to display correctly.

---

## styles.css

All visual styling for the page. Key design decisions:

- **Fonts** — [Playfair Display](https://fonts.google.com/specimen/Playfair+Display) (headings, italic serif), [Syne](https://fonts.google.com/specimen/Syne) (body/UI), [DM Mono](https://fonts.google.com/specimen/DM+Mono) (timestamps/labels). Loaded from Google Fonts.
- **Color palette** — Warm parchment/cream backgrounds (`--bg`, `--bg-section`) with deep ink tones (`--primary`) and antique gold (`--accent: #c9a84c`) as the highlight color.
- **CSS variables** — All colors, radii, shadows, and fonts are defined as custom properties in `:root` for easy theming.
- **Responsive** — Three breakpoints: `1024px` (tablet), `768px` (mobile), `480px` (small mobile). The navbar hides links below 768px.

### CSS Variable Reference

```css
--primary        /* Deep ink black — #0e0c0a */
--accent         /* Antique gold — #c9a84c */
--bg             /* Warm parchment — #faf7f2 */
--bg-section     /* Slightly deeper cream — #f3ede0 */
--bg-white       /* Pure white — #ffffff */
--text           /* Body text — #0e0c0a */
--text-mid       /* Secondary text — #5a5248 */
--text-muted     /* Muted/placeholder text — #9e9790 */
--border         /* Dividers and card borders — #e0d8cc */
--font-body      /* 'Syne' */
--font-display   /* 'Playfair Display' */
--font-mono      /* 'DM Mono' */
```

---

## script.js

Contains two functions:

### `updateCountdown()`
Runs every second via `setInterval`. Calculates the difference between now and the event date (`July 23, 2026 10:00:00`) and updates the `#days`, `#hours`, `#minutes`, and `#seconds` elements. Replaces the countdown grid with "Workshop Started!" once the date has passed.

### `submitRegistration()`
Called when the registration form is submitted. Validates that all five fields (Full Name, Email, Phone, College, Role) are filled in. On success it shows a confirmation alert, clears the form, and closes the modal. On failure it prompts the user to complete all fields.

---

## Usage

No build step or dependencies needed. Just open `index.html` in a browser.

```
notion/
├── index.html
├── styles.css
├── script.js
└── Notion_workshop.png
```

An internet connection is required on first load for Google Fonts to render correctly. The page works offline but will fall back to system fonts.

---

## Customisation

- **Change the event date** — Edit the date string on line 1 of `script.js`.
- **Update speakers or schedule** — Edit the relevant sections directly in `index.html`.
- **Swap the accent color** — Change `--accent` in the `:root` block of `styles.css`.
- **Replace the poster** — Swap out `Notion_workshop.png` with any image of the same name (or update the `src` in the hero section of `index.html`).
