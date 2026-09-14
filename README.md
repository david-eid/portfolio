# David Eid portfolio

Existing Vinext / React portfolio, continued without redesign.

## Run

- `npm run dev` starts the local preview.
- `npm run build` creates the deployment build.

## Portrait

The hero uses `public/images/david-eid-portrait-cutout.png`, a 1254 × 1254 RGBA PNG. It combines the original photograph with the alpha channel of the existing portrait mask. All RGB pixels match the original photograph exactly; no generated replacement is used. The original photo and mask remain available alongside it.

The built-in image tool was tried twice with background-extraction prompts requiring genuine transparency and unchanged identity. Both outputs contained a painted checkerboard, so they were rejected. The user explicitly authorized local combination of the original photograph and existing mask instead.

## Entrance

Black screen → DE / David Eid → upward curtain → ENGINEER → opaque portrait rises from below → identity and roles → Explore work → scroll cue.

- Desktop curtain starts at 450ms; the sequence settles at 2600ms.
- Mobile curtain starts at 300ms; the sequence settles at 2100ms.
- The cutout is decoded before starting the timeline.
- Session key: `davidPortfolioIntroPlayed`; clear it and reload to replay.
- Reduced motion shows the final state immediately.
- Pointer depth activates after the entrance for fine pointers above 1024px.
- Portrait stays opaque and above ENGINEER throughout its rise.

## Validation — September 14, 2026

TypeScript and production build passed. Existing headless Edge checks passed at 1920×1080, 1600×900, 1440×900, 1366×768, 1280×800, 1024×768, 768×1024, 430×932, 393×852, 390×844, and 375×812. Verified face and hair bounds, name separation, CTA bounds, no horizontal overflow, desktop/mobile entrance movement, opaque portrait, same-session replay skipping, mobile navigation and reduced motion. Reviewed viewport and animation timeline screenshots in `work/hero-qa/screenshots`.

Oversized ENGINEER remains intentionally cropped symmetrically on narrow screens, as in the existing design. Browser preview handoff was unavailable; headless verification completed.

## Content scope

Existing project names and supplied biographical facts are preserved. Experience, Lab, Contact, CV and project case studies still need actual content or destination URLs. No facts or links were invented.

Reuse the existing Sites project in `.openai/hosting.json`.
