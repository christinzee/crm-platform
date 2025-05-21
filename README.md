# CRM Platform

A modern CRM dashboard application built with Next.js, TypeScript, Prisma, and Tailwind CSS. This project demonstrates a performant, maintainable, and delightful dashboard UI using mock data. Other CRM modules (deals, companies, contacts, tasks, calendar) are scaffolded but not yet implemented.

---

## Features

- **Dashboard**:

  - Visualizes sales performance, quotas, activities, and leaderboards using mock data.
  - Includes cards for quota progress, daily activity, new leads, top opportunities, upcoming tasks, follow-up reminders, and a leaderboard.
  - Responsive, accessible, and themeable interface using Tailwind CSS, Shadcn UI, and Radix UI primitives.

- **Other Pages**:
  - **Deals, Companies, Contacts, Tasks, Calendar**: Pages are scaffolded but not yet functional.

---

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS, Shadcn UI, Radix UI, Recharts
- **Backend**: Next.js API routes scaffolded, Prisma ORM, PostgreSQL (planned for future)
- **Other**: Lucide React Icons, DnD Kit

---

## Getting Started

### Prerequisites

- Node.js 18+

### Installation

```bash
pnpm install
# or
npm install
# or
yarn install
```

### Development

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
  app/
    dashboard/   # Dashboard UI (mock data)
    deals/       # Placeholder
    companies/   # Placeholder
    contacts/    # Placeholder
    tasks/       # Placeholder
    calendar/    # Placeholder
    api/         # Scaffolded API endpoints
  components/    # Reusable UI components (Shadcn, Radix, custom)
  hooks/         # Custom React hooks
  lib/           # Schemas, utilities
prisma/          # Prisma schema (for future use)
public/          # Static assets
```

---

## Current Status

- Only the dashboard page is implemented and uses mock data.
- All other pages and backend features are placeholders for future development.

---

## Scripts

- `pnpm dev` – Start development server
- `pnpm build` – Build for production
- `pnpm start` – Start production server
- `pnpm lint` – Lint code

---

## License

MIT

---

**Note:**  
This project is a work in progress. Only the dashboard is functional at this time.
