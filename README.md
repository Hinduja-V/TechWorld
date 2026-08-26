# TechWorld — Electronics & Gadgets

## Project Overview
TechWorld is a modern, responsive, frontend-only electronics e-commerce website built as a demonstration project. It provides a complete simulated shopping experience including product browsing, filtering, searching, cart management, wishlist, product comparison, and simulated checkout using LocalStorage for data persistence.

## Internship Information
**Task ID:** WD-EC-003  
**Industry:** Electronics & Gadgets  
**Company:** Data Alcott Systems  

## Features
- **Responsive Design:** Optimized for Mobile, Tablet, and Desktop displays.
- **Product Listing:** Filter by category, brand, and price, with dynamic sorting options.
- **Search:** Real-time search across products.
- **Cart & Wishlist:** Fully functional cart and wishlist saved to `localStorage`.
- **Product Comparison:** Select up to 4 items to compare technical specifications side-by-side.
- **Simulated Checkout:** Multi-step checkout process leading to order confirmation.
- **Order Tracking:** Track past orders directly via simulated timelines.
- **User Accounts:** Simulated authentication (Login/Registration) handling profile details and order history.
- **Interactive UI/UX:** Utilizes Tailwind CSS for modern stylings, CSS animations, and FontAwesome icons for a premium feel.

## Technologies
- HTML5
- CSS3
- JavaScript (ES6+ Modules)
- LocalStorage
- Tailwind CSS (via Vite)
- FontAwesome

## Project Structure
```text
techworld/
├── index.html               # Home page with hero, categories, and deals
├── products.html            # Shop page with filtering and sorting
├── product-details.html     # Single product view with specs and gallery
├── cart.html                # Shopping cart with total calculations
├── checkout.html            # Multi-step checkout form
├── login.html               # User login interface
├── register.html            # User registration interface
├── account.html             # User dashboard and order history
├── wishlist.html            # Saved products
├── compare.html             # Side-by-side product comparisons
├── order-tracking.html      # Order status timeline
├── about.html               # Company info
├── contact.html             # Contact forms and maps
├── css/
│   ├── style.css            # Global CSS overrides and specific classes
│   └── animations.css       # Keyframe animations
├── js/
│   ├── app.js               # Global UI logic (Header, Footer, Toast, Cart state)
│   └── products.js          # Product data array (JSON format)
├── package.json             # Dev dependencies (Vite, Tailwind)
└── vite.config.ts           # Bundler configuration
```

## How to Run

1. Clone or download the repository.
2. Install dependencies (requires Node.js):
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to the local URL (typically `http://localhost:3000`).

## Screenshots
*[Screenshots to be added here]*

## Live Demo
*[Deployment URL to be added here]*

## GitHub Repository
*[Repository URL to be added here]*

## YouTube Demo
*[Video URL to be added here]*

## Learning Outcomes
- **Responsive design:** Utilizing utility-first CSS frameworks for rapid, adaptive layouts.
- **JavaScript DOM manipulation:** Creating dynamic UI updates without frameworks like React.
- **E-commerce functionality:** Building modular cart, checkout, and comparison features.
- **LocalStorage:** Managing application state consistently across page reloads.
- **Form validation:** Enforcing data requirements on checkout and auth forms.
- **UI/UX:** Incorporating toast notifications, loaders, and hover states for better feedback.
- **Product filtering:** Dynamically rendering item arrays based on complex criteria.

## Internship Task Reference
This project was developed based on the WD-EC-003 assignment specification from Data Alcott Systems.
