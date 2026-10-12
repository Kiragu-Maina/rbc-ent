# RBC Enterprise

The RBC Enterprise website, rebuilt with editorial layouts, original systems artwork, responsive service pages and an accessible enquiry experience. The application lives in `site/`; the original Git history and `profile.md` are preserved.

## Run locally

Use Node.js 22.19+ or 24.x and pnpm 11.25.

```sh
cd site
pnpm install --frozen-lockfile
pnpm dev
```

Open the URL printed by Next.js. To validate and run a production build:

```sh
pnpm typecheck
pnpm build
pnpm start
```

## Docker

The existing Compose service name, container name and external port are retained. The container now runs a standalone Next.js server instead of static Nginx, so page routes and the enquiry API are available.

```sh
docker compose up --build -d
```

Open `http://localhost:4077`. The external reverse proxy can continue pointing to port 4077. The internal container port is now 3000. The Docker image uses a multistage build, copies the standalone server and assets, and runs as a non-root user.

This command updates the running container when executed on the deployment host. No live server was accessed as part of the repository replacement.

## Enquiries

Without credentials, the form validates details and prepares a local email draft for `support@rbc-ent.com`. The visitor reviews and sends it from their email app. It does not claim to have sent anything.

To enable server delivery, configure `ENQUIRY_WEBHOOK_URL` as an HTTPS endpoint and optionally `ENQUIRY_WEBHOOK_TOKEN`. Compose reads these from the host environment or the root `.env` file. For local development, configure them in `site/.env.local`. Real secrets must never be committed. `.env.example` contains only empty placeholders.

The Contact page is rendered dynamically so runtime delivery configuration is reflected accurately. The server validates fields and consent, checks origin, applies a request limit and uses honeypot/timing checks. A success state appears only after the provider accepts the request. Configure upstream delivery reliability and abuse controls before enabling public submissions.

## Pages and content

The application includes Home, Expertise, four service-detail pages, About, Work, Contact, Privacy, a case-study template, sitemap, robots and a 404 page.

Business data is centralised in `site/lib/content.ts`. Update services, technologies, process steps, industries and company details there. Editorial homepage copy lives in `site/app/page.tsx`; company narrative in `site/app/about/page.tsx`; privacy text in `site/app/privacy/page.tsx`. Design tokens and responsive styling are in `site/app/globals.css`.

Add verified projects to `caseStudies`; set `approved: true` only after factual review and client permission. The Work page and case-study routes use the same model. Missing/unapproved projects return 404. No fictional projects or results are included.

The Insights model is prepared but there are no published articles. Add index/detail routes and navigation when reviewed articles with real authors/dates are available.

## Vercel

Import this repository, select **Next.js**, and set **Root Directory** to `site`. The build command is `pnpm build`. Configure the enquiry environment variables if delivery is required. Connect the approved domain only after the deployment has been verified and publication approved.

## Handover

- `DESIGN_RESEARCH.md`: original audit and reference-based direction.
- `ARCHITECTURE.md`: application and deployment decisions.
- `CONTENT_GAPS.md`: verified facts, missing evidence and launch prerequisites.
- `VALIDATION.md`: build, runtime and design verification, with limitations.

The RBC logo is preserved. Manrope is locally hosted under the SIL Open Font License in `site/public/MANROPE-LICENSE.txt`. All systems artwork is original and conceptual.
