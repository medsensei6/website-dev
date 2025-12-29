# MedSensei Website

A React-based website for MedSensei, providing free medical school application guidance and MCAT preparation support.

## Color Scheme

This website uses a standardized color palette defined as CSS variables in [src/index.css](src/index.css).

### Primary Colors

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--color-primary-blue` | `#2563eb` | Main brand color, navbar, buttons, links, accents |
| `--color-primary-dark` | `#1d4ed8` | Button gradients, hover states, emphasis |
| `--color-primary-light` | `#93c5fd` | Hover effects, light accents |
| `--color-accent-yellow` | `#fbbf24` | Call-to-action buttons, highlights |

### Text Colors

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--color-text-primary` | `#1f2937` | Body text, primary content |
| `--color-text-heading` | `#111827` | Headings, emphasis text |
| `--color-text-secondary` | `#374151` | Secondary text, descriptions |
| `--color-text-muted` | `#4b5563` | Subtle text, captions |

### Background Colors

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--color-bg-page` | `#f8fafc` | Main page background |
| `--color-bg-section` | `#f1f5f9` | Section backgrounds (testimonials) |
| `--color-bg-card` | `#ffffff` | Card backgrounds |
| `--color-bg-footer` | `#e5e7eb` | Footer background |

### Border Colors

| Variable | Hex Code | Usage |
|----------|----------|-------|
| `--color-border-light` | `#e0e7ff` | Testimonial card borders |

## Using the Color Palette

To use these colors in your CSS, reference the CSS variables:

```css
.my-element {
  color: var(--color-primary-blue);
  background-color: var(--color-bg-card);
}
```

## CSS Architecture

The website uses a consolidated CSS structure with:

- **Shared Card Styles**: `.card` and `.resource-card` share base styling with hover effects
- **Team Cards**: Use `.team-card-link` with independent styling and explicit grid breakpoints
- **Shared Button Styles**: `.cta-button`, `.donate-button`, and `.signup-button` share base styling
- **Shared Image Styles**: `.team-photo` and `.testimonial-avatar` share circular styling
- **CSS Variables**: All colors use CSS custom properties for easy theming
- **Responsive Units**: Uses `rem` instead of `px` for better scaling and accessibility (1rem = 16px by default)
- **Mobile-First Design**: Most grids use `minmax(min(100%, Xrem), 1fr)` for responsive behavior; team grid uses explicit breakpoints

## Tech Stack

- **React** with React Router for navigation
- **Vite** for build tooling
- **Pure CSS** with organized sections
- **Google Fonts**: Inter (body) and Plus Jakarta Sans (headings)

## Development

```bash
npm install
npm run dev
```

## Deployment

This site is deployed to GitHub Pages:

```bash
npm run build
npm run deploy
```
