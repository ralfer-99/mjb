Mini Job Board - A Next.js Application
This project is a mini job board application built using Next.js, React, Tailwind CSS, and PostgreSQL (with Prisma ORM). It allows users to browse job listings, and administrators to manage them.

Technologies Used
Next.js (14), React (18), Tailwind CSS (3), Next.js API Routes, PostgreSQL, Prisma (5), bcryptjs, TypeScript (5).

Prerequisites
Node.js (>= 16.8), npm/yarn/pnpm, PostgreSQL.

Installation
git clone <repository_url> (if applicable) & cd job-board
npm install or yarn install or pnpm install
npm install -D prisma or yarn add -D prisma or pnpm add -D prisma
Create .env with PostgreSQL connection details.
npx prisma init --datasource-provider postgresql
Define schema in prisma/schema.prisma.
npx prisma migrate dev --name init
npx prisma generate
Running the Application
npm run dev or yarn dev or pnpm dev. Open http://localhost:3000.

Key Features
Browse Jobs, Basic Login/Signup, Basic Admin Panel (/admin), Add Jobs (Admin).

Folder Structure
job-board/
├── app/             # Frontend (Next.js App Router)
│   ├── layout.tsx
│   ├── page.tsx
│   ├── login/
│   ├── signup/
│   ├── admin/
│   └── api/         # Backend API Routes
│       └── auth/
│       └── jobs/
├── components/      # Reusable frontend components
│   ├── Navbar.tsx
│   └── JobCard.tsx
├── lib/             # Backend utility functions (db.ts, auth.ts)
├── prisma/          # Prisma schema
├── styles/
├── .env
├── tailwind.config.ts
├── postcss.config.js
├── tsconfig.json
└── package.json
Backend API Endpoints
POST /api/auth/login, POST /api/auth/signup, GET /api/jobs, POST /api/jobs.

Database Schema
(Defined in prisma/schema.prisma - User and Job models).

Authentication
Basic login/signup with bcryptjs for password hashing.