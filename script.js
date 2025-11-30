// Product Database
const products = [
    { 
        id: 1, 
        title: "Urban Trench Coat", 
        category: "formal", 
        price: "$129.00", 
        img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80",
        colors: ["#C5A059", "#000000"], // Gold, Black
        sizes: ["S", "M", "L", "XL"]
    },
    { 
        id: 2, 
        title: "Minimalist Tee", 
        category: "casual", 
        price: "$25.00", 
        img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80",
        colors: ["#FFFFFF", "#CCCCCC", "#1a1a1a"], 
        sizes: ["XS", "S", "M", "L"]
    },
    { 
        id: 3, 
        title: "Gold Chain Necklace", 
        category: "accessories", 
        price: "$45.00", 
        img: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?w=500&q=80",
        colors: ["#FFD700", "#C0C0C0"], 
        sizes: ["One Size"]
    },
    { 
        id: 4, 
        title: "Vintage Denim Jacket", 
        category: "casual", 
        price: "$89.00", 
        img: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80",
        colors: ["#3b5998", "#000000"], 
        sizes: ["M", "L"]
    },
    { 
        id: 5, 
        title: "Silk Evening Dress", 
        category: "formal", 
        price: "$150.00", 
        img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
        colors: ["#800020", "#000000"], 
        sizes: ["S", "M"]
    },
    { 
        id: 6, 
        title: "Leather Satchel", 
        category: "accessories", 
        price: "$110.00", 
        img: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80",
        colors: ["#8B4513", "#1a1a1a"], 
        sizes: ["One Size"]
    }
];

const grid = document.getElementById('product-grid');
const btns = document.querySelectorAll('.filter-btn');
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Load products on startup
window.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});

// Filtering Logic
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        btns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        e.target.classList.add('active');

        const category = e.target.dataset.filter;
        
        if (category === 'all') {
            displayProducts(products);
        } else {
            const filtered = products.filter(p => p.category === category);
            displayProducts(filtered);
        }
    });
});

// Render Product HTML
function displayProducts(items) {
    grid.innerHTML = items.map(item => {
        // Create color swatches
        const colorHTML = item.colors.map(color => 
            `<span class="color-swatch" style="background-color: ${color};"></span>`
        ).join('');

        // Create size badges
        const sizeHTML = item.sizes.map(size => 
            `<span class="size-badge">${size}</span>`
        ).join('');

        return `
        <div class="card">
            <div class="card-img-container">
                <img src="${item.img}" alt="${item.title}" class="card-img">
            </div>
            <div class="card-info">
                <div>
                    <div class="card-cat">${item.category}</div>
                    <div class="card-title">${item.title}</div>
                </div>
                
                <div class="card-options">
                    <div class="card-price">${item.price}</div>
                    <div class="colors">${colorHTML}</div>
                    <div class="sizes">${sizeHTML}</div>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Hamburger Menu Logic
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    hamburger.classList.toggle('toggle');
});

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active');
        hamburger.classList.remove('toggle');
    });
});