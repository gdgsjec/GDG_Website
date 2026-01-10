# GDG SJEC Website

GDG website, what else can it be? This is the official digital home for Google Developer Groups (GDG) on Campus at SJEC. It's built to showcase our community, events, projects, and the talented individuals who make it all happen.

## Getting Started

We use **Bun** for fast dependency management and execution. Follow these steps to set up the project locally:

### Prerequisites
- [Bun](https://bun.sh/) installed on your machine.

### Installation
```sh
bun install
```

### Development
Start the local development server:
```sh
bun run dev
```

### Build
Build the production site:
```sh
bun run build
```

### Preview
Preview your production build locally:
```sh
bun run preview
```

---

## Project Structure

Here's an overview of how the project is organized:

```text
/
├── astro.config.mjs        # Astro configuration
├── package.json            # Dependencies and Bun scripts
├── tsconfig.json           # TypeScript configuration
├── public/                 # Static assets served as-is (fonts, icons, images)
│   └── images/             # Blog, project, and event media
├── src/
│   ├── components/         # Page sections and shared UI
│   │   └── ui/
│   ├── content/            # JSON/MD content and collections
│   │   ├── blog/           # Blog posts (Markdown)
│   │   ├── config.ts       # Astro content collections config
│   │   ├── events.json
│   │   ├── project-template.json
│   │   ├── projects.json
│   │   ├── team.json
│   │   └── teamLead.json
│   ├── layouts/            # Layout components (Layout, BlogLayout, ProjectLayout)
│   ├── lib/                # Shared helpers (e.g., Font.astro)
│   ├── pages/              # Astro routes
│   │   ├── index.astro
│   │   ├── blog/           # Blog listing and detail
│   │   ├── events/         # Events listing
│   │   ├── projects/       # Project listing and detail
│   │   └── team/           # Team page
│   └── styles/             # Global and component CSS
└── README.md
```

---

## How to Add Projects

Adding a new project to the website is easy! Follow these steps:

1.  **Locate Template**: Open `src/content/project-template.json`.
2.  **Copy & Update**: Copy the object inside the array and append it to the end of `src/content/projects.json`.
3.  **Fill Details**:
    - `slug`: Unique URL-friendly name (e.g., "my-awesome-app").
    - `media.thumbnail`: Path to the image in `public/images/projects/`.
    - `media.video`: YouTube or Google Drive link (if any).
    - `links.github`: Link to the repository.
    - `links.live`: Link to the hosted demo.
4.  **Add Images**: Place your project images in `public/images/projects/`.
5.  **Verify**: Run `bun run dev` and navigate to `/projects/[your-slug]` to see your project live!

---

## Contribution Guide

1.  **Fork** the repository.
2.  **Create** a new branch (`git checkout -b feature/amazing-feature`).
3.  **Commit** your changes (`git commit -m 'Add some amazing feature'`).
4.  **Push** to the branch (`git push origin feature/amazing-feature`).
5.  **Open** a Pull Request.

Happy Coding!
