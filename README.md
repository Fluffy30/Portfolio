# Portfolio

A fast, accessible, mobile-friendly personal portfolio built with React + Vite and plain CSS (CSS Modules) — no UI framework, no heavy dependencies.

## Sections

Hero · About · Skills · Projects · Experience & Education · Resume · Contact · Footer

## 1. Personalize the content

You almost never need to touch component code. Everything text-based lives in one file:

```
src/data/siteData.js
```

Edit that file to change your name, role, bio, skills, projects, experience, email, and social links. Then:

- Replace `public/resume.pdf` with your real resume (same filename, or update `profile.resumeUrl` in `siteData.js`).
- Replace `public/og-image.png` with a 1200×630 image if you want a custom social-sharing preview.
- Update the `<title>`, meta description, and Open Graph tags at the top of `index.html` with your real name and domain.
- Update `og:url` and `canonical` in `index.html` once you have a live domain.

## 2. Run it locally

Requires [Node.js](https://nodejs.org) 18 or newer.

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## 3. Build for production

```bash
npm run build
```

This outputs a static site to the `dist/` folder — ready to upload anywhere.

```bash
npm run preview   # sanity-check the production build locally
```

## 4. Project structure

```
portfolio/
├── public/                  # static assets served as-is
│   ├── favicon.svg
│   ├── og-image.png
│   ├── resume.pdf           # replace with your real resume
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Navbar/
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── Skills/
│   │   ├── Projects/        # Projects.jsx + ProjectCard.jsx
│   │   ├── Experience/
│   │   ├── Resume/
│   │   ├── Contact/
│   │   ├── Footer/
│   │   ├── SectionHeading/  # shared "// 0N Title" section label
│   │   └── Icons.jsx        # small inline SVG icon set
│   ├── data/
│   │   └── siteData.js      # <- edit this to personalize the site
│   ├── hooks/
│   │   ├── useReveal.js     # scroll-triggered fade-in animation
│   │   └── useScrollSpy.js  # highlights the active nav link
│   ├── styles/
│   │   ├── variables.css    # design tokens (color, type, spacing)
│   │   └── global.css       # resets + base styles
│   ├── App.jsx
│   └── main.jsx
├── index.html                # SEO/meta/Open Graph tags live here
├── vite.config.js
├── package.json
└── .github/workflows/deploy.yml   # GitHub Pages auto-deploy
```

Each component folder contains a `.jsx` file and a matching `.module.css` file, so styles are scoped to that component and never leak.

## 5. Deploy

### Option A — GitHub Pages (free, included workflow)

1. Push this project to a new GitHub repository.
2. In `vite.config.js`, set `base` to match your repo:
    - Project page (`https://username.github.io/repo-name/`): `base: '/repo-name/'`
    - User/organization page (`https://username.github.io/`): leave `base: '/'`
3. In your repo on GitHub: **Settings → Pages → Source → GitHub Actions**.
4. Push to the `main` branch. The included workflow (`.github/workflows/deploy.yml`) builds and deploys automatically on every push.
5. Your site will be live at the URL GitHub Pages shows you.

### Option B — Netlify

1. Push this project to GitHub (or GitLab/Bitbucket).
2. In Netlify: **Add new site → Import an existing project**, pick your repo.
3. Netlify reads `netlify.toml` automatically:
    - Build command: `npm run build`
    - Publish directory: `dist`
4. Click **Deploy**. Done — every push to `main` redeploys automatically.

Or deploy without Git, using the CLI:

```bash
npm install -g netlify-cli
npm run build
netlify deploy --prod --dir=dist
```

### Option C — Vercel

1. Push this project to GitHub.
2. In Vercel: **Add New → Project**, import the repo.
3. Vercel reads `vercel.json` automatically (build command `npm run build`, output `dist`).
4. Click **Deploy**.

Or via CLI:

```bash
npm install -g vercel
vercel --prod
```

## 6. Uploading to GitHub (if you're new to this)

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

Then follow the GitHub Pages, Netlify, or Vercel steps above.

## 7. Making the contact form actually send email

Right now the contact form opens the visitor's email client with the message pre-filled (`mailto:`) — no backend, no dependency, works everywhere. If you'd rather receive submissions directly without opening a mail app, swap the `handleSubmit` function in `src/components/Contact/Contact.jsx` for a POST request to a form service such as [Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com), both of which work from a static site with no server of your own.

## Accessibility & performance notes

- Semantic HTML (`header`, `nav`, `main`, `section`, `footer`) throughout.
- Visible keyboard focus states on every interactive element.
- A "Skip to main content" link for keyboard/screen-reader users.
- Respects `prefers-reduced-motion` — animations are disabled for users who request it.
- No UI framework or icon library — icons are inline SVG, styling is plain CSS, so the shipped JS stays small.
- Two font families loaded via Google Fonts with `preconnect`; remove/replace in `index.html` if you want to self-host fonts instead.

## License

Use this template freely for your own portfolio.
