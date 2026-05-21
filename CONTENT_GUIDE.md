# Content Management Guide for CT Gilbert & Sullivan Society Website

## Quick Start

### Running the Website Locally

1. Navigate to the project directory:
   ```bash
   cd "g-s-website"
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and go to `http://localhost:4321`

4. The server will automatically reload when you make changes to content or code.

## Content Update Procedures

### Updating Text Content

All pages are stored as `.astro` files in the `src/pages/` directory. To update text:

1. Open the relevant page file (e.g., `src/pages/index.astro` for the homepage)
2. Find the text you want to change
3. Edit the text directly in the file
4. The changes will appear automatically in your browser

### Adding/Updating Shows

**For upcoming shows on the homepage:**

1. Open `src/pages/index.astro`
2. Find the `shows` array (around line 13)
3. Update or add show objects:

```astro
const shows = [
  {
    title: 'Show Name',
    dates: 'October 17-18, 2026',
    image: '/images/shows/pirates-poster.jpg',
    url: '/tickets/',
    description: 'Description of the show.',
  },
];
```

### Managing Sponsors

**For the sponsors section:**

1. Open `src/pages/index.astro`
2. Find the `sponsors` array (around line 7)
3. Update or add sponsor objects:

```astro
const sponsors = [
  { name: 'Sponsor Name', logo: '/images/sponsors/sponsor-name.png', url: 'https://sponsor-website.com' },
];
```

**To add sponsor logos:**
- Place logo files in `public/images/sponsors/`
- Update the path in the sponsors array
- Supported formats: `.png`, `.jpg`, `.svg`

### Updating Audition Information

1. Open `src/pages/auditions.astro`
2. Find sections for:
   - Audition Dates (around line 30)
   - Principal Roles Information (around line 42)
   - Chorus Information (around line 98)
3. Update the text as needed

### Managing Gallery Photos

**To add new gallery photos:**

1. Place image files in `public/images/gallery/`
   - Naming: `gallery-title-number.jpg` (e.g., `pirates-1.jpg`)
2. The photos will automatically appear in the gallery grid
3. Recommended sizes: 400x300px minimum

**To add a new gallery section:**

1. Open `src/pages/gallery.astro`
2. Add a new section similar to existing ones:
```astro
<div class="card mb-8">
  <h2 class="text-2xl font-serif font-bold mb-4">Show Name (Year)</h2>
  <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
    {[1, 2, 3, 4].map((i) => (
      <div class="card overflow-hidden group relative">
        <img
          src={`/images/gallery/show-name-${i}.jpg`}
          alt={`Show Name performance photo ${i}`}
          class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
      </div>
    ))}
  </div>
</div>
```

### Updating Contact Information

1. Open `src/pages/contact-us.astro`
2. Find the contact information section
3. Update:
   - Email: jfreedman@snet.net
   - Phone: 860-554-1256
   - Address: Valley Regional High School, 256 Kelsey Hill Road, Deep River, CT 06417

## Adding New Pages

To add a new page to the website:

1. Create a new file in `src/pages/` (e.g., `new-page.astro`)
2. Copy the structure from an existing page:
```astro
---
import Layout from '../layouts/Layout.astro';
import Navbar from '../components/Navbar.astro';
import Footer from '../components/Footer.astro';
---

<Layout>
  <Navbar currentPath="/new-page/" />

  <main>
    <section class="container mx-auto px-4 py-16">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl font-serif font-bold mb-8 text-center">Page Title</h1>
        <p>Your content here.</p>
      </div>
    </section>
  </main>

  <Footer />
</Layout>
```

3. Add the page link to the Navbar in `src/components/Navbar.astro`
4. Restart the dev server if it's running

## Adding Images

### Naming Convention

- Gallery: `gallery-title-number.jpg` (e.g., `pirates-1.jpg`)
- Shows: `shows-title.jpg` (e.g., `pirates-poster.jpg`)
- Sponsors: `sponsors/name.png` (e.g., `sponsors/wmnr.png`)
- About: `about/description.jpg`
- Videos: `videos/name.jpg`

### Image Specifications

- **Hero Image:** 1600x800px (landscape)
- **Show Posters:** 800x1200px (portrait)
- **Gallery Images:** 400x300px minimum, 16:9 aspect ratio preferred
- **Logos:** 300px width, transparent background preferred (PNG)
- **Video Thumbnails:** 400x225px (16:9)

### Supported Formats

- JPG/JPEG for photos
- PNG for images with transparency (logos)
- SVG for vector graphics (preferred for logos)

## Maintenance Tasks

### Building for Production

Before deploying to your hosting provider:

```bash
npm run build
```

This creates an optimized version in the `dist/` folder.

### Adding PDF Documents

1. Place PDF files in `public/pdfs/` (create this folder if needed)
2. Add download links using:
```astro
<a href="/pdfs/document.pdf" class="text-primary hover:underline">
  Download Document
</a>
```

### Updating Navigation Links

To add, remove, or rename navigation items:

1. Open `src/components/Navbar.astro`
2. Update the `navItems` array (around line 5)
3. The navigation automatically highlights the current page

## Troubleshooting

### Changes Not Appearing

- Refresh the browser page
- Restart the dev server (`Ctrl+C`, then `npm run dev`)
- Check for syntax errors in the `.astro` files

### Images Not Loading

- Verify the file is in the correct `public/images/` subfolder
- Check the path in your code matches the actual file path
- Ensure the filename matches exactly (case-sensitive)

### Dev Server Not Starting

- Verify Node.js >= 22.12.0 is installed: `node --version`
- Reinstall dependencies: `npm install`
- Check for error messages in the terminal

## File Structure Reference

```
g-s-website/
├── public/              # Static files (images, PDFs)
│   └── images/          # All website images
│       ├── gallery/    # Gallery photos
│       ├── shows/      # Show posters and images
│       ├── sponsors/   # Sponsor logos
│       └── ...
├── src/
│   ├── components/     # Reusable components
│   ├── layouts/        # Page layouts
│   ├── pages/          # Website pages
│   └── assets/         # Global styles
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind styling
└── package.json        # Dependencies
```

## Next Steps

1. Add real photos instead of placeholders
2. Set up content management system (Sanity, Contentful, etc.)
3. Configure contact form with Formspree or similar
4. Add SEO meta tags for each page
5. Implement newsletter signup
6. Set up Google Analytics

## Need Help?

For technical questions, refer to:
- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

For website content questions, contact jfreedman@snet.net
