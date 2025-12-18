// Natural and Curative Cure - Main JavaScript
// Comprehensive functionality for herbal medicine e-commerce

// Product Database
const products = [
    {
        id: 1,
        name: "Turmeric Curcumin Extract",
        price: 29.99,
        originalPrice: 39.99,
        image: "resources/turmeric.jpg",
        category: "Anti-Inflammatory",
        condition: ["Lupus", "Arthritis", "Joint Pain"],
        description: "Premium curcumin extract with 95% curcuminoids. Powerful anti-inflammatory properties for joint health and autoimmune support.",
        benefits: ["Reduces inflammation", "Supports joint health", "Boosts immunity", "Antioxidant protection"],
        usage: "Take 2 capsules daily with meals",
        stock: 15,
        soldThisWeek: 127,
        rating: 4.8,
        reviews: 324
    },
    {
        id: 2,
        name: "Korean Ginseng Root",
        price: 34.99,
        originalPrice: 44.99,
        image: "resources/ginseng.jpg",
        category: "Adaptogen",
        condition: ["Fatigue", "Stress", "Low Energy"],
        description: "Premium 6-year-old Korean ginseng root. Traditional adaptogen for energy, stress resistance, and mental clarity.",
        benefits: ["Increases energy", "Reduces stress", "Enhances focus", "Supports immunity"],
        usage: "Take 1-2 capsules daily, preferably in the morning",
        stock: 8,
        soldThisWeek: 89,
        rating: 4.7,
        reviews: 256
    },
    {
        id: 3,
        name: "Echinacea Immune Support",
        price: 24.99,
        originalPrice: 32.99,
        image: "resources/echinacea.jpg",
        category: "Immune Support",
        condition: ["Cold", "Flu", "Low Immunity"],
        description: "Organic echinacea purpurea extract. Traditional immune system booster for cold and flu prevention.",
        benefits: ["Boosts immunity", "Prevents cold & flu", "Reduces symptoms", "Antioxidant support"],
        usage: "Take 3 capsules daily during cold season",
        stock: 22,
        soldThisWeek: 156,
        rating: 4.6,
        reviews: 189
    },
    {
        id: 4,
        name: "Ginkgo Biloba Extract",
        price: 22.99,
        originalPrice: 28.99,
        image: "resources/ginkgo.jpg",
        category: "Cognitive Support",
        condition: ["Memory Loss", "Poor Circulation", "Brain Fog"],
        description: "Standardized ginkgo biloba extract for cognitive enhancement and circulation support.",
        benefits: ["Improves memory", "Enhances circulation", "Supports brain health", "Mental clarity"],
        usage: "Take 1 capsule twice daily with meals",
        stock: 18,
        soldThisWeek: 98,
        rating: 4.5,
        reviews: 167
    },
    {
        id: 5,
        name: "Green Tea Extract",
        price: 19.99,
        originalPrice: 25.99,
        image: "resources/green-tea.jpg",
        category: "Antioxidant",
        condition: ["Weight Management", "Antioxidant Support", "Metabolism"],
        description: "High-potency green tea extract with 50% EGCG. Powerful antioxidant for weight management and cellular protection.",
        benefits: ["Boosts metabolism", "Antioxidant protection", "Supports weight loss", "Energy boost"],
        usage: "Take 1-2 capsules daily, avoid evening use",
        stock: 31,
        soldThisWeek: 203,
        rating: 4.4,
        reviews: 412
    },
    {
        id: 6,
        name: "Organic Ginger Root",
        price: 16.99,
        originalPrice: 21.99,
        image: "resources/ginger.jpg",
        category: "Digestive Support",
        condition: ["Nausea", "Digestive Issues", "Inflammation"],
        description: "Organic ginger root powder. Traditional remedy for digestive health and anti-inflammatory support.",
        benefits: ["Relieves nausea", "Supports digestion", "Reduces inflammation", "Immune support"],
        usage: "Take 1-3 capsules daily with meals",
        stock: 27,
        soldThisWeek: 134,
        rating: 4.7,
        reviews: 298
    },
    {
        id: 7,
        name: "Cinnamon Bark Extract",
        price: 18.99,
        originalPrice: 24.99,
        image: "resources/cinnamon.jpg",
        category: "Blood Sugar Support",
        condition: ["Diabetes", "Blood Sugar", "Metabolism"],
        description: "Premium cinnamon bark extract for blood sugar regulation and metabolic support.",
        benefits: ["Regulates blood sugar", "Supports metabolism", "Antioxidant properties", "Heart health"],
        usage: "Take 1-2 capsules daily with meals",
        stock: 14,
        soldThisWeek: 87,
        rating: 4.3,
        reviews: 145
    },
    {
        id: 8,
        name: "Rosemary Leaf Extract",
        price: 17.99,
        originalPrice: 22.99,
        image: "resources/rosemary.jpg",
        category: "Cognitive Support",
        condition: ["Memory", "Concentration", "Mental Clarity"],
        description: "Concentrated rosemary extract for cognitive enhancement and antioxidant protection.",
        benefits: ["Enhances memory", "Improves focus", "Antioxidant support", "Mental clarity"],
        usage: "Take 1 capsule daily with breakfast",
        stock: 19,
        soldThisWeek: 76,
        rating: 4.2,
        reviews: 123
    },
    {
        id: 9,
        name: "Lavender Flower Extract",
        price: 20.99,
        originalPrice: 26.99,
        image: "resources/lavender.jpg",
        category: "Stress Relief",
        condition: ["Anxiety", "Insomnia", "Stress"],
        description: "Organic lavender extract for natural stress relief and sleep support.",
        benefits: ["Reduces anxiety", "Promotes sleep", "Stress relief", "Calming effect"],
        usage: "Take 1-2 capsules daily, preferably evening",
        stock: 25,
        soldThisWeek: 112,
        rating: 4.6,
        reviews: 234
    },
    {
        id: 10,
        name: "Aged Garlic Extract",
        price: 23.99,
        originalPrice: 29.99,
        image: "resources/garlic.jpg",
        category: "Cardiovascular Support",
        condition: ["High Blood Pressure", "Heart Health", "Cholesterol"],
        description: "Odorless aged garlic extract for cardiovascular health and immune support.",
        benefits: ["Supports heart health", "Regulates blood pressure", "Boosts immunity", "Antioxidant protection"],
        usage: "Take 2 capsules daily with meals",
        stock: 12,
        soldThisWeek: 94,
        rating: 4.5,
        reviews: 178
    }
];

// Shopping Cart Management
class ShoppingCart {
    constructor() {
        this.items = JSON.parse(localStorage.getItem('cart')) || [];
        this.updateCartDisplay();
    }

    addItem(productId, quantity = 1) {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const existingItem = this.items.find(item => item.id === productId);
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({
                ...product,
                quantity: quantity
            });
        }

        this.saveCart();
        this.updateCartDisplay();
        this.showAddToCartAnimation();
        this.showSuccessMessage(`${product.name} added to cart!`);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
        this.saveCart();
        this.updateCartDisplay();
    }

    updateQuantity(productId, quantity) {
        const item = this.items.find(item => item.id === productId);
        if (item) {
            item.quantity = Math.max(0, quantity);
            if (item.quantity === 0) {
                this.removeItem(productId);
            } else {
                this.saveCart();
                this.updateCartDisplay();
            }
        }
    }

    getTotal() {
        return this.items.reduce((total, item) => total + (item.price * item.quantity), 0);
    }

    getItemCount() {
        return this.items.reduce((count, item) => count + item.quantity, 0);
    }

    saveCart() {
        localStorage.setItem('cart', JSON.stringify(this.items));
    }

    updateCartDisplay() {
        const cartCount = document.getElementById('cart-count');
        const cartTotal = document.getElementById('cart-total');
        
        if (cartCount) {
            const count = this.getItemCount();
            cartCount.textContent = count;
            cartCount.style.display = count > 0 ? 'block' : 'none';
        }

        if (cartTotal) {
            cartTotal.textContent = `$${this.getTotal().toFixed(2)}`;
        }

        this.updateCartPanel();
    }

    updateCartPanel() {
        const cartItems = document.getElementById('cart-items');
        if (!cartItems) return;

        if (this.items.length === 0) {
            cartItems.innerHTML = '<p class="text-gray-500 text-center py-8">Your cart is empty</p>';
            return;
        }

        cartItems.innerHTML = this.items.map(item => `
            <div class="flex items-center justify-between p-4 border-b border-gray-200">
                <div class="flex items-center space-x-3">
                    <img src="${item.image}" alt="${item.name}" class="w-12 h-12 object-cover rounded">
                    <div>
                        <h4 class="font-medium text-gray-900">${item.name}</h4>
                        <p class="text-sm text-gray-500">$${item.price}</p>
                    </div>
                </div>
                <div class="flex items-center space-x-2">
                    <button onclick="cart.updateQuantity(${item.id}, ${item.quantity - 1})" 
                            class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                        <span class="text-sm">−</span>
                    </button>
                    <span class="w-8 text-center">${item.quantity}</span>
                    <button onclick="cart.updateQuantity(${item.id}, ${item.quantity + 1})" 
                            class="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300">
                        <span class="text-sm">+</span>
                    </button>
                    <button onclick="cart.removeItem(${item.id})" 
                            class="ml-2 text-red-500 hover:text-red-700">
                        <span class="text-sm">×</span>
                    </button>
                </div>
            </div>
        `).join('');
    }

    showAddToCartAnimation() {
        const cartIcon = document.getElementById('cart-icon');
        if (cartIcon) {
            cartIcon.classList.add('animate-bounce');
            setTimeout(() => cartIcon.classList.remove('animate-bounce'), 1000);
        }
    }

    showSuccessMessage(message) {
        const notification = document.createElement('div');
        notification.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-x-full transition-transform duration-300';
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.classList.remove('translate-x-full');
        }, 100);

        setTimeout(() => {
            notification.classList.add('translate-x-full');
            setTimeout(() => document.body.removeChild(notification), 300);
        }, 3000);
    }

    checkout() {
        if (this.items.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        const orderSummary = this.generateOrderSummary();
        const whatsappMessage = encodeURIComponent(orderSummary);
        const whatsappUrl = `https://wa.me/1234567890?text=${whatsappMessage}`;
        
        window.open(whatsappUrl, '_blank');
    }

    generateOrderSummary() {
        const items = this.items.map(item => 
            `• ${item.name} - $${item.price} x ${item.quantity} = $${(item.price * item.quantity).toFixed(2)}`
        ).join('\n');

        return `🌿 NATURAL & CURATIVE CURE ORDER 🌿\n\n${items}\n\nTotal: $${this.getTotal().toFixed(2)}\n\nPlease confirm my order and provide payment details.`;
    }
}

// Initialize cart
const cart = new ShoppingCart();

// Product Filtering and Search
class ProductFilter {
    constructor() {
        this.currentFilters = {
            search: '',
            category: 'all',
            condition: 'all',
            priceRange: 'all'
        };
    }

    filterProducts() {
        let filtered = products;

        // Search filter
        if (this.currentFilters.search) {
            const searchTerm = this.currentFilters.search.toLowerCase();
            filtered = filtered.filter(product =>
                product.name.toLowerCase().includes(searchTerm) ||
                product.description.toLowerCase().includes(searchTerm) ||
                product.condition.some(c => c.toLowerCase().includes(searchTerm))
            );
        }

        // Category filter
        if (this.currentFilters.category !== 'all') {
            filtered = filtered.filter(product => 
                product.category === this.currentFilters.category
            );
        }

        // Condition filter
        if (this.currentFilters.condition !== 'all') {
            filtered = filtered.filter(product => 
                product.condition.includes(this.currentFilters.condition)
            );
        }

        // Price range filter
        if (this.currentFilters.priceRange !== 'all') {
            const [min, max] = this.currentFilters.priceRange.split('-').map(p => parseFloat(p));
            filtered = filtered.filter(product => 
                product.price >= min && (max ? product.price <= max : true)
            );
        }

        return filtered;
    }

    updateFilter(filterType, value) {
        this.currentFilters[filterType] = value;
        this.renderProducts();
    }

    renderProducts() {
        const filteredProducts = this.filterProducts();
        const container = document.getElementById('products-grid');
        
        if (!container) return;

        if (filteredProducts.length === 0) {
            container.innerHTML = `
                <div class="col-span-full text-center py-12">
                    <p class="text-gray-500 text-lg">No products found matching your criteria.</p>
                    <button onclick="productFilter.clearFilters()" class="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700">
                        Clear Filters
                    </button>
                </div>
            `;
            return;
        }

        container.innerHTML = filteredProducts.map(product => this.createProductCard(product)).join('');
    }

    createProductCard(product) {
        const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
        
        return `
            <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 product-card" data-product-id="${product.id}">
                <div class="relative">
                    <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                    <div class="absolute top-2 left-2">
                        <span class="bg-red-500 text-white px-2 py-1 rounded text-sm font-bold">
                            ${discount}% OFF
                        </span>
                    </div>
                    <div class="absolute top-2 right-2">
                        <span class="bg-green-500 text-white px-2 py-1 rounded text-sm">
                            ${product.stock} left
                        </span>
                    </div>
                    <div class="absolute bottom-2 right-2">
                        <span class="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                            ${product.soldThisWeek} sold
                        </span>
                    </div>
                </div>
                <div class="p-4">
                    <h3 class="font-bold text-lg mb-2">${product.name}</h3>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
                    <div class="flex items-center mb-2">
                        <div class="flex text-yellow-400">
                            ${this.generateStars(product.rating)}
                        </div>
                        <span class="text-sm text-gray-500 ml-2">(${product.reviews} reviews)</span>
                    </div>
                    <div class="flex items-center justify-between mb-3">
                        <div>
                            <span class="text-2xl font-bold text-green-600">$${product.price}</span>
                            <span class="text-sm text-gray-500 line-through ml-2">$${product.originalPrice}</span>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <button onclick="cart.addItem(${product.id})" 
                                class="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors duration-200">
                            Add to Cart
                        </button>
                        <button onclick="showProductDetails(${product.id})" 
                                class="bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200">
                            Details
                        </button>
                    </div>
                </div>
            </div>
        `;
    }

    generateStars(rating) {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        let stars = '';

        for (let i = 0; i < fullStars; i++) {
            stars += '<span class="text-yellow-400">★</span>';
        }

        if (hasHalfStar) {
            stars += '<span class="text-yellow-400">☆</span>';
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars += '<span class="text-gray-300">★</span>';
        }

        return stars;
    }

    clearFilters() {
        this.currentFilters = {
            search: '',
            category: 'all',
            condition: 'all',
            priceRange: 'all'
        };
        
        // Reset form inputs
        const searchInput = document.getElementById('search-input');
        const categorySelect = document.getElementById('category-select');
        const conditionSelect = document.getElementById('condition-select');
        const priceSelect = document.getElementById('price-select');

        if (searchInput) searchInput.value = '';
        if (categorySelect) categorySelect.value = 'all';
        if (conditionSelect) conditionSelect.value = 'all';
        if (priceSelect) priceSelect.value = 'all';

        this.renderProducts();
    }
}

// Initialize product filter
const productFilter = new ProductFilter();

// Product Details Modal
function showProductDetails(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    const modalContent = document.getElementById('modal-content');

    modalContent.innerHTML = `
        <div class="flex flex-col md:flex-row gap-6">
            <div class="md:w-1/2">
                <img src="${product.image}" alt="${product.name}" class="w-full h-64 md:h-96 object-cover rounded-lg">
            </div>
            <div class="md:w-1/2">
                <h2 class="text-2xl font-bold mb-2">${product.name}</h2>
                <div class="flex items-center mb-4">
                    <div class="flex text-yellow-400">
                        ${productFilter.generateStars(product.rating)}
                    </div>
                    <span class="text-sm text-gray-500 ml-2">(${product.reviews} reviews)</span>
                </div>
                <div class="mb-4">
                    <span class="text-3xl font-bold text-green-600">$${product.price}</span>
                    <span class="text-lg text-gray-500 line-through ml-2">$${product.originalPrice}</span>
                </div>
                <p class="text-gray-600 mb-4">${product.description}</p>
                
                <div class="mb-4">
                    <h3 class="font-bold mb-2">Benefits:</h3>
                    <ul class="list-disc list-inside text-gray-600">
                        ${product.benefits.map(benefit => `<li>${benefit}</li>`).join('')}
                    </ul>
                </div>

                <div class="mb-4">
                    <h3 class="font-bold mb-2">Usage:</h3>
                    <p class="text-gray-600">${product.usage}</p>
                </div>

                <div class="mb-6">
                    <h3 class="font-bold mb-2">Treats:</h3>
                    <div class="flex flex-wrap gap-2">
                        ${product.condition.map(condition => 
                            `<span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">${condition}</span>`
                        ).join('')}
                    </div>
                </div>

                <div class="flex space-x-4">
                    <button onclick="cart.addItem(${product.id})" 
                            class="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors duration-200">
                        Add to Cart
                    </button>
                    <button onclick="closeProductModal()" 
                            class="bg-gray-200 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-200">
                        Close
                    </button>
                </div>
            </div>
        </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

// Animation and Effects
function initAnimations() {
    // Typewriter effect for hero text
    if (document.getElementById('hero-text')) {
        new Typed('#hero-text', {
            strings: ['Ancient Wisdom, Modern Healing', 'Natural Remedies That Work', 'Your Health, Our Mission'],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 2000,
            loop: true
        });
    }

    // Counter animations
    animateCounters();

    // Scroll animations
    initScrollAnimations();
}

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000;
        const increment = target / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            counter.textContent = Math.floor(current).toLocaleString();
        }, 16);
    });
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in-up');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
    });
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    initAnimations();

    // Initialize product grid
    if (document.getElementById('products-grid')) {
        productFilter.renderProducts();
    }

    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            productFilter.updateFilter('search', e.target.value);
        });
    }

    // Filter dropdowns
    const filterSelects = ['category-select', 'condition-select', 'price-select'];
    filterSelects.forEach(selectId => {
        const select = document.getElementById(selectId);
        if (select) {
            select.addEventListener('change', (e) => {
                const filterType = selectId.replace('-select', '');
                productFilter.updateFilter(filterType, e.target.value);
            });
        }
    });

    // Cart panel toggle
    const cartToggle = document.getElementById('cart-toggle');
    const cartPanel = document.getElementById('cart-panel');
    
    if (cartToggle && cartPanel) {
        cartToggle.addEventListener('click', () => {
            cartPanel.classList.toggle('translate-x-full');
        });
    }

    // Checkout button
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            cart.checkout();
        });
    }

    // Modal close events
    const modal = document.getElementById('product-modal');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeProductModal();
            }
        });
    }

    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
});

// Utility Functions
function formatPrice(price) {
    return `$${price.toFixed(2)}`;
}

function generateWhatsAppMessage(productName, price) {
    return `Hello, I'm interested in ${productName} ($${price}). Can you provide more information and payment details?`;
}

// Export for global access
window.cart = cart;
window.productFilter = productFilter;
window.showProductDetails = showProductDetails;
window.closeProductModal = closeProductModal;