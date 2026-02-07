# Copilot Instructions for Flowers Repository

This is a static HTML/CSS website for a flower blog hosted on GitHub Pages. The site showcases flower specimens, gardening updates, and farm information for educational and decorative purposes.

## Project Overview

- **Type**: Static website (HTML, CSS)
- **Hosting**: GitHub Pages
- **URL**: https://enfcyco.github.io/Flowers/
- **Purpose**: Personal flower blog and farm updates

## Repository Structure

- `index.html` - Main homepage with blog entries and updates
- `about.html` - About page with contact information for Hodge Podge Farms
- `styles.css` - Stylesheet with sage and cream themed design
- `_config.yml` - Jekyll configuration for GitHub Pages
- `README.md` - Project documentation
- `*.jpeg` - Flower specimen images

## Code Standards

### HTML Standards
- Use semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Maintain consistent indentation (4 spaces)
- Include proper meta tags for charset and viewport
- Keep the existing navigation structure across all pages
- Use descriptive title tags for each page

### CSS Standards
- Follow the existing sage green (#6b8e71, #8bbc8a, #A8D8B9) and cream (#FAF6E4, #f5f3f0) color scheme
- Maintain the gradient and theme consistency
- Use box-shadow for depth and hover effects
- Keep responsive design principles with flexbox
- Add transitions for interactive elements (0.3s ease)

### Content Guidelines
- Use proper heading hierarchy (h1 for page titles, h2 for sections)
- Format dates consistently (e.g., "Feb 5 2026", "Jan 31 2026")
- Keep blog entries in reverse chronological order (newest first)
- Maintain the friendly, personal tone of existing content

## Testing and Validation

Since this is a static site without a build process:

1. **Visual Testing**: Open HTML files in a browser to verify changes
2. **Validation**: Use W3C HTML and CSS validators for standards compliance
3. **Responsive Testing**: Test on different screen sizes
4. **Link Testing**: Verify all internal links work correctly
5. **GitHub Pages**: Changes are automatically deployed when merged to main branch

## Key Guidelines

1. **Preserve existing design**: Maintain the sage and cream color theme
2. **Keep it simple**: This is a static site, no need for complex frameworks
3. **Accessibility**: Ensure proper semantic HTML and ARIA labels where needed
4. **Mobile-friendly**: Maintain responsive design patterns
5. **Content accuracy**: Be mindful of personal information (farm address, contact details)

## What NOT to do

- Do not add build tools, package managers, or frameworks unless explicitly requested
- Do not modify the color scheme without approval
- Do not remove or change contact information without permission
- Do not add dependencies or complex JavaScript unless necessary
- Do not modify `_config.yml` without understanding Jekyll/GitHub Pages implications

## Documentation

When making changes:
- Update README.md if adding new pages or significant features
- Document any new conventions or patterns introduced
- Keep commit messages clear and descriptive

## Pull Request Guidelines

When creating Pull Requests:
- **Always include before/after screenshots** for any visual changes (UI, layout, styling)
- Organize screenshots with clear labels: "Before" and "After"
- Test and capture screenshots on both desktop and mobile viewports always
- Include screenshots in the PR description to help reviewers quickly understand the impact
- For desktop screenshots, use viewport around 1200x900 or similar
- For mobile screenshots, use viewport around 375x667 (iPhone size) or similar

## GitHub Pages Deployment

- The site automatically deploys from the main branch
- Changes may take a few minutes to appear after merge
- Test locally before pushing to ensure proper rendering
