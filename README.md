# Blooming Brides Landing Page

This is a landing page for Blooming Brides community, built to match the Figma design exactly.

## Project Structure

```
Blooming Brides/
├── index.html          # Main HTML file
├── styles.css          # CSS styling matching Figma design
├── script.js           # JavaScript for interactivity
├── images/             # Image assets directory
└── README.md           # This file
```

## Design Specifications

### Colors
- Primary Background: `#501730`
- White: `#FFFFFF`
- Dark Text: `#0C0805`
- Accent: `#C83B7A`
- Accent Dark: `#A02F61`
- Light Background: `#FFF6FA`
- FAQ Background: `#F4D7E4`

### Typography
- Heading Font: `Gilda Display`
- Body Font: `Lora`
- Font sizes match Figma exactly (H1: 84px, H2: 60px, etc.)

### Spacing
- Container padding: 64px
- Section gaps: 80px
- Element spacing matches Figma design

## Images Needed

The following images need to be added to the `images/` directory:

1. **hero-image.jpg** - Hero section image (640px height)
2. **event-1.jpg** - First event card image (Social event)
3. **event-2.jpg** - Second event card image (Wellness event)
4. **event-3.jpg** - Third event card image (Networking event)
5. **cta-image.jpg** - CTA section image (738px height)
6. **feature-bg.jpg** - Feature cards background
7. **gallery-placeholder.jpg** - Gallery section image
8. **blog-image.jpg** - Blog preview image (160x107px)

### Getting Images from Figma

You can download the images directly from the Figma file:
- Figma URL: https://www.figma.com/design/TG5MsN7pIdIjJUzMmOmTqp/Blooming-Bride?node-id=10202-66072

Node IDs for images:
- Hero image: `10202:68576`
- Event 1: `10202:72719`
- Event 2: `10202:72744`
- Event 3: `10202:72769`
- CTA image: `10202:70950`
- Blog image: `10202:66283`

## Features

- ✅ Responsive navigation with dropdown menu
- ✅ Hero section with call-to-action
- ✅ Features section with cards
- ✅ Statistics section
- ✅ Events section with cards
- ✅ CTA sections
- ✅ Gallery section
- ✅ FAQ section
- ✅ Newsletter subscription
- ✅ Footer with links and social media

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design for mobile and tablet

## Running the Project

1. Open `index.html` in a web browser
2. Or use a local server:
   ```bash
   python -m http.server 8000
   ```
   Then navigate to `http://localhost:8000`

## Notes

- All colors, fonts, spacing, and layouts match the Figma design exactly
- Interactive elements (dropdown menu, smooth scrolling) are implemented
- Forms are functional with basic validation
- Images are placeholders and need to be replaced with actual assets from Figma
