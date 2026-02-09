# Issue 3: Add RSS/Atom Feed for Blog Updates

## Summary
Create an RSS/Atom feed so readers can subscribe to blog updates using their favorite RSS reader apps.

## Problem
Currently, visitors must manually check the website to see new blog posts. There's no way to:
- Subscribe to blog updates
- Get notified of new content
- Follow the blog in RSS reader apps (Feedly, Inoreader, etc.)
- Integrate with automation tools (IFTTT, Zapier)

## Proposed Solution

### Create `feed.xml` RSS 2.0 Feed

**File:** `feed.xml` (in root directory)

```xml
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" 
     xmlns:atom="http://www.w3.org/2005/Atom"
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Hodge Podge Farms - Flower Blog</title>
    <link>https://enfcyco.github.io/Flowers/</link>
    <description>If it grows we will try it - Updates from our flower farm in Cambridge, IA</description>
    <language>en-us</language>
    <lastBuildDate>Wed, 05 Feb 2026 00:00:00 GMT</lastBuildDate>
    <atom:link href="https://enfcyco.github.io/Flowers/feed.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>https://enfcyco.github.io/Flowers/images/2026-02-08/social-preview.jpeg</url>
      <title>Hodge Podge Farms</title>
      <link>https://enfcyco.github.io/Flowers/</link>
    </image>
    
    <!-- Blog entries as items -->
    <item>
      <title>Bachelor Button 'Blue Boy' Seeds</title>
      <link>https://enfcyco.github.io/Flowers/#feb-5-2026</link>
      <guid>https://enfcyco.github.io/Flowers/#feb-5-2026</guid>
      <pubDate>Wed, 05 Feb 2026 00:00:00 GMT</pubDate>
      <description>Picked up Bachelor Button 'Blue Boy' seeds at Wal-Mart. These cheerful blue blooms are perfect for attracting pollinators.</description>
      <content:encoded><![CDATA[
        <p>Picked up Bachelor Button 'Blue Boy' seeds at Wal-Mart. These cheerful blue blooms are perfect for attracting pollinators and will add a lovely splash of color to the garden.</p>
        <img src="https://enfcyco.github.io/Flowers/images/2026-02-05/IMG_5536.jpeg" alt="Bachelor Button Blue Boy seed packet" />
      ]]></content:encoded>
      <enclosure url="https://enfcyco.github.io/Flowers/images/2026-02-05/IMG_5536.jpeg" type="image/jpeg" />
    </item>
    
    <!-- Additional items for each blog post... -->
  </channel>
</rss>
```

### Add RSS Discovery Tags

Add to `<head>` of all pages:

```html
<!-- RSS Feed Discovery -->
<link rel="alternate" type="application/rss+xml" 
      title="Hodge Podge Farms Blog Feed" 
      href="https://enfcyco.github.io/Flowers/feed.xml">
<link rel="alternate" type="application/atom+xml" 
      title="Hodge Podge Farms Blog Feed (Atom)" 
      href="https://enfcyco.github.io/Flowers/feed.xml">
```

### Add RSS Subscribe Button

Add to footer or header:

```html
<a href="feed.xml" class="rss-button" aria-label="Subscribe to RSS feed">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
    <path d="M2 2v2c8.837 0 16 7.163 16 16h2C20 9.178 10.822 0 2 0zm0 5v2c5.523 0 10 4.477 10 10h2C14 11.373 8.627 6 2 6zm0 5v2c2.761 0 5 2.239 5 5h2c0-3.866-3.134-7-7-7zm1 3a2 2 0 100 4 2 2 0 000-4z"/>
  </svg>
  Subscribe to RSS
</a>
```

CSS:
```css
.rss-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #8bbc8a;
  color: #FAF6E4;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.3s ease;
}

.rss-button:hover {
  background: #6b8e71;
  transform: translateY(-2px);
}
```

### Automation Options

#### Option 1: Manual Updates (Simple)
- Update `feed.xml` manually when adding new blog posts
- Simple, no build process needed
- Good for infrequent updates

#### Option 2: GitHub Actions (Automated)
Create `.github/workflows/generate-rss.yml`:

```yaml
name: Generate RSS Feed

on:
  push:
    branches: [ main ]
    paths:
      - 'index.html'

jobs:
  generate-rss:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Generate RSS feed
        run: |
          # Parse index.html and generate feed.xml
          python scripts/generate-rss.py
      
      - name: Commit feed
        run: |
          git config user.name "GitHub Actions"
          git config user.email "actions@github.com"
          git add feed.xml
          git commit -m "Update RSS feed" || exit 0
          git push
```

#### Option 3: Jekyll Plugin (Recommended)
Since using GitHub Pages with Jekyll (`_config.yml` present):

1. Add to `_config.yml`:
```yaml
plugins:
  - jekyll-feed

feed:
  path: feed.xml
  categories:
    - flowers
    - gardening
```

2. Jekyll will auto-generate `feed.xml` from blog posts

## Benefits

- **User Convenience**: Readers can subscribe and get automatic updates
- **Increased Engagement**: RSS readers check for updates automatically
- **Professional**: Standard feature for modern blogs
- **SEO**: RSS feeds can improve content discovery
- **Integration**: Works with automation tools (IFTTT, Zapier)
- **Accessibility**: Some users prefer RSS over social media

## Popular RSS Readers
- Feedly
- Inoreader
- NewsBlur
- The Old Reader
- NetNewsWire (Mac)
- Reeder (iOS)

## Implementation Options

### Minimal (Recommended for simplicity):
1. Create static `feed.xml` manually
2. Update when adding blog posts
3. Add RSS discovery tags to HTML pages
4. Add RSS subscribe button

### Advanced (Recommended for automation):
1. Use Jekyll feed plugin (already using Jekyll)
2. Auto-generates feed from content
3. Updates automatically on deploy

## Testing RSS Feed

1. **Validation:**
   - https://validator.w3.org/feed/
   - Verify XML is well-formed
   - Check all required fields

2. **Reader Testing:**
   - Test in Feedly: https://feedly.com/i/subscription/feed/YOUR_FEED_URL
   - Test in local RSS reader app

3. **Manual Check:**
   - Open feed.xml in browser
   - Should display formatted feed or XML

## Implementation Checklist

- [ ] Create feed.xml file (choose manual or automated approach)
- [ ] Add RSS entries for all existing blog posts (newest first)
- [ ] Add RSS discovery meta tags to all HTML pages
- [ ] Add RSS subscribe button to footer
- [ ] Validate feed at W3C Feed Validator
- [ ] Test in at least 2 RSS readers
- [ ] Document feed URL in README
- [ ] Add note about feed in About page

## Implementation Complexity
**Low-Medium** 
- Manual approach: Low complexity
- Jekyll plugin approach: Low-medium complexity
- Full automation: Medium complexity

## Estimated Impact
**Medium** - Adds professional feature, benefits RSS users (smaller but dedicated audience)

## Future Enhancements

Once RSS feed is working:
- Add JSON Feed format (`feed.json`) for modern readers
- Consider email newsletter integration
- Add per-category feeds (flowers only, seeds only, etc.)
- Integration with social media auto-posting
