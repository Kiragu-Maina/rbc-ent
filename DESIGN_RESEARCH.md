# RBC Enterprise: design research

## Audit and evidence

Reviewed the supplied brief and the live [RBC site](https://rbc-ent.com/) on 12–13 October 2026. The existing site is one page with anchored navigation, seven competency categories, a six-stage process and four sectors. Its visual implementation uses Inter/Space Grotesk, a dark palette, a fixed canvas, grain and blurred coloured orbs. At the initial design stage, no source repository, client case study, project screenshot or article was supplied. The workspace contained only the uploaded brief. The later repository handover revealed the existing static Nginx/Docker implementation and a company profile; these match the original content audit.

The original RBC logo was downloaded from `/logo.png` and inspected visually. The existing contact link’s Cloudflare email carrier decodes to `support@rbc-ent.com`. Nairobi, founding year 2020, international delivery, technology names and sectors match the current site. These are company-stated claims, not independently audited credentials.

## References and adopted principles

| Reference | Observed pattern | RBC application |
| --- | --- | --- |
| [EPAM](https://www.epam.com/) | Engineering-led positioning, distinct service/industry navigation and substantial client-work architecture. | Four understandable capability groups with dedicated pages. Keep project evidence separate from capability claims. |
| [Thoughtworks](https://www.thoughtworks.com/) | Editorial hierarchy and a substantive engineering/content structure. The rendered page uses Bitter for selected headings and Inter for other headings. | Purposeful headline composition, a restrained text hierarchy and an extensible article model. Use Manrope to establish an original RBC treatment. |
| [Kyndryl](https://www.kyndryl.com/us/en) | Connects operational technology to strategic business needs, with clearly separated expertise and customer-story sections. | Explain the full enterprise system and ask concrete operating questions on each service page. |

EPAM and Kyndryl were inspected through retrieved page structure/content. Thoughtworks was also inspected in the browser with computed heading typography and a screenshot. No exact animation timings, performance scores or hidden implementation details are claimed for these sites.

## Chosen direction

Warm light surfaces, ink typography, cobalt links and one dark architecture section. The grid gives section labels a quieter left column and substantial editorial content the right columns. Layouts are asymmetric where the content benefits, rather than using an identical card grid everywhere. Original layered vector geometry expresses the relationship between applications, data and infrastructure. It is a conceptual brand visual, never a client-delivery claim.

Typography: locally hosted Manrope, regular and semibold. The SIL Open Font License is included. Display size is fluid; spacing and palette are CSS tokens. Original RBC logo is preserved. Light/dark contrast is used to establish narrative rhythm, not random section colouring.

Motion: brief tier-alignment entrance, gentle pointer response, progressive architecture reveal, and restrained hover transitions. Native scrolling is retained. Reduced motion disables movement; the hero remains visible without JavaScript. CSS and SVG achieve the visual without GSAP, Lenis or a WebGL dependency.

## REA scope

REA 6.4.0 is installed in the hosted environment. Its MCP registration does not expose a live browser bridge in this chat; it was not used to claim runtime observations. Public content, downloaded RBC HTML/CSS, supported browser DOM inspection and actual project screenshots supplied the evidence. No proprietary source, reference artwork, brand identity or claimed project result was copied.

## Refinement from rendered output

The first mobile pass revealed an unintended unbroken word when a line break was hidden. The line break was restored. Industry rows were tightened, SVG captions moved clear of the sculpture, and the small-screen architecture changed to readable vertical labels. Horizontal overflow was measured across 320, 375, 430, 768, 1024, 1440 and 1920px iframe viewports. Browser checks and limitations are in `VALIDATION.md`.
