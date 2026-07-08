# Arasu Medical — React Website

A full multi-page React site for **Arasu Medical**, a fictional Tamil Nadu pharmacy
chain, built with the custom color palette:

- Maroon `#842526` (primary brand color)
- Bright Yellow `#FEF200`
- Golden Orange `#E7AD09`
- Leaf Green `#0AAF60`
- Dark Red `#A31F2A`
- Black `#000000`

All images are loaded live from the internet (Unsplash), with an automatic
fallback to Picsum if any image fails to load — no local image assets are
bundled.

## Run it locally

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Pages

| Route         | Page             | Description |
|----------------|------------------|-------------|
| `/`            | Home             | Hero, stats, about teaser, categories, featured products, why-choose-us, services, brands, branches, testimonials, FAQ, contact |
| `/about`       | About Us         | Full story, values, milestone timeline, leadership team |
| `/medicines`   | Medicines        | Searchable, filterable catalog of 12 sample products |
| `/services`    | Services         | All 8 services, full FAQ, contact form |
| `/brands`      | Brands           | All 16 partner brands |
| `/contact`     | Contact Us       | Contact form, info cards, all 8 branches with map |

## Project structure

```
arasu-medical/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx            ← app entry, wraps BrowserRouter
│   ├── App.jsx              ← route definitions + Navbar/Footer shell
│   ├── ScrollToTop.jsx       ← scrolls to top on route change
│   ├── icons.jsx             ← shared inline SVG icon set
│   ├── data.js                ← shared content (nav, stats, products, brands, etc.)
│   ├── index.css              ← design tokens + global utility classes
│   ├── components/
│   │   ├── Navbar/{Navbar.jsx, Navbar.css}
│   │   ├── Hero/{Hero.jsx, Hero.css}
│   │   ├── Statistics/{Statistics.jsx, Statistics.css}
│   │   ├── About/{About.jsx, About.css}
│   │   ├── Categories/{Categories.jsx, Categories.css}
│   │   ├── FeaturedProducts/{FeaturedProducts.jsx, FeaturedProducts.css}
│   │   ├── WhyChooseUs/{WhyChooseUs.jsx, WhyChooseUs.css}
│   │   ├── Services/{Services.jsx, Services.css}
│   │   ├── Brands/{Brands.jsx, Brands.css}
│   │   ├── Branches/{Branches.jsx, Branches.css}
│   │   ├── Testimonials/{Testimonials.jsx, Testimonials.css}
│   │   ├── FAQ/{FAQ.jsx, FAQ.css}
│   │   ├── Contact/{Contact.jsx, Contact.css}
│   │   └── Footer/{Footer.jsx, Footer.css}
│   └── pages/
│       ├── Home.jsx
│       ├── AboutPage.jsx / AboutPage.css
│       ├── Medicines.jsx / Medicines.css
│       ├── ServicesPage.jsx
│       ├── BrandsPage.jsx / BrandsPage.css
│       └── ContactPage.jsx
└── README.md
```

## Notable features

- Full client-side routing with `react-router-dom`, active nav-link highlighting, and scroll-to-top on navigation
- Animated, scroll-triggered stat counters
- Working (in-memory) contact form and newsletter signup with success states
- Searchable + filterable medicines catalog
- Accordion-style FAQ
- Fully responsive down to mobile, with a slide-out mobile nav

