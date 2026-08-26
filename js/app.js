// js/app.js
import products from './products.js';

// ---- STATE MANAGEMENT ----
export function getCart() {
    return JSON.parse(localStorage.getItem('techworld_cart')) || [];
}

export function saveCart(cart) {
    localStorage.setItem('techworld_cart', JSON.stringify(cart));
    updateCartBadges();
}

export function getWishlist() {
    return JSON.parse(localStorage.getItem('techworld_wishlist')) || [];
}

export function saveWishlist(wishlist) {
    localStorage.setItem('techworld_wishlist', JSON.stringify(wishlist));
    updateWishlistBadges();
}

export function getUser() {
    return JSON.parse(localStorage.getItem('techworld_user'));
}

export function saveUser(user) {
    localStorage.setItem('techworld_user', JSON.stringify(user));
    updateUserNav();
}

export function logoutUser() {
    localStorage.removeItem('techworld_user');
    window.location.href = 'login.html';
}

export function getCompareList() {
    return JSON.parse(localStorage.getItem('techworld_compare')) || [];
}

export function saveCompareList(list) {
    localStorage.setItem('techworld_compare', JSON.stringify(list));
}


// ---- UI UPDATES ----

export function updateCartBadges() {
    const cart = getCart();
    const count = cart.reduce((total, item) => total + item.quantity, 0);
    const badges = document.querySelectorAll('.cart-count-badge');
    badges.forEach(badge => {
        badge.textContent = count;
        if (count > 0) badge.classList.remove('hidden');
        else badge.classList.add('hidden');
    });
}

export function updateWishlistBadges() {
    const wishlist = getWishlist();
    const count = wishlist.length;
    const badges = document.querySelectorAll('.wishlist-count-badge');
    badges.forEach(badge => {
        badge.textContent = count;
        if (count > 0) badge.classList.remove('hidden');
        else badge.classList.add('hidden');
    });
}

export function updateUserNav() {
    const user = getUser();
    const userLinks = document.querySelectorAll('.user-nav-link');
    userLinks.forEach(link => {
        if (user) {
            link.href = 'account.html';
            link.innerHTML = '<i class="fa-solid fa-user"></i><span class="ml-2 hidden md:inline">Account</span>';
        } else {
            link.href = 'login.html';
            link.innerHTML = '<i class="fa-regular fa-user"></i><span class="ml-2 hidden md:inline">Login</span>';
        }
    });
}

// ---- TOAST NOTIFICATIONS ----

export function showToast(message, type = 'success') {
    let container = document.getElementById('toast-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'toast-container';
        container.className = 'fixed bottom-4 right-4 z-50 flex flex-col gap-2';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = `px-4 py-3 rounded shadow-lg text-white font-medium transform transition-all duration-300 translate-y-10 opacity-0 flex items-center gap-2 ${
        type === 'success' ? 'bg-green-600' :
        type === 'error' ? 'bg-red-600' :
        'bg-accent-primary'
    }`;
    
    const icon = type === 'success' ? '<i class="fa-solid fa-check-circle"></i>' :
                 type === 'error' ? '<i class="fa-solid fa-circle-exclamation"></i>' :
                 '<i class="fa-solid fa-info-circle"></i>';
                 
    toast.innerHTML = `${icon} <span>${message}</span>`;
    
    container.appendChild(toast);
    
    // Animate in
    setTimeout(() => {
        toast.classList.remove('translate-y-10', 'opacity-0');
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        toast.classList.add('translate-y-10', 'opacity-0');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ---- SHARED COMPONENTS ----

export function formatPrice(price) {
    return new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    }).format(price);
}

export function renderHeader() {
    const headerHtml = `
    <header id="main-header" class="fixed top-0 inset-x-0 z-50 transition-all duration-300 pt-4 px-4">
        <div class="container mx-auto max-w-7xl">
            <div id="navbar-container" class="bg-card-bg/60 backdrop-blur-xl border border-border-subtle rounded-2xl shadow-2xl px-6 py-3 flex justify-between items-center transition-colors duration-300">
                <!-- Logo -->
                <a href="index.html" class="flex items-center gap-2 text-4xl font-bold text-text-main ">
                    <span class="text-accent-primary text-xl">◈</span> TECHWORLD
                </a>
                
                <!-- Desktop Nav -->
                <nav class="hidden lg:flex items-center gap-8 font-medium text-text-secondary text-sm">
                    <a href="index.html" class="hover:text-text-main transition">Discover</a>
                    <a href="products.html" class="hover:text-text-main transition">Categories</a>
                    <a href="index.html#deals" class="hover:text-text-main transition">Deals</a>
                    <a href="about.html" class="hover:text-text-main transition">About</a>
                </nav>
                
                <!-- Icons & Search -->
                <div class="flex items-center gap-5 text-text-secondary">
                    <!-- Search Icon (Triggers overlay) -->
                    <button id="search-trigger" class="hover:text-accent-primary transition flex items-center gap-2">
                        <i class="fa-solid fa-search"></i>
                    </button>

                    <a href="compare.html" class="hover:text-accent-primary transition hidden sm:block" title="Compare">
                        <i class="fa-solid fa-code-compare"></i>
                    </a>
                    
                    <a href="wishlist.html" class="relative hover:text-accent-primary transition" title="Wishlist">
                        <i class="fa-regular fa-heart"></i>
                        <span class="wishlist-count-badge absolute -top-2 -right-2 bg-accent-primary text-primary-bg text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center hidden">0</span>
                    </a>
                    
                    <a href="cart.html" class="relative hover:text-accent-primary transition" title="Cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span class="cart-count-badge absolute -top-2 -right-2 bg-accent-primary text-primary-bg text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center hidden">0</span>
                    </a>
                    
                    <a href="#" class="user-nav-link hover:text-accent-primary transition" title="Account">
                        <i class="fa-regular fa-user"></i>
                    </a>
                    
                    <!-- Mobile Menu Button -->
                    <button id="mobile-menu-btn" class="lg:hidden text-xl hover:text-accent-primary transition">
                        <i class="fa-solid fa-bars"></i>
                    </button>
                </div>
            </div>
        </div>
        
        <!-- Full Screen Search Overlay -->
        <div id="search-overlay" class="fixed inset-0 bg-primary-bg/95 backdrop-blur-2xl z-50 opacity-0 pointer-events-none transition-opacity duration-300 flex flex-col pt-24 px-6">
            <div class="container mx-auto max-w-4xl relative">
                <button id="close-search-btn" class="absolute right-0 top-0 text-3xl text-text-secondary hover:text-text-main transition">
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <h2 class="text-3xl font-bold mb-8 text-text-main">What are you looking for?</h2>
                <form id="global-search-form" class="relative w-full mb-12">
                    <input type="text" id="global-search-input" placeholder="Search smartphones, laptops, headphones..." class="w-full bg-transparent border-b-2 border-border-subtle text-3xl text-text-main py-4 focus:outline-none focus:border-accent-primary transition placeholder-text-secondary/50">
                    <button type="submit" class="absolute right-0 top-4 text-2xl text-accent-primary hover:text-accent-secondary transition">
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </form>
                
                <div>
                    <h3 class="text-sm font-bold text-text-secondary uppercase r mb-4">Trending Searches</h3>
                    <div class="flex flex-wrap gap-3">
                        <a href="products.html?search=iPhone" class="px-4 py-2 rounded-full border border-border-subtle hover:border-accent-primary hover:text-accent-primary transition text-sm text-text-secondary">iPhone</a>
                        <a href="products.html?search=MacBook" class="px-4 py-2 rounded-full border border-border-subtle hover:border-accent-primary hover:text-accent-primary transition text-sm text-text-secondary">MacBook</a>
                        <a href="products.html?search=AirPods" class="px-4 py-2 rounded-full border border-border-subtle hover:border-accent-primary hover:text-accent-primary transition text-sm text-text-secondary">AirPods</a>
                        <a href="products.html?search=Galaxy" class="px-4 py-2 rounded-full border border-border-subtle hover:border-accent-primary hover:text-accent-primary transition text-sm text-text-secondary">Galaxy</a>
                        <a href="products.html?search=Gaming Laptop" class="px-4 py-2 rounded-full border border-border-subtle hover:border-accent-primary hover:text-accent-primary transition text-sm text-text-secondary">Gaming Laptop</a>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Mobile Menu Overlay -->
        <div id="mobile-menu" class="fixed inset-0 bg-secondary-bg z-50 transform translate-x-full transition-transform duration-300 lg:hidden flex flex-col">
            <div class="p-6 flex justify-between items-center border-b border-border-subtle">
                <a href="index.html" class="flex items-center gap-2 text-4xl font-bold text-text-main">
                    <span class="text-accent-primary">◈</span> TECHWORLD
                </a>
                <button id="close-menu-btn" class="text-2xl text-text-secondary hover:text-accent-primary">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
            <nav class="flex-1 overflow-y-auto p-6 flex flex-col gap-6 text-xl font-medium text-text-main">
                <a href="index.html" class="hover:text-accent-primary transition">Home</a>
                <a href="products.html" class="hover:text-accent-primary transition">Shop All</a>
                <a href="products.html?category=Smartphones" class="hover:text-accent-primary transition">Smartphones</a>
                <a href="products.html?category=Laptops & Tablets" class="hover:text-accent-primary transition">Laptops & Tablets</a>
                <a href="products.html?category=Audio & Wearables" class="hover:text-accent-primary transition">Audio & Wearables</a>
                <a href="products.html?category=Accessories" class="hover:text-accent-primary transition">Accessories</a>
                <a href="compare.html" class="hover:text-accent-primary transition">Compare Products</a>
                <a href="about.html" class="hover:text-accent-primary transition">About Us</a>
                <a href="contact.html" class="hover:text-accent-primary transition">Contact</a>
            </nav>
        </div>
    </header>
    `;
    
    document.body.insertAdjacentHTML('afterbegin', headerHtml);
    
    // Header Scroll effect
    window.addEventListener('scroll', () => {
        const header = document.getElementById('main-header');
        const navContainer = document.getElementById('navbar-container');
        if (window.scrollY > 20) {
            header.classList.remove('pt-4');
            navContainer.classList.add('bg-card-bg/90');
            navContainer.classList.remove('bg-card-bg/60');
        } else {
            header.classList.add('pt-4');
            navContainer.classList.add('bg-card-bg/60');
            navContainer.classList.remove('bg-card-bg/90');
        }
    });

    // Search handlers
    const searchOverlay = document.getElementById('search-overlay');
    document.getElementById('search-trigger')?.addEventListener('click', () => {
        searchOverlay.classList.remove('opacity-0', 'pointer-events-none');
        setTimeout(() => document.getElementById('global-search-input').focus(), 100);
    });
    
    document.getElementById('close-search-btn')?.addEventListener('click', () => {
        searchOverlay.classList.add('opacity-0', 'pointer-events-none');
    });

    const setupSearch = (formId, inputId) => {
        const form = document.getElementById(formId);
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                const query = document.getElementById(inputId).value.trim();
                if (query) {
                    window.location.href = `products.html?search=${encodeURIComponent(query)}`;
                }
            });
        }
    };
    
    setupSearch('global-search-form', 'global-search-input');
    
    // Mobile menu handlers
    document.getElementById('mobile-menu-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.remove('translate-x-full');
    });
    
    document.getElementById('close-menu-btn')?.addEventListener('click', () => {
        document.getElementById('mobile-menu').classList.add('translate-x-full');
    });
}

export function renderFooter() {
    const footerHtml = `
    <footer class="bg-secondary-bg text-text-main pt-16 pb-8 mt-auto border-t border-border-subtle">
        <div class="container mx-auto px-4 max-w-7xl">
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                <div>
                    <h3 class="text-xl font-bold mb-6 flex items-center gap-2">
                        <span class="text-accent-primary">◈</span> TECHWORLD
                    </h3>
                    <p class="text-text-secondary text-sm mb-6 leading-relaxed max-w-xs">Power Your World with Better Technology. Discover the latest electronics and gadgets designed for the way you live.</p>
                    <div class="flex gap-4">
                        <a href="#" class="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-accent-primary transition"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="#" class="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-accent-primary transition"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#" class="w-8 h-8 flex items-center justify-center text-text-secondary hover:text-accent-primary transition"><i class="fa-brands fa-youtube"></i></a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-sm font-bold mb-6 uppercase r text-text-secondary">Company</h4>
                    <ul class="flex flex-col gap-3 text-sm text-text-main">
                        <li><a href="about.html" class="hover:text-accent-primary transition">About TechWorld</a></li>
                        <li><a href="about.html#mission" class="hover:text-accent-primary transition">Our Mission</a></li>
                        <li><a href="#" class="hover:text-accent-primary transition">Careers</a></li>
                        <li><a href="#" class="hover:text-accent-primary transition">Newsroom</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-sm font-bold mb-6 uppercase r text-text-secondary">Support</h4>
                    <ul class="flex flex-col gap-3 text-sm text-text-main">
                        <li><a href="contact.html" class="hover:text-accent-primary transition">Contact Us</a></li>
                        <li><a href="order-tracking.html" class="hover:text-accent-primary transition">Track Order</a></li>
                        <li><a href="#" class="hover:text-accent-primary transition">Shipping & Returns</a></li>
                        <li><a href="#" class="hover:text-accent-primary transition">Warranty Information</a></li>
                        <li><a href="#" class="hover:text-accent-primary transition">FAQ</a></li>
                    </ul>
                </div>
                
                <div>
                    <h4 class="text-sm font-bold mb-6 uppercase r text-text-secondary">Products</h4>
                    <ul class="flex flex-col gap-3 text-sm text-text-main">
                        <li><a href="products.html?category=Smartphones" class="hover:text-accent-primary transition">Smartphones</a></li>
                        <li><a href="products.html?category=Laptops & Tablets" class="hover:text-accent-primary transition">Laptops & Tablets</a></li>
                        <li><a href="products.html?category=Audio & Wearables" class="hover:text-accent-primary transition">Audio & Wearables</a></li>
                        <li><a href="products.html?category=Accessories" class="hover:text-accent-primary transition">Accessories</a></li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-border-subtle pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-text-secondary">
                <p>&copy; 2026 TechWorld. All rights reserved.</p>
                <div class="flex gap-4 opacity-50">
                    <i class="fa-brands fa-cc-visa text-xl"></i>
                    <i class="fa-brands fa-cc-mastercard text-xl"></i>
                    <i class="fa-brands fa-cc-paypal text-xl"></i>
                    <i class="fa-brands fa-cc-apple-pay text-xl"></i>
                </div>
            </div>
        </div>
    </footer>
    `;
    
    document.body.insertAdjacentHTML('beforeend', footerHtml);
}

// ---- CART & WISHLIST HELPERS ----
export function addToCart(product, quantity = 1, options = {}) {
    if (product.stockStatus === 'Out of Stock') {
        showToast('Sorry, this product is out of stock.', 'error');
        return;
    }

    const cart = getCart();
    const existingIndex = cart.findIndex(item => 
        item.id === product.id && 
        item.color === options.color
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            brand: product.brand,
            price: product.price,
            image: product.image,
            quantity: quantity,
            color: options.color || product.colors[0],
            stock: product.stock
        });
    }

    saveCart(cart);
    showToast('Product added to cart!', 'success');
}

export function toggleWishlist(product) {
    const wishlist = getWishlist();
    const index = wishlist.findIndex(item => item.id === product.id);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        saveWishlist(wishlist);
        showToast('Removed from wishlist', 'success');
        return false;
    } else {
        wishlist.push(product);
        saveWishlist(wishlist);
        showToast('Added to wishlist', 'success');
        return true;
    }
}

export function addToCompare(product) {
    const list = getCompareList();
    if (list.findIndex(p => p.id === product.id) > -1) {
        showToast('Product already in compare list', 'info');
        return;
    }
    
    if (list.length >= 4) {
        showToast('You can compare up to 4 products at a time', 'error');
        return;
    }
    
    list.push(product);
    saveCompareList(list);
    showToast('Added to compare', 'success');
}

export function createProductCard(product) {
    const isWishlisted = getWishlist().some(item => item.id === product.id);
    
    // Create card element
    const card = document.createElement('div');
    card.className = 'bg-card-bg rounded-2xl border border-border-subtle overflow-hidden transition-all duration-300 group flex flex-col h-full hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(37,99,235,0.15)] hover:border-accent-primary/50 relative';
    card.dataset.id = product.id;
    
    card.innerHTML = `
        <div class="relative overflow-hidden pt-[100%] bg-primary-bg p-6">
            ${product.discount > 0 ? `<div class="absolute top-4 left-4 bg-accent-primary text-primary-bg text-xs font-bold px-2.5 py-1 rounded-full uppercase r z-10 shadow-[0_0_15px_rgba(37,99,235,0.5)]">-${product.discount}%</div>` : ''}
            <button class="wishlist-btn absolute top-4 right-4 w-9 h-9 rounded-full bg-secondary-bg/80 backdrop-blur border border-border-subtle flex items-center justify-center text-text-secondary hover:text-accent-primary hover:border-accent-primary transition-all z-10">
                <i class="${isWishlisted ? 'fa-solid text-accent-primary drop-shadow-[0_0_5px_rgba(37,99,235,0.5)]' : 'fa-regular'} fa-heart"></i>
            </button>
            <a href="product-details.html?id=${product.id}" class="absolute inset-0 p-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <img src="${product.image}" alt="${product.name}" class="max-w-full max-h-full object-contain drop-shadow-xl filter contrast-125">
            </a>
            
            <div class="absolute inset-x-0 bottom-0 bg-card-bg/90 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-transform duration-300 flex justify-center gap-3 py-4 border-t border-border-subtle z-10 px-4">
                <button class="compare-btn w-11 h-11 rounded-full bg-secondary-bg border border-border-subtle flex items-center justify-center text-text-main hover:bg-accent-primary hover:text-primary-bg hover:border-accent-primary transition-all tooltip-trigger shadow-lg" title="Compare">
                    <i class="fa-solid fa-code-compare"></i>
                </button>
                <button class="add-cart-btn flex-1 bg-text-main text-primary-bg rounded-full font-bold hover:bg-accent-primary hover:shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-all flex items-center justify-center gap-2 ${product.stockStatus === 'Out of Stock' ? 'opacity-50 cursor-not-allowed' : ''}">
                    <i class="fa-solid fa-cart-plus"></i> Add to Cart
                </button>
            </div>
        </div>
        
        <div class="p-6 flex flex-col flex-1 bg-gradient-to-b from-transparent to-secondary-bg/30">
            <div class="text-lg text-text-secondary font-bold  uppercase mb-2">${product.brand}</div>
            <h3 class="text-2xl font-semibold text-text-main mb-3 line-clamp-2 group-hover:text-accent-primary transition-colors leading-snug">
                <a href="product-details.html?id=${product.id}">${product.name}</a>
            </h3>
            
            <div class="flex items-center gap-1.5 text-xs text-accent-primary mb-5 opacity-90">
                <i class="fa-solid fa-star drop-shadow-[0_0_2px_rgba(37,99,235,0.8)]"></i>
                <span class="text-text-main font-semibold ml-0.5">${product.rating}</span>
                <span class="text-text-secondary">(${product.reviewCount})</span>
            </div>
            
            <div class="mt-auto pt-4 border-t border-border-subtle flex justify-between items-end">
                <div>
                    <div class="text-4xl font-bold text-text-main ">${formatPrice(product.price)}</div>
                    ${product.oldPrice > product.price ? `<div class="text-lg text-text-secondary line-through mt-0.5">${formatPrice(product.oldPrice)}</div>` : ''}
                </div>
            </div>
        </div>
    `;

    // Add event listeners
    const wishlistBtn = card.querySelector('.wishlist-btn');
    wishlistBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const icon = wishlistBtn.querySelector('i');
        if (toggleWishlist(product)) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid', 'text-accent-primary', 'drop-shadow-[0_0_5px_rgba(37,99,235,0.5)]');
        } else {
            icon.classList.remove('fa-solid', 'text-accent-primary', 'drop-shadow-[0_0_5px_rgba(37,99,235,0.5)]');
            icon.classList.add('fa-regular');
        }
    });

    const compareBtn = card.querySelector('.compare-btn');
    compareBtn.addEventListener('click', (e) => {
        e.preventDefault();
        addToCompare(product);
    });

    const cartBtn = card.querySelector('.add-cart-btn');
    if (product.stockStatus !== 'Out of Stock') {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            addToCart(product);
        });
    }

    return card;
}

// ---- APP INIT ----
export function initApp() {
    renderHeader();
    renderFooter();
    updateCartBadges();
    updateWishlistBadges();
    updateUserNav();
}
