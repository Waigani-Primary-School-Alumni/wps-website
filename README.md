# Waigani Primary School Alumni Fundraising Website

A community-managed website for alumni-led fundraising, event coordination, donation drives, and school support initiatives.

## Recommended Open-Source License

**MIT License** is recommended for this project because it is simple, widely accepted, and allows future alumni groups and community contributors to use, maintain, and improve the project with minimal legal complexity.

> The complete MIT license text is provided in [`LICENSE`](./LICENSE).

## Visual Identity

Use the school colors consistently across UI and communication assets:

- **Primary colors**
  - Navy Blue: `#001F54`
  - Yellow: `#FFD100`
- **Secondary colors**
  - Green: `#2E7D32`
  - Black: `#111111`

## Core Features

- Alumni fundraising campaign pages
- Event announcements and registration information
- Donation information and call-to-action sections
- Updates on school support projects and outcomes
- Contact form and alumni engagement information

## Repository Structure

```text
wps-website/
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ bug_report.md
│  │  └─ feature_request.md
│  ├─ pull_request_template.md
│  └─ workflows/
│     └─ ci.yml
├─ public/
│  ├─ images/
│  └─ favicon.ico
├─ src/
│  ├─ assets/
│  │  ├─ styles/
│  │  └─ icons/
│  ├─ components/
│  ├─ pages/
│  ├─ data/
│  ├─ services/
│  ├─ utils/
│  ├─ App.*
│  └─ main.*
├─ tests/
│  ├─ unit/
│  └─ e2e/
├─ .env.example
├─ .gitignore
├─ CONTRIBUTING.md
├─ CODE_OF_CONDUCT.md
├─ LICENSE
└─ README.md
```

This structure keeps content, UI, and operational files clearly separated so future maintainers (including non-technical teams) can onboard quickly.

## Setup Instructions

> Adapt commands to your chosen framework (for example React, Next.js, Vue, or static site tooling).

1. **Clone the repository**
   ```bash
   git clone https://github.com/Waigani-Primary-School-Alumni/wps-website.git
   cd wps-website
   ```
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Create environment file**
   ```bash
   cp .env.example .env
   ```
4. **Run locally**
   ```bash
   npm run dev
   ```
5. **Build for production**
   ```bash
   npm run build
   ```

## Contribution Guidelines

We welcome contributions from alumni, volunteers, and community supporters.

1. Create a feature branch from `main`.
2. Keep changes small and focused.
3. Write clear commit messages.
4. Test your changes before opening a pull request.
5. Open a pull request with:
   - What changed
   - Why it changed
   - Screenshots (if UI changes)

For governance continuity, document major decisions in pull requests so future alumni maintainers understand context.

## Basic Deployment Notes

- Deploy from the `main` branch after review.
- Use environment variables for sensitive values (never commit secrets).
- Enable HTTPS and basic monitoring.
- Keep backups of content and configuration.
- Tag stable releases for handover between alumni committees.

## Maintenance for Long-Term Community Use

- Prefer simple, readable code over complex abstractions.
- Keep dependencies minimal and regularly updated.
- Maintain clear documentation for non-technical contributors.
- Use GitHub Issues and PR templates to standardize collaboration.

## Contact

For school support and fundraising collaboration, open an issue in this repository or contact the alumni association administrators.
