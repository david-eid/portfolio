# David Eid — engineering portfolio

Cinematic, full-screen introduction with dedicated About, Experience, Projects, Expertise and Contact routes. The latest supplied professional brief is the content source of truth.

## Development

- `npm install`
- `npm run dev` — local preview on port 3000
- `npm run build` — strict TypeScript check and production build
- `npm run start` — preview the production build

React, TypeScript, Vite, React Router, Tailwind CSS and lucide-react. The existing repository, reusable UI primitives, original portrait, verified cutout and Sites project are retained. The previous Vinext page entry was adapted to the explicitly requested React Router architecture; no new project was scaffolded.

## Content and destinations

- `app/data/projects.ts`: six project records, objectives, system overviews and technical details.
- `app/data/experience.ts`: OSITCOM, EURISKO, NEXORA AI and EID Real Estate. Technical roles are presented newest start first; real estate follows technical experience.
- `app/data/skills.ts`, `certifications.ts`, `education.ts`: structured capabilities and supplied credentials.
- `app/config/profile.ts`: public contact destinations.

LinkedIn uses the exact user-supplied profile slug. External LinkedIn fetching was unavailable, so independent availability verification is not claimed. Email uses `davideid2004@icloud.com` from the profile config. GitHub and CV remain empty and are omitted from the interface. Add verified values here to reveal their links. Project GitHub/demo URLs and screenshots are optional and render only when supplied. No customers, adoption figures, outcomes, statistics or additional responsibilities were invented.

Certifications retain the supplied issuer relationship: the AI-102 entry is Udemy training, not a Microsoft-issued certification; the hackathon entry says Guinness World Record Participant.

## Portrait and visuals

The homepage uses the supplied eight-second portrait video through a native HTML video element, with muted autoplay, looping, inline mobile playback and no controls. The square frame uses `object-fit: contain` so the site never crops the head or shoulders. The introduction sits beside the portrait on desktop and below it on phones.

Web assets live in `public/media/`: a 960px H.264 MP4 (1.09 MB), a 640px mobile MP4 (381 KB), and a first-frame WebP poster (44 KB). Both videos have no audio track and use fast-start metadata. The poster is preloaded and remains visible while playback loads or autoplay is unavailable. Reduced-motion visitors receive the still image without downloading video; changing the preference updates the hero immediately. Playback pauses offscreen or in a hidden tab.

To regenerate from the supplied source using FFmpeg:

```sh
ffmpeg -i source.mp4 -an -vf "scale=960:960,fps=24" -c:v libx264 -preset slow -crf 25 -pix_fmt yuv420p -movflags +faststart public/media/david-eid-portrait.mp4
ffmpeg -i source.mp4 -an -vf "scale=640:640,fps=24" -c:v libx264 -preset slow -crf 27 -pix_fmt yuv420p -movflags +faststart public/media/david-eid-portrait-mobile.mp4
ffmpeg -i source.mp4 -frames:v 1 -c:v libwebp -quality 85 public/media/david-eid-poster.webp
```

The original cutout remains in use on the About section.

Project media are original code-native conceptual illustrations, labeled accordingly. They are not product screenshots. The DE mark is an original geometric SVG. Inter and basis33 load from the font URLs provided in the brief, with local system fallbacks. No social-preview image was requested or added.

## Routing and deployment

Routes: `/`, `/about`, `/experience`, `/projects`, `/expertise`, `/contact`, plus six `/projects/:slug` case studies. Unknown routes show a useful not-found page.

The build emits `dist/client/index.html` and route-specific HTML entry files with page/project SEO metadata. The application uses React Router for navigation and resets scroll/focus on route changes. The output is static; no backend or contact-form delivery is required. `.openai/hosting.json` keeps the existing project ID and points to `dist/client`.

The earlier automatic approval review rejected uploading source to the private Sites repository without explicit authorization for that transfer. No source push or publication has been performed for this version. Publishing remains pending that approval.

## Validation

- Strict TypeScript and production build passed.
- Targeted lint passed for the application, portfolio components and Vite configuration.
- 50 viewport/route layout checks: all 13 routes at desktop, tablet and mobile sizes, plus 11 additional home viewport sizes, including 320×568 and short landscape.
- No horizontal overflow; hero fills the first viewport, with selected work accessible by normal scrolling.
- Desktop/tablet/mobile screenshots inspected; short landscape portrait adjusted to clear navigation.
- Desktop and mobile links, direct project reload, missing-project fallback, experience disclosures, keyboard focus trapping, Escape, focus return and route focus tested.
- Reduced motion and session-based intro skipping tested.
- Browser checks recorded zero runtime errors, console errors and failed requests.
- Production dependency audit reported zero vulnerabilities.

Local QA scripts, screenshots and reports are under `work/hero-qa/` (ignored). The previous whole-site test had a transient focus-guard timing assertion; a focused test confirmed correct keyboard trapping, and the test now waits for focus to settle. Production verification records the final result separately in `production-report.json`.

## Current homepage sequence

Hero ? 01 Selected Work ? 02 Experience ? 03 About ? 04 Expertise ? 05 Education / Certifications ? 06 Contact.

The first three projects use large editorial panels; the remaining three use a smaller layout. Both hero controls lead to Projects. Existing case-study routes remain available. Expertise supports hover, keyboard activation and tap. Six certifications are highlighted, with four more available through the expand control. Contact uses the shared profile email.

The September 14 editorial update passed the production build, focused lint, and browser checks at 1440px, 393px and 320px. Verified section order, project routes, certification expansion, expertise controls, navigation, wheel input, simulated mobile swipe and no intro auto-scroll. No browser console or runtime errors were recorded. Local QA scripts are in `work/hero-qa/editorial-qa.mjs` and `work/hero-qa/editorial-scroll.mjs`.


## September 25 portrait video validation

Production build and targeted lint passed. Browser checks covered 1440x900, 1920x1080, 768x1024, 393x852, 320x568 and 844x390: muted inline autoplay, looping, responsive source selection, square uncropped media, non-overlapping layout and no horizontal overflow. Reduced-motion checks confirmed a loaded poster and zero MP4 requests, including live preference changes. The hero project link and media failure poster were checked. Screenshots and the local Playwright script are in the ignored `work/hero-qa/` directory.

Preview with `npm install` then `npm run dev` and open http://127.0.0.1:3000/. For a production preview, run `npm run build` then `npm run start` (stop the dev server first).
