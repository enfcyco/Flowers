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

### 🚀 Method 1: Automated Workflow (Recommended)

**Simple 2-step process:**

1. **Drop images in root directory**: Add your raw images (JPEG/JPG) to the root of the repository
2. **Tell Copilot**: "Optimize new images" or manually trigger the workflow

That's it! The GitHub Actions workflow will automatically:
- ✅ Detect new images in the root directory
- ✅ Generate 3 optimized versions:
  - **Web version** (`*-web.jpeg`): 1920px max width for website use
  - **Instagram version** (`*-instagram.jpeg`): 1080x1080 square crop
  - **Facebook version** (`*-facebook.jpeg`): 1200x630 landscape crop
- ✅ Move all versions to a dated directory (`images/YYYY-MM-DD/`)
- ✅ Delete the original large files
- ✅ Display optimization statistics
- ✅ Commit and push the changes

**Example output structure:**
```
images/2026-02-08/
├── IMG_5536-web.jpeg        # For website (1920px max, ~800KB)
├── IMG_5536-instagram.jpeg  # For Instagram (1080x1080, ~300KB)
└── IMG_5536-facebook.jpeg   # For Facebook (1200x630, ~200KB)
```

**Usage in HTML:**
```html
<!-- Use the -web version for your blog posts -->
<img src="images/2026-02-08/IMG_5536-web.jpeg" alt="Description">
```

**Manual trigger:**
If you prefer to trigger manually, go to [Actions > Optimize Images](../../actions/workflows/optimize-images.yml) and click "Run workflow". You can optionally:
- Specify which images to process (comma-separated)
- Set a custom date directory

**Statistics example:**
```
✅ Optimized 1 image(s) in images/2026-02-08/

IMG_5536:
  Original: 8.50MB (5712x4284)
  Web: 812KB (1920x1438) - 90% smaller ✓
  Instagram: 245KB (1080x1080) - 97% smaller ✓
  Facebook: 189KB (1200x630) - 98% smaller ✓

Total space saved: 23.5MB
Load time improvement (3G): 3m 5s → 15s
```

---

### Method 2: Manual Optimization

If you prefer to optimize images manually:

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

- Use descriptive filenames when possible for your original images
- The automated workflow preserves base filenames and adds suffixes (`-web`, `-instagram`, `-facebook`)
- You can add multiple images per blog entry in the same date directory
- The automated workflow automatically handles optimization - no manual steps needed
- Test images locally after optimization to ensure quality is acceptable
- Original large files are automatically deleted after optimization to save repository space
