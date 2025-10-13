
# moses-codes

Modern web app scaffold using Vite + TypeScript + PWA, tested with Vitest & Playwright, and deployed on GitHub Pages.

This overhaul introduces:
- Strict TypeScript across all sources.
- ESLint & Prettier for unified code style.
- Vitest for unit tests and Playwright for end-to-end tests.
- Husky pre-commit hooks with lint-staged.
- GitHub Actions for CI (lint, unit, E2E, CodeQL, Lighthouse), semantic-release, and Pages deploy.
- Figma design tokens workflow: drop your exported `.tokens.json` files into the `tokens/` folder and run `pnpm run build:tokens` to compile them into CSS variables using style dictionary.

## Quickstart

```bash
pnpm install   # or npm install / yarn install
pnpm dev       # start development server
pnpm build     # production build
pnpm preview   # preview build
pnpm test      # run unit tests (Vitest)
pnpm test:e2e  # run end-to-end tests (Playwright)
pnpm lint      # run ESLint & Prettier check
```

## Scripts

| Script | Description |
|---|---|
| `dev` | Start Vite dev server |
| `build` | Production build |
| `preview` | Preview production build |
| `test` | Unit tests via Vitest |
| `test:e2e` | End-to-end tests via Playwright |
| `lint` | Lint using ESLint and Prettier |
| `build:tokens` | Compile Figma design tokens to CSS vars |

## CI/CD

- **CI**: Node version matrix with linting, unit and E2E tests, Lighthouse CI.
- **Security**: CodeQL scanning.
- **Release**: semantic-release with Conventional Commits.
- **Deploy**: GitHub Pages from `dist/` on every successful main build.

## Contributing

Contributions are welcome! Please follow conventional commits for your commit messages. See `CONTRIBUTING.md` for more details.
