This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Mail / Contact setup

This project includes a server API route at `app/api/contact/route.js` which sends incoming contact form submissions via SMTP using Nodemailer. It requires the following environment variables (do NOT commit secrets to the repo):

- `SMTP_HOST` - your SMTP host (e.g. smtp.gmail.com)
- `SMTP_PORT` - SMTP port (465 for SSL or 587 for TLS)
- `SMTP_USER` - SMTP username (the account/email to authenticate)
- `SMTP_PASS` - SMTP password or app-specific password
- `TO_EMAIL` (optional) - destination email address; defaults to `SMTP_USER` if not set

Put these into a `.env.local` file at the project root when developing locally. Example:

```env
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=you@example.com
SMTP_PASS=yourpassword
TO_EMAIL=me@example.com
```

Quick test: start the dev server (`npm run dev`) and POST to the endpoint:

```bash
curl -X POST http://localhost:3000/api/contact -H "Content-Type: application/json" -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
```

If configured correctly the endpoint will return a 200 response and your SMTP account will send the email. If you're using Gmail, you may need an app password or enable less secure access depending on your account settings.
