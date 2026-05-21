# Connecticut Gilbert & Sullivan Society Website

A modern, responsive website for the Connecticut Gilbert & Sullivan Society, built with Astro and Tailwind CSS.

## Development

### Prerequisites

- Node.js >= 22.12.0
- npm or yarn

### Installation

```bash
cd g-s-website
npm install
```

### Development Server

Run the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
g-s-website/
├── public/                # Static assets (images, PDFs, etc.)
│   └── images/           # Site images by section
│       ├── gallery/      # Show gallery photos
│       ├── shows/        # Show posters and images
│       ├── sponsors/     # Sponsor logos
│       ├── auditions/    # Audition materials
│       ├── about/        # About section photos
│       └── videos/       # Video thumbnails
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── VideoPlayer.astro
│   │   └── SponsorCard.astro
│   ├── layouts/          # Page layouts
│   │   └── Layout.astro
│   ├── pages/            # Site pages
│   │   ├── index.astro
│   │   ├── tickets.astro
│   │   ├── auditions.astro
│   │   ├── about-us.astro
│   │   ├── gallery.astro
│   │   ├── join-us.astro
│   │   ├── contact-us.astro
│   │   └── virtual-entertainment.astro
│   └── assets/
│       └── styles.css    # Global styles
├── tailwind.config.js    # Tailwind configuration
├── astro.config.mjs      # Astro configuration
└── package.json
```

## Design System

### Colors

- Primary: `#1D3557` (Deep Royal Blue)
- Secondary: `#D4AF37` (Gold/Brass)
- Background: `#F8F9FA` (Off-white)
- Text: `#212529` (Dark Charcoal)

### Typography

- Headings: Playfair Display (Google Fonts)
- Body: Inter (Google Fonts)

## Current Pages

- **Home** (`/`) - Hero section, quick links, upcoming shows, sponsors
- **Tickets** (`/tickets/`) - Ticket purchasing information for The Pirates of Penzance
- **Auditions** (`/auditions/`) - Principal roles and chorus audition details
- **About Us** (`/about-us/`) - Organization history, mission, board members
- **Gallery** (`/gallery/`) - Photo gallery of past performances
- **Join Us** (`/join-us/`) - Membership and volunteer opportunities
- **Contact** (`/contact-us/`) - Contact form and information
- **Virtual Entertainment** (`/virtual-entertainment/`) - YouTube channel and video recordings

## Adding Images

The website is currently set up with placeholder images. To add real images:

1. Place image files in the appropriate `public/images/` subfolder
2. Update the image paths in the page files
3. Use `.jpg`, `.png`, or `.svg` formats
4. Recommended sizes:
   - Hero: 1600x800px
   - Show posters: 800x1200px
   - Gallery: 400x300px minimum
   - Logos: 300px width, transparent background preferred

## Customization

### Update Content

Edit the page files in `src/pages/` to update text content, links, and images.

### Add New Pages

1. Create a new file in `src/pages/` (e.g., `new-page.astro`)
2. Copy the structure from an existing page
3. Add a navigation link in `Navbar.astro`

### Update Color Scheme

Edit `tailwind.config.js` to change the design system colors.

## Deployment

### Netlify

1. Create a Netlify account
2. Drag and drop the `dist/` folder
3. Configure custom domain

### Vercel

1. Create a Vercel account
2. Import your repository
3. Deploy

### Manual Upload

1. Run `npm run build`
2. Upload all files in the `dist/` folder to your web host

## TODO

- [ ] Replace placeholder images with real photos
- [ ] Integrate a CMS (Sanity, Contentful, etc.) for easy content updates
- [ ] Set up contact form with Formspree or similar
- [ ] Add SEO meta tags for each page
- [ ] Implement lightbox for gallery images
- [ ] Add newsletter signup
- [ ] Set up Google Analytics

## Contact

For questions about this website, contact jfreedman@snet.net
