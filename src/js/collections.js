// Product data for different collections
const productData = {
    newArrivals: [
        {
            id: 'NA001',
            name: 'Modern Aviator',
            price: 89.00,
            images: ['img/1-1.jpg', 'img/1-2.jpg'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'Aviator'
        },
        {
            id: 'NA002',
            name: 'Modern Aviator',
            price: 89.00,
            images: ['img/1-1.jpg', 'img/1-2.jpg'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'Aviator'
        },
        {
            id: 'NA003',
            name: 'Modern Aviator',
            price: 89.00,
            images: ['img/1-1.jpg', 'img/1-2.jpg'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'Aviator'
        },
        {
            id: 'NA004',
            name: 'Modern Aviator',
            price: 89.00,
            images: ['img/1-1.jpg', 'img/1-2.jpg'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'Aviator'
        },
        {
            id: 'NA005',
            name: 'Modern Aviator',
            price: 89.00,
            images: ['img/1-1.jpg', 'img/1-2.jpg'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'Aviator'
        },
        {
            id: 'NA006',
            name: 'Modern Aviator',
            price: 89.00,
            images: ['img/1-1.jpg', 'img/1-2.jpg'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'Aviator'
        },
        {
            id: 'NA006',
            name: 'Modern Aviator',
            price: 89.00,
            images: ['img/1-3.jpg', 'img/1-4.jpg'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'Aviator'
        },
    ],
    classic: [
        {
            id: 'CL001',
            name: 'Classic Wayfarer',
            price: 79.00,
            images: ['img/2-1.jpg', 'img/2-2.jpg'],
            colors: ['#000000', '#6d351a'],
            category: 'Wayfarer'
        },
        { 
            id: 'CL002',
            name: 'Classic Wayfarer',
            price: 79.00,
            images: ['img/2-1.jpg', 'img/2-2.jpg'],
            colors: ['#000000', '#6d351a'],
            category: 'Wayfarer'
        },
        {   
            id: 'CL003',
            name: 'Classic Wayfarer',
            price: 79.00,
            images: ['img/2-1.jpg', 'img/2-2.jpg'],
            colors: ['#000000', '#6d351a'],
            category: 'Wayfarer'
        },
        {
            id: 'CL004',
            name: 'Classic Wayfarer',
            price: 79.00,
            images: ['img/2-1.jpg', 'img/2-2.jpg'],
            colors: ['#000000', '#6d351a'],
            category: 'Wayfarer'
        }   
    ],
    springSummer: [
        {
            id: 'SS001',
            name: 'OSM200648',
            price: 59.99,
            images: ['img/3-1.jpg', 'img/3-2.jpg'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS002',
            name: 'OSA200472',
            price: 79.99,
            images: ['img/3-3.jpg', 'img/3-4.jpg'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS003',
            name: 'OSM200630',
            price: 59.99,
            images: ['img/3-5.jpg', 'img/3-6.jpg'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS004',
            name: 'OSM200708',
            price: 59.99,
            images: ['img/3-7.jpg', 'img/3-8.jpg'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS005',
            name: 'OSM200709',
            price: 59.99,
            images: ['img/3-9.jpg', 'img/3-10.jpg'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS006',
            name: 'OSM200710',
            price: 59.99,
            images: ['img/3-11.jpg', 'img/3-12.jpg'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS007',
            name: 'OSM200713',
            price: 59.99,
            images: ['img/3-13.jpg', 'img/3-14.jpg'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS008',
            name: 'OSM208120',
            price: 59.99,
            images: ['img/3-15.jpg', 'img/3-16.jpg'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },// Add more products...
    ],
    fallWinter: [
        {
            id: 'FW001',
            name: 'Winter Classic',
            price: 89.00,
            images: ['img/4-1.jpg', 'img/4-2.jpg'],
            colors: ['#000000', '#6aa84f'],
            category: 'Oversized'
        },
        // Add more products...
    ]
};

// Initialize Swiper for product cards
function initProductSwiper(container) {
    return new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: false,
        watchSlidesProgress: true,
        preventInteractionOnTransition: true,
        speed: 300,
        pagination: {
            el: container.querySelector('.swiper-pagination'),
            clickable: true
        },
        navigation: {
            nextEl: container.querySelector('.btn-next'),
            prevEl: container.querySelector('.btn-prev')
        },
        on: {
            init: function() {
                // 确保初始化时不会触发重排
                container.style.opacity = '0';
                setTimeout(() => {
                    container.style.opacity = '1';
                }, 50);
            }
        }
    });
}

// Create product card HTML
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image-container">
                <div class="swiper swiper-product">
                    <div class="swiper-wrapper">
                        ${product.images.map(img => `
                            <div class="swiper-slide">
                                <a href="#" class="component-link swiper-item">
                                    <img src="${img}" alt="${product.name}" class="component-image" loading="lazy">
                                </a>
                            </div>
                        `).join('')}
                    </div>
                    <div class="swiper-pagination swiper-pagination-bullets"></div>
                    <button class="btn-product-navigation btn-prev">
                        <i class="fas fa-chevron-left"></i>
                    </button>
                    <button class="btn-product-navigation btn-next">
                        <i class="fas fa-chevron-right"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div>
                    <div class="product-category">${product.category}</div>
                    <h3 class="product-title"><a href="#">${product.name}</a></h3>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                </div>
                <div class="product-colors">
                    ${product.colors.map(color => `
                        <div class="color-option" style="background-color: ${color}"></div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

// Load products for the current collection
function loadProducts() {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    // Determine which collection to load based on the current page
    let collection;
    if (window.location.pathname.includes('new-arrivals')) {
        collection = productData.newArrivals;
    } else if (window.location.pathname.includes('classic-collection')) {
        collection = productData.classic;
    } else if (window.location.pathname.includes('spring-summer')) {
        collection = productData.springSummer;
    } else if (window.location.pathname.includes('fall-winter')) {
        collection = productData.fallWinter;
    }

    let html = '';
    const productsPerRow = 4; // Number of products per row (excluding empty cell)

    // Process products row by row
    for (let i = 0; i < collection.length; i += productsPerRow) {
        // Add empty cell for this row
        // html += '<div class="product-card empty-cell"></div>';
        
        // Add products for this row
        const rowProducts = collection.slice(i, i + productsPerRow);
        html += rowProducts.map(product => createProductCard(product)).join('');
    }

    // Render all content
    productGrid.innerHTML = html;

    // Initialize Swiper for each product card
    document.querySelectorAll('.swiper-product').forEach(swiperContainer => {
        initProductSwiper(swiperContainer);
    });
}

// Handle sort functionality
function initSorting() {
    const sortDropdown = document.querySelector('.sort-dropdown');
    const sortToggle = document.querySelector('.collection-sort');
    
    if (!sortDropdown || !sortToggle) return;

    sortToggle.addEventListener('click', () => {
        sortDropdown.style.display = sortDropdown.style.display === 'none' ? 'block' : 'none';
    });

    document.querySelectorAll('.sort-option').forEach(option => {
        option.addEventListener('change', (e) => {
            const value = e.target.value;
            // Update sort text
            document.querySelector('.collection-sort span').textContent = `Sort by: ${e.target.nextElementSibling.textContent}`;
            // Update active state
            document.querySelectorAll('.sort-option').forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            // Close dropdown
            sortDropdown.style.display = 'none';
            // Sort products (implement sorting logic here)
            sortProducts(value);
        });
    });
}

// Sort products based on selected option
function sortProducts(sortBy) {
    const productGrid = document.querySelector('.product-grid');
    if (!productGrid) return;

    const products = Array.from(productGrid.children);
    products.sort((a, b) => {
        const priceA = parseFloat(a.querySelector('.product-price').textContent.replace('€', ''));
        const priceB = parseFloat(b.querySelector('.product-price').textContent.replace('€', ''));
        
        switch (sortBy) {
            case 'price-high':
                return priceB - priceA;
            case 'price-low':
                return priceA - priceB;
            case 'newest':
            default:
                return 0; // Keep original order
        }
    });

    // Re-append sorted products
    products.forEach(product => productGrid.appendChild(product));
}

// Initialize everything when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    initSorting();
}); 