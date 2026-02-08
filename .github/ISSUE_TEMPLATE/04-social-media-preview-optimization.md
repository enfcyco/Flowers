---
name: Social Media Preview Optimization
about: Optimize Open Graph and Twitter Card meta tags for maximum engagement when shared
title: '[Feature] Enhanced Social Media Preview Cards'
labels: enhancement, social-media, seo
assignees: ''
---

## 🎯 Goal
Ensure that when blog posts are shared on Facebook, Instagram, Twitter, or other platforms, they display beautiful, engaging preview cards with the right image, title, and description to maximize click-through rates.

## 📋 Current State

The site already has basic Open Graph tags:
```html
<meta property="og:title" content="Hodge Podge Farms - Flower Blog">
<meta property="og:description" content="A simple journal...">
<meta property="og:image" content="https://enfcyco.github.io/Flowers/images/2025-10-15/IMG_5224.jpeg">
```

## 🎯 Improvements Needed

### Dynamic Meta Tags Per Blog Entry
Instead of static tags, generate unique tags for each entry that's shared.

When someone shares the Feb 5 Bachelor Button post:
```html
<!-- Open Graph / Facebook -->
<meta property="og:title" content="Bachelor Button 'Blue Boy' Seeds | Hodge Podge Farms">
<meta property="og:description" content="Just picked up Bachelor Button 'Blue Boy' seeds! These cheerful blue blooms are perfect for attracting pollinators. Follow our garden journey.">
<meta property="og:image" content="https://enfcyco.github.io/Flowers/images/2026-02-05/IMG_5536-facebook.jpeg">
<meta property="og:url" content="https://enfcyco.github.io/Flowers/#feb-5-2026">
<meta property="og:type" content="article">

<!-- Article metadata -->
<meta property="article:published_time" content="2026-02-05T00:00:00Z">
<meta property="article:author" content="Hodge Podge Farms">
<meta property="article:section" content="Garden Updates">
<meta property="article:tag" content="Bachelor Buttons">
<meta property="article:tag" content="Seeds">
<meta property="article:tag" content="Pollinators">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Bachelor Button 'Blue Boy' Seeds | Hodge Podge Farms">
<meta name="twitter:description" content="Just picked up Bachelor Button 'Blue Boy' seeds! These cheerful blue blooms are perfect for attracting pollinators.">
<meta name="twitter:image" content="https://enfcyco.github.io/Flowers/images/2026-02-05/IMG_5536-facebook.jpeg">

<!-- Facebook specific -->
<meta property="fb:app_id" content="YOUR_APP_ID">
<meta property="og:site_name" content="Hodge Podge Farms">
<meta property="og:locale" content="en_US">
```

### Image Requirements for Social Platforms

**Facebook/LinkedIn**:
- Recommended: 1200x630px (already generated in Issue #2)
- Min: 600x315px
- Aspect ratio: 1.91:1

**Instagram** (when shared via Stories):
- Recommended: 1080x1080px (already generated in Issue #2)
- Aspect ratio: 1:1

**Twitter**:
- Summary card: 1200x628px
- Square: 1:1 ratio also supported

## 🔧 Implementation Options

### Option 1: Static Individual Pages (Recommended for simplicity)
Create individual HTML files for each blog entry:
```
blog/2026-02-05-bachelor-button.html
blog/2026-01-31-seed-haul.html
blog/2026-01-20-pumpkin-seeds.html
```

Each with unique meta tags and redirects to main page with anchor.

### Option 2: JavaScript-based Dynamic Tags
Use JavaScript to update meta tags based on URL hash:
```javascript
// If URL is https://enfcyco.github.io/Flowers/#feb-5-2026
// Update meta tags dynamically
updateMetaTags({
  title: "Bachelor Button 'Blue Boy' Seeds",
  description: "Just picked up...",
  image: "images/2026-02-05/IMG_5536-facebook.jpeg"
});
```

**Note**: Social media crawlers may not execute JavaScript, so Option 1 is safer.

### Option 3: Jekyll/Hugo Static Site Generator
Since GitHub Pages supports Jekyll, could use it to:
- Generate individual pages per blog entry
- Use frontmatter for metadata
- Automatically create social meta tags

## 📋 Meta Tag Generator Script

Create `scripts/generate-social-meta.js`:
```javascript
// Input: blog entry from index.html
// Output: HTML file with proper meta tags

const blogEntry = {
  date: "2026-02-05",
  title: "Bachelor Button 'Blue Boy'",
  description: "Just picked up Bachelor Button seeds...",
  image: "images/2026-02-05/IMG_5536-facebook.jpeg",
  tags: ["bachelor-buttons", "seeds", "pollinators"]
};

// Generate: blog/2026-02-05-bachelor-button.html
```

### Copilot Integration
User can say:
- "Generate social preview page for the latest blog entry"
- "Create shareable link for Feb 5 post"
- "Update social meta tags for new posts"

## ✅ Testing Social Previews

### Tools to Test
1. **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/
2. **Twitter Card Validator**: https://cards-dev.twitter.com/validator
3. **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
4. **Open Graph Preview**: https://www.opengraph.xyz/

### Testing Checklist
- [ ] Title displays correctly (50-60 chars)
- [ ] Description is engaging (150-160 chars)
- [ ] Image displays correctly (1200x630px)
- [ ] Image loads quickly (<1MB)
- [ ] URL is correct and clickable
- [ ] No missing or broken images
- [ ] Looks good on mobile preview

## ✅ Acceptance Criteria
- [ ] Each blog entry has unique social meta tags
- [ ] Images are optimized for each platform
- [ ] Titles are compelling and descriptive
- [ ] Descriptions include call-to-action
- [ ] Preview cards tested on Facebook, Twitter, LinkedIn
- [ ] Links drive traffic back to main blog
- [ ] Fast loading times for shared links
- [ ] Mobile-friendly previews

## 📚 Related Issues
- #1 Social Media Content Generator
- #2 Image upload and optimization automation
- #5 Analytics and engagement tracking

## 💡 Future Enhancements
- A/B testing different titles/descriptions
- Automatic social image generation with text overlay
- Video preview support
- Pinterest rich pins
- Schema.org structured data for Google
