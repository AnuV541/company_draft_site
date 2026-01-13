# Shri Amman - B2B Industrial Solutions Website

A modern, interactive website for Shri Amman, a B2B company specializing in industrial materials and solutions.

## Features

### ✨ Interactive Elements
- **Sticky Navigation Bar**: Tabs remain accessible while scrolling
- **Smooth Page Navigation**: Jump between Home, About Us, Products, and Contact sections
- **Product Card Interactions**: Click on images or buttons to slide down and reveal detailed information
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Animations**: Fade-in effects, slide animations, and hover effects throughout
- **Contact Form**: Functional form with validation and success/error messages

### 📱 Sections

#### Home
- Hero section with company introduction
- Call-to-action button to explore products
- Professional gradient background
- Responsive layout

#### About Us
- Company mission and vision
- Key features and benefits
- Statistics cards showing company achievements
- Hover effects on stat cards

#### Products
- Product cards for:
  - SG Borings
  - Silicon Bundle
  - Copper Materials
  - Spillage Management
- Image hover effects
- Expandable product details with sliding animation
- Feature lists for each product

#### Contact Us
- Contact form with validation
- Company contact information
- Business hours
- Success/error message handling

### Footer
- Quick links to all sections
- Social media links placeholder
- Company information
- Copyright notice

## Technology Stack

- **HTML5**: Semantic markup
- **CSS3**: Advanced styling with animations and transitions
- **JavaScript (Vanilla)**: Interactivity without dependencies
- **Responsive Design**: Mobile-first approach

## File Structure

```
shri-amman-website/
├── index.html                 # Main HTML file
├── assets/
│   ├── css/
│   │   ├── styles.css        # Main stylesheet
│   │   └── responsive.css    # Mobile responsive styles
│   ├── js/
│   │   └── script.js         # JavaScript functionality
│   └── images/
│       ├── hero-image.png
│       ├── sg-borings.png
│       ├── silicon-bundle.png
│       ├── copper.png
│       └── spillage.png
└── README.md                  # This file
```

## How to Use

1. **Open the Website**: Simply open `index.html` in your web browser
2. **Navigate**: Click on navigation tabs or scroll to move between sections
3. **Explore Products**: Click on product images or "View Details" buttons to see more information
4. **Contact**: Fill out the contact form to send messages
5. **Mobile**: Test on mobile devices - the design is fully responsive

## Key Features Explained

### Sticky Navigation
The navigation bar remains fixed at the top while scrolling, with active tab highlighting based on scroll position.

### Product Card Interactions
- **Hover Effects**: Images scale up, overlay text appears
- **Click to Expand**: Click the image or "View Details" button to slide down product details
- **Details Slide Animation**: Smooth slide-down animation reveals additional information

### Contact Form Validation
- Required field validation
- Email format validation
- Success/error message display
- Auto-hide messages after 5 seconds

### Responsive Design Breakpoints
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: Below 768px
- **Extra Small**: Below 480px

## Customization Guide

### Update Company Information
Edit in `index.html`:
- Company name and logo
- Contact details (phone, email, address)
- Business hours
- Social media links

### Modify Colors
Edit CSS variables in `assets/css/styles.css`:
```css
:root {
    --primary-color: #2c3e50;    /* Main color */
    --secondary-color: #e74c3c;  /* Accent color */
    --accent-color: #3498db;     /* Button color */
}
```

### Change Text Content
- All text content is in `index.html`
- Modify product descriptions, about text, and contact information as needed

### Add Real Images
Replace placeholder image paths in `index.html`:
- `assets/images/hero-image.png`
- `assets/images/sg-borings.png`
- `assets/images/silicon-bundle.png`
- `assets/images/copper.png`
- `assets/images/spillage.png`

## Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Lazy loading for images
- Debounced scroll events
- Smooth animations with hardware acceleration
- Optimized CSS and JavaScript

## Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Focus states on interactive elements
- Form validation with clear messages
- Proper heading hierarchy

## Future Enhancements

- [ ] Add image carousel/gallery
- [ ] Integrate with backend API
- [ ] Add product filtering/search
- [ ] Implement real email functionality
- [ ] Add blog/news section
- [ ] Integration with CMS
- [ ] Multi-language support
- [ ] Analytics integration

## License

© 2024 Shri Amman. All rights reserved.

## Contact Information

For website updates or inquiries:
- Email: info@shriamman.com
- Phone: +91-XXX-XXX-XXXX

---

**Made with ❤️ for Shri Amman**
