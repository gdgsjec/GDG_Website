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
├── public/                 # Static assets (fonts, images, icons)
│   └── images/             # Organized project and team images
├── src/                    # Source code
│   ├── components/         # Reusable Astro/React components
│   │   └── ui/             # Generic UI components
│   ├── content/            # Data-driven content (JSON & Markdown)
│   │   ├── blog/           # Blog posts in Markdown
│   │   ├── projects.json   # Main project data
│   │   ├── team.json       # Team member data
│   │   └── events.json     # Event data
│   ├── layouts/            # Page templates (Layout, ProjectLayout, BlogLayout)
│   ├── lib/                # Utility functions and helper scripts
│   ├── pages/              # Routing and top-level pages
│   └── styles/             # Global CSS and layout styling
├── package.json            # Project dependencies and Bun scripts
└── src/content/project-template.json # Template for adding new projects
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
