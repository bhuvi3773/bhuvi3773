# Portfolio Deployment Guide

Your portfolio is fully static, lightweight, and requires zero build steps or server configurations. It is ready for instant deployment to Vercel, Netlify, or GitHub Pages.

---

## Option 1: Deploy to Vercel (Recommended — 30 Seconds)

If you have the Vercel CLI installed:
```bash
npx vercel
```
Follow the prompts (default settings work out of the box).

Or via the **Vercel Web Dashboard**:
1. Push this folder to a new GitHub repository named `Portfolio` (see instructions below).
2. Go to [https://vercel.com/new](https://vercel.com/new).
3. Import your `Portfolio` repository.
4. Leave all build settings default and click **Deploy**.
5. Your site will be live with free SSL and worldwide CDN caching!

---

## Option 2: Deploy to GitHub Pages (Free & Automatic)

1. Create a new public repository on GitHub named `portfolio` at [github.com/new](https://github.com/new).
2. Push your portfolio files:
   ```bash
   git add .
   git commit -m "feat: complete developer portfolio"
   git remote add portfolio https://github.com/bhuvi3773/portfolio.git
   git push -u portfolio main
   ```
3. Go to **Repository Settings > Pages** on GitHub.
4. Under **Branch**, select `main` and root `/`, then click **Save**.
5. In ~1 minute, your portfolio will be live at:
   `https://bhuvi3773.github.io/portfolio/`

---

## File Overview

| File | Purpose |
| :--- | :--- |
| `index.html` | Main entry point featuring the project showcase, experience timeline, and architecture lens. |
| `resume.html` | Clean, 1-click printable web resume matching your exact resume facts with a Print/PDF export button. |
| `styles.css` | High-performance CSS design system with light/dark theme variables and fluid typography. |
| `script.js` | Zero-dependency client logic powering the category filter lens and clipboard copy helper. |
| `assets/favicon.svg` | Custom geometric monogram favicon. |
| `robots.txt` & `sitemap.xml` | Search engine indexing metadata. |
| `TODO.md` | Content integrity tracking checklist. |
| `DESIGN_PLAN.md` | Pre-implementation specification and design rules audit. |
