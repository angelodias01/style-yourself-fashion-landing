# Style Yourself Fashion Landing Page

This repository contains the source code for the "Style Yourself" website. It is a stylish, responsive landing page designed for a high-end clothing brand. The project features dynamic content loading, product categorization, and a sophisticated user interface.

## Project Overview

The website showcases a fictional fashion collection. It is built to be highly interactive, allowing users to filter products by category (Casual, Formal, Accessories) without reloading the page. The design uses a "warm luxury" aesthetic, utilizing cream backgrounds and metallic gold accents.

## Key Features

### Dynamic Product Grid
Unlike static HTML sites, the products in this project are rendered dynamically from a JavaScript array (`products` object). This makes it easy to add, remove, or update inventory data without altering the HTML structure.

### Category Filtering
The "New Arrivals" section includes a tabbed filtering system.
* **Logic:** Clicking a filter button updates the grid to show only items matching that specific category.
* **UX:** The active filter is visually highlighted, and the transition is instantaneous.

### Product Cards
Each product card is a self-contained component displaying:
* High-quality product image with zoom-on-hover effect.
* Product title and price.
* Color swatches (rendered as circular badges).
* Available sizes.

### Responsive Design
* **Glassmorphism Navbar:** A sticky header with a blur effect that stays visible while scrolling.
* **Mobile Menu:** A hamburger menu that slides in from the right on smaller screens, ensuring full navigation accessibility on mobile devices.

## Technologies Used

* **HTML5:** Semantic markup structure.
* **CSS3:** * CSS Variables for consistent theming (Colors, Fonts).
    * CSS Grid for the product layout.
    * Flexbox for alignment.
    * Transitions and Animations (Fade up effects).
* **JavaScript (Vanilla):** * Array mapping and DOM manipulation to render the grid.
    * Event listeners for filtering logic.
    * Toggling classes for the mobile navigation menu.
* **Google Fonts:** Integration of 'Playfair Display' (Serif) and 'Lato' (Sans-serif).

## File Structure

* **index.html:** The main page structure. It contains an empty `#product-grid` container that is populated by JavaScript.
* **style.css:** Handles all visual aspects, including the specific "Gold & Cream" color palette and responsive media queries.
* **script.js:** Contains the product database (JSON-like array) and the logic for rendering the HTML and handling filters.

## Usage

This project uses vanilla web technologies and requires no build process.
1. Download the repository files.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same directory.
3. Open `index.html` in your browser to view the site.
