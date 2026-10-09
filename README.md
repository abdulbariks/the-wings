# The Wings — Frontend

The frontend for **The Wings**, a platform that connects dancers with dance companies. Built with **Next.js 16** (App Router), **React 19**, **TypeScript**, and **Tailwind CSS v4** with [shadcn/ui](https://ui.shadcn.com/).

The application supports three user roles — **dancer**, **company**, and **admin** — each with its own dedicated dashboard.

## Tech Stack

- **Framework:** Next.js 16.3.0 (App Router)
- **Language:** TypeScript (strict mode)
- **UI:** React 19, Tailwind CSS 4, shadcn/ui (base-nova style)
- **State & Data:** Redux Toolkit + RTK Query
- **Routing:** Next.js App Router with route groups (`(public)`, `(auth)`, `(dashboard)`)
- **Forms:** react-hook-form + Zod validation
- **Charts:** Recharts
- **Icons:** lucide-react
- **Package Manager:** pnpm

## Project Structure

```
.
├── app/                          # Next.js app directory
│   ├── layout.tsx                # Root layout (fonts, Redux provider)
│   ├── globals.css               # Global styles & Tailwind
│   ├── (public)/                 # Public marketing pages
│   │   ├── page.tsx              # Home
│   │   ├── about/
│   │   ├── pricing/
│   │   ├── faq/
│   │   ├── how-it-works/
│   │   ├── contact/
│   │   └── privacy/
│   ├── (auth)/                   # Authentication pages
│   │   ├── login/
│   │   ├── register/
│   │   ├── forgot-password/
│   │   └── email-verify/
│   └── (dashboard)/              # Role-based dashboards
│       ├── admin-dashboard/      # Admin: users, content, revenue, etc.
│       ├── company-dashboard/    # Company: browse dancers, matches, auditions
│       └── dancer-dashboard/     # Dancer: browse companies, saved profiles, etc.
├── components/
│   ├── client/                   # Marketing landing-page components
│   ├── auth/                     # Auth forms (login, register, etc.)
│   ├── layout/                   # Shared layout (Navbar, Footer, Sidebar)
│   ├── dashboard/                # Dashboard-specific components
│   │   ├── admin-dashboard/
│   │   ├── company-dashboard/
│   │   ├── dancer-dashboard/
│   │   └── reusable/             # Shared dashboard UI (DataTable, etc.)
│   └── ui/                       # shadcn/ui primitives
├── lib/
│   ├── store/                    # Redux store & provider
│   ├── api/                      # RTK Query API slices & types
│   ├── config/                   # Shared config (roles)
│   └── utils.ts                  # Utility helpers
└── proxy.ts                      # Next.js middleware for API routing
```

Path aliases (see `tsconfig.json`):

```
@/*          -> ./*          (root)
@/components -> ./components
@/lib        -> ./lib
@/ui         -> ./components/ui
```

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

The backend API base URL is configured via `NEXT_PUBLIC_API_URL` (defaults to `http://localhost:5000`). API requests prefixed with `/api/` are proxied to the backend through `proxy.ts` (Next.js middleware).

## Available Scripts

| Script        | Description                        |
|---------------|------------------------------------|
| `pnpm dev`    | Start the development server       |
| `pnpm build`  | Build the production bundle         |
| `pnpm start`  | Start the production server        |
| `pnpm lint`   | Run ESLint                         |

## User Roles & Dashboards

The app routes users to one of three dashboards based on their role:

| Role     | Dashboard Path                  | Key Features |
|----------|---------------------------------|--------------|
| Dancer   | `/dashboard/dancer-dashboard`   | Browse companies, saved profiles, sent green lights, public profile, matches, subscription |
| Company  | `/dashboard/company-dashboard`  | Browse dancers, shortlist, new applications, sent green lights, audition invites, matches, settings |
| Admin    | `/dashboard/admin-dashboard`    | User management, subscription tiers, content moderation, reports/flags, revenue analytics, company verification, marketplace |

## State Management

- Redux Toolkit store configured in `lib/store/store.ts`.
- RTK Query (`baseApi`) handles all API calls with automatic caching and tag-based revalidation.
- The store is provided at the root via `StoreProvider` in `app/layout.tsx`.
- Auth tokens are automatically attached to requests by `baseApi` (`lib/api/baseApi.ts`).

## Styling

- Tailwind CSS v4 with CSS variables (configured in `app/globals.css`).
- shadcn/ui components live in `components/ui/` using the `base-nova` style.
- Custom fonts: **Cormorant Garamond** (serif) and **Work Sans** (sans-serif), loaded via `next/font`.

## Deployment

This project is ready to deploy on Vercel. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for details.