# VA Graphic Designer Portfolio

Next.js + Tailwind CSS portfolio. Edit `src/data/site.ts` to change your name, services, projects, prices and testimonials. Put images in `public/work/`.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static export to /out
```

## Deploy

**GitHub Pages** (automatic): every push to `main` runs `.github/workflows/deploy.yml`. It sets `BASE_PATH=/<repo-name>` so the site works at `username.github.io/repo`.

**Vercel**: import the GitHub repo at vercel.com/new and click Deploy. No settings or environment variables are needed. Do not set `BASE_PATH` on Vercel, so the site serves from the root. Every push to `main` redeploys, and every pull request gets a preview URL. Add a custom domain under Project → Settings → Domains.
