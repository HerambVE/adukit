# AduKit — Food Adulteration Testing Kit Companion Website

A visual and video companion website for a physical **6-Component Food Adulteration Testing Kit & Paper Manual**, inspired by [FSSAI's DART (Detect Adulteration with Rapid Test)](https://eatrightindia.gov.in/dart/).

## Project Files
- `index.html` — Main companion manual webpage (Hero Story, 6 Kit Reagents & Video Demos, 9 Everyday DART Home Tests, Lab Safety Rules).
- `styles.css` — Custom "Illustrated Science Workbook" styling using the 9-color kit palette (`#E83D36`, `#FFD447`, `#318ED0`, `#65B96B`, `#F28B36`, `#23334D`, `#FFF9EF`, `#FFFFFF`, `#F1F1EC`).
- `script.js` — Dual Scrollspy navigation, top reading progress bar, interactive virtual test-tube reaction simulators, DART category filter, and Home Detective checklist counter.
- `videos/` — Folder for local compressed MP4 demo videos.

---

## Prompt to Recreate This Website from Scratch

Copy and paste the prompt below into any AI website builder or coding assistant (ChatGPT, Claude, Gemini, Bolt, Lovable, v0, Cursor, etc.) to recreate a similar website from scratch:

```markdown
Build a complete, responsive, single-page educational website (`index.html`, `styles.css`, and `script.js`) that serves as a **Visual & Video Companion Manual for a 6-Component Food Adulteration Testing Kit** created as a student science project. The premise and testing methodologies are inspired by FSSAI’s DART (Detect Adulteration with Rapid Test) portal (https://eatrightindia.gov.in/dart/).

### 1. Design Theme, Aesthetic & Strict Rules
- **Theme**: "Illustrated Science Workbook & Junior Food Detective Manual"—designed to accompany a physical printed paper manual.
- **Keep it Kid-Built & Approachable**: Use clean HTML, CSS, and vanilla JavaScript. Use smooth CSS hover effects, fade-in scroll animations, and simple interactive toggles, but avoid overly flashy 3D/WebGL or complex moving gimmicks.
- **No Meta/Developer Text**: Do NOT include any developer instructions, setup guides, or color palette legends on the visible webpage.
- **No Internal Scrollbars**: Navigation bars and pill bars must use `flex-wrap: wrap` (never `overflow-x: auto`) so no unwanted scrollbars appear inside headers or containers.
- **Typography**: Google Fonts `'Fredoka'` for headings/badges and `'Nunito'` for body text.
- **Borders & Shadows**: Use crisp `2.5px solid #23334D` borders and tactile offset workbook shadows (`5px 5px 0px #23334D` on cards, `3px 3px 0px #23334D` on buttons/badges).

### 2. Mandatory 9-Color Palette (Use These Exact Hex Codes)
- `#FFF9EF` (Warm Cream Paper): Main page background with a subtle radial dot-grid notebook pattern.
- `#FFFFFF` (Pure White): Main cards, navbar background, and test tube backgrounds.
- `#F1F1EC` (Soft Stone Grey): Secondary section backgrounds, step-by-step instruction boxes, and sticky sub-navbar.
- `#23334D` (Deep Navy Slate): Primary text, borders, offset card shadows, video frame background, Bottle #6 theme, and footer.
- `#E83D36` (Coral Red): "Adulterated" warning states, Bottle #2 header/theme, and alert stickers.
- `#FFD447` (Sunny Yellow): Paper manual callout tags, section tags, secondary buttons, and Bottle #4 header/theme.
- `#318ED0` (Science Blue): Active category tabs, info highlights, and Bottle #1 header/theme.
- `#65B96B` (Leaf Green): Primary CTA buttons, active main nav link, "Pure" safe result states, and Bottle #5 header/theme.
- `#F28B36` (Tangerine Orange): Brand badges, interactive counters, and Bottle #3 header/theme.

---

### 3. Page Structure & Required Sections

#### A. Dual Sticky Navigation with Scrollspy + Top Reading Progress Bar
1. **Top Progress Bar**: Fixed 5px bar at the very top of the viewport with a gradient (`#318ED0`, `#65B96B`, `#FFD447`, `#F28B36`, `#E83D36`) that fills as the user scrolls.
2. **Main Sticky Navbar**:
   - Brand logo on the left: `🧪 AduKit Manual` with a `"Junior Food Detectives"` badge.
   - Navigation links on the right: `Our Story`, `The 6 Kit Reagents`, `Everyday Tests (DART)`, and `Lab Safety Rules`.
   - **Scrollspy**: Automatically highlights the active section link as the user scrolls.
3. **Secondary Sticky Sub-Navbar (6 Kit Bottles Tracker)**:
   - Sits right below the main navbar and lists pills for all 6 reagents (`1. Iodine Solution`, `2. Dilute HCl`, `3. Slaked Lime`, `4. Milk Indicator`, `5. Dye Swab Solvent`, `6. Spirit & Magnet`), each with a colored dot matching its bottle color.
   - **Scrollspy**: Highlights the specific reagent pill currently in view as the user scrolls through the 6 reagent cards.

#### B. Section 1: Hero Section (`#our-story`)
- **Left Column**:
  - A rotated yellow badge: `"📖 Visual Companion to Your Printed Paper Manual"`.
  - Headline: `"Be a Food Safety Detective with Our 6-Reagent Kit!"`
  - Story paragraph explaining that a team of student innovators built this physical kit and paper manual (inspired by FSSAI DART) to help families detect hidden food adulterants in 2 minutes.
  - Two mini highlight cards: `"🚨 Why We Started This Project"` and `"📘 How to Use with Your Manual"`.
  - Action buttons: `"Explore the 6 Kit Reagents ↓"`, `"🔍 9 Home Tests (No Kit Needed)"`, and `"🖨️ Print Manual View"` (`window.print()`).
- **Right Column (Hero Video Player)**:
  - Styled like a science workbook frame with red/yellow/green dots, a `"⭐ Watch Our Story First!"` sticker, and an HTML5 `<video controls preload="metadata">` player (`videos/our-story-compressed.mp4` with a fallback sample MP4 and poster image).
- **Bottom of Hero ("Inside Your Kit Box" Strip)**:
  - A 6-column grid displaying **6 CSS-illustrated dropper bottles** (`Bottle #1` to `Bottle #6`), color-coded with the palette (`#318ED0`, `#E83D36`, `#F28B36`, `#FFD447`, `#65B96B`, `#23334D`), chemical symbols (`I₂`, `HCl`, `Ca`, `pH`, `OIL`, `Fe`), reagent name, and target foods. Clicking any bottle smoothly scrolls to that reagent's card.

#### C. Section 2: The 6 Kit Reagents & Video Demonstrations (`#kit-reagents`)
Create 6 detailed, full-width horizontal cards (`#reagent-1` to `#reagent-6`).
Each card must have:
- A color-coded header bar with `Component #X`, Reagent Name, and a `"📖 Paper Manual: Page X"` badge.
- **Left Column**:
  - Test title, food tested pill, and adulterant detected pill.
  - Numbered step-by-step testing method box.
  - Side-by-side **DART Result Comparison Boxes**: `✅ Pure Sample` (green-tinted) vs. `❌ Adulterated Sample` (red-tinted).
- **Right Column**:
  - Dedicated HTML5 `<video controls preload="metadata">` demo player for that reagent.
  - **Interactive Virtual Test Tube Simulator**: A dashed box containing a CSS test tube filled with colored liquid and a button (e.g., `"💧 Add Iodine Drop"`). Clicking the button animates the liquid color inside the CSS test tube from its Pure color to its Adulterated reaction color (and toggles back on reset).

Use these exact 6 Kit Components:
1. **Component #1: Tincture of Iodine Solution (`#318ED0`)** — Tests Milk, Paneer, Khoya, Butter & Ghee for **Starch / Mashed Potato** (Pure: stays white/yellowish; Adulterated: turns dark blue/black).
2. **Component #2: Dilute Acid Indicator - HCl/Citric (`#E83D36`)** — Tests Turmeric Powder, Dal & Sugar for **Metanil Yellow Dye & Chalk/Washing Soda** (Pure: stays yellow / no bubbles; Adulterated: turns magenta-pink or fizzes).
3. **Component #3: Slaked Lime Reagent - Soaked Chuna (`#F28B36`)** — Tests Golden Sella Rice & Tea Dust for **Chemical Turmeric Polish & Coal Tar Dye** (Pure: no red color; Adulterated: forms bright red/orange streaks).
4. **Component #4: Alkaline Milk Indicator - Phenolphthalein/Rosolic (`#FFD447`)** — Tests Liquid Milk for **Synthetic Detergent & Caustic/Baking Soda** (Pure: thin foam, stays white; Adulterated: dense soapy lather & turns pinkish-red).
5. **Component #5: Oil Solvent & White Blotting Swabs (`#65B96B`)** — Tests Bitter Gourd, Green Chilli, Peas, Sweet Potato & Ragi for **Malachite Green & Rhodamine B Dyes** (Pure: swab stays clean white; Adulterated: swab turns bright green or pink).
6. **Component #6: Rectified Spirit & High-Strength Test Magnet (`#23334D`)** — Tests Black Pepper, Tea Leaves & Suji/Rawa for **Papaya Seeds/Light Berries & Iron Filings** (Pure: pepper sinks, magnet stays clean; Adulterated: papaya seeds float, iron filings stick to magnet).

#### D. Section 3: Common Adulteration in Other Everyday Foods (`#other-adulteration`)
Modeled on FSSAI DART's household tests that require **no chemicals** (only water, a glass, a refrigerator, or visual inspection):
- **Interactive "Junior Food Detective Home Challenge" Banner**: Shows a live counter (`0 / 9 Home Tests Completed`) that updates when users click the `"⬜ Mark Tested"` toggle button on any card.
- **Category Filter Tabs**: `All Everyday Foods (9)`, `🥛 Milk & Oils`, `🍯 Honey & Sugar`, `🌶️ Salt & Spices`, `🌾 Grains & Beverages`.
- **9 DART Cards Grid** (each showing Category badge, `"⬜ Mark Tested"` button, Title, Adulterant badge, Steps, and `✅ Pure` vs `❌ Adulterated` outcomes):
  1. Water in Milk (Slanting surface drop trail test)
  2. Other Oils in Coconut Oil (30-minute refrigerator solidification test)
  3. Sugar Syrup in Honey (Water glass thread test & cotton wick burn test)
  4. Aluminium Foil in Silver Leaf / Chandi Vark (Finger crush powder test)
  5. Brick Powder, Sawdust & Dye in Chilli Powder (Water glass float/streak test)
  6. Checking Iodine in Kitchen Salt (Raw potato slice + lemon juice blue color test)
  7. Charcoal Dust on Cumin Seeds / Jeera (Palm rub black residue test)
  8. Chicory Powder or Clay in Filter Coffee (Cold water surface float vs. sink test)
  9. Artificial Green Dye on Green Peas & Grains (30-minute water standing color separation test)

#### E. Section 4: Lab Safety Rules (`#safety-rules`) & Footer
- 4 kid-friendly safety cards with icons and colored top borders:
  1. `👩‍🔬 Adult Supervision First`
  2. `🚫 Never Taste Tested Food`
  3. `🧤 Keep Droppers Separate`
  4. `🧼 Wash Hands After Testing`
- Dark navy (`#23334D`) footer crediting the Student Food Adulteration Detection Kit project and linking to FSSAI Eat Right India (DART).
```
