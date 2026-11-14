# Student Science Project Websites

Companion websites for two student-built science projects. Each section explains the project and includes a prompt you can paste into any AI model or website builder (ChatGPT, Claude, Gemini, Bolt, Lovable, v0, Cursor, etc.) to recreate the website from scratch.

**Contents**
1. [AduKit — Food Adulteration Testing Kit](#1-adukit--food-adulteration-testing-kit)
2. [Air Aware — AQI Traffic-Light Model](#2-air-aware--aqi-traffic-light-model)

---

## 1. AduKit — Food Adulteration Testing Kit

A visual and video companion website for a physical **6-component food adulteration testing kit and paper manual**, inspired by [FSSAI's DART (Detect Adulteration with Rapid Test)](https://eatrightindia.gov.in/dart/).

### Project files

| File | What it does |
|---|---|
| `index.html` | The companion manual page: hero story, the 6 kit reagents with video demos, 9 everyday DART home tests, and lab safety rules. |
| `styles.css` | "Illustrated science workbook" styling using the 9-colour kit palette. |
| `script.js` | Scrollspy navigation, reading progress bar, virtual test-tube simulators, DART category filter, home detective checklist, and video frame sizing. |
| `i18n.js` | Language switcher (English / मराठी / हिंदी) with all Marathi and Hindi translations. |
| `videos/` | Folder for the local MP4 demo videos (see `videos/README.txt` for file names). |

### Languages (English / मराठी / हिंदी)

- Use the 🌐 **EN | मराठी | हिंदी** toggle in the top navbar. The choice is remembered on that browser.
- Open the site directly in a language with `?lang=mr` (Marathi) or `?lang=hi` (Hindi), e.g. `index.html?lang=mr`.
- **To change a translation:** find the element's key in `index.html` (e.g. `data-i18n="reagent_1.4"`), then edit that line in the `mr` or `hi` section of `i18n.js`. Keep any `<strong>` or `<span>` tags.
- **To add new text:** give the new element a `data-i18n` key in `index.html`, then add the same key with its Marathi and Hindi text in `i18n.js`. Missing keys fall back to English.

### Prompt to recreate AduKit

```markdown
Build a complete, responsive, single-page educational website (index.html, styles.css, script.js) that serves as a Visual & Video Companion Manual for a 6-Component Food Adulteration Testing Kit created as a student science project. The premise and testing methods are inspired by FSSAI's DART (Detect Adulteration with Rapid Test) portal (https://eatrightindia.gov.in/dart/).

## 1. Design theme and rules
- Theme: "Illustrated Science Workbook & Junior Food Detective Manual", designed to accompany a printed paper manual.
- Kid-built and approachable: clean HTML, CSS and vanilla JavaScript. Smooth hover effects, fade-in scroll animations and simple toggles; no flashy 3D/WebGL or complex gimmicks.
- No developer text on the page: no setup guides or colour legends.
- No internal scrollbars: navigation and pill bars use flex-wrap: wrap (never overflow-x: auto).
- Typography: Google Fonts 'Fredoka' for headings/badges and 'Nunito' for body text.
- Borders and shadows: 2.5px solid #23334D borders; offset shadows of 5px 5px 0 #23334D on cards and 3px 3px 0 #23334D on buttons/badges.

## 2. Colour palette (use these exact hex codes)
- #FFF9EF Warm Cream Paper: page background with a subtle dot-grid pattern.
- #FFFFFF Pure White: cards, navbar, test tube backgrounds.
- #F1F1EC Soft Stone Grey: secondary backgrounds, step boxes, sticky sub-navbar.
- #23334D Deep Navy Slate: text, borders, shadows, video frames, Bottle #6, footer.
- #E83D36 Coral Red: "Adulterated" states, Bottle #2, alert stickers.
- #FFD447 Sunny Yellow: manual callout tags, section tags, secondary buttons, Bottle #4.
- #318ED0 Science Blue: active tabs, info highlights, Bottle #1.
- #65B96B Leaf Green: primary buttons, active nav link, "Pure" states, Bottle #5.
- #F28B36 Tangerine Orange: brand badges, counters, Bottle #3.

## 3. Page structure

### A. Navigation
1. Top progress bar: fixed 5px gradient bar (#318ED0, #65B96B, #FFD447, #F28B36, #E83D36) that fills as the user scrolls.
2. Main sticky navbar: "🧪 AduKit Manual" logo with a "Junior Food Detectives" badge; links Our Story, The 6 Kit Reagents, Everyday Tests (DART), Lab Safety Rules; scrollspy highlights the active section.
3. Language switcher in the navbar: a 🌐 EN | मराठी | हिंदी toggle that translates all page text (including button states and counters), remembers the choice, supports ?lang=mr / ?lang=hi, and stays on one line with the menu in every language.
4. Secondary sticky sub-navbar: pills for the 6 reagents (1. Iodine Solution, 2. Dilute HCl, 3. Slaked Lime, 4. Milk Indicator, 5. Dye Swab Solvent, 6. Spirit & Magnet), each with a matching colour dot; scrollspy highlights the reagent in view.

### B. Hero (#our-story)
- Left: rotated yellow badge "📖 Visual Companion to Your Printed Paper Manual"; headline "Be a Food Safety Detective with Our 6-Reagent Kit!"; a story paragraph about the student team building the kit and manual (inspired by FSSAI DART) to detect hidden adulterants in 2 minutes; two cards "🚨 Why We Started This Project" and "📘 How to Use with Your Manual"; buttons "Explore the 6 Kit Reagents ↓", "🔍 9 Home Tests (No Kit Needed)" and "🖨️ Print Manual View" (window.print()).
- Right: a workbook-style video frame with red/yellow/green dots, a "⭐ Watch Our Story First!" sticker, and an HTML5 <video controls preload="metadata"> (videos/our-story-compressed.mp4 with a fallback MP4 and poster).
- Bottom: "Inside Your Kit Box" strip with 6 CSS-drawn dropper bottles (Bottle #1–#6) in the bottle colours, with symbols I₂, HCl, Ca, pH, OIL, Fe, the reagent name and target foods. Clicking a bottle scrolls to its card.

### C. The 6 kit reagents and video demos (#kit-reagents)
Six full-width cards (#reagent-1 to #reagent-6), each with:
- A colour-coded header: "Component #X", reagent name, and a "📖 Paper Manual: Page X" badge.
- Left: test title, food-tested pill, adulterant pill, numbered steps, and side-by-side "✅ Pure Sample" (green) vs "❌ Adulterated Sample" (red) result boxes.
- Right: an HTML5 video demo, plus a virtual test-tube simulator: a CSS test tube and a button (e.g. "💧 Add Iodine Drop") that changes the liquid from its pure colour to its adulterated colour, and back on reset.
- Videos must always show in full, never zoomed or cropped: fit each frame to the video's real shape (landscape or upright phone video), cap tall videos at about 70% of screen height, and fill spare space with navy bars.

The six components:
1. Tincture of Iodine Solution (#318ED0): milk, paneer, khoya, butter, ghee → starch / mashed potato. Pure stays white/yellowish; adulterated turns dark blue/black.
2. Dilute Acid Indicator, HCl/citric (#E83D36): turmeric, dal, sugar → metanil yellow dye, chalk/washing soda. Pure stays yellow with no bubbles; adulterated turns magenta-pink or fizzes.
3. Slaked Lime Reagent, soaked chuna (#F28B36): golden sella rice, tea dust → chemical turmeric polish, coal tar dye. Pure shows no red; adulterated forms bright red/orange streaks.
4. Alkaline Milk Indicator, phenolphthalein/rosolic (#FFD447): liquid milk → detergent, caustic/baking soda. Pure has thin foam and stays white; adulterated forms dense lather and turns pinkish-red.
5. Oil Solvent & White Blotting Swabs (#65B96B): bitter gourd, green chilli, peas, sweet potato, ragi → malachite green, rhodamine B. Pure swab stays white; adulterated turns bright green or pink.
6. Rectified Spirit & Test Magnet (#23334D): black pepper, tea leaves, suji/rawa → papaya seeds/light berries, iron filings. Pure pepper sinks and the magnet stays clean; papaya seeds float and iron filings stick to the magnet.

### D. Everyday foods (#other-adulteration)
FSSAI DART household tests needing no chemicals (only water, a glass, a fridge or a close look):
- "Junior Food Detective Home Challenge" banner with a live counter (0 / 9 Home Tests Completed) that updates when users click "⬜ Mark Tested" on a card.
- Category filter tabs: All Everyday Foods (9), 🥛 Milk & Oils, 🍯 Honey & Sugar, 🌶️ Salt & Spices, 🌾 Grains & Beverages.
- 9 cards (category badge, Mark Tested button, title, adulterant badge, steps, ✅ Pure vs ❌ Adulterated outcomes):
  1. Water in milk: slanting-surface drop trail test
  2. Other oils in coconut oil: 30-minute fridge solidification test
  3. Sugar syrup in honey: water-glass thread test and cotton-wick burn test
  4. Aluminium in silver leaf (chandi vark): finger-crush powder test
  5. Brick powder, sawdust and dye in chilli powder: water-glass float/streak test
  6. Iodine in kitchen salt: raw potato slice + lemon juice blue-colour test
  7. Charcoal dust on cumin (jeera): palm-rub black residue test
  8. Chicory or clay in filter coffee: cold-water float vs sink test
  9. Artificial green dye on peas and grains: 30-minute water colour test

### E. Lab safety rules (#safety-rules) and footer
- Four kid-friendly safety cards with icons and coloured top borders: 👩‍🔬 Adult Supervision First, 🚫 Never Taste Tested Food, 🧤 Keep Droppers Separate, 🧼 Wash Hands After Testing.
- Dark navy (#23334D) footer crediting the student kit project and linking to FSSAI Eat Right India (DART).
```

---

## 2. Air Aware — AQI Traffic-Light Model

A visitor guide website for a kid-made air-quality model: a traffic-light pole that senses the air with an MQ135 gas sensor and shows the result with green, yellow and red lights and a 16×2 LCD screen. The website is a standalone guide. It is **not connected** to the hardware.

### Prompt to recreate Air Aware

```markdown
Build a single self-contained responsive web page (one index.html with inline CSS and JS, no frameworks, no build step) called "Air Aware": a visitor guide for a kid-made air-quality model shown at a children's museum in Mumbai. The website is NOT connected to the hardware. All interactivity runs on the visitor's own phone or laptop.

## The product
A traffic-light pole on a base board. An MQ135 gas sensor feeds an Arduino Uno (hidden in the base), which lights one of three LEDs and shows the reading on a 16x2 LCD (line 1 "AQI: 72", line 2 a status word). Powered by a wall adapter.
- Green = Good (AQI 0–100), LCD shows "GOOD AIR"
- Yellow = Fairly good (AQI 101–200), LCD shows "FAIRLY GOOD"
- Red = Hazardous (AQI 201–500), LCD shows "HAZARDOUS!"
Keep the cut-offs in one JS constant so they're easy to change.

## Design
Playful "young inventor's science notebook": sky-blue graph-paper background, white sticker cards with thick navy outlines and offset shadows, a rounded display font (e.g. Baloo 2), a highly readable body font (e.g. Atkinson Hyperlegible) and a handwritten font for small notes. Use green/amber/red for meaning only. Mobile-first, keyboard accessible, respects reduced motion. Keep text short so visitors aren't overwhelmed.

## Page order (most important first)
1. Sticky top bar: logo + links (The lights, The model, More info, Learn more).
2. Hero: "Made by young inventors" tag, title "Air Aware", tagline "A traffic light for the air we breathe", one short intro line. Beside it, "Air Buddy": a traffic-light character whose lit lamp has a face (green smiles, yellow unsure, red frowns and wears a mask; unlit lamps look asleep). Tapping a lamp updates a speech bubble and highlights the matching card below.
3. "Which light is on? Here's what to do.": three cards (Green / Yellow / Red), each with the AQI range, a one-line verdict, three short actions, and a link that opens the matching drawer.
4. "Meet the Air Aware model": an inline SVG drawing of the pole with 3 lamps, the LCD, the sensor, the base and the power plug, with 5 numbered tappable hotspots (lights, LCD, sensor, Arduino brain, power). Each shows a short explanation and tip in a side panel with Back / Next buttons. "Show me" buttons (Clean / So-so / Bad air) switch the drawn lamp and LCD text. Below: a 3-column table (Light | The screen says | What you should do).
5. "Want to know more?": collapsible drawers, closed by default:
   - Green, Yellow and Red full tips (what it means, who should take care, what to do). Red adds an N95/N99 mask note and a "get medical help for breathlessness, chest pain, dizziness" alert.
   - Meet the parts: 5 flip cards (MQ135 "the nose", Arduino "the brain", LEDs, 16x2 LCD "the talker", adapter "the lunchbox"), each with a kid-voice front and a true fun fact on the back.
   - What can the model measure?: the MQ135 senses gases and smoke (ammonia, NOx, alcohol, benzene, CO2), not dust particles (PM2.5/PM10), so its number is a clue, not an official reading. Include India's six CPCB AQI bands (0–50, 51–100, 101–200, 201–300, 301–400, 401–500) mapped to the three lights.
6. "Learn more from official guides" (links only, open in a new tab): CPCB National AQI dashboard (app.cpcbccr.com/AQI_India), SAMEER app, SAFAR (safar.tropmet.res.in), NCDC air pollution health advisories, WHO air quality fact sheet and 2021 guidelines, PRANA / National Clean Air Programme (prana.cpcb.gov.in), CPCB (cpcb.nic.in), Maharashtra Pollution Control Board (mpcb.gov.in).
7. Footer: built by young inventors; lists the parts; says the website is a guide not connected to the model; readings are estimates; advice is general guidance, not medical advice.

Do not include quizzes, simulators, pledges, or any claim that the page shows live readings.
```

> **Before rebuilding:** replace the AQI cut-offs and the state pollution board link with your real values if they're different.                                          
