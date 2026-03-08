# Mother-Meera

A **LinkTree-style landing page** designed to direct social media traffic to the online accounts of **Mother Meera**.  
The site is intentionally **minimal, fast, and elegant**, focusing on simplicity and clarity.

Built using **HTML, CSS, and JavaScript**, with no frameworks required.

---

## Features

### Elegant Design

- Purple, serene aesthetic reflecting spiritual themes
- Subtle background elements and gold accent colors
- Smooth hover interactions and animations
- Glassmorphism-style card layout
- Fully responsive across **mobile, tablet, and desktop**

### Easy Link Management

- Links are managed in a single **`constants.js`** file
- Easily add or remove platforms
- Clean button layout with platform color accents
- Font Awesome icon support

### Mobile Optimized

- Touch-friendly buttons
- Responsive layout for small screens
- Lightweight and fast loading

### Performance Focused

- No frameworks or heavy dependencies
- Minimal JavaScript
- Optimized CSS
- Static site — perfect for **GitHub Pages or static hosting**

---

## Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES Modules)**
- **Font Awesome** for icons
- **Google Fonts** (Cinzel & Lato)

---

## Project Structure

```
Mother-Meera/
│
├── index.html        # Main webpage
├── styles.css        # Styling and layout
├── constants.js      # Profile info and social links
└── README.md
```

---

## Configuration

All editable content is stored in **`constants.js`**.

Example structure:

```javascript
export const PROFILE = {
  name: "Mother Meera",
  tagline: "Divine Mother · Spiritual Teacher",
  avatarUrl: "avatar.jpg",
  avatarAlt: "Mother Meera",
};

export const SITE = {
  title: "Mother Meera",
  description: "Mother Meera is a Spiritual Teacher and Mystic.",
  copyrightName: "Mother Meera",
};

export const LINKS = [
  {
    label: "Official Website",
    url: "https://mothermeera.com",
    icon: "fa-globe",
    brand: "website",
  },
  {
    label: "YouTube",
    url: "https://youtube.com",
    icon: "fa-youtube",
    brand: "youtube",
  },
];
```

To add a new link:

1. Add a new object to the `LINKS` array
2. Set the **label**, **url**, **icon**, and **brand**
3. The site will automatically render the button.

---

## Customization

### Change Colors

Edit the CSS variables in `styles.css`.

Example:

```css
:root {
  --clr-bg-from: #1a0a2e;
  --clr-bg-to: #2e1a4a;
  --clr-gold: #f0c060;
}
```

### Add New Platform Styles

Add a new button color style:

```css
.link-btn--tiktok::before {
  background: #000000;
}
```

---

## Deployment

Because the site is **fully static**, it can be deployed easily to:

- GitHub Pages
- Netlify
- Vercel
- Cloudflare Pages
- Any static hosting service

Example GitHub Pages workflow:

1. Push the project to a repository
2. Go to **Settings → Pages**
3. Select the `main` branch
4. The site will be live.

---

## Accessibility

The project includes several accessibility features:

- Semantic HTML structure
- `aria-label` navigation for links
- Accessible focus states
- Descriptive alt text for images
- Keyboard navigable links

---

## License

This project is provided for informational and educational use.

Content and likeness associated with **Mother Meera** belong to their respective owners.

---

## Acknowledgements

- [Font Awesome](https://fontawesome.com/)
- [Google Fonts](https://fonts.google.com/)
- Inspiration from **LinkTree-style landing pages**

---
