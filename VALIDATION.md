# Validation record

## Completed

- Strict TypeScript checks and an ordinary Next.js production build passed for the GitHub replacement. The application uses standalone Node output rather than the original Sites/Vinext runtime.
- The initial Vinext production build completed successfully and enumerated the homepage, About, Contact, Expertise, four dynamic service pages, Work, case-study detail, Privacy and enquiry API.
- Rendered desktop homepage inspected in the supported cloud browser. Expertise accordion, architecture selection and delivery tabs changed their content as expected. Native Right-arrow keyboard input moved the delivery tab and its focus to Architect.
- Homepage horizontal overflow measured in real browser iframe viewports at all required widths: 320, 375, 430, 768, 1024, 1440 and 1920px. Each document’s scroll width equals its client width after refinement. The browser allocates 15px to the iframe scrollbar; declared viewport widths remain the requested sizes.
- Supporting pages checked at representative widths: Contact 320, software service 375, About 768 and Work 1440. No horizontal overflow was measured.
- Mobile navigation dialog opened with its four routes and close control. Focus trap, Escape handling and restoration are implemented; a complete keyboard/screen-reader audit remains to be performed.
- Every service route, Expertise index, About, Work, Contact and Privacy rendered with the intended content. An unapproved Work slug displayed the 404 page.
- Empty form submission produced field-specific errors. A valid dummy enquiry produced a mailto draft and explicitly stated that nothing had been sent. No email was sent during testing.
- The actual bundled enquiry handler was tested with Request objects: unconfigured delivery 503; invalid email 400; filled honeypot 400; cross-origin request 403. Mocked upstream acceptance returned 200; mocked upstream failure returned 502. These isolated handler checks sent no external data and do not establish real provider delivery.
- Browser console inspection showed no application errors; unrelated browser-extension messages were excluded.
- Source contains reduced-motion rules, semantic regions, skip navigation, associated form errors and local fonts. No heavy animation or component-library dependency is used by the application.

## Render-based fixes

Restored a mobile line break that had created an overflowing concatenated word. Tightened small-screen sector rows. Moved vector captions away from geometry and changed mobile architecture labels from small three-column text to readable stacked labels. Removed unused scaffold UI and dependencies, and separated shared icons from client/server navigation imports.

## Limits and remaining gates

- Tests used a desktop browser and constrained iframe widths, not physical mobile devices or touch/pointer emulation.
- The initial browser rejected sitemap/robots navigation; both routes subsequently returned 200 with the correct contents in the standard Next.js production-server test.
- No Lighthouse scores, Core Web Vitals results or WCAG certification are asserted. Run representative mobile/desktop Lighthouse and assistive-technology checks before launch.
- Email delivery credentials were absent. The fallback is verified; actual provider delivery is untested.
- Standard Next.js compilation and standalone-server startup were verified. Vercel deployment and an actual Docker image build were not run; Docker is unavailable in this environment.
- GitHub source replacement is the requested action. No running Docker host, Vercel deployment or DNS was modified.

## GitHub migration checks

The replacement retains profile.md and the repository history. The Compose service and external port 4077 are preserved; its internal port changes to 3000 for the Next server. HTTP smoke checks passed for all ten populated routes, all four services, missing/unapproved 404 routes, sitemap, robots, logo, a local font and the social-preview image. An initial API test exposed Next’s internal-host origin mismatch; origin validation now compares the public request host/protocol, including normal reverse-proxy headers. Contact is rendered dynamically so credentials added at runtime are reflected accurately. Final HTTP API checks passed: unconfigured provider 503, invalid input 400, honeypot 400 and cross-origin submission 403. Production routes and assets were checked again after the fix.
