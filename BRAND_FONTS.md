# Brand Typography Rule — CareReceptionist AI

## Font pair (locked, do not deviate)
- Base font: Poppins (or Inter/DM Sans if unavailable) — sans-serif, weight 400-500
- Accent font: Playfair Display (or Lora/EB Garamond) — italic serif, weight 400

## Rule
Any headline/tagline with 2 parts (statement + payoff) → split across both fonts.
- Part 1 (plain claim) = base font, normal style
- Part 2 (highlight/payoff) = accent font, ALWAYS italic

Pattern: `<span class="base">Statement.</span> <span class="accent">Payoff.</span>`

## Where to apply
- ✅ Marketing site (carereceptionistai.com) — hero, section headers
- ✅ Pitch decks / investor materials
- ✅ Social/LinkedIn graphics
- ❌ Client contracts, invoices, onboarding docs, BAA — plain, no styling. Clarity > vibes.

## CSS tokens (copy into global stylesheet)
```css
:root {
  --font-base: 'Poppins', sans-serif;
  --font-accent: 'Playfair Display', serif;
}
.text-base { font-family: var(--font-base); font-weight: 500; }
.text-accent { font-family: var(--font-accent); font-style: italic; font-weight: 400; }
```

## Google Fonts import
```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&family=Playfair+Display:ital@1&display=swap" rel="stylesheet">
```

## For decks/docs (non-web)
- Poppins → PowerPoint/Google Slides body font
- Playfair Display Italic → PowerPoint/Google Slides accent/quote font
- Both fonts install locally if exporting to PDF (avoid fallback substitution)

## Enforcement
Claude Code: when generating any marketing/deck asset, apply this pair automatically. Never introduce a 3rd font. Never use accent font non-italic.