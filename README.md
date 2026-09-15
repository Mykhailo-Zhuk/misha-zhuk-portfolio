# Mykhailo Zhuk — Portfolio

Personal portfolio site in **Vercel-style Modern** — a clean, production-grade showcase of full-stack work.

## Stack

- **Next.js 14** (App Router)
- **TypeScript** (strict)
- **Tailwind CSS**
- **framer-motion** (fade-in, scroll-triggered, gradient mesh)
- **lucide-react** (icons)
- **next-themes** (light/dark mode)

## Sections

1. **Hero** — gradient mesh + tagline + CTAs + stats
2. **About** — bio, stack badges, photo
3. **Featured Projects** — 5 case studies with metrics
4. **Tech Stack** — grouped grid (Frontend, Backend, AI, Integrations, DevOps)
5. **Contact** — gradient CTA + 3 contact methods

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout (theme + nav + footer)
│   ├── page.tsx        # Home page composition
│   └── globals.css     # Tailwind + CSS variables (light/dark)
├── components/
│   ├── nav.tsx
│   ├── footer.tsx
│   ├── theme-provider.tsx
│   ├── theme-toggle.tsx
│   ├── ui/
│   │   └── badge.tsx
│   └── sections/
│       ├── hero.tsx
│       ├── about.tsx
│       ├── projects.tsx
│       ├── stack.tsx
│       └── contact.tsx
└── lib/
    ├── projects.ts     # Hardcoded project data
    ├── types.ts        # TypeScript types
    └── utils.ts        # cn() helper
```

## Notes

- **No MDX**: project data is hardcoded in `lib/projects.ts` for now. Migrating to MDX is straightforward if you want richer case studies.
- **Images**: Unsplash placeholders for project screenshots. Replace with real screenshots before production launch.
- **Theme**: Default is dark (Vercel-style); user can toggle.

## License

MIT © Mykhailo Zhuk