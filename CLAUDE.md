# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is a GitHub profile repository (eli9000/eli9000) that serves as a portfolio/resume page:
1. GitHub profile README displayed at https://github.com/eli9000
2. Personal portfolio website hosted at https://e9k.dev via GitHub Pages

## Repository Structure

```
.
├── README.md              # GitHub profile page content
├── public/
│   └── index.html        # Portfolio website landing page
├── CNAME                  # Custom domain configuration (e9k.dev)
├── package.json           # Minimal Node.js package metadata
├── index.js               # Empty entry point file
└── *.png, *.jpg          # Profile images and assets
```

## Key Technical Details

### GitHub Pages Configuration
- **Custom Domain**: e9k.dev (configured via CNAME file)
- **Hosting**: The `public/` directory serves the website content
- **Branch**: Deploys from `main` branch

## Development Commands

This repository has minimal development setup:

```bash
# No build process required
# No test suite configured
# No dependencies to install
```

## Making Changes

### Updating the GitHub Profile
Edit `README.md` - changes will be visible at https://github.com/eli9000

### Updating the Portfolio Website
Edit `public/index.html` - changes will be deployed via GitHub Pages to https://e9k.dev

### Git Workflow
```bash
git add .
git commit -m "message"
git push origin main
```

Changes pushed to `main` are automatically deployed by GitHub Pages.

## Important Notes

- The repository uses GitHub stats badges from github-readme-stats.vercel.app
- A visitor counter is embedded via Pipedream webhook
- Keep CNAME file intact to maintain custom domain routing
