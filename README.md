# Paradise Saloon - Modern Salon Website

A beautiful, responsive single-page website for a salon business built with React and Tailwind CSS.

## Features

- **Hero Section**: Eye-catching banner with salon name and tagline
- **About Section**: Information about the salon with elegant layout
- **Photo Gallery**: Grid layout with hover effects showcasing salon services
- **Services Section**: Comprehensive list of offered services with icons
- **FAQ Section**: Collapsible accordion with common questions
- **Contact Form**: Booking form with contact information and map
- **Social Media Links**: Facebook, Instagram, TikTok, and Yelp integration
- **Floating Book Now Button**: Sticky button for easy booking access
- **Fully Responsive**: Optimized for mobile, tablet, and desktop

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder, ready for deployment.

## Deployment

The built website can be deployed to:
- **Netlify**: Drag and drop the `build` folder
- **Vercel**: Connect your repository for automatic deployment
- **GitHub Pages**: Follow GitHub Pages deployment guide
- **Any static hosting service**

## Customization

### Colors
Edit `tailwind.config.js` to change the color scheme:
- `salon-gold`: Primary accent color
- `salon-beige`: Light background color
- `salon-blush`: Secondary background color
- `salon-dark`: Dark text color

### Images
Replace the Unsplash URLs in the components with your own images:
- Hero background: `src/components/Hero.js`
- About section: `src/components/About.js`
- Gallery: `src/components/Gallery.js`

### Contact Information
Update salon details in `src/components/Contact.js`:
- Address
- Phone number
- Business hours
- Google Maps embed location

### Social Media
Update social media links in `src/components/Contact.js`

## Technologies Used

- React 18
- Tailwind CSS 3
- Google Fonts (Playfair Display, Inter)
- Unsplash (placeholder images)

