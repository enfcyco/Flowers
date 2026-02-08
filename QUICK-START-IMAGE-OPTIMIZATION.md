# Quick Start: Automated Image Optimization

## Simple 2-Step Process

### Step 1: Add Images
Drop your raw images (from phone/camera) into the **root directory** of the repository.

**Supported formats**: `.jpeg`, `.jpg`, `.JPEG`, `.JPG`

### Step 2: Optimize
Choose one of these methods:

#### A. Tell Copilot (Easiest)
Just say: **"Optimize new images"** or **"Optimize images"**

Copilot will guide you to trigger the workflow.

#### B. Trigger GitHub Actions Manually
1. Go to [Actions > Optimize Images](https://github.com/enfcyco/Flowers/actions/workflows/optimize-images.yml)
2. Click **"Run workflow"**
3. Click the green **"Run workflow"** button
4. Wait ~30 seconds for completion

**Optional inputs:**
- **Images**: Leave empty to process all images in root, or specify: `IMG_1234.jpeg,photo.jpg`
- **Date**: Leave empty for today's date, or specify: `2026-02-08`

## What Happens

The workflow automatically:

1. ✅ Detects images in root directory
2. ✅ Creates 3 optimized versions:
   - **Web**: `filename-web.jpeg` (1920px max, ~800KB)
   - **Instagram**: `filename-instagram.jpeg` (1080x1080, ~300KB)
   - **Facebook**: `filename-facebook.jpeg` (1200x630, ~200KB)
3. ✅ Moves all to `images/YYYY-MM-DD/`
4. ✅ **Deletes original large files** from root
5. ✅ Shows optimization statistics
6. ✅ Commits and pushes changes

## Example Output

```
✅ Optimized 2 image(s) in images/2026-02-08/

IMG_5536:
  Original: 8.50MB (5712x4284)
  Web: 812KB (1920x1438) - 90% smaller ✓
  Instagram: 245KB (1080x1080) - 97% smaller ✓
  Facebook: 189KB (1200x630) - 98% smaller ✓

Total space saved: 23.5MB
Load time improvement (3G): ~3m → ~15s (example, varies by image)
```

## Using in Your Blog

After optimization, reference the **-web** version in your HTML:

```html
<img src="images/2026-02-08/IMG_5536-web.jpeg" alt="Beautiful flower">
```

Use Instagram and Facebook versions for social media posts.

## File Structure

```
images/2026-02-08/
├── IMG_5536-web.jpeg        # Use this in website
├── IMG_5536-instagram.jpeg  # Use for Instagram posts
└── IMG_5536-facebook.jpeg   # Use for Facebook posts
```

## Important Notes

- ⚠️ **Original files are deleted** after optimization (to save repository space)
- ⚠️ Keep backups if you need the original high-res versions
- ✅ Process is automatic once workflow is triggered
- ✅ Works with multiple images at once
- ✅ Creates dated directories automatically

## Troubleshooting

**"No images found"**: 
- Make sure images are in the **root directory** (not in subdirectories)
- Check file extensions: `.jpeg`, `.jpg`, `.JPEG`, `.JPG`

**Workflow doesn't appear**:
- Make sure the PR is merged or you're on the branch with the workflow

**Need help?**:
- See detailed docs: [images/README.md](images/README.md)
- Or ask Copilot!
