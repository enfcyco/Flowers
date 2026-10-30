# Copilot Instructions for Flowers

Flowers is a static HTML/CSS flower and farm blog hosted on GitHub Pages at
https://enfcyco.github.io/Flowers/. Keep changes simple and consistent with
the existing site; do not introduce frameworks, build tools, or dependencies
unless requested.

## Site conventions

- Preserve the existing sage-and-cream palette, gradients, navigation, and
  responsive behavior. Follow the patterns already used in the relevant page
  and stylesheet rather than applying a layout rule where it does not fit.
- Use semantic HTML, descriptive page titles, a logical heading hierarchy,
  accessible image alt text, and the existing four-space HTML indentation.
- Keep blog entries in reverse chronological order. Format dates as, for
  example, `Aug 29 2026`. Use a friendly, factual tone and concise descriptions;
  include specific varieties, sources, quantities, or observations when known.
- Do not change contact information, the color scheme, or `_config.yml` without
  the user's permission and a clear reason.
- Update the README when adding pages or making a significant feature change.

## Images

Image size and orientation are required checks, not optional optimizations.

- Before adding an image, verify that it displays correctly. Images with text
  or people must be upright and readable. Apply EXIF auto-orientation first
  when needed; rotate manually only when the image itself is still incorrectly
  oriented. Confirm the saved result, not just the source.
- Optimize website images as JPEG at quality 85, preserving aspect ratio and
  keeping the width at or below 1920 pixels. Do not upscale smaller images.
- After optimization, inspect the actual output dimensions and file size.
  Check that web images are no wider than 1920 pixels, Instagram images are
  exactly 1080 x 1080, and Facebook images are exactly 1200 x 630. Investigate
  any size mismatch, web image wider than 1920 pixels, or unexpectedly large
  file; 400-800 KB is typical, not a guaranteed limit. Keep total page image
  weight reasonable for mobile.
- The `Optimize Images` GitHub Actions workflow is the preferred automated
  route for `.jpg` and `.jpeg` files placed in the repository root. It creates
  `-web.jpeg` (maximum 1920 pixels wide), `-instagram.jpeg` (1080 x 1080), and
  `-facebook.jpeg` (1200 x 630) files under `images/YYYY-MM-DD/`, then removes
  the root originals and commits the results to the workflow's selected branch.
  Check the workflow's target branch and date before dispatching it, and verify
  its result before referencing the generated files. Do not say it was run if
  it was not.
- Use the `-web.jpeg` image in a blog post and provide meaningful alt text.
  Keep the original in the date folder only when it is needed; do not commit an
  unoptimized upload as the website image.
- For PNGs or when the workflow cannot be used, use an available local image
  tool or ask before choosing another processing route. Do not assume a
  particular operating system or that ImageMagick is installed. If processing
  is unavailable, state that rather than claiming the image was optimized.

## Validation

There is no general build or test process for this static site. Run checks
appropriate to the change:

- For HTML changes, check the page structure and referenced local files/links.
- For CSS or layout changes, inspect the page at desktop and mobile widths when
  a browser preview is available; confirm existing multi-image and special-size
  images still behave as intended.
- For image changes, verify orientation, dimensions, format, and file size as
  described above.
- Use an HTML/CSS validator when available and useful. Do not claim a check or
  visual review that could not be completed; report unavailable tooling clearly.

## Pull requests

For visual or layout changes, include before-and-after screenshots in the PR
description when actual screenshot files can be captured. For responsive
changes, capture desktop (about 1200 x 900) and mobile (about 375 x 667).
Clearly label each image. If the preview or environment cannot produce
attachable screenshots, say so in the PR description instead of inventing or
substituting a mockup.
