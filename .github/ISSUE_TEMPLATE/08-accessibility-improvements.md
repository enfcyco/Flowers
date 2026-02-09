---
name: Accessibility Improvements (WCAG 2.1 AA)
about: Improve website accessibility for all users including screen readers and keyboard navigation
title: '[Accessibility] WCAG 2.1 AA Compliance Improvements'
labels: enhancement, accessibility, a11y
assignees: ''
---

## 🎯 Summary
Improve website accessibility to ensure all users, including those using screen readers, keyboard navigation, or with visual impairments, can fully experience the site.

## 📋 Problem
Current accessibility gaps:
- Missing ARIA labels on interactive elements
- No skip-to-content link for keyboard users
- Image alt text could be more descriptive
- No focus indicators on some interactive elements
- Color contrast might not meet WCAG AA standards in some areas
- Missing landmark roles for screen readers

## 💡 Proposed Solution

### 1. Semantic HTML & ARIA Improvements

**Navigation:**
```html
<nav role="navigation" aria-label="Main navigation">
  <ul role="menubar">
    <li role="none">
      <a href="index.html" role="menuitem" aria-current="page">Home</a>
    </li>
  </ul>
</nav>
```

**Main Content:**
```html
<main role="main" aria-label="Blog posts">
  <article role="article" aria-labelledby="post-feb5-2026">
    <h2 id="post-feb5-2026">Feb 5 2026</h2>
    ...
  </article>
</main>
```

**Footer:**
```html
<footer role="contentinfo" aria-label="Site footer">
  ...
</footer>
```

### 2. Skip Navigation Link

Add at the very top of `<body>`:
```html
<a href="#main-content" class="skip-to-content">
  Skip to main content
</a>
```

CSS:
```css
.skip-to-content {
  position: absolute;
  left: -9999px;
  top: 0;
  z-index: 999;
}

.skip-to-content:focus {
  left: 50%;
  transform: translateX(-50%);
  background: #6b8e71;
  color: #FAF6E4;
  padding: 1rem 2rem;
  text-decoration: none;
  border-radius: 0 0 8px 8px;
}
```

### 3. Enhanced Image Alt Text

Current alt text is basic. Improve to be more descriptive:

**Before:**
```html
<img src="images/2026-02-05/IMG_5536.jpeg" alt="Bachelor Button Blue Boy seed packet">
```

**After:**
```html
<img src="images/2026-02-05/IMG_5536.jpeg" 
     alt="Bachelor Button 'Blue Boy' seed packet displaying vibrant blue cornflower blooms on the front label">
```

### 4. Keyboard Navigation & Focus Indicators

**Improve focus states:**
```css
/* Visible focus indicator for all interactive elements */
a:focus,
button:focus,
.modal-close:focus {
  outline: 3px solid #6b8e71;
  outline-offset: 2px;
}

/* Better focus for navigation links */
nav a:focus {
  outline: 3px solid #6b8e71;
  outline-offset: 2px;
  box-shadow: 0 0 0 4px rgba(107, 142, 113, 0.2);
}
```

**Modal accessibility:**
```javascript
// Trap focus inside modal when open
// Return focus to trigger element when closed
// Support ESC key to close
```

### 5. Color Contrast Check

Verify all text meets WCAG AA standards:
- Body text (#4a5f4d) on cream background (#FAF6E4) - **Check ratio ≥ 4.5:1**
- Headers (#6b8e71) on cream background - **Check ratio ≥ 4.5:1**
- Links and buttons - **Check sufficient contrast**

Use tools like WebAIM Contrast Checker to verify.

### 6. Form Accessibility (for future contact form)

If a contact form is added later:
```html
<form role="form" aria-labelledby="contact-heading">
  <h2 id="contact-heading">Contact Us</h2>
  
  <label for="name">Name <span aria-label="required">*</span></label>
  <input type="text" id="name" name="name" required 
         aria-required="true" aria-describedby="name-error">
  <span id="name-error" role="alert" aria-live="polite"></span>
</form>
```

### 7. Language Declaration

Verify all pages have:
```html
<html lang="en">
```
✅ Already present - good!

## ✅ Implementation Checklist

- [ ] Add skip-to-content link to all pages
- [ ] Add ARIA landmarks (navigation, main, contentinfo)
- [ ] Enhance image alt text to be more descriptive
- [ ] Add keyboard focus indicators
- [ ] Verify color contrast ratios
- [ ] Add aria-labels to navigation
- [ ] Improve modal keyboard accessibility
- [ ] Add aria-current for active navigation items
- [ ] Test with screen reader (NVDA, JAWS, or VoiceOver)
- [ ] Test full keyboard navigation (no mouse)
- [ ] Run automated accessibility audit (axe DevTools, Lighthouse)

## 🧪 Testing Tools

### 1. Automated Testing:
- Chrome Lighthouse Accessibility Audit
- axe DevTools browser extension
- WAVE browser extension

### 2. Manual Testing:
- Navigate entire site using only keyboard (Tab, Enter, Escape)
- Test with screen reader (VoiceOver on Mac, NVDA on Windows)

### 3. Contrast Checking:
- WebAIM Contrast Checker
- Chrome DevTools color picker contrast ratio

## 🎯 Benefits

- Inclusive design for all users
- Better SEO (search engines favor accessible sites)
- Legal compliance (ADA, Section 508)
- Improved usability for everyone
- Professional, modern web standards

## 📊 Implementation Complexity
**Medium** - Mostly HTML/CSS changes, some JavaScript improvements

## 🎯 Estimated Impact
**High** - Makes the site usable for 15-20% more users, improves SEO, demonstrates professional quality
