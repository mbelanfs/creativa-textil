<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Creativa Textil Artesanal — site

This repository contains a Vite + React website. The product catalog is editable
via `data/products.json` — edit that file in GitHub to add or update products and
push to `main` to trigger a Vercel deployment.

## Run locally

Prerequisites: Node.js

1. Install dependencies:
   `npm install`
2. Run in development mode:
   `npm run dev`

## Edit products

- Open `data/products.json` and add/remove product objects under `DRESSITOS_PRODUCTS` or `FALLASTYLE_PRODUCTS`.
- Images must be placed under `images/` following the existing structure and will be copied into the production `dist/` by the postbuild script.

The project no longer uses any external AI service by default; any previous AI proxy was removed to keep the deployment simple.


## Run the deploy function: 
npm run deploy:quick