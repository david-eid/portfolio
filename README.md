# David Eid portfolio

Vinext / React portfolio scaffolded with Sites.

## Run

- `npm run dev` starts the development preview.
- `npm run build` produces the deployment build.

## Required portrait

The conversation displayed David's portrait, but the image bytes were not available in the attachment directory. Only the written brief was present. The original image must be supplied before this site can be considered visually complete or published.

Expected asset: `public/images/david-eid-portrait.png`.

Use the exact supplied photo, preferably as a verified transparent cutout. Do not generate a replacement. Preserve its original proportions and appearance. Update the intrinsic image dimensions in `app/page.tsx` if the asset dimensions change.

## Content scope

Only supplied facts and project names are included. Experience, Lab, Contact, a downloadable CV, and project case studies require actual content or destination URLs. No contact address, employment history, project capabilities, or outcomes have been invented.

## Entrance

- Desktop curtain begins at 450ms; the complete sequence settles at 2500ms.
- Mobile sequence settles at 2100ms.
- Session key: `davidPortfolioIntroPlayed`.
- Reduced motion immediately displays the final state.
- Pointer depth activates after the entrance, only for fine pointers above 1024px.
- To review the entrance again, clear the session key and reload.

## Remaining acceptance checks

After the original portrait is integrated, visually inspect its alpha edges and play the entrance repeatedly. Test 1920x1080, 1600x900, 1440x900, 1366x768, 1280x800, 1024x768, 768x1024, 430x932, 393x852, 390x844, and 375x812. Verify face and hair visibility, typography overlap, CTA readability, absence of horizontal overflow, mobile menu keyboard behavior, reduced motion, and same-session return behavior.

A Sites project is registered in `.openai/hosting.json`; reuse that project for publication. It has not been published because the required portrait is missing.

## Validation completed

- TypeScript: `node node_modules/typescript/bin/tsc --noEmit` passed.
- Production: `npm run build` passed.
- Local route: `http://localhost:3000/` returned HTTP 200.
- Visual viewport and animation acceptance checks are pending the required original portrait; no completed visual QA or publication is claimed.
