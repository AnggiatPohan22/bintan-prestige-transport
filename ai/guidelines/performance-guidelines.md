# Performance Guidelines

## Rules

- Keep public pages static-first.
- Avoid full React SPA behavior.
- Use React islands only for interactive components.
- Keep Motion animations light.
- Avoid unnecessary dependencies.
- Prefer optimized real images when final assets are added.
- Watch client JavaScript size as the site grows.

## Verification

- Run `npm run build` before handoff.
- Run `npm run astro check` when available.
- Document any command that cannot run.
