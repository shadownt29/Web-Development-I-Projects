# TechGates

TechGates is a computer store website for gaming PCs, laptops, and PC parts. It is our final project for INFO 250 Web Development I at the American University of Phnom Penh.

It is a static website made with HTML, CSS, and JavaScript. There is no backend, so the forms and reviews only work in the browser and are not saved anywhere.

## How to run

1. Download or clone the project.
2. Open `index.html` in a browser, or use Live Server in VS Code.

## Pages

| Page | File | Built by |
| --- | --- | --- |
| Home | `index.html` | Sin |
| About Us | `about_us.html` | Sin |
| Shop | `Shop/shop.html` | Sin |
| Shop by brand | `Shop/brand.html` | Sam |
| Shop by category | `Shop/category.html` | Sam |
| Brand product pages (16) | `BrandsName/` | Sam |
| Category product pages (21) | `CategoriesName/` | Sam |
| Custom Builder | `custom_builder_guide.html` | Chy |
| Reviews & FAQs | `reviews_faqs.html` | Member 4 |
| Contact | `contact.html` | Member 4 |

## Folder structure

```
TechGates/
  index.html
  about_us.html
  contact.html
  reviews_faqs.html
  custom_builder_guide.html
  Shop/                 shop.html, brand.html, category.html
  BrandsName/           one product page for each brand
  CategoriesName/       one product page for each category
  css/                  all stylesheets
  js/                   nav.js (menu button), script.js (forms)
  assets/
    images/             logo and site images
    brands_categories/  brand logos, category images, product photos
    bulider/            Custom Builder part images
    favicon.ico
  dumps/                old drafts, not used by the site
```

## How the CSS works

- Every page links `css/style.css`. It imports the shared design (`base.css`) and the styles for Home, About, Shop, Contact, and Reviews.
- Some pages also link their own CSS: `builder.css` on the Custom Builder page, `brands.css` on `Shop/brand.html`, and `categories.css` on `Shop/category.html`.
- The brand and category product pages use the `brands.css` and `category.css` inside their own folders.
- Class names start with a prefix so pages do not clash: `site-` for the shared header, footer, and buttons, then `home-`, `about-`, `shop-`, `contact-`, `rf-`, and so on. Use your own prefix for your page.

## Shared header and footer

Every page uses the same header and footer. Copy them from `index.html` and do not rewrite them.

- Pages inside `Shop/` need `../` before every link and image path.
- Put `aria-current="page"` on the link of the page you are on.
- Under 896px wide the menu turns into a 3 dash button. This needs `<script src="js/nav.js" defer></script>` in the head (`../js/nav.js` inside `Shop/`).

## Design

- Colors: teal `#005067`, amber `#e59b18`, dark text `#1d1d1f`, light gray `#f5f5f7`.
- Fonts: Space Grotesk for headings and IBM Plex Sans for text.
- The colors and sizes are CSS variables at the top of `css/base.css`.

## Still to do

- Add `js/builder.js` for the Custom Builder page. The page links to it but the file is not in the project yet.

## Team

Sin, Sam, Chy, and Member 4.
