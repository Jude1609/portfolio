# Jude Victor — Portfolio

Embedded Systems & Robotics Developer portfolio built with Next.js 15, Sanity CMS, and Tailwind CSS v4.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **CMS:** Sanity (visual content management)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Theme:** next-themes (dark/light)
- **Analytics:** Vercel Analytics
- **Deployment:** Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Set up Sanity CMS

1. Create a free account at [sanity.io](https://sanity.io)
2. Create a new project
3. Copy `.env.local.example` to `.env.local` and fill in your Sanity credentials:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-01
SANITY_API_READ_TOKEN=your_read_token
```

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### 4. Manage content via Sanity Studio

Visit [http://localhost:3000/studio](http://localhost:3000/studio) — log in with your Sanity account and start adding projects, skills, experience, and testimonials.

### 5. Deploy to Vercel

1. Push to a GitHub repo
2. Import into [vercel.com](https://vercel.com)
3. Add your environment variables
4. Deploy

## Content Management

All content is managed through the **Sanity Studio** dashboard:

| Schema | Fields | Description |
|--------|--------|-------------|
| About | name, title, tagline, bio, avatar, resume, stats, social links | Personal info |
| Project | title, description, image, tech stack, category, links | Portfolio projects |
| Skill | name, category (hardware/firmware/software/tools), proficiency | Technical skills |
| Experience | role, company, description, dates | Work/education timeline |
| Testimonial | name, role, quote, avatar, source | Recommendations |

To add images: just drag & drop into the Sanity Studio editor.

## Customization

- **Colors & theme:** Edit CSS variables in `app/globals.css`
- **Fonts:** Change font imports in `app/layout.tsx`
- **Nav links:** Edit the `links` array in `components/layout/Navbar.tsx`

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with fonts, theme, nav, footer
│   ├── page.tsx            # Homepage — fetches all data from Sanity
│   ├── globals.css         # Tailwind CSS and theme variables
│   └── (studio)/           # Sanity Studio route
├── components/
│   ├── layout/             # Navbar, Footer, ThemeProvider, ThemeToggle
│   ├── sections/           # Hero, About, Skills, Projects, Experience, etc.
│   └── ui/                 # Button, Card, Badge, Section, Typewriter
├── sanity/
│   ├── client.ts           # Sanity client + image URL builder
│   ├── queries.ts          # GROQ queries for fetching content
│   └── schemas/            # CMS content models
├── lib/
│   └── utils.ts            # cn() utility
└── public/                 # Static assets (resume PDF, favicon)
```
