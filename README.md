# Portfolio

Full-stack personal portfolio website.

![Structure](https://img.shields.io/badge/structure-monorepo-8A2BE2?labelColor=20232a)

```
portfolio/
├── FrontEnd/   React 19 + Vite + Tailwind CSS 4 (Glass Aurora theme)
└── BackEnd/    Node.js + Express API with Gmail contact delivery
```

## Repositories & Folders

| Folder | Tech | Role |
| --- | --- | --- |
| [`FrontEnd/`](FrontEnd) | React, Vite, Tailwind CSS, React Router | The website UI |
| [`BackEnd/`](BackEnd) | Node.js, Express, Nodemailer | REST API + email notifications |

See [FrontEnd/README.md](FrontEnd/README.md) for detailed frontend docs.

## Running Locally

### 1. Frontend (port 5173)

```bash
cd FrontEnd
npm install
npm run dev
```

Open http://localhost:5173

### 2. Backend API (port 4000)

```bash
cd BackEnd
npm install
npm run dev
```

API endpoints:

| Endpoint | Method | Description |
| --- | --- | --- |
| `/api/health` | GET | Server status |
| `/api/projects` | GET | Projects pulled from GitHub (code + live demo links) |
| `/api/stats` | GET | Real stats from GitHub (project count, years, followers, stars) |
| `/api/contact` | POST | Contact form (sends email to owner) |

## Managing content through GitHub (no admin panel)

The site is fully driven by GitHub and files in the repo — there is no admin UI.

- **Projects** come from your GitHub account (default `BaraaAlArab`, override with
  `GITHUB_USERNAME`). A repo appears on the Projects page when it is not a fork and
  has a description or a live `homepage` URL. To add a "Visit Live Site" button, set
  the repo's Homepage on GitHub: repo → Settings → Websites (Homepage) → paste the
  URL → save. Changes appear within ~10 minutes (server-side cache).
- **Profile photo**: replace `FrontEnd/src/assets/me/me.jpg`.
- **CV / resume**: replace `FrontEnd/public/resume.pdf` — the "Download CV" button
  on the About page uses it.
- **Years Coding**: set `START_YEAR` in `BackEnd/.env` (defaults to 2019).

The contact form needs `WEB3FORMS_ACCESS_KEY` in `BackEnd/.env` — see
[BackEnd/.env.example](BackEnd/.env.example).

## Author

**Baraa Al Arab** — [@BaraaAlArab](https://github.com/BaraaAlArab)
