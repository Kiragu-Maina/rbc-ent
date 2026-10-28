# RBC-001 — Website Structure & Content Inventory

Inspected 28 October 2026. Repository: `C:\Users\Brian.Muthama\rbc-ent\site`. Source-based inventory; no live deployment or browser rendering assumed. Website source is unchanged.

## Reading guide

Sections appear in source order. IDs are review references, not HTML IDs. Exact copy is transcribed from rendered React output below; typographic uppercasing is applied by CSS. Code blocks retain text and line breaks, with block boundaries added for readability. Each section records all text, including repetitive labels and decorative SVG captions. Shared header/footer apply to every page and the 404. Inactive interactive content and unused templates are distinguished in their own entries. Metadata is recorded separately.

## Complete page / section index

All pages: GLOBAL-01 Skip to content → GLOBAL-02 Header/navigation → page sections → GLOBAL-03 Footer.

| Page | Route | Sections in order |
|---|---|---|
| HOME | `/` | HOME-01 Enterprise technology. Human purpose.; HOME-02 A matter of perspective; HOME-03 What we engineer; HOME-04 The bigger picture; HOME-05 How we work; HOME-06 Operating context matters; HOME-07 Our engineering ecosystem; HOME-08 The next conversation |
| EXPERTISE | `/expertise` | EXPERTISE-01 What we engineer; EXPERTISE-02 Expertise disciplines; EXPERTISE-03 The next conversation |
| EXP-SOFTWARE | `/expertise/software-engineering` | EXP-SOFTWARE-01 Expertise / 01; EXP-SOFTWARE-02 The business challenge; EXP-SOFTWARE-03 What we can build with you; EXP-SOFTWARE-04 Where we start; EXP-SOFTWARE-05 The next conversation |
| EXP-DATA | `/expertise/data-ai-automation` | EXP-DATA-01 Expertise / 02; EXP-DATA-02 The business challenge; EXP-DATA-03 What we can build with you; EXP-DATA-04 Where we start; EXP-DATA-05 The next conversation |
| EXP-CLOUD | `/expertise/cloud-infrastructure` | EXP-CLOUD-01 Expertise / 03; EXP-CLOUD-02 The business challenge; EXP-CLOUD-03 What we can build with you; EXP-CLOUD-04 Where we start; EXP-CLOUD-05 The next conversation |
| EXP-ADVISORY | `/expertise/technology-advisory` | EXP-ADVISORY-01 Expertise / 04; EXP-ADVISORY-02 The business challenge; EXP-ADVISORY-03 What we can build with you; EXP-ADVISORY-04 Where we start; EXP-ADVISORY-05 The next conversation |
| ABOUT | `/about` | ABOUT-01 RBC Enterprise; ABOUT-02 Who we are; ABOUT-03 What guides the work; ABOUT-04 The next conversation |
| WORK | `/work` | WORK-01 Engineering in practice; WORK-02 A conversation with context; WORK-03 The next conversation |
| CONTACT | `/contact` | CONTACT-01 Let’s work together; CONTACT-02 Start a conversation. / Enquiry form |
| PRIVACY | `/privacy` | PRIVACY-01 Your information; PRIVACY-02 Privacy notice article |
| NOTFOUND | Unmatched URLs / invalid slugs | NOTFOUND-01 404 / Page not found |
| WORK-DETAIL | `/work/[slug]` (no published records) | WORK-DETAIL-01 Introduction; WORK-DETAIL-02 The engineering; WORK-DETAIL-03 The result; WORK-DETAIL-04 Capabilities; WORK-DETAIL-05 The next conversation (all inactive) |

Nested review IDs: HOME-03-01…04 service items; HOME-04-01…04 architecture layers; HOME-05-01…05 process steps; HOME-06-01…04 industries; HOME-07-01…04 technology groups; EXPERTISE-02-01…04 discipline articles; ABOUT-01-FACTS facts strip; ABOUT-03-01…03 principles; CONTACT-02-INFO contact details; CONTACT-02-FORM form; PRIVACY-02-01…05 notice topics.

Additional implemented routes: POST `/api/enquiry`, `/sitemap.xml`, `/robots.txt`.

## Shared site structure

### GLOBAL-01 — Skip to content

**Purpose:** Access the main landmark.

**Layout:** Offscreen until keyboard focus.

**Components:** RootLayout. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\layout.tsx`.

**Exact copy:**

```text
Skip to content
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Skip to content | `#main` |

### GLOBAL-02 — Header / navigation

**Purpose:** Provide brand and main navigation.

**Layout:** Brand left, horizontal menu right; mobile menu replaces desktop links at ≤767px.

**Components:** Header, Brand, Menu. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\components\site.tsx`.

**Exact copy:**

```text
RBC
ENTERPRISE
Expertise
Work
About us
Let’s talk
Expertise
Work
About
Contact
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| RBCENTERPRISE [accessible name: RBC Enterprise home] | `/` |
| Expertise | `/expertise` |
| Work | `/work` |
| About us | `/about` |
| Let’s talk | `/contact` |
| Expertise | `/expertise` |
| Work | `/work` |
| About | `/about` |
| Contact | `/contact` |

**Buttons:** “Open menu”. Actions are described in the interaction notes.

Mobile menu source: `C:/Users/Brian.Muthama/rbc-ent/site/components/interactions.tsx`. Button “Open menu” opens full-screen dialog “Navigation”; close button accessible name “Close menu”, displayed “Close ×”. Links close the menu. Escape closes; focus is trapped while open. Main navigation and Mobile navigation are landmark labels. Mobile open-state exact copy and links:

**Exact copy:**

```text
01
Expertise
02
Work
03
About us
04
Let’s talk
Close ×
Nairobi, Kenya · Working beyond borders
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Expertise | `/expertise` |
| Work | `/work` |
| About us | `/about` |
| Let’s talk | `/contact` |

The header’s “About” and “Contact” labels in the first transcription belong only to the no-JavaScript navigation (“Navigation without JavaScript”), rather than the normal desktop menu.

### GLOBAL-03 — Footer

**Purpose:** Provide expertise, explore, contact and legal links.

**Layout:** Four desktop columns; two-column layout at narrower widths. Mobile brand and contact span columns; bottom row wraps.

**Components:** Footer, Brand. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\components\site.tsx`.

**Exact copy:**

```text
RBC
ENTERPRISE
Engineering the systems
behind better business.
Expertise
Software & systems
Data, AI & automation
Cloud & infrastructure
Advisory & experience
Explore
About RBC
Our work
Contact
Start a conversation
support@rbc-ent.com
Nairobi, Kenya
Working beyond borders.
© 2026 RBC Enterprise Limited
Privacy notice
Designed with purpose. Engineered with care.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| RBCENTERPRISE [accessible name: RBC Enterprise home] | `/` |
| Software & systems | `/expertise/software-engineering` |
| Data, AI & automation | `/expertise/data-ai-automation` |
| Cloud & infrastructure | `/expertise/cloud-infrastructure` |
| Advisory & experience | `/expertise/technology-advisory` |
| About RBC | `/about` |
| Our work | `/work` |
| Contact | `/contact` |
| support@rbc-ent.com | `mailto:support@rbc-ent.com` |
| Privacy notice | `/privacy` |

Copyright year is computed at runtime (2026 at inspection). “Designed with purpose. Engineered with care.” is hidden on mobile. Shared components live in `C:/Users/Brian.Muthama/rbc-ent/site/components/site.tsx`; SVG arrow is `C:/Users/Brian.Muthama/rbc-ent/site/components/arrow.tsx` (decorative, no copy).

## HOME — `/`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/page.tsx`. Shared header/footer precede/follow these sections.

### HOME-01 — Enterprise technology. Human purpose.

**Purpose:** Present Enterprise technology. Human purpose..

**Layout:** Two-column hero, large headline and interactive SVG; bottom location and anchor strip.

**Components:** Home, HeroSculpture, SystemsSculpture. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\page.tsx`.

**Exact copy:**

```text
Enterprise technology. Human purpose.
Complex challenges.
Engineered
solutions.
We design, build and modernise the digital systems behind your business.
Explore our expertise
Let’s work together
CONNECTED BY DESIGN
BUILT TO EVOLVE
FIG. 01 / COMPLEXITY → CAPABILITY
Nairobi, Kenya / Working beyond borders
A clearer way forward
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Explore our expertise | `/expertise` |
| Let’s work together | `/contact` |
| A clearer way forward | `#philosophy` |

### HOME-02 — A matter of perspective

**Purpose:** Present A matter of perspective.

**Layout:** Left section label, right statement and paragraph/link.

**Components:** Home, SectionLabel, TextLink. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\page.tsx`.

**Exact copy:**

```text
01
A matter of perspective
Technology should make you more capable.
And your work less complicated.
We work where software, data and business operations meet. Connecting what’s fragmented. Modernising what’s holding you back. Building what your next chapter needs.
Meet RBC Enterprise
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Meet RBC Enterprise | `/about` |

### HOME-03 — What we engineer

**Purpose:** Present What we engineer.

**Layout:** Pale band; service accordion left, selected artwork right.

**Components:** Home, SectionLabel, ServiceIndex, SystemsSculpture. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\page.tsx`.

**Exact copy:**

```text
02
What we engineer
Many disciplines.
One connected approach.
From the application people use to the infrastructure it runs on, we consider the whole system.
01
Software & systems
−
Applications, platforms and integrations that connect the people, processes and information your organisation depends on.
Enterprise applications
API & system integration
Mobile development
Legacy modernisation
Explore this expertise
02
Data, AI & automation
+
Connected data foundations, useful analytics and practical AI that help teams spend less time on repetitive work.
Data pipelines & integration
Analytics engineering
AI assistants & retrieval
Intelligent document processing
Explore this expertise
03
Cloud & infrastructure
+
Cloud architecture, delivery pipelines and infrastructure designed around the applications your business needs to run.
Cloud architecture
Containers & orchestration
CI/CD engineering
Platform modernisation
Explore this expertise
04
Advisory & experience
+
Technology strategy, solution architecture and product design that bring business needs and engineering decisions into alignment.
Technology strategy
Solution architecture
Product & experience design
Process digitisation
Explore this expertise
Engineering discipline / 01
CONNECTED BY DESIGN
BUILT TO EVOLVE
Built around your business.
RBC / 01
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Explore this expertise | `/expertise/software-engineering` |
| Explore this expertise | `/expertise/data-ai-automation` |
| Explore this expertise | `/expertise/cloud-infrastructure` |
| Explore this expertise | `/expertise/technology-advisory` |

**Buttons:** “01 / Software & systems / −”; “02 / Data, AI & automation / +”; “03 / Cloud & infrastructure / +”; “04 / Advisory & experience / +”. Actions are described in the interaction notes.

### HOME-04 — The bigger picture

**Purpose:** Present The bigger picture.

**Layout:** Dark band; layer buttons left, stacked connected diagram right.

**Components:** Home, SectionLabel, ArchitectureStory. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\page.tsx`.

**Exact copy:**

```text
03
The bigger picture
Better together.
By design.
Your business doesn’t run in silos. Your technology shouldn’t either. Explore how the layers of an enterprise system connect.
01 / Experience
People & workflows
02 / Connection
Applications & integration
03 / Intelligence
Data & intelligence
04 / Foundation
Cloud & operations
Teams interact with applications through clear, accessible workflows.
CONCEPTUAL SYSTEM ARCHITECTURE
RBC / 01
01
Teams↔
Customers↔
Business workflows
02
Enterprise applications↔
APIs & integration↔
Digital products
03
Data platforms↔
Analytics↔
Applied AI
04
Cloud infrastructure↔
Delivery pipelines↔
Observability
Security · Access controls · Quality · Maintainability
An illustrative architecture. Each engagement starts with your operating context.
```

**Buttons:** “01 / Experience / People & workflows”; “02 / Connection / Applications & integration”; “03 / Intelligence / Data & intelligence”; “04 / Foundation / Cloud & operations”. Actions are described in the interaction notes.

### HOME-05 — How we work

**Purpose:** Present How we work.

**Layout:** Five horizontal tabs and selected numbered detail panel.

**Components:** Home, SectionLabel, Process. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\page.tsx`.

**Exact copy:**

```text
04
How we work
Thought through.
Built to move forward.
A considered path from the first question to a system your team can use and maintain.
01
Understand
02
Architect
03
Engineer
04
Deploy
05
Improve
01
Get close to the problem.
We examine the workflows, constraints and people behind the brief.
02
Give complexity a structure.
We define the system, data and infrastructure decisions that shape delivery.
03
Build. Connect. Test.
We develop in increments and integrate with the systems already in place.
04
Make the move with care.
We plan the release, validate the application and prepare the team to operate it.
05
Keep the system useful.
We refine the platform as business needs and technical requirements evolve.
Security, data planning, testing and maintainability run through every stage.
Understand: We examine the workflows, constraints and people behind the brief.
Architect: We define the system, data and infrastructure decisions that shape delivery.
Engineer: We develop in increments and integrate with the systems already in place.
Deploy: We plan the release, validate the application and prepare the team to operate it.
Improve: We refine the platform as business needs and technical requirements evolve.
```

**Buttons:** “01 / Understand”; “02 / Architect”; “03 / Engineer”; “04 / Deploy”; “05 / Improve”. Actions are described in the interaction notes.

### HOME-06 — Operating context matters

**Purpose:** Present Operating context matters.

**Layout:** Intro left; four numbered linked industry rows right.

**Components:** Home, SectionLabel, TextLink. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\page.tsx`.

**Exact copy:**

```text
05
Operating context matters
Built for the way
your world works.
The right solution begins with understanding the environment it needs to operate in.
Talk through your challenge
01
Telecommunications
Connected services. Complex operations.
02
Real estate
People, properties and information.
03
Media
Content, platforms and digital experiences.
04
Enterprise services
The systems behind everyday business.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Talk through your challenge | `/contact` |
| 01 / Telecommunications / Connected services. Complex operations. | `/contact?sector=Telecommunications` |
| 02 / Real estate / People, properties and information. | `/contact?sector=Real%20estate` |
| 03 / Media / Content, platforms and digital experiences. | `/contact?sector=Media` |
| 04 / Enterprise services / The systems behind everyday business. | `/contact?sector=Enterprise%20services` |

### HOME-07 — Our engineering ecosystem

**Purpose:** Present Our engineering ecosystem.

**Layout:** Four desktop technology columns, two on mobile.

**Components:** Home, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\page.tsx`.

**Exact copy:**

```text
06
Our engineering ecosystem
The problem leads.
The technology follows.
We choose tools to serve the architecture, the team and the work ahead.
01 / Software & systems
React / Next.js / Node.js / NestJS / Python / Go / React Native / Flutter
02 / Data, AI & automation
Python / ETL / MLOps / RAG / LLM integration
03 / Cloud & infrastructure
AWS / Google Cloud / Docker / Kubernetes / CI/CD
04 / Advisory & experience
Figma / Design systems / Prototyping / Accessibility
```

### HOME-08 — The next conversation

**Purpose:** Invite a project enquiry.

**Layout:** Blue CTA band with oversized linked title and circular arrow.

**Components:** CTA. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\page.tsx`.

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

## EXPERTISE — `/expertise`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/page.tsx`. Shared header/footer precede/follow these sections.

### EXPERTISE-01 — What we engineer

**Purpose:** Present What we engineer.

**Layout:** Large eyebrow, H1 and description.

**Components:** Expertise, PageIntro. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\page.tsx`.

**Exact copy:**

```text
What we engineer
The whole system. Considered.
Four connected disciplines. From the first architecture decision to the last integration, we build around the way your business works.
```

### EXPERTISE-02 — Expertise disciplines

**Purpose:** Present Expertise disciplines.

**Layout:** Four ruled numbered article rows with linked heading, description, capability list and arrow.

**Components:** Expertise. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\page.tsx`.

**Exact copy:**

```text
01
Software & Systems Engineering
Applications, platforms and integrations that connect the people, processes and information your organisation depends on.
Enterprise applications
API & system integration
Mobile development
Legacy modernisation
02
Data, AI & Automation
Connected data foundations, useful analytics and practical AI that help teams spend less time on repetitive work.
Data pipelines & integration
Analytics engineering
AI assistants & retrieval
Intelligent document processing
03
Cloud & Infrastructure
Cloud architecture, delivery pipelines and infrastructure designed around the applications your business needs to run.
Cloud architecture
Containers & orchestration
CI/CD engineering
Platform modernisation
04
Technology Advisory & Experience
Technology strategy, solution architecture and product design that bring business needs and engineering decisions into alignment.
Technology strategy
Solution architecture
Product & experience design
Process digitisation
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Software & Systems Engineering | `/expertise/software-engineering` |
| (arrow only) [accessible name: Explore Software & Systems Engineering] | `/expertise/software-engineering` |
| Data, AI & Automation | `/expertise/data-ai-automation` |
| (arrow only) [accessible name: Explore Data, AI & Automation] | `/expertise/data-ai-automation` |
| Cloud & Infrastructure | `/expertise/cloud-infrastructure` |
| (arrow only) [accessible name: Explore Cloud & Infrastructure] | `/expertise/cloud-infrastructure` |
| Technology Advisory & Experience | `/expertise/technology-advisory` |
| (arrow only) [accessible name: Explore Technology Advisory & Experience] | `/expertise/technology-advisory` |

### EXPERTISE-03 — The next conversation

**Purpose:** Invite a project enquiry.

**Layout:** Blue CTA band.

**Components:** CTA. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\page.tsx`.

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

EXPERTISE-02 article IDs in order: EXPERTISE-02-01 Software & Systems Engineering; EXPERTISE-02-02 Data, AI & Automation; EXPERTISE-02-03 Cloud & Infrastructure; EXPERTISE-02-04 Technology Advisory & Experience. Number, exact heading, paragraph, capabilities and both links are transcribed above in article order.

## EXP-SOFTWARE — `/expertise/software-engineering`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx`. Shared header/footer precede/follow these sections.

### EXP-SOFTWARE-01 — Expertise / 01

**Purpose:** Present Expertise / 01.

**Layout:** Two-column introduction with text/link and SVG sculpture.

**Components:** ServicePage, TextLink, SystemsSculpture. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
Expertise / 01
Software & Systems Engineering
Applications, platforms and integrations that connect the people, processes and information your organisation depends on.
Discuss your project
CONNECTED BY DESIGN
BUILT TO EVOLVE
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Discuss your project | `/contact?service=software-engineering` |

### EXP-SOFTWARE-02 — The business challenge

**Purpose:** Present The business challenge.

**Layout:** Two-column editorial layout: heading left, problem and approach right.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
01
The business challenge
When the tools no longer fit the work.
Disconnected applications create duplicate work. Legacy platforms make changes expensive. A product idea needs more than a prototype to become a dependable business system.
We map the workflows, data boundaries and integration points before deciding what to build. Then we engineer the application in usable increments, with testing and maintainability built into delivery.
```

### EXP-SOFTWARE-03 — What we can build with you

**Purpose:** Present What we can build with you.

**Layout:** Contrasting band and numbered deliverable grid.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
02
What we can build with you
From a clear brief
to a useful system.
01
Application and integration architecture
02
Web and mobile business applications
03
Documented APIs and service interfaces
04
Migration, testing and deployment plans
```

### EXP-SOFTWARE-04 — Where we start

**Purpose:** Present Where we start.

**Layout:** Editorial heading/questions with technology tags beneath.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
03
Where we start
A few questions
worth asking.
Which workflows are constrained by your current tools?
What needs to connect with your existing systems?
Who will operate and maintain the application?
React
Next.js
Node.js
NestJS
Python
Go
React Native
Flutter
```

### EXP-SOFTWARE-05 — The next conversation

**Purpose:** Invite a project enquiry.

**Layout:** Blue CTA band.

**Components:** CTA. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

## EXP-DATA — `/expertise/data-ai-automation`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx`. Shared header/footer precede/follow these sections.

### EXP-DATA-01 — Expertise / 02

**Purpose:** Present Expertise / 02.

**Layout:** Two-column introduction with text/link and SVG sculpture.

**Components:** ServicePage, TextLink, SystemsSculpture. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
Expertise / 02
Data, AI & Automation
Connected data foundations, useful analytics and practical AI that help teams spend less time on repetitive work.
Discuss your project
CONNECTED BY DESIGN
BUILT TO EVOLVE
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Discuss your project | `/contact?service=data-ai-automation` |

### EXP-DATA-02 — The business challenge

**Purpose:** Present The business challenge.

**Layout:** Two-column editorial layout: heading left, problem and approach right.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
01
The business challenge
Good decisions need dependable information.
Reporting often starts with manual exports. Knowledge sits across documents and systems. Repetitive processing absorbs time that teams could spend on higher-value work.
We start with the data and the decision. We design the pipeline, access controls and evaluation criteria, then introduce analytics or AI where it serves a defined workflow. Human review remains part of the design where the work calls for it.
```

### EXP-DATA-03 — What we can build with you

**Purpose:** Present What we can build with you.

**Layout:** Contrasting band and numbered deliverable grid.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
02
What we can build with you
From a clear brief
to a useful system.
01
Data ingestion and transformation pipelines
02
Analytics and reporting layers
03
Retrieval-augmented knowledge tools
04
Document and workflow automation
```

### EXP-DATA-04 — Where we start

**Purpose:** Present Where we start.

**Layout:** Editorial heading/questions with technology tags beneath.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
03
Where we start
A few questions
worth asking.
Where does the information live, and who can access it?
Which decisions or tasks should become easier?
How will we evaluate correctness and usefulness?
Python
ETL
MLOps
RAG
LLM integration
```

### EXP-DATA-05 — The next conversation

**Purpose:** Invite a project enquiry.

**Layout:** Blue CTA band.

**Components:** CTA. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

## EXP-CLOUD — `/expertise/cloud-infrastructure`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx`. Shared header/footer precede/follow these sections.

### EXP-CLOUD-01 — Expertise / 03

**Purpose:** Present Expertise / 03.

**Layout:** Two-column introduction with text/link and SVG sculpture.

**Components:** ServicePage, TextLink, SystemsSculpture. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
Expertise / 03
Cloud & Infrastructure
Cloud architecture, delivery pipelines and infrastructure designed around the applications your business needs to run.
Discuss your project
CONNECTED BY DESIGN
BUILT TO EVOLVE
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Discuss your project | `/contact?service=cloud-infrastructure` |

### EXP-CLOUD-02 — The business challenge

**Purpose:** Present The business challenge.

**Layout:** Two-column editorial layout: heading left, problem and approach right.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
01
The business challenge
Your infrastructure should support change.
Manual deployments introduce uncertainty. Growing applications outpace their infrastructure. Moving to the cloud requires decisions about cost, security, availability and day-to-day operations.
We assess the workloads and operating requirements before choosing the architecture. We automate deployment, define the environments and plan how the platform will be observed, maintained and recovered.
```

### EXP-CLOUD-03 — What we can build with you

**Purpose:** Present What we can build with you.

**Layout:** Contrasting band and numbered deliverable grid.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
02
What we can build with you
From a clear brief
to a useful system.
01
Cloud and environment architecture
02
Containerisation and orchestration
03
Automated build and deployment pipelines
04
Operational documentation and handover
```

### EXP-CLOUD-04 — Where we start

**Purpose:** Present Where we start.

**Layout:** Editorial heading/questions with technology tags beneath.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
03
Where we start
A few questions
worth asking.
What availability does each workload actually need?
Which deployments and operations can be automated?
What budget and internal capacity should the platform fit?
AWS
Google Cloud
Docker
Kubernetes
CI/CD
```

### EXP-CLOUD-05 — The next conversation

**Purpose:** Invite a project enquiry.

**Layout:** Blue CTA band.

**Components:** CTA. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

## EXP-ADVISORY — `/expertise/technology-advisory`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx`. Shared header/footer precede/follow these sections.

### EXP-ADVISORY-01 — Expertise / 04

**Purpose:** Present Expertise / 04.

**Layout:** Two-column introduction with text/link and SVG sculpture.

**Components:** ServicePage, TextLink, SystemsSculpture. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
Expertise / 04
Technology Advisory & Experience
Technology strategy, solution architecture and product design that bring business needs and engineering decisions into alignment.
Discuss your project
CONNECTED BY DESIGN
BUILT TO EVOLVE
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Discuss your project | `/contact?service=technology-advisory` |

### EXP-ADVISORY-02 — The business challenge

**Purpose:** Present The business challenge.

**Layout:** Two-column editorial layout: heading left, problem and approach right.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
01
The business challenge
Start with the right problem.
A long list of technology options rarely produces a clear plan. Teams need to understand what to improve, what to preserve and how the proposed changes will affect the people doing the work.
We work through the operating context with your team. We map processes, test assumptions through prototypes and translate priorities into an architecture and an achievable delivery roadmap.
```

### EXP-ADVISORY-03 — What we can build with you

**Purpose:** Present What we can build with you.

**Layout:** Contrasting band and numbered deliverable grid.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
02
What we can build with you
From a clear brief
to a useful system.
01
Technology assessment and delivery roadmap
02
Solution and integration architecture
03
Product prototypes and design systems
04
Workflow and experience improvement plans
```

### EXP-ADVISORY-04 — Where we start

**Purpose:** Present Where we start.

**Layout:** Editorial heading/questions with technology tags beneath.

**Components:** ServicePage, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
03
Where we start
A few questions
worth asking.
What business change are you trying to make?
Where do users encounter friction today?
Which decisions need evidence before you commit?
Figma
Design systems
Prototyping
Accessibility
```

### EXP-ADVISORY-05 — The next conversation

**Purpose:** Invite a project enquiry.

**Layout:** Blue CTA band.

**Components:** CTA. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\expertise\[slug]\page.tsx`.

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

## ABOUT — `/about`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/about/page.tsx`. Shared header/footer precede/follow these sections.

### ABOUT-01 — RBC Enterprise

**Purpose:** Present RBC Enterprise.

**Layout:** Large page introduction; facts strip follows (documented separately).

**Components:** About, PageIntro. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\about\page.tsx`.

**Exact copy:**

```text
RBC Enterprise
Engineering with a wider perspective.
We design, integrate and modernise the technology behind organisations. Our starting point is the work the system needs to do.
```

### ABOUT-01-FACTS — Our base / Established / Our reach

**Purpose:** State company facts.

**Layout:** Horizontal facts strip, wrapping on mobile; div between first and second sections.

**Components:** About. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\about\page.tsx`.

**Exact copy:**

```text
Our base
Nairobi, Kenya
Established
2020
Our reach
Beyond borders
```

### ABOUT-02 — Who we are

**Purpose:** Present Who we are.

**Layout:** Two-column editorial text.

**Components:** About, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\about\page.tsx`.

**Exact copy:**

```text
01
Who we are
A technology company.
An engineering mindset.
RBC Enterprise Limited brings software engineering, data, AI, infrastructure and product design into one connected practice.
Based in Nairobi and delivering internationally, we work on business applications, digital products and the systems that connect them. We approach a new platform and an existing technology estate with the same question: what will make this work better for the organisation?
```

### ABOUT-03 — What guides the work

**Purpose:** Present What guides the work.

**Layout:** Heading followed by three numbered principle rows.

**Components:** About, SectionLabel. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\about\page.tsx`.

**Exact copy:**

```text
02
What guides the work
Purpose in every decision.
01
Clarity before complexity
Understand the business problem, the people and the constraints. Make the architecture serve them.
02
Connected thinking
Consider the application, its data, its infrastructure and the way it fits into the wider organisation.
03
Built for the handover
Testing, documentation and maintainability belong in the delivery plan from the beginning.
```

### ABOUT-04 — The next conversation

**Purpose:** Invite a project enquiry.

**Layout:** Blue CTA band.

**Components:** CTA. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\about\page.tsx`.

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

ABOUT-03 principle IDs in order: ABOUT-03-01 Clarity before complexity; ABOUT-03-02 Connected thinking; ABOUT-03-03 Built for the handover. Exact copy is transcribed in order above.

## WORK — `/work`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/work/page.tsx`. Shared header/footer precede/follow these sections.

### WORK-01 — Engineering in practice

**Purpose:** Present Engineering in practice.

**Layout:** Large page introduction.

**Components:** Work, PageIntro. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\work\page.tsx`.

**Exact copy:**

```text
Engineering in practice
The work starts with your world.
A business platform. A better data foundation. A connection between systems. Every engagement begins with a specific operating challenge.
```

### WORK-02 — A conversation with context

**Purpose:** Present A conversation with context.

**Layout:** Empty state: original SVG sculpture/caption left, heading, paragraph and enquiry link right.

**Components:** Work, SystemsSculpture, TextLink. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\work\page.tsx`.

**Exact copy:**

```text
CONNECTED BY DESIGN
BUILT TO EVOLVE
ORIGINAL RBC SYSTEMS STUDY / CONCEPTUAL VISUAL
A conversation with context
Bring us your
engineering challenge.
Public case studies are not available here yet. Tell us about the system you need to build or improve, and we can discuss our approach and the relevant experience we can share.
Talk about your project
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Talk about your project | `/contact` |

### WORK-03 — The next conversation

**Purpose:** Invite a project enquiry.

**Layout:** Blue CTA band.

**Components:** CTA. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\work\page.tsx`.

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

## CONTACT — `/contact`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/contact/page.tsx`. Shared header/footer precede/follow these sections.

### CONTACT-01 — Let’s work together

**Purpose:** Present Let’s work together.

**Layout:** Large page introduction.

**Components:** Contact, PageIntro. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\contact\page.tsx`.

**Exact copy:**

```text
Let’s work together
What needs to work better?
Tell us about the business challenge, the system you’re planning or the change you want to make.
```

### CONTACT-02 — Start a conversation. / Enquiry form

**Purpose:** Present Start a conversation. / Enquiry form.

**Layout:** Contact details and prompts left; form right. Name/email share a row; other fields full width.

**Components:** Contact, EnquiryForm. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\contact\page.tsx`.

**Exact copy:**

```text
Start a conversation.
support@rbc-ent.com
Nairobi, Kenya
Working with organisations beyond borders.
A useful starting point
What you’re building or improving
Your existing systems and constraints
Your intended timeline
Website
Name *
Work email *
Organisation *
Service area *
Select an area
Software & Systems Engineering
Data, AI & Automation
Cloud & Infrastructure
Technology Advisory & Experience
I’d like to discuss the options
What are you looking to build or improve? *
A little context is useful. Please don’t include sensitive data or credentials.
RBC may contact me about this enquiry. Read our privacy notice.
This form prepares an email to RBC. You review and send it in your email app.
Prepare email
Email support@rbc-ent.com directly to start a conversation.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| support@rbc-ent.com | `mailto:support@rbc-ent.com` |
| privacy notice | `/privacy` |
| support@rbc-ent.com | `mailto:support@rbc-ent.com` |

**Buttons:** “Prepare email”. Actions are described in the interaction notes.

CONTACT-02-INFO is the left `contact-info` column; CONTACT-02-FORM is the right `EnquiryForm` component at `C:/Users/Brian.Muthama/rbc-ent/site/components/enquiry-form.tsx`. Field labels and option text are transcribed above in order. The “Website” field is a visually hidden honeypot, excluded from accessibility and tab order; it is not normal visitor-visible copy. No input placeholders are configured. All starred fields and consent are required. Deployment delivery mode depends on `ENQUIRY_WEBHOOK_URL`; the local rendering above has no webhook configuration. Both modes and conditional messages are recorded below.

## PRIVACY — `/privacy`

Page source: `C:/Users/Brian.Muthama/rbc-ent/site/app/privacy/page.tsx`. Shared header/footer precede/follow these sections.

### PRIVACY-01 — Your information

**Purpose:** Present Your information.

**Layout:** Large page introduction.

**Components:** Privacy, PageIntro. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\privacy\page.tsx`.

**Exact copy:**

```text
Your information
Privacy, in plain language.
This notice describes the enquiry experience in this website build. RBC must review it before public launch.
```

### PRIVACY-02 — Privacy notice article

**Purpose:** Present Privacy notice article.

**Layout:** Constrained prose article; H2 topics followed by paragraphs.

**Components:** Privacy. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\privacy\page.tsx`.

**Exact copy:**

```text
Who to contact
RBC Enterprise Limited is based in Nairobi, Kenya. For questions about information you share, email support@rbc-ent.com.
Information in your enquiry
The enquiry form asks for your name, email, organisation, service area and a description of your project. These details help RBC understand and respond to your request.
Email drafts and online delivery
When the form offers “Prepare email”, your details are used in your browser to prepare a draft. The site does not send the enquiry. You decide whether to send it using your email provider.
If online delivery is configured, the form sends the enquiry to RBC’s chosen delivery service. A successful confirmation appears only after that service accepts it.
Tracking and storage
This implementation includes no advertising trackers or analytics scripts and does not save form details in browser storage. Hosting and email providers may process technical information as part of operating their services.
Before public launch
RBC should confirm its delivery provider, retention period, lawful basis, applicable rights and hosting practices, and update this notice accordingly.
```

PRIVACY-02 topic IDs in order: PRIVACY-02-01 Who to contact; PRIVACY-02-02 Information in your enquiry; PRIVACY-02-03 Email drafts and online delivery; PRIVACY-02-04 Tracking and storage; PRIVACY-02-05 Before public launch. Their headings and paragraphs are transcribed in order above. The email address in this article is plain text, not a link.

The page transcriptions above include text nodes inside hidden accordion/tab panels and noscript elements so no copy is lost. These are not all simultaneously visible: HOME-03 initially shows only the Software & systems panel; HOME-05 initially shows only Understand. The noscript list and no-JavaScript navigation render only with JavaScript disabled. Complete visibility rules and alternate states follow.

## Interactive copy and states (rendered on interaction, not unused code)

### HOME-03 — All service accordion states

Source: `C:/Users/Brian.Muthama/rbc-ent/site/components/interactions.tsx`; component `ServiceIndex`; data `C:/Users/Brian.Muthama/rbc-ent/site/lib/content.ts`. First discipline is selected initially; other panels use `hidden`. All four button titles/numbers stay visible. Selected button uses “−”; other buttons use “+”. Clicking selects a service; “Explore this expertise” navigates. Right panel is visually rendered but aria-hidden; hidden at ≤767px. Each item follows this exact copy order: number, title, description, capability tags, link; artwork caption.

#### HOME-03-01 — Software & systems

**Exact copy:**

```text
01
Software & systems
Applications, platforms and integrations that connect the people, processes and information your organisation depends on.
Enterprise applications
API & system integration
Mobile development
Legacy modernisation
Explore this expertise
Engineering discipline / 01
CONNECTED BY DESIGN
BUILT TO EVOLVE
Built around your business.
RBC / 01
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Explore this expertise | `/expertise/software-engineering` |

#### HOME-03-02 — Data, AI & automation

**Exact copy:**

```text
02
Data, AI & automation
Connected data foundations, useful analytics and practical AI that help teams spend less time on repetitive work.
Data pipelines & integration
Analytics engineering
AI assistants & retrieval
Intelligent document processing
Explore this expertise
Engineering discipline / 02
CONNECTED BY DESIGN
BUILT TO EVOLVE
Information that becomes action.
RBC / 02
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Explore this expertise | `/expertise/data-ai-automation` |

#### HOME-03-03 — Cloud & infrastructure

**Exact copy:**

```text
03
Cloud & infrastructure
Cloud architecture, delivery pipelines and infrastructure designed around the applications your business needs to run.
Cloud architecture
Containers & orchestration
CI/CD engineering
Platform modernisation
Explore this expertise
Engineering discipline / 03
CONNECTED BY DESIGN
BUILT TO EVOLVE
A foundation for what comes next.
RBC / 03
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Explore this expertise | `/expertise/cloud-infrastructure` |

#### HOME-03-04 — Advisory & experience

**Exact copy:**

```text
04
Advisory & experience
Technology strategy, solution architecture and product design that bring business needs and engineering decisions into alignment.
Technology strategy
Solution architecture
Product & experience design
Process digitisation
Explore this expertise
Engineering discipline / 04
CONNECTED BY DESIGN
BUILT TO EVOLVE
Clearer decisions. Better experiences.
RBC / 04
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Explore this expertise | `/expertise/technology-advisory` |

### HOME-04 — Architecture selector states

Source: `C:/Users/Brian.Muthama/rbc-ent/site/components/interactions.tsx`; component `ArchitectureStory`. All buttons and diagram layers are visible; first active initially. Selection changes the explanatory paragraph and highlighted layer; no navigation. Rows below list the exact button label, description (one at a time) and diagram nodes.

#### HOME-04-01 — People & workflows

**Exact copy:**

```text
01 / Experience
People & workflows
Teams interact with applications through clear, accessible workflows.
Teams
Customers
Business workflows
```

#### HOME-04-02 — Applications & integration

**Exact copy:**

```text
02 / Connection
Applications & integration
Applications exchange information through defined APIs and integration boundaries.
Enterprise applications
APIs & integration
Digital products
```

#### HOME-04-03 — Data & intelligence

**Exact copy:**

```text
03 / Intelligence
Data & intelligence
Governed data supports reporting, analytics and AI tools with appropriate access and evaluation.
Data platforms
Analytics
Applied AI
```

#### HOME-04-04 — Cloud & operations

**Exact copy:**

```text
04 / Foundation
Cloud & operations
Infrastructure, deployment pipelines and operational controls support the system as a whole.
Cloud infrastructure
Delivery pipelines
Observability
```

Diagram layer numbers 01–04 and decorative “↔” between nodes are rendered (arrows hidden on mobile). Diagram heading, baseline and footnote are included in HOME-04 above.

### HOME-05 — Process tab states

Source: `C:/Users/Brian.Muthama/rbc-ent/site/components/interactions.tsx`; component `Process`; data `C:/Users/Brian.Muthama/rbc-ent/site/lib/content.ts`. Tablist accessible label “Delivery approach”. All tabs visible; Understand selected initially. Click, ArrowLeft/ArrowRight, Home and End change selection; no navigation. Other panels have `hidden`.

#### HOME-05-01 — Understand

**Exact copy:**

```text
01
Understand
Get close to the problem.
We examine the workflows, constraints and people behind the brief.
```

#### HOME-05-02 — Architect

**Exact copy:**

```text
02
Architect
Give complexity a structure.
We define the system, data and infrastructure decisions that shape delivery.
```

#### HOME-05-03 — Engineer

**Exact copy:**

```text
03
Engineer
Build. Connect. Test.
We develop in increments and integrate with the systems already in place.
```

#### HOME-05-04 — Deploy

**Exact copy:**

```text
04
Deploy
Make the move with care.
We plan the release, validate the application and prepare the team to operate it.
```

#### HOME-05-05 — Improve

**Exact copy:**

```text
05
Improve
Keep the system useful.
We refine the platform as business needs and technical requirements evolve.
```

No-JavaScript fallback adds an ordered list; this does not replace the initial tab panel. Exact fallback copy:

**Exact copy:**

```text
Understand: We examine the workflows, constraints and people behind the brief.
Architect: We define the system, data and infrastructure decisions that shape delivery.
Engineer: We develop in increments and integrate with the systems already in place.
Deploy: We plan the release, validate the application and prepare the team to operate it.
Improve: We refine the platform as business needs and technical requirements evolve.
```

### Additional nested HOME references

HOME-06-01 Telecommunications; HOME-06-02 Real estate; HOME-06-03 Media; HOME-06-04 Enterprise services. Each is a full linked row; all exact descriptions and encoded destinations appear above. HOME-07-01 Software & systems; HOME-07-02 Data, AI & automation; HOME-07-03 Cloud & infrastructure; HOME-07-04 Advisory & experience. These are unlinked technology text groups, transcribed above.

### CONTACT-02-FORM — Conditional modes, messages and validation

No webhook: “Prepare email” validates locally and produces a mailto link. With webhook: “Send enquiry” POSTs `/api/enquiry`; pending button is disabled and reads “Sending…”. These are exact conditional strings:

**Exact copy:**

```text
This form prepares an email to RBC. You review and send it in your email app.
Prepare email
Your email draft is ready. Open it below, review it and send it from your email app. Nothing has been sent from this page.
Open email draft
Send enquiry
Sending…
Your enquiry has been delivered. Thank you for getting in touch.
Your enquiry could not be delivered. Please email us directly.
```

“Open email draft” → `mailto:support@rbc-ent.com?subject=<encoded subject>&body=<encoded body>`. The following template substitutes user entries; braces are documentation placeholders, not literal copy:

**Exact copy:**

```text
Project enquiry from {organisation}
Name: {name}
Organisation: {organisation}
Email: {email}
Service: {discipline or Let’s discuss}
{description}
```

Actual email body retains a blank line before the description. `not-sure` maps to “Let’s discuss”. Query `service` preselects a known service slug. Query `sector` fills description with `Industry: {sector}` and two newlines. Query variants are the same contact route. The no-JavaScript email fallback appears in the contact transcription above and links to `mailto:support@rbc-ent.com`. Consent links “privacy notice” → `/privacy`. No delivery is attempted when preparing a draft.

Validation source: `C:/Users/Brian.Muthama/rbc-ent/site/lib/enquiry.ts`. Exact field error strings:

**Exact copy:**

```text
Please enter your name (2–100 characters).
Please enter a valid email address.
Please enter your organisation (2–150 characters).
Please choose a service area.
Please describe your project in 20–5,000 characters.
Please confirm that RBC may contact you about this enquiry.
```

## Implemented dynamic routes and unused content

`C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx` exports `ServicePage`, generates the four service slugs listed above, and calls `notFound()` for unknown slugs. Content is in `C:/Users/Brian.Muthama/rbc-ent/site/lib/content.ts`.

`C:/Users/Brian.Muthama/rbc-ent/site/app/work/[slug]/page.tsx` exports `CaseStudy`; matches only approved case-study records. `caseStudies = []`, so every current work slug returns 404. The following is inactive template code, not public content:

| ID | Section | Copy/data | Components/layout |
|---|---|---|---|
| WORK-DETAIL-01 | Introduction | `p.industry`, `p.title`, `p.challenge` (no populated values) | PageIntro |
| WORK-DETAIL-02 | The engineering | “The engineering”; `p.solution` (no value) | Two-column editorial row |
| WORK-DETAIL-03 | The result | “The result”; `p.outcome` (no value) | Two-column editorial row |
| WORK-DETAIL-04 | Capabilities | `p.capabilities` (empty) | Tags in the same section as engineering/result |
| WORK-DETAIL-05 | The next conversation | Exact shared CTA below | CTA |

**Exact copy:**

```text
The next conversation
Let’s solve
something complex.
Tell us what you’re building, modernising or trying to make work better.
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Let’s solve / something complex. | `/contact` |

The inactive populated-list branch in `C:/Users/Brian.Muthama/rbc-ent/site/app/work/page.tsx` would replace the empty state with approved project articles showing `p.industry`, linked `p.title`, `p.challenge`, `p.outcome`, and “Read case study” → `/work/${p.slug}`. None render. `caseStudyDraft` is an unused export with empty strings and capabilities and `approved:false`. `insights = []` and `Insight` type have no renderer or route; there are no insights pages.

### NOTFOUND-01 — 404 / Page not found

**Purpose:** Return visitors from unmatched URLs or invalid detail slugs.

**Layout:** Single-column main, large heading, underlined return link. Shared header/footer apply.

**Components:** NotFound, TextLink. **Source:** `C:\Users\Brian.Muthama\rbc-ent\site\app\not-found.tsx`.

**Exact copy:**

```text
404 / Page not found
Let’s find
a clearer path.
Return to RBC Enterprise
```

**Links (including repeated links):**

| Label | Destination |
|---|---|
| Return to RBC Enterprise | `/` |

## Non-page endpoints

### ENDPOINT-01 — POST `/api/enquiry`

Source: `C:/Users/Brian.Muthama/rbc-ent/site/app/api/enquiry/route.ts`; function `POST`. This is JSON, not an HTML page. It validates origin, payload size, honeypot/timing and fields, then forwards to a configured HTTPS webhook. Error `message` values can be displayed in the form. Exact strings:

**Exact copy:**

```text
Please submit the form from this website.
The enquiry is too long.
Please check the form and try again.
Please wait a moment, then try again.
Please correct the highlighted fields.
Online delivery is not configured. Please email support@rbc-ent.com.
We could not deliver your enquiry. Please email support@rbc-ent.com directly.
```

Successful response: `{delivered:true}`; the form supplies the visible success sentence. The route exports POST only.

### ENDPOINT-02 — `/sitemap.xml`

Source: `C:/Users/Brian.Muthama/rbc-ent/site/app/sitemap.ts`; function `sitemap`. Absolute URLs rooted at `https://rbc-ent.com`, ordered: `/`, `/expertise`, `/about`, `/work`, `/contact`, `/privacy`, then the four expertise detail slugs in content order. Approved work slugs would follow; none exist.

### ENDPOINT-03 — `/robots.txt`

Source: `C:/Users/Brian.Muthama/rbc-ent/site/app/robots.ts`; function `robots`. User-agent `*`, allow `/`, disallow `/api/`, sitemap `https://rbc-ent.com/sitemap.xml`.

## Metadata (not visible body copy)

Root source: `C:/Users/Brian.Muthama/rbc-ent/site/app/layout.tsx`. Default title: “RBC Enterprise | Complex challenges. Engineered solutions.” Title template: `%s | RBC Enterprise`. Default description: “Enterprise software, data, AI and cloud engineering. RBC Enterprise designs, integrates and modernises business systems from Nairobi, Kenya.” Default canonical `/`; metadata base `https://rbc-ent.com`. Open Graph type `website`, siteName “RBC Enterprise”, title “RBC Enterprise — Engineered solutions”, description “Engineering the systems behind better business.” Image `/og-image.png`, 1200 × 630, alt “RBC Enterprise — Complex challenges. Engineered solutions.” Icon `/rbc-logo.png`. Root JSON-LD Organization: name “RBC Enterprise Limited”, URL `https://rbc-ent.com`, email `support@rbc-ent.com`, foundingDate “2020”, addressLocality “Nairobi”, addressCountry “KE”.

**`/expertise`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/page.tsx`):

```json
{
  "title": "Our expertise",
  "description": "Explore software engineering, data and AI, cloud infrastructure and technology advisory at RBC Enterprise.",
  "alternates": {
    "canonical": "/expertise"
  }
}
```

**`/expertise/software-engineering`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx`):

```json
{
  "title": "Software & Systems Engineering",
  "description": "Applications, platforms and integrations that connect the people, processes and information your organisation depends on.",
  "alternates": {
    "canonical": "/expertise/software-engineering"
  }
}
```

**`/expertise/data-ai-automation`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx`):

```json
{
  "title": "Data, AI & Automation",
  "description": "Connected data foundations, useful analytics and practical AI that help teams spend less time on repetitive work.",
  "alternates": {
    "canonical": "/expertise/data-ai-automation"
  }
}
```

**`/expertise/cloud-infrastructure`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx`):

```json
{
  "title": "Cloud & Infrastructure",
  "description": "Cloud architecture, delivery pipelines and infrastructure designed around the applications your business needs to run.",
  "alternates": {
    "canonical": "/expertise/cloud-infrastructure"
  }
}
```

**`/expertise/technology-advisory`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/expertise/[slug]/page.tsx`):

```json
{
  "title": "Technology Advisory & Experience",
  "description": "Technology strategy, solution architecture and product design that bring business needs and engineering decisions into alignment.",
  "alternates": {
    "canonical": "/expertise/technology-advisory"
  }
}
```

**`/about`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/about/page.tsx`):

```json
{
  "title": "About us",
  "description": "Founded in 2020, RBC Enterprise is an engineering-led technology company based in Nairobi, Kenya, delivering internationally.",
  "alternates": {
    "canonical": "/about"
  }
}
```

**`/work`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/work/page.tsx`):

```json
{
  "title": "Our work",
  "description": "Discuss RBC Enterprise’s approach to business applications, integration, data and cloud engineering.",
  "alternates": {
    "canonical": "/work"
  }
}
```

**`/contact`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/contact/page.tsx`):

```json
{
  "title": "Let’s talk",
  "description": "Discuss your software, data, AI or infrastructure project with RBC Enterprise in Nairobi. Contact support@rbc-ent.com.",
  "alternates": {
    "canonical": "/contact"
  }
}
```

**`/privacy`** (source `C:/Users/Brian.Muthama/rbc-ent/site/app/privacy/page.tsx`):

```json
{
  "title": "Privacy notice",
  "description": "Information about enquiries and privacy on the RBC Enterprise website.",
  "alternates": {
    "canonical": "/privacy"
  }
}
```

Unknown expertise metadata title: “Expertise not found”. Unknown work metadata title: “Project not found”. A populated work item would use title `p.title`, description `p.challenge`, canonical `/work/${slug}`. The 404 exports no custom metadata.

## Visual system, assets and source map

Global stylesheet: `C:/Users/Brian.Muthama/rbc-ent/site/app/globals.css`. Manrope typography, off-white background, dark text, blue accent, thin rules and generous section spacing. Desktop layouts mostly collapse to single columns at ≤767px; technology grid remains two columns. At ≤1100px footer becomes two columns. Reduced-motion settings disable transitions/animations. Print hides header, footer, CTAs, hero actions and mobile menu, and reveals all service/process panels. Layout descriptions are source-based, not screenshot-verified.

Shared `PageIntro`, `CTA`, `SectionLabel`, `TextLink`, `Header`, `Footer`, `Brand`: `C:/Users/Brian.Muthama/rbc-ent/site/components/site.tsx`. Interaction components `Menu`, `HeroSculpture`, `ServiceIndex`, `ArchitectureStory`, `Process`: `C:/Users/Brian.Muthama/rbc-ent/site/components/interactions.tsx`. Form: `C:/Users/Brian.Muthama/rbc-ent/site/components/enquiry-form.tsx`. Decorative arrow: `C:/Users/Brian.Muthama/rbc-ent/site/components/arrow.tsx`. SVG: `C:/Users/Brian.Muthama/rbc-ent/site/components/systems.tsx`. Data: `C:/Users/Brian.Muthama/rbc-ent/site/lib/content.ts`. Validation: `C:/Users/Brian.Muthama/rbc-ent/site/lib/enquiry.ts`.

`SystemsSculpture` accessible label: “An original architectural sculpture of interconnected system layers”. SVG captions “CONNECTED BY DESIGN” and “BUILT TO EVOLVE” are real rendered text, transcribed at every current use above. The artwork is an original conceptual visual, not a client project. Brand accessible name: “RBC Enterprise home”; its image alt is empty.

Referenced public assets: `C:/Users/Brian.Muthama/rbc-ent/site/public/rbc-logo.png` (brand/icon), `C:/Users/Brian.Muthama/rbc-ent/site/public/og-image.png` (social metadata), `C:/Users/Brian.Muthama/rbc-ent/site/public/manrope-regular.ttf`, `C:/Users/Brian.Muthama/rbc-ent/site/public/manrope-semibold.ttf`. License: `C:/Users/Brian.Muthama/rbc-ent/site/public/MANROPE-LICENSE.txt`. Other image files `apple-touch-icon.png`, `favicon.ico`, `logo-192.png` are supplied but not explicitly referenced in application code; they are not page sections. `next.config.ts` configures standalone output and disables poweredByHeader; no custom redirects/rewrites.

## Coverage

All app, component and library sources were inspected. Eight page files implement six static route pages and two dynamic templates; the expertise template has four current entries and the work template has zero. Also covered: root layout, not-found component, API route, sitemap, robots, styles, metadata, assets and conditional/no-JavaScript copy. No design or copy recommendations are included.
