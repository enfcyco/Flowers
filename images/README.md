# Images Directory

This directory contains all images for blog entries on the Flowers website.

## Organization

Images are organized by date in the format `YYYY-MM-DD`:

```
images/
├── 2025-10-15/     # Oct 15 2025 blog entry
│   ├── IMG_5224.jpeg
│   └── IMG_5262.jpeg
└── README.md
```

## Adding New Images

When adding images for a new blog entry:

1. **Create directory**: Make a new folder with the date in `YYYY-MM-DD` format
2. **OPTIMIZE IMAGES FIRST** (see below - this is critical!)
3. Add optimized images to that directory
4. Reference them in the HTML: `images/YYYY-MM-DD/filename.jpeg`

Example:
```html
<img src="images/2026-02-05/flower.jpeg" alt="Description">
```

## ⚠️ IMPORTANT: Image Optimization Required

**All images MUST be optimized before adding to the repository.** Unoptimized high-resolution phone photos (5712x4284px, 8.5MB) cause severe performance issues:
- 3G mobile: 3+ minutes to load a single image
- Poor SEO ranking
- High bandwidth costs
- Poor user experience

### Optimization Requirements

- **Max width**: 1920px (maintains aspect ratio)
- **JPEG quality**: 85%
- **Target file size**: 400-800KB per image
- **Strip metadata**: Remove EXIF data for privacy and size

### How to Optimize (Choose One Method)

#### Method 1: Command Line (Recommended)

```bash
# Install tools (one time)
sudo apt install imagemagick jpegoptim

# Optimize a single image
convert your-image.jpeg -resize "1920x>" -quality 85 optimized.jpeg
jpegoptim --max=85 --strip-all optimized.jpeg

# Or batch optimize all images in current directory
for img in *.jpeg *.jpg; do
    [ -f "$img" ] || continue
    width=$(identify -format "%w" "$img")
    if [ "$width" -gt 1920 ]; then
        convert "$img" -resize "1920x>" -quality 85 "${img}.tmp"
    else
        convert "$img" -quality 85 "${img}.tmp"
    fi
    jpegoptim --max=85 --strip-all "${img}.tmp"
    mv "${img}.tmp" "$img"
done
```

#### Method 2: Online Tools (No Installation)

1. **[TinyJPG](https://tinyjpg.com/)** - Simple drag-and-drop, automatic optimization
2. **[Squoosh](https://squoosh.app/)** - Advanced controls, before/after preview
3. **[ImageOptim](https://imageoptim.com/)** - Mac desktop app

**Steps for online tools:**
1. Upload your image
2. Set quality to 85% (if adjustable)
3. Ensure max width is 1920px
4. Download optimized version
5. Verify file size is reasonable (should be 70-90% smaller)

### Verification Checklist

Before committing images:
- [ ] Image width ≤ 1920px
- [ ] File size is 400-800KB (or ~80% smaller than original)
- [ ] Visual quality looks good (test in browser)
- [ ] EXIF metadata stripped (for privacy)

### Performance Impact

**Before Optimization:**
- Original iPhone photo: 5712x4284px, 8.5MB
- 3G load time: ~3 minutes per image
- Total page size: 26MB

**After Optimization:**
- Optimized: 1920x1440px, 1MB
- 3G load time: ~5 seconds per image
- Total page size: 4.9MB (81% reduction)

## Tips

- Use descriptive filenames when possible
- Keep original camera filenames if they're unique (e.g., IMG_5224.jpeg)
- You can add multiple images per blog entry in the same date directory
- Always optimize BEFORE adding to git to avoid bloating repository history
- Test images locally after optimization to ensure quality is acceptable
