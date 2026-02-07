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
├── styles.css          # Site styles
└── README.md           # This file
```

## Adding Images to Blog Entries

Images are organized by date in the `images/` directory:

1. Create a new directory in `images/` with the date in `YYYY-MM-DD` format
2. **OPTIMIZE images before adding** (see Performance section below)
3. Add optimized image files to that directory
4. Reference them in your HTML: `<img src="images/YYYY-MM-DD/filename.jpeg" alt="Description">`

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
