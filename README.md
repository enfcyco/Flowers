# Flowers

This repository contains various flower specimens and their details for educational and decorative purposes. You can view the site on GitHub Pages here: [enfcyco.github.io/Flowers](https://enfcyco.github.io/Flowers/).

## Directory Structure

```
Flowers/
├── images/              # All blog images organized by date
│   ├── 2025-10-15/     # Images for Oct 15 2025 blog entry
│   │   ├── IMG_5224.jpeg
│   │   └── IMG_5262.jpeg
│   └── README.md       # Documentation for adding new images
├── index.html          # Main blog page
├── about.html          # About page
├── shop.html           # Shop page
├── styles.css          # Site styles
├── _config.yml         # Jekyll configuration
└── README.md           # This file
```

## Adding Images to Blog Entries

### 🚀 Automated Method (Recommended)

1. Drop your raw images in the **root directory**
2. Say to Copilot: **"Optimize new images"**
3. Or manually trigger: [Actions > Optimize Images](https://github.com/enfcyco/Flowers/actions/workflows/optimize-images.yml)

The workflow will automatically:
- Generate 3 optimized versions with suffixes:
  - `filename-web.jpeg` (for website, 1920px max width)
  - `filename-instagram.jpeg` (1080x1080 square)
  - `filename-facebook.jpeg` (1200x630 landscape)
- Move them to `images/YYYY-MM-DD/`
- Remove originals from root
- Show optimization stats

**Using optimized images in blog posts:**
```html
<!-- Use the -web version for blog posts -->
<img src="images/2026-02-08/photo-web.jpeg" alt="Description">
```

See [QUICK-START-IMAGE-OPTIMIZATION.md](QUICK-START-IMAGE-OPTIMIZATION.md) for details.

**Additional Resources:**
- [📋 Step-by-step checklist](IMAGE-OPTIMIZATION-CHECKLIST.md)
- [📊 Visual guide with examples](VISUAL-GUIDE-IMAGE-OPTIMIZATION.md)
- [📖 Detailed optimization guide](images/README.md)

### Manual Method

If you prefer to optimize and add images manually:

1. Create a new directory in `images/` with the date in `YYYY-MM-DD` format
2. **OPTIMIZE images before adding** (see Performance section below)
3. Add optimized image files to that directory (no suffix needed for manual method)
4. Reference them in your HTML: `<img src="images/YYYY-MM-DD/filename.jpeg" alt="Description">`

**Note:** The automated workflow creates files with `-web`, `-instagram`, and `-facebook` suffixes. The manual method typically uses the base filename without suffixes (as seen in existing blog posts).

See `images/README.md` for detailed optimization instructions.

## Performance Best Practices

This site is optimized for fast loading on both desktop and mobile devices, including slow 3G connections.

### Image Optimization (REQUIRED)

All images must be optimized before adding to the repository:
- **Max width**: 1920px (web displays don't benefit from larger)
- **JPEG quality**: 85% (imperceptible quality loss)
- **Expected size**: 400-800KB per image (down from 3-8MB raw photos)

**Why this matters:**
- Unoptimized 8.5MB image: 3 minutes on 3G
- Optimized 1MB image: 5 seconds on 3G
- 95% improvement in load time!

**Quick optimization command:**
```bash
convert image.jpeg -resize "1920x>" -quality 85 optimized.jpeg
jpegoptim --max=85 --strip-all optimized.jpeg
```

See `images/README.md` for complete optimization guide including online tools.

### Performance Benchmarks

- **Total page size**: 4.9MB (down from 26MB)
- **3G load time**: ~15 seconds (down from 5 minutes)
- **Optimization**: 81% file size reduction with no visible quality loss

## Contributing

Feel free to contribute by adding new flower types or improving existing documentation.

## License

This project is licensed under the MIT License.
