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

When adding images for a new blog entry:

1. Create a new directory with the date in `YYYY-MM-DD` format
2. Add your images to that directory
3. Reference them in the HTML using the path: `images/YYYY-MM-DD/filename.jpeg`

Example:
```html
<img src="images/2026-02-05/flower.jpeg" alt="Description">
```

## Tips

- Use descriptive filenames when possible
- Keep original camera filenames if they're unique
- You can add multiple images per blog entry in the same date directory
