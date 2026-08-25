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
| `/api/projects` | GET | Project list |
| `/api/contact` | POST | Contact form (sends email to owner) |

The contact form needs Gmail credentials in `BackEnd/.env` — see
[BackEnd/.env.example](BackEnd/.env.example).

## Author

**Baraa Al Arab** — [@BaraaAlArab](https://github.com/BaraaAlArab)
