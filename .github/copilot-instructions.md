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

## Image Optimization Guidelines

**CRITICAL**: All images MUST be optimized before adding to the repository to ensure fast page loads, especially on mobile devices.

### Automated Workflow (Preferred Method)

When a user drops images in the root directory and asks to "optimize images" or "optimize new images":

1. **Check for images in root**: Look for `.jpeg`, `.jpg`, `.JPEG`, or `.JPG` files in the repository root
2. **Guide the user**: Explain that they need to trigger the GitHub Actions workflow
   - URL: https://github.com/enfcyco/Flowers/actions/workflows/optimize-images.yml
   - Click "Run workflow" button
   - Leave inputs empty to auto-detect all images in root, or specify specific filenames
3. **The workflow automatically**:
   - Generates 3 versions: web (1920px max), Instagram (1080x1080), Facebook (1200x630)
   - Moves all to `images/YYYY-MM-DD/` directory
   - Deletes originals from root
   - Commits with optimization statistics

**Output naming convention**:
- Web version: `filename-web.jpeg` (for website use)
- Instagram: `filename-instagram.jpeg` (1080x1080 square)
- Facebook: `filename-facebook.jpeg` (1200x630 landscape)

**Usage in HTML**:
```html
<img src="images/2026-02-08/photo-web.jpeg" alt="Description">
```

For more details, see: `.github/IMAGE-OPTIMIZATION-GUIDE.md`

### Manual Optimization (Alternative)

If automation is not available, use ImageMagick + jpegoptim:

- **Performance**: Unoptimized high-res phone photos (5712x4284px, 8.5MB) take 3+ minutes to load on 3G
- **Mobile Experience**: 81% reduction in file size dramatically improves mobile browsing
- **SEO**: Google penalizes slow-loading sites
- **User Experience**: Fast load times keep visitors engaged

### Image Optimization Requirements

When adding new images to the blog:

1. **Maximum Dimensions**: 1920px width (maintains aspect ratio)
   - Web displays max out at ~1920px width for desktop
   - Images larger than this waste bandwidth with no visual benefit
   
2. **JPEG Quality**: 85% compression
   - Provides excellent visual quality
   - Significantly reduces file size
   - Imperceptible quality loss

3. **Expected File Sizes**:
   - Typical optimized image: 400-800KB (down from 3-8MB)
   - Total page load should stay under 5-10MB

### How to Optimize Images

#### Quick Method (Using ImageMagick + jpegoptim):

```bash
# Install tools (if needed)
sudo apt install imagemagick jpegoptim

# Optimize a single image
convert input.jpeg -resize "1920x>" -quality 85 output.jpeg
jpegoptim --max=85 --strip-all output.jpeg

# Or optimize all images in a directory
find images -type f \( -iname "*.jpg" -o -iname "*.jpeg" \) | while read img; do
    width=$(identify -format "%w" "$img")
    if [ "$width" -gt 1920 ]; then
        convert "$img" -resize "1920x>" -quality 85 "$img.tmp"
        mv "$img.tmp" "$img"
    else
        convert "$img" -quality 85 "$img.tmp"
        mv "$img.tmp" "$img"
    fi
    jpegoptim --max=85 --strip-all "$img"
done
```

#### Online Tools (No Installation):

- [TinyJPG](https://tinyjpg.com/) - Simple drag-and-drop
- [Squoosh](https://squoosh.app/) - Advanced settings with preview
- [ImageOptim](https://imageoptim.com/) - Mac app

### Optimization Checklist

Before committing images:
- [ ] Images resized to max 1920px width
- [ ] JPEG quality set to 85%
- [ ] Verify file sizes are reasonable (400-800KB typical)
- [ ] Test images display correctly in browser
- [ ] Compare visual quality (should be imperceptible difference)

### Performance Benchmarks

- **Before Optimization**: 26MB total (8.5MB largest image)
  - 3G load time: ~5 minutes
  - 4G load time: ~45 seconds
  
- **After Optimization**: 4.9MB total (1MB largest image)
  - 3G load time: ~15 seconds (95% faster)
  - 4G load time: ~2 seconds (96% faster)

### Future Enhancements (Optional)

Consider these for even better performance:
- Responsive images using `<picture>` or `srcset` attributes
- WebP format with JPEG fallback (25-35% smaller)
- Lazy loading for images below the fold
- CDN for image delivery
