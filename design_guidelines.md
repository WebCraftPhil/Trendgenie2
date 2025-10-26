# Design Guidelines: Creator Workflow Tool — Project HQ

## Design Approach

**Hybrid Approach**: Material Design foundation with inspiration from Notion's content density, Linear's typography precision, and Buffer's creator-friendly interface. This balances the information-heavy dashboard requirements with the visual sensibility expected by creative users.

**Core Principles**:
- Clarity over decoration: Information hierarchy is paramount
- Creator-centric: Visual language that resonates with social media natives
- Scannable efficiency: Quick decision-making for busy creators
- Confidence-inspiring: Professional polish that justifies the paid tier

---

## Typography System

**Font Families** (Google Fonts via CDN):
- Primary: Inter (all weights 400-700) — interface text, body content
- Display: Plus Jakarta Sans (600-800) — headings, section titles, CTA labels

**Type Scale**:
- Hero/Page Titles: text-5xl lg:text-6xl, font-bold
- Section Headers: text-3xl lg:text-4xl, font-semibold
- Card Titles: text-xl font-semibold
- Idea Hooks: text-lg font-medium (slightly larger for emphasis)
- Body Text: text-base
- Metadata/Labels: text-sm font-medium
- Captions/Hints: text-xs

---

## Layout System

**Spacing Primitives** (Tailwind units):
- Micro spacing: 1, 2 (tight gaps, icon padding)
- Standard spacing: 4, 6, 8 (component padding, card gaps)
- Section spacing: 12, 16, 20 (between major sections)
- Page margins: 24, 32 (desktop containers)

**Grid Structure**:
- Container: max-w-7xl mx-auto for main content
- Dashboard grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
- Idea cards: masonry-style or uniform grid depending on content length
- Sidebar (if present): w-64 fixed on desktop, full-width drawer on mobile

---

## Component Library

### Navigation
**Top Navigation Bar**:
- Fixed position, backdrop-blur-lg for modern glass effect
- Logo left, navigation center, user menu/CTA right
- Navigation items: text-sm font-medium with subtle underline on active
- Mobile: Hamburger menu transforming to full-screen overlay

### Hero Section (Marketing/Landing)
**Layout**:
- Split hero: 60/40 text-to-visual ratio
- Left: Bold headline (text-5xl), subheadline (text-xl), dual CTA buttons (primary + secondary)
- Right: Mockup/screenshot showcasing the dashboard interface
- Height: min-h-screen but natural flow, not forced 100vh

**Supporting Elements**:
- Social proof banner above hero: "Trusted by 5,000+ creators" with mini avatar cluster
- Animated stats ticker below CTAs: "12,430 ideas generated today"

### Dashboard Components

**Idea Cards**:
- Card structure: rounded-2xl, p-6, shadow-lg with subtle border
- Header: Trend title + performance badge (High/Med/Low with distinct visual treatment)
- Content sections clearly separated:
  - Trend summary (2-3 lines, text-sm)
  - Generated ideas (numbered list, text-base)
  - Hook examples (emphasized with italic, text-lg)
  - Action footer: Save, Export, Regenerate buttons as icon-text combos
- Hover state: subtle lift (transform scale-102) + shadow enhancement

**Performance Indicators**:
- Badge pills: High (large icon + label), Medium (medium icon), Low (small icon)
- Icon library: Heroicons (trends-up, arrow-trending-up, chart-bar)
- Positioning: Top-right corner of idea cards

**Niche Selector**:
- Multi-select dropdown with search
- Selected niches displayed as dismissible chips
- Positioned prominently in dashboard header or sidebar

**Daily Digest Display**:
- Timeline/feed layout: vertical stack with connecting lines
- Each entry: timestamp, trend title, collapse/expand for full ideas
- "Generate more" button at bottom of feed

### Forms & Inputs
**Consistent Treatment**:
- Input fields: rounded-lg, p-3, border-2 with focus ring
- Labels: text-sm font-medium, mb-2
- Dropdowns: Custom styled with Headless UI for accessibility
- Toggle switches for settings (Pro features, email notifications)

### Dashboard Layout
**Structure**:
- Header bar: Logo + quick filters + user menu
- Main content area: 
  - Left sidebar (desktop): Niche filters, saved searches, quick stats
  - Center: Idea card grid (2-3 columns on desktop, 1 on mobile)
  - Right sidebar (optional): Performance summary, usage stats (for Pro users)

**Empty States**:
- Large centered icon + message + CTA
- Example: "No ideas yet today — Generate your first set" with prominent button

### Pricing/Feature Comparison (Landing Page)
**Layout**:
- Three-tier display: Free, Pro, Enterprise (even if only Free/Pro exist, show aspirational tier)
- Cards: rounded-3xl, p-8, hover lift effect
- Feature list: Checkmarks with feature names, strikethrough for unavailable features in lower tiers
- CTA buttons: Full-width within each card

### Export/Integration Section
**Component**:
- Grid of integration cards: Notion, Google Calendar, Trello logos with "Connect" status
- Each card: Logo, service name, connection status, action button
- Layout: grid-cols-2 md:grid-cols-4 gap-4

### Testimonials (Landing Page)
**Structure**:
- Carousel or grid: grid-cols-1 md:grid-cols-3 gap-8
- Each testimonial: User avatar (large, rounded-full), quote (text-lg italic), name + role (text-sm)
- Star ratings or performance metric alongside quote

---

## Images

**Hero Image**: 
- Dashboard screenshot or mockup showing idea cards in action
- Placement: Right side of split hero (40% width)
- Style: Perspective tilt (~5 degrees), subtle shadow, showing realistic content

**Feature Showcase Images**:
- Screenshots of key features: Trend scraper results, hook generator interface, performance dashboard
- Placement: Alternating left/right in feature sections
- Treatment: Rounded corners (rounded-2xl), shadow-2xl

**Creator Profile Images** (Testimonials):
- Small circular avatars (w-12 h-12)
- Grid of avatars in social proof sections

**Social Proof Section**:
- Logo wall of platforms/publications if applicable (grid of grayscale logos)

---

## Animations

**Sparingly Used**:
- Idea card entrance: Staggered fade-in on dashboard load
- Performance badge pulse: Subtle scale animation on "High" performers
- Hover states: Smooth transform and shadow transitions (transition-all duration-300)
- Page transitions: Minimal fade between routes

**Avoid**: Scroll-triggered animations, parallax effects, excessive motion

---

## Page-Specific Layouts

### Landing Page
**Sections** (comprehensive, 6-8 total):
1. Hero with split layout + social proof
2. Problem/Solution: "Stop staring at a blank screen" messaging
3. Feature showcase: 3-column grid of core features with icons
4. How It Works: 3-step visual process (Scrape → Generate → Publish)
5. Performance preview: Dashboard screenshot + stats callouts
6. Testimonials: 3-column grid
7. Pricing comparison: Free vs Pro cards
8. FAQ: Accordion-style (4-6 questions)
9. Final CTA: Centered, bold headline + signup form
10. Footer: Navigation links, social media, newsletter signup form

**Multi-column Usage**:
- Features: lg:grid-cols-3
- Testimonials: md:grid-cols-3
- Pricing: md:grid-cols-2 with centered layout
- Footer: md:grid-cols-4 (Product, Company, Resources, Connect)

### Dashboard/App Interface
**Layout**:
- Persistent top nav
- Optional left sidebar (collapsible on desktop, drawer on mobile)
- Main content: Flexible grid adapting to content density
- Bottom action bar (mobile): Sticky CTA for "Generate More Ideas"

### Settings Page
**Structure**:
- Tabbed interface: Account, Preferences, Billing, Integrations
- Form-heavy: Two-column layout (label left, input right) on desktop
- Sections clearly divided with headings and horizontal rules

---

## Accessibility & Interaction

- All interactive elements: min-height of h-11 (44px) for touch targets
- Focus indicators: ring-2 ring-offset-2 on all interactive elements
- Icon-only buttons: Always include sr-only text labels
- Form validation: Inline error messages with icon + text below fields
- Keyboard navigation: Full support for dashboard card browsing

---

## Responsive Breakpoints

- Mobile-first approach
- Key breakpoints: md (768px), lg (1024px), xl (1280px)
- Dashboard: 1 column mobile, 2 columns tablet, 3 columns desktop
- Navigation: Hamburger menu below md, horizontal nav above
- Typography: Scale down by 1-2 sizes on mobile (text-5xl → text-4xl)