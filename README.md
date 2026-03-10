NextGen Media - Game Discovery Platform

A modern web application for discovering and reviewing video games, built with cutting-edge technologies to demonstrate best practices in React/Next.js development.


TECH STACK

Core Framework:
- Next.js 16.1: React framework with App Router for server components, file-based routing, and API routes
- React 19.2: UI library for building component-based interfaces
- TypeScript 5.9: Type safety and better developer experience

Styling & UI:
- Tailwind CSS 3.4: Utility-first CSS framework for rapid UI development
- Heroicons 2.2: Beautiful SVG icons from the Tailwind team

Database & ORM:
- Prisma 7.4: Type-safe ORM with automatic migrations
- SQLite: Development database (easy to start)
- better-sqlite3: SQLite driver for Prisma

State Management:
- React Query 5.90: Server state management (caching, pagination, mutations)
- Zustand 5.0: Client state management (UI state, modals, filters)

Authentication:
- NextAuth.js 4.24: Authentication solution for Next.js with multiple providers

Development Tools:
- Turbopack: Lightning-fast development bundler (Next.js default)
- ESLint 9.39: Code linting and best practices
- Prettier 3.4: Code formatting

Testing:
- Vitest 3.1: Fast unit testing with Vite-powered transforms
- React Testing Library 16.2: Component testing utilities
- JSDOM 26.1: Browser environment simulation


INSTALLATION

1. Clone the repository:
   git clone https://github.com/YOUR_USERNAME/nextgen-media.git
   cd nextgen-media

2. Install dependencies:
   npm install

3. Set up environment variables:
   cp .env.example .env.local
   (Edit .env.local with your values)

4. Set up the database:
   npx prisma generate
   npx prisma db push

5. Run the development server:
   npm run dev


TESTING

- Run tests: npm test
- Run tests with UI: npm run test:ui
- Generate coverage report: npm run test:coverage


AVAILABLE SCRIPTS

- npm run dev: Start development server with Turbopack
- npm run build: Build for production
- npm run start: Start production server
- npm run lint: Run ESLint
- npm run format: Format code with Prettier
- npm test: Run Vitest tests
- npm run test:ui: Run tests with Vitest UI
- npm run test:coverage: Run tests with coverage report
- npm run prisma:studio: Open Prisma database GUI
- npm run prisma:push: Push schema changes to database


FEATURES IMPLEMENTED

- Next.js 14 App Router with TypeScript
- Tailwind CSS v3 with custom theme
- Prisma ORM with SQLite
- React Query for server state
- Zustand for client state
- Authentication boilerplate with NextAuth.js
- Testing setup with Vitest
- ESLint and Prettier configuration
- Responsive navbar with mobile menu
- Professional homepage UI


COMING SOON

- Game listing with infinite scroll
- Dynamic game detail pages
- Search and filter functionality
- User reviews and ratings
- Favorites system
- Real-time trending
- Animations with Framer Motion
- E2E tests with Playwright
- Deployment to Vercel


LICENSE

MIT


Author: Omar Zambrano


Built with Next.js, TypeScript, and Tailwind CSS