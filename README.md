# DFC menu site

This is a two-page menu website for Deccan Fried Chicken, Gajuwaka.

- `index.html` — branded restaurant landing page and QR poster area
- `menu.html` — searchable, category-filtered interactive menu
- `menu-data.js` — all available menu categories, dishes, prices, ratings, descriptions, and tags
- `app.js` — QR generation, search, filters, and browser-saved order selection
- `site.css` — responsive DFC design system
- `dfc-food-spread.png` — original DFC-style food spread artwork used in the homepage gallery

## QR menu behaviour

The QR is generated in the browser to point to this project's own `menu.html` page. It does not redirect to Swiggy, Zomato, or WhatsApp. Once the site is published on a public domain, scanning opens the branded DFC menu directly.

When opened as a local Windows file (`file:///...`), the QR cannot be opened from a phone because phones cannot access files on the computer. Publish the folder to a public web host before printing or sharing the QR. The footer retains direct Swiggy and Zomato links as separate order options.

## Menu source

Menu content and prices were taken from the restaurant listing supplied in this chat. Check prices with the outlet before publishing.

## Original visual asset

`dfc-food-spread.png` was made with the built-in image generation workflow using this prompt: photorealistic premium restaurant food spread with crispy golden chicken, hot wings, seasoned fries and a chicken burger; charcoal backdrop with deep red, warm orange and golden-yellow accents; no visible brands, text, labels or watermark.
