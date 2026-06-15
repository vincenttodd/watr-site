# watr-site

Landing site for **vincenttodd.com**. The root path redirects to
[toddagriscience.com](https://toddagriscience.com); the site also hosts the
**Privacy Policy** (`/privacy`) and **Terms of Use** (`/terms`) pages.

Built with [Next.js](https://nextjs.org) (App Router) and Tailwind CSS.

## Routes

| Path       | Behaviour                                      |
| ---------- | ---------------------------------------------- |
| `/`        | 307 redirect to `https://toddagriscience.com`  |
| `/privacy` | Privacy Policy (incl. CCPA, Japan, EU-UK)      |
| `/terms`   | Terms of Use                                   |

The root redirect is configured in [`next.config.ts`](./next.config.ts).
Page text lives in `app/<page>/messages.json` and is rendered via the small
`makeT()` resolver in [`app/_lib/messages.ts`](./app/_lib/messages.ts).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deployed on Vercel; pushes to `main` trigger a production deploy.
