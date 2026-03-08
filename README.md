# Mother-Meera

A LinkeTree type site that is flat, simple, and sole function is to direct social media traffic to Mother Meera's accounts

# Mother Meera - LinkTree Style Site

A beautiful, elegant LinkTree-style website for Mother Meera's social media accounts. Built with HTML, CSS, and JavaScript - ready to deploy on GitHub Pages.

## Features

✨ **Elegant Design**

- Golden, serene aesthetic reflecting spiritual themes
- Smooth animations and hover effects
- Fully responsive (mobile, tablet, desktop)
- Fast loading (no external dependencies)

🔗 **Easy Link Management**

- Simple to add/edit social media links
- Professional button styling
- Icon support for visual appeal

📱 **Mobile Optimized**

- Perfect display on all screen sizes
- Touch-friendly buttons
- Fast performance

## Quick Start

### Option 1: Deploy to GitHub Pages (Recommended)

1. **Create a new GitHub repository**
   - Go to https://github.com/new
   - Name it: `username.github.io` (replace "username" with your GitHub username)
   - Make it public
   - Click "Create repository"

2. **Add the files**
   - Clone your new repository to your computer
   - Copy `index.html` to the repository root
   - Copy any additional files you want

3. **Commit and push**

   ```bash
   git add .
   git commit -m "Add Mother Meera LinkTree site"
   git push origin main
   ```

4. **Enable GitHub Pages** (usually automatic)
   - Go to Settings → Pages
   - Source should be set to "Deploy from a branch"
   - Branch: `main`, folder: `/ (root)`
   - Your site will be live at: `https://username.github.io`

### Option 2: Use a Custom Domain

If you have a custom domain (e.g., mothermeera.com):

1. Follow steps 1-3 above
2. In your repository Settings → Pages
3. Add your custom domain
4. Update your domain's DNS records to point to GitHub Pages
5. GitHub will provide specific instructions

### Option 3: Run Locally

Simply open `index.html` in your web browser. No server required!

## Customization

### Update Social Media Links

Edit the `href` attributes in the `link-btn` elements:

```html
<a
  href="https://www.instagram.com/mothermeera"
  target="_blank"
  class="link-btn"
>
  <span class="link-icon">📸</span>
  Instagram
</a>
```

Replace the URL with your actual social media link.

### Change Profile Image

1. Upload an image of Mother Meera to your repository
2. Update the image source:

```html
<img src="profile-image.jpg" alt="Mother Meera" class="profile-image" />
```

Or use a URL:

```html
<img
  src="https://example.com/image.jpg"
  alt="Mother Meera"
  class="profile-image"
/>
```

### Customize Colors

Edit the CSS variables in the `<style>` section:

```css
:root {
  --primary: #d4af37; /* Gold accents */
  --dark: #1a1a1a; /* Dark background */
  --light: #f5f1e8; /* Light background */
  --accent: #8b7355; /* Brown accents */
  --soft: #e8dcc8; /* Soft cream */
  --text-dark: #2c2c2c; /* Text color */
}
```

### Edit Text Content

- **Header**: Edit the `<h1>`, subtitle, and description text
- **Footer**: Customize the footer message and copyright year

### Add More Links

Copy and paste a link button and modify:

```html
<a
  href="YOUR_LINK_HERE"
  target="_blank"
  rel="noopener noreferrer"
  class="link-btn"
>
  <span class="link-icon">🎯</span>
  Link Name
</a>
```

## Email Link Setup

To make the email link work, update it with the actual email:

```html
<a href="mailto:your-email@example.com" class="link-btn">
  <span class="link-icon">✉️</span>
  Email
</a>
```

## SEO & Metadata

Customize these meta tags in the `<head>`:

```html
<meta name="description" content="Your custom description" />
<meta name="keywords" content="mother meera, spiritual, guidance" />
<meta property="og:title" content="Mother Meera" />
<meta property="og:image" content="https://link-to-image.jpg" />
```

## File Structure

```
your-repository/
├── index.html          # Main website file
├── README.md           # This file
└── profile-image.jpg   # (Optional) Your profile image
```

## Browser Support

Works on all modern browsers:

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- **Page Load**: < 1 second
- **File Size**: ~15 KB (single HTML file)
- **No external scripts**: Completely self-contained

## Troubleshooting

### Site not showing up

- Wait 5-10 minutes for GitHub to deploy
- Check repository settings → Pages
- Ensure the repository name is `username.github.io`

### Images not loading

- Check the image file path is correct
- Use absolute URLs (https://) if linking external images
- Ensure image files are committed to the repository

### Links not working

- Make sure URLs include `https://`
- Check for typos in the domain name
- Test the link in an incognito window

## Future Enhancements

Ideas for expanding the site:

- Add a blog/news section
- Include testimonials
- Add a contact form
- Link to an online store
- Add a calendar of events
- Include video embeddings

## License

This project is open source and free to use.

## Support

For questions or issues with GitHub Pages:

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Pages Troubleshooting](https://docs.github.com/en/pages/getting-started-with-github-pages/about-github-pages)

---

Created with 🙏 for spiritual connection and growth
