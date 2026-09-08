# Kevin & Joyce Wedding Site

Warm, elegant static wedding website for Kevin & Joyce — January 2, 2027 at the Mandarin Oriental, Taipei.

Built with Astro + TypeScript. Domain for titles/meta: kevinandjoyce.com.

## Local development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually http://localhost:4321).

Scripts:

- `npm run dev` — start local dev server
- `npm run build` — build static site to `dist/`
- `npm run preview` — preview the production build

## RSVP form (Formspree)

The RSVP page posts to Formspree. Create a form at https://formspree.io, then set:

```bash
PUBLIC_FORMSPREE_ID=your_form_id_here
```

- Copy `.env.example` to `.env` and fill in the ID for local work.
- On Vercel, add the same variable in Project Settings - Environment Variables.
- Without `PUBLIC_FORMSPREE_ID`, the RSVP page shows a short setup note instead of the form.

Fields collected: name(s), email, attending (yes/no/maybe), guest count, dietary notes, message.

## Deploy on Vercel

1. Push this repo to GitHub.
2. Import the project in Vercel.
3. Framework preset: Astro (build: npm run build, output: dist).
4. Add PUBLIC_FORMSPREE_ID in environment variables.
5. Deploy. Optionally attach the kevinandjoyce.com domain.

## Pages

- / - Home
- /our-story - Our Story
- /details - Details
- /travel - Travel & Stay
- /rsvp - RSVP
- /registry - Registry
- /faq - FAQ

## Notes

- Photos can replace the gradient/typography placeholders later.
- Reception only (no ceremony). Cocktail hour at 5:00 PM; dinner time TBD. Dress code: Cocktail.
