# memories_craftedforyou

Event Decoration & Photography — React + Vite.

## Run locally
    npm install
    npm run dev        # http://localhost:5173

## Build & launch
    npm run build      # outputs ./dist
    npm run preview    # test the production build

Deploy the `dist/` folder to any static host (Vercel, Netlify, Cloudflare Pages, GitHub Pages).
Vercel/Netlify: set build command `npm run build` and output directory `dist`.

## Before launch
- `src/components/Book.jsx` — the enquiry form only shows a thank-you message; connect `onSubmit` to your backend or a form service.
- Replace the `href="#"` contact links (Info, About, Footer) with the real Instagram / email / phone.
- Swap the placeholder photos (hosted on the old Studio.Design storage) for your own decor & photography images in `src/components/`.

The original single-file version is saved at `../backup/index-static-backup.html`.
