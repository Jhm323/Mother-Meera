# Mother-Meera

A **LinkTree-style landing page** designed to direct social media traffic to the online accounts of **Mother Meera**.  
The site is intentionally **minimal, fast, and elegant**, focusing on simplicity, clarity, and usability.

Built using **HTML, CSS, and JavaScript**, with no frameworks required.

---

## Features

### Elegant Design

- Purple, serene aesthetic reflecting spiritual themes
- Subtle background elements and gold accent colors
- Smooth hover interactions and staggered animations for links
- Glassmorphism-style card layout
- Fully responsive across **mobile, tablet, and desktop**

### Easy Link Management

- All links and profile info managed in **`constants.js`**
- Add or remove platforms easily — platform colors and icons are auto-detected
- Clean, consistent button layout
- Font Awesome icon support
- Staggered animation delays for polished UX

### Mobile Optimized

- Touch-friendly buttons
- Responsive layout for small screens
- Lightweight and fast loading

### Performance & Reliability

- Minimal vanilla JavaScript (no frameworks)
- Optimized CSS
- Static site — ideal for **GitHub Pages or other static hosting**
- Progressive enhancement: static fallback links work **even if JavaScript is disabled**
- Click analytics support via Plausible or similar service

---

## Tech Stack

- **HTML5**
- **CSS3**
- **Vanilla JavaScript (ES Modules)**
- **Font Awesome** for icons
- **Google Fonts** (Cinzel & Lato)

---

## Project Structure

Mother-Meera/

-index.html # Main webpage with fallback links
-styles.css # Styling, layout, and animations
-constants.js # Profile info and social links
-main.js # Logic: DOM caching, dynamic rendering, analytics, progressive enhancement
-README.md # This file

---

## Configuration

All editable content is stored in **`constants.js`**.

Example:

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
  { label: "Official Website", url: "https://mothermeera.com" },
  { label: "YouTube", url: "https://youtube.com/@mothermeera" },
  { label: "Facebook", url: "https://facebook.com/mothermeera" },
  { label: "Instagram", url: "https://instagram.com/mothermeera" }
];

Note: You no longer need to manually specify icons or platform colors. The site detects the platform from the URL and applies the correct icon, color, and animation automatically.

--Adding a New Link

Add a new object to the LINKS array with label and url.

The platform, icon, button color, and animation are automatically applied.

--Customization
Change Colors

Edit CSS variables in styles.css:

:root {
  --clr-bg-from: #1a0a2e;
  --clr-bg-to: #2e1a4a;
  --clr-gold: #f0c060;
}
Add New Platform Styles

For unsupported platforms, add a new button color:

.link-btn--tiktok::before {
  background: #000000;
}
## Analytics

Tracks clicks on social links

Works with Plausible Analytics or a similar service

Implemented with event delegation for performance

Example snippet:

linkList.addEventListener("click", (event) => {
  const link = event.target.closest("a");
  if (!link) return;
  const label = link.dataset.linkLabel;
  if (window.plausible) {
    plausible("Social Link Click", { props: { link: label } });
  }
});

## Progressive Enhancement

Static fallback links work even if JavaScript is disabled

When JS loads:

Fallback links are cleared

Animated, styled buttons are rendered dynamically

Icons, platform colors, and staggered animation are applied

Users without JS still have a fully functional link list

## Deployment

Fully static — deployable to:

-GitHub Pages

-Netlify

-Vercel

-Cloudflare Pages

Any static hosting service

## Accessibility

Semantic HTML structure

aria-label navigation for links

Focus-visible styling for keyboard users

Descriptive alt text for images

Keyboard navigable links

## License

Provided for educational and informational purposes.
Content and likeness associated with Mother Meera belong to their respective owners.

## Acknowledgements

Font Awesome

Google Fonts

Inspired by LinkTree-style landing pages
```
