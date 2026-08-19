# Bootstrap & Grid System + Bootstrap Components Checkpoints

This repository contains full implementations for both checkpoints:

1. **Checkpoint 1: Restaurant Webpage (Bootstrap & Grid System)** - [`index.html`](./index.html)
2. **Checkpoint 2: Travel Agency Landing Page (Bootstrap Components)** - [`travel.html`](./travel.html)

---

## 🍽️ Checkpoint 1: Restaurant Webpage (`index.html`)

A responsive restaurant webpage for **Bella Italia** utilizing Bootstrap 5 and its flexible 12-column grid system.

### Sections & Bootstrap Features:
- **Header / Navbar (`navbar`, `navbar-expand-lg`, `navbar-dark`, `bg-dark`, `sticky-top`)**:
  - Restaurant brand on the left with icon (`<i class="bi bi-egg-fried"></i>`).
  - Responsive toggle button (`navbar-toggler`) for mobile screens.
  - Right-aligned navigation links: `Home`, `Menu`, `About Us`, `Contact`, plus a `Reserve Table` CTA button.
- **Hero Section (`hero-section`, `d-flex`, `align-items-center`, `text-center`)**:
  - Full-width hero background image showcasing dish presentation.
  - Centered hero heading, descriptive lead text, and interactive buttons (`btn-warning`, `btn-outline-light`).
- **Menu Section (Bootstrap Grid Layout - `container`, `row g-4`, `col-12 col-md-6 col-lg-4`)**:
  - 3-column responsive card layout (`card`, `h-100`, `shadow-sm`).
  - Displays Spaghetti Carbonara, Margherita Pizza, and Classic Tiramisu with high-resolution images, descriptions, category badges, and price tags (`badge bg-danger`).
- **About Us Section (Two-Column Grid - `row align-items-center`, `col-12 col-md-6`)**:
  - Left column: High quality restaurant image with decorative badge overlay (`rounded-4`, `shadow-lg`).
  - Right column: Restaurant origin story, philosophy, and key highlights list with icons.
- **Contact Section (`row justify-content-center`, `col-12 col-md-8`)**:
  - Contact form with name, email, and message inputs using `form-control`, `input-group`, and submit button with interactive submission alert.
- **Footer (`bg-dark`, `text-white`, `py-4`)**:
  - Copyright info on the left, social media icons (Facebook, Instagram, X/Twitter, Email) on the right.

---

## ✈️ Checkpoint 2: Travel Agency Landing Page (`travel.html`)

A modern landing page for **Wanderlust Travel Agency** showcasing core Bootstrap components.

### Sections & Bootstrap Features:
- **Navbar (`navbar navbar-expand-lg navbar-dark bg-primary sticky-top`)**:
  - Brand name with airplane icon on the left.
  - Navigation links (Home, Destinations, Tours, Contact) on the right.
- **Hero Section (`travel-hero`, `d-flex align-items-center`)**:
  - Scenic travel background with dark gradient overlay.
  - Centered heading, subheading, and prominent CTA buttons (`Explore Destinations`, `View Tour Packages`).
- **Destinations Section (`card`, `card-img-top`, `col-12 col-md-6 col-lg-4`)**:
  - 3 destination cards (Santorini, Kyoto, Swiss Alps) with pricing, badges, descriptions, and a `"Learn More"` button.
- **Tours Section (`accordion`, `accordion-item`, `accordion-header`, `accordion-collapse`)**:
  - Interactive accordion displaying 3 tour packages (European Capital Explorer, Tropical Island Escape, African Safari).
  - Expandable/collapsible details with itinerary highlights and `"View Details & Book"` links.
- **Contact Form (`form-control`, `form-select`, `input-group`)**:
  - Form fields for Full Name, Email Address, Destination of Interest (dropdown), and Message/Special Requests.
  - JavaScript submit handler providing instant confirmation feedback.
- **Footer (`bg-primary text-white`)**:
  - Copyright statement and social media links (Facebook, Instagram, X, YouTube).

---

## 🚀 How to View / Run

1. Open the directory in your code editor:
   ```
   C:\Users\asadh\.gemini\antigravity\scratch\bootstrap-projects
   ```
2. Double click `index.html` or `travel.html` to open in any web browser (Chrome, Edge, Firefox).
3. Use the switcher bar at the top of either page to seamlessly navigate between the two checkpoint projects.
