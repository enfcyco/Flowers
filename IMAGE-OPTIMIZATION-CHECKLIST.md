# Image Optimization Checklist

Use this checklist when adding new images to your blog.

## Quick Checklist

- [ ] Take/collect photos for blog post
- [ ] Copy raw images to repository root directory
- [ ] Trigger optimization workflow:
  - [ ] Say to Copilot: "Optimize new images"
  - OR
  - [ ] Go to [Actions > Optimize Images](https://github.com/enfcyco/Flowers/actions/workflows/optimize-images.yml)
  - [ ] Click "Run workflow" 
  - [ ] Click green "Run workflow" button
- [ ] Wait ~30 seconds for workflow to complete
- [ ] Check workflow results for statistics
- [ ] Verify images in `images/YYYY-MM-DD/` directory
- [ ] Use `-web.jpeg` version in your blog HTML
- [ ] Use `-instagram.jpeg` for Instagram posts (optional)
- [ ] Use `-facebook.jpeg` for Facebook posts (optional)
- [ ] Commit your HTML changes referencing the new images

## Expected Results

After workflow completes, you should see:
- ✅ New directory: `images/YYYY-MM-DD/`
- ✅ Three versions per image: `-web`, `-instagram`, `-facebook`
- ✅ Original images removed from root
- ✅ Workflow commit with optimization stats
- ✅ File sizes 90-98% smaller than originals

## HTML Template

Update your `index.html` with the new image:

```html
<article>
    <h2>Your Blog Title - [Date]</h2>
    <img src="images/YYYY-MM-DD/photo-name-web.jpeg" 
         alt="Descriptive alt text for accessibility">
    <p>Your blog content...</p>
</article>
```

Replace:
- `YYYY-MM-DD` with the date directory created
- `photo-name` with your image filename (without extension)
- Alt text with actual description

## Troubleshooting

### "No images found to optimize"
- ✅ Check images are in the **root directory** (not in subdirectories)
- ✅ Verify file extensions: `.jpeg`, `.jpg`, `.JPEG`, `.JPG`
- ✅ Make sure you've pushed/committed images to the branch

### "Workflow doesn't appear in Actions"
- ✅ Make sure you're on the branch with the workflow file
- ✅ Check `.github/workflows/optimize-images.yml` exists
- ✅ Merge the PR if it hasn't been merged yet

### "Images don't look right"
- ✅ Check you're using the `-web` version for website
- ✅ Verify the image path in your HTML is correct
- ✅ Clear browser cache and refresh

### "Need higher resolution"
- ❌ 1920px web version should be sufficient for all web displays
- ❌ If you truly need higher resolution, you'll need to keep backups of originals separately
- ✅ Consider if you actually need higher resolution - 1920px is already very high quality

## Support

- 📖 Full docs: [QUICK-START-IMAGE-OPTIMIZATION.md](QUICK-START-IMAGE-OPTIMIZATION.md)
- 📖 Visual guide: [VISUAL-GUIDE-IMAGE-OPTIMIZATION.md](VISUAL-GUIDE-IMAGE-OPTIMIZATION.md)
- 📖 Technical details: [images/README.md](images/README.md)
- 🤖 Ask Copilot for help!
