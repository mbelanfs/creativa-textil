Quick deploy (Vercel) and simple editing guide

1) Push your repo to GitHub (if not already):
   git init
   git add .
   git commit -m "site"
   git branch -M main
   git remote add origin <your-git-url>
   git push -u origin main

2) Deploy to Vercel (zero-config):
    - Go to https://vercel.com and import your GitHub repo.
    - Vercel will detect Vite and use `npm run build` automatically. If asked, set:
       Build Command: npm run build
       Output Directory: dist
    - Deploy. Vercel will provide preview deployments for branches and automatic production deployments on push to `main`.

3) Editing products (easy, via GitHub web):
   - Edit `data/products.json` in the repo (GitHub web editor works fine).
   - Update `DRESSITOS_PRODUCTS` and/or `FALLASTYLE_PRODUCTS` arrays with product objects matching the example entries already in the file.
   - Commit the change — Vercel will auto-deploy a preview and then production when merged to `main`.

Notes:
- The repository includes `vercel.json` which helps Vercel build static assets from `dist/` and deploy serverless functions from `api/`.
- The project uses a lightweight local fallback for AI advice and does not require an external API key. No secret is needed.
- If you prefer Netlify or another host, I can adapt the serverless function and provide instructions.

If you want I can push these changes to GitHub for you (you'll need to provide a Git remote URL or add me as a collaborator). Otherwise, follow step (1) above to push and deploy.
