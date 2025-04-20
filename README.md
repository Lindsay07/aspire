## Setup
Install docker app + cli. On mac, that's done via `brew install --cask docker`. On windows, you figure out and update the readme please.

## How do I install dependencies?
pnpm install

## How do I run the app locally?

### Run postgres db locally
`./start-database.sh`

### Running the app
`pnpm dev`

## Run build locally
To avoid wasting a round trip with vercel, run this locally
`npm run build`

## How do I do db operations?

### Step 1: Add a table to the schema.ts file

### Step 2: Generate sql from this
Generate sql files based on the drizzle.config.ts file:
`pnpm db:generate`

### Step 2: Run db migration based on this
Locally: `pnpm db:migrate`

To run this on prod, you can update the DATABASE_URL to point to prod and run this. 
`DATABASE_URL="<COPY URL FROM VERCEL>" pnpm db:migrate`

Alternatively, let vercel handle this (once you set this up)

### Visualize your database
To view and interact with your database schema:
`pnpm db:studio`

This will start Drizzle Studio at https://local.drizzle.studio where you can:
- View all your tables and their relationships
- Browse and edit data
- Run SQL queries
- Export data

# Out of the box instructions (can ignore)
## Create T3 App

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## What's next? How do I make an app with this?

We try to keep this project as simple as possible, so you can start with just the scaffolding we set up for you, and add additional things later when they become necessary.

If you are not familiar with the different technologies used in this project, please refer to the respective docs. If you still are in the wind, please join our [Discord](https://t3.gg/discord) and ask for help.

- [Next.js](https://nextjs.org)
- [NextAuth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [Drizzle](https://orm.drizzle.team)
- [Tailwind CSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

## Learn More

To learn more about the [T3 Stack](https://create.t3.gg/), take a look at the following resources:

- [Documentation](https://create.t3.gg/)
- [Learn the T3 Stack](https://create.t3.gg/en/faq#what-learning-resources-are-currently-available) — Check out these awesome tutorials

You can check out the [create-t3-app GitHub repository](https://github.com/t3-oss/create-t3-app) — your feedback and contributions are welcome!

## How do I deploy this?

Follow our deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.