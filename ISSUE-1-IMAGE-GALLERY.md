# Issue 1: Add Image Gallery Page with Filtering

## Summary
Create a dedicated image gallery page that showcases all flower photos in a grid layout with filtering capabilities by date and category.

## Problem
Currently, all images are embedded within blog articles on the homepage. There's no easy way to:
- Browse all flower photos at once
- Filter photos by season or type
- See a visual overview of the farm's growing journey

## Proposed Solution

### Create `gallery.html` page with:

1. **Grid Layout**
   - Responsive grid (4 columns desktop, 2 columns tablet, 1 column mobile)
   - Thumbnail images that expand to full size on click (using existing modal functionality)
   - Display image date and caption on hover

2. **Filter Controls**
   - Filter by year: 2025, 2026, All
   - Filter by season: Spring, Summer, Fall, Winter, All
   - Filter by category: Pumpkins & Gourds, Flowers, Seeds, Wildlife, All
   - Clear filters button

3. **Navigation**
   - Add "Gallery" link to main navigation menu
   - Breadcrumb navigation showing Home > Gallery

4. **Performance**
   - Use lazy loading for images below the fold
   - Only load images when they enter viewport
   - Maintain optimized image sizes (already done)

### Technical Details

**Files to Create/Modify:**
- `gallery.html` - New gallery page
- `gallery.js` - JavaScript for filtering logic
- `styles.css` - Add gallery-specific styles
- `index.html`, `about.html`, `shop.html` - Add Gallery link to nav

**CSS Classes Needed:**
```css
.gallery-container { /* Grid container */ }
.gallery-item { /* Individual photo tile */ }
.filter-bar { /* Filter controls */ }
.filter-button { /* Category/date buttons */ }
.active-filter { /* Selected filter state */ }
```

**JavaScript Functionality:**
```javascript
// Filter images by data attributes
// data-year="2025"
// data-season="fall"
// data-category="pumpkins"
```

## Benefits
- Improved user experience for browsing photos
- Better showcase of farm's variety and growth
- Makes it easier to share specific photos
- Professional gallery presentation
- SEO improvement with image-focused page

## Implementation Complexity
**Medium** - Requires new HTML page, CSS grid styling, and JavaScript filtering logic

## Estimated Impact
**High** - Significantly improves photo browsing and overall site usability
