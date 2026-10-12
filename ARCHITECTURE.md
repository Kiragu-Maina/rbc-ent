# Implementation decisions

The site uses Next.js App Router, React 19 and strict TypeScript. The design originally ran through the Sites Vinext starter; this repository uses ordinary Next.js and a standalone Node server. Docker Compose preserves the existing external port 4077. Vercel can import the repository with Root Directory set to site. Keep the provided package lock.

`site/lib/content.ts` is the central business/content model. Shared layout and navigation live in `site/components/site.tsx`; the small shared arrow component is isolated from client navigation. `site/components/interactions.tsx` contains the menu, service index, systems explorer and delivery tabs. `site/components/systems.tsx` is original vector geometry. Styling and responsive tokens live in `site/app/globals.css`.

Server-rendered content remains readable on first load. Only interaction components require hydration. The hero uses CSS/SVG, not a canvas/WebGL runtime. There are no animation libraries, component-library themes, external font requests, analytics scripts or CMS subscriptions. Unused starter UI components and application dependencies were removed; the repository excludes Sites-specific hosting modules, credentials and project identity.

The contact endpoint shares its validation module with the client. It enforces bounded fields, consent, same-origin submissions, a honeypot, an elapsed-time check and a request-size limit. A configured HTTPS webhook accepts an enquiry server-side. Bearer credentials stay server-side. Only an accepted upstream response produces a success state. No database or enquiry queue exists in this build; dependable delivery and abuse controls must be configured at the upstream service.

Unconfigured forms prepare a mailto draft locally. The visitor opens, reviews and sends the draft in their email client; preparation is never described as successful delivery. Mailto handling depends on the visitor having an email application configured. Long drafts can encounter client-specific mailto limits, so direct email remains visible.

Approved case studies are filtered by `approved`. Missing or unapproved slugs return the 404 page. Insights are modelled but intentionally withheld until genuine editorial content exists. A file-based content layer fits the current publishing needs; a CMS can be added if nontechnical editors need frequent updates. No paid CMS is necessary.

Accessibility includes semantic regions, skip navigation, explicit field labels, visible focus, associated errors, live status, mobile dialog focus management, arrow-key delivery tabs and reduced motion. The conceptual system has a text explanation and a distinct mobile layout. These are implementation measures, not a claim of certified WCAG conformance.

The Docker build copies Next.js standalone output, static chunks and public assets into a non-root Node runtime. Runtime enquiry configuration is passed through Compose. Contact is forced dynamic to avoid capturing delivery availability at build time.
