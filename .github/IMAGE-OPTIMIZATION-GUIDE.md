# Image Optimization Workflow Guide

## For GitHub Copilot

When a user asks to "optimize images" or "optimize new images", follow these steps:

### Step 1: Check for images in root directory
```bash
cd /home/runner/work/Flowers/Flowers
ls -lh *.jpeg *.jpg *.JPEG *.JPG 2>/dev/null || echo "No images found in root"
```

### Step 2: If images exist, trigger the workflow

The workflow can be triggered in two ways:

#### Option A: Using GitHub CLI (if available)
```bash
gh workflow run optimize-images.yml
```

#### Option B: Tell the user how to trigger it
Since we're in a sandboxed environment, inform the user:

"I found [N] image(s) in the root directory: [list filenames]

To optimize these images:
1. Go to the [Actions tab](https://github.com/enfcyco/Flowers/actions/workflows/optimize-images.yml)
2. Click 'Run workflow'
3. Click the green 'Run workflow' button (leave inputs empty to auto-detect images)

The workflow will:
- Generate web, Instagram, and Facebook versions
- Move them to images/[today's date]/
- Remove the originals from root
- Show optimization statistics

Alternatively, I can guide you through manual optimization if you prefer."

### Step 3: If user wants manual optimization

Provide the commands from the README:
```bash
# For a single image
convert image.jpeg -resize "1920x>" -quality 85 image-web.jpeg
jpegoptim --max=85 --strip-all image-web.jpeg

# For Instagram version
convert image.jpeg -resize "1080x1080^" -gravity center -extent 1080x1080 -quality 85 image-instagram.jpeg
jpegoptim --max=85 --strip-all image-instagram.jpeg

# For Facebook version
convert image.jpeg -resize "1200x630^" -gravity center -extent 1200x630 -quality 85 image-facebook.jpeg
jpegoptim --max=85 --strip-all image-facebook.jpeg
```

## Expected Workflow Results

After the workflow runs:
- Original images removed from root
- Three versions in `images/YYYY-MM-DD/`:
  - `filename-web.jpeg` (1920px max, for website)
  - `filename-instagram.jpeg` (1080x1080 square)
  - `filename-facebook.jpeg` (1200x630 landscape)
- Commit with optimization statistics
- Files reduced by ~90% in size

## File Naming Convention

- Original: `IMG_5536.jpeg`
- Web: `IMG_5536-web.jpeg`
- Instagram: `IMG_5536-instagram.jpeg`
- Facebook: `IMG_5536-facebook.jpeg`

All images go into: `images/YYYY-MM-DD/` (date from workflow or today)
