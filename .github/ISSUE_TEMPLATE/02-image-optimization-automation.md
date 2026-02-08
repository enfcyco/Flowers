---
name: Image Upload and Optimization Automation
about: Streamline image upload and automatic optimization for web and social media
title: '[Feature] Automated Image Upload and Optimization Workflow'
labels: enhancement, performance, automation
assignees: ''
---

## 🎯 Goal
Automate the image upload and optimization process so adding new images is as simple as dropping them in a folder and running a single command, with automatic optimization for both web and social media.

## 📋 Requirements

### User Workflow
1. User drops new images into `images/YYYY-MM-DD/` directory (raw from phone/camera)
2. User runs: `npm run optimize-images` or tells Copilot "optimize new images"
3. Images are automatically:
   - Resized to web-optimal dimensions (1920px max width)
   - Compressed to 85% quality (imperceptible quality loss)
   - Generate social media versions (1080x1080 for Instagram, 1200x630 for Facebook)
   - Strip metadata
   - Rename to descriptive names if needed

### Output Structure
```
images/YYYY-MM-DD/
├── IMG_5536.jpeg (original, untouched)
├── IMG_5536-optimized.jpeg (for website, 1920px max)
├── IMG_5536-instagram.jpeg (1080x1080 square crop)
└── IMG_5536-facebook.jpeg (1200x630 landscape)
```

### Optimization Specs

**Website Version**:
- Max width: 1920px (maintains aspect ratio)
- Quality: 85%
- Format: JPEG
- Target size: 400-800KB

**Instagram Version**:
- Size: 1080x1080px (square crop, centered)
- Quality: 85%
- Format: JPEG
- Target size: ~300KB

**Facebook Version**:
- Size: 1200x630px (landscape crop)
- Quality: 85%
- Format: JPEG
- Target size: ~200KB

## 🔧 Implementation Options

### Option 1: NPM Script (Recommended)
Create `package.json` with image optimization script:
```json
{
  "scripts": {
    "optimize-images": "node scripts/optimize-images.js"
  },
  "devDependencies": {
    "sharp": "^0.33.0"
  }
}
```

Create `scripts/optimize-images.js` using Sharp library for image processing.

### Option 2: GitHub Actions Workflow
Create `.github/workflows/optimize-images.yml`:
- Triggers on new images pushed to `images/` directory
- Automatically optimizes and commits back
- Comments on PR with before/after stats

### Option 3: Pre-commit Hook
Set up Git pre-commit hook to optimize images before commit.

## 📊 Statistics and Reporting

After optimization, display:
```
✅ Optimized 3 images in images/2026-02-05/

IMG_5536.jpeg:
  Original: 8.5MB (5712x4284)
  Web: 812KB (1920x1438) - 90% smaller ✓
  Instagram: 245KB (1080x1080) - 97% smaller ✓
  Facebook: 189KB (1200x630) - 98% smaller ✓

Total space saved: 23.5MB
Load time improvement: 3 min → 15 sec on 3G
```

## ✅ Acceptance Criteria
- [ ] User can optimize images with a single command
- [ ] Original images are preserved
- [ ] Web, Instagram, and Facebook versions are generated
- [ ] File sizes meet target ranges
- [ ] Visual quality is maintained
- [ ] Statistics are displayed after optimization
- [ ] Works with both JPEG and PNG formats
- [ ] Handles batch processing (multiple images at once)

## 📚 Related Issues
- #1 Social Media Content Generator
- #3 Facebook and Instagram post formatter

## 💡 Future Enhancements
- WebP format generation for modern browsers
- Automatic lazy loading setup
- CDN integration
- Automatic alt text generation from image content
- Watermark/branding addition
- EXIF data preservation options
