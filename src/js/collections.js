// Product data for different collections
const productData = {
    newArrivals: [
        {
            id: 'NA001',
            name: 'MS20003',
            price: 59.99,
            images: ['img/1-1.JPG', 'img/1-2.JPG'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'newArrivals'
        },
        {
            id: 'NA002',
            name: 'OSM200630',
            price: 59.99,
            images: ['img/1-3.JPG', 'img/1-4.JPG'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'newArrivals'
        },
        {
            id: 'NA003',
            name: 'OSM200648',
            price: 59.99,
            images: ['img/1-5.JPG', 'img/1-6.JPG'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'newArrivals'
        },
        {
            id: 'NA004',
            name: 'OSM200703',
            price: 79.99,
            images: ['img/1-7.JPG', 'img/1-8.JPG'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'newArrivals'
        },
        {
            id: 'NA005',
            name: 'OSM200706',
            price: 59.99,
            images: ['img/1-9.JPG', 'img/1-10.JPG'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'newArrivals'
        },
        {
            id: 'NA006',
            name: 'OSM200709',
            price: 59.99,
            images: ['img/1-11.JPG', 'img/1-12.JPG'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'newArrivals'
        },
        {
            id: 'NA007',
            name: 'OSM200710',
            price: 59.99,
            images: ['img/1-13.JPG', 'img/1-14.JPG'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'newArrivals'
        },
        {
            id: 'NA008',
            name: 'R16M163J1',
            price: 59.99,
            images: ['img/1-15.JPG', 'img/1-16.JPG'],
            colors: ['#000000', '#3d85c6', '#b45f06'],
            category: 'newArrivals'
        },
    ],
    classic: [
        {
            id: 'CL001',
            name: 'OSA200470',
            price: 79.99,
            images: ['img/2-1.JPG', 'img/2-2.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        { 
            id: 'CL002',
            name: 'OSA200472',
            price: 79.99,
            images: ['img/2-3.JPG', 'img/2-4.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {   
            id: 'CL003',
            name: 'OSM200663',
            price: 59.99,
            images: ['img/2-5.JPG', 'img/2-6.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {
            id: 'CL004',
            name: 'OSM200704',
            price: 59.99,
            images: ['img/2-7.JPG', 'img/2-8.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        }, 
        {
            id: 'CL005',
            name: 'OSM200705',
            price: 59.99,
            images: ['img/2-9.JPG', 'img/2-10.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {
            id: 'CL006',
            name: 'OSM200708',
            price: 59.99,
            images: ['img/2-11.JPG', 'img/2-12.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {
            id: 'CL007',
            name: 'OSM200713',
            price: 59.99,
            images: ['img/2-13.JPG', 'img/2-14.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {
            id: 'CL008',
            name: 'osm200715',
            price: 79.99,
            images: ['img/2-15.JPG', 'img/2-16.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {
            id: 'CL009',
            name: 'OSM208041A1',
            price: 59.99,
            images: ['img/2-17.JPG', 'img/2-18.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {
            id: 'CL010',
            name: 'OSM208120',
            price: 59.99,
            images: ['img/2-19.JPG', 'img/2-20.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {
            id: 'CL011',
            name: 'OSM208120',
            price: 59.99,
            images: ['img/2-21.JPG', 'img/2-22.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },
        {
            id: 'CL012',
            name: 'OSM208211A1',
            price: 59.99,
            images: ['img/2-23.JPG', 'img/2-24.JPG'],
            colors: ['#000000', '#6d351a'],
            category: 'classic'
        },  
    ],
    springSummer: [
        {
            id: 'SS001',
            name: 'OSM200648',
            price: 59.99,
            images: ['img/3-1.JPG', 'img/3-2.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS002',
            name: 'OSA200472',
            price: 79.99,
            images: ['img/3-3.JPG', 'img/3-4.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS003',
            name: 'OSM200630',
            price: 59.99,
            images: ['img/3-5.JPG', 'img/3-6.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS004',
            name: 'OSM200708',
            price: 59.99,
            images: ['img/3-7.JPG', 'img/3-8.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS005',
            name: 'OSM200709',
            price: 59.99,
            images: ['img/3-9.JPG', 'img/3-10.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS006',
            name: 'OSM200710',
            price: 59.99,
            images: ['img/3-11.JPG', 'img/3-12.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS007',
            name: 'OSM200713',
            price: 59.99,
            images: ['img/3-13.JPG', 'img/3-14.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS008',
            name: 'OSM208120',
            price: 59.99,
            images: ['img/3-15.JPG', 'img/3-16.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS009',
            name: 'R16M163J1',
            price: 59.99,
            images: ['img/3-17.JPG', 'img/3-18.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },
        {
            id: 'SS010',
            name: 'MS20003',
            price: 59.99,
            images: ['img/3-19.JPG', 'img/3-20.JPG'],
            colors: ['#f6b26b', '#000000'],
            category: 'springSummer'
        },// Add more products...
    ],
    fallWinter: [
        {
            id: 'FW001',
            name: 'OSA200470',
            price: 79.99,
            images: ['img/4-1.JPG', 'img/4-2.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW002',
            name: 'OSM200663',
            price: 59.99,
            images: ['img/4-3.JPG', 'img/4-4.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW003',
            name: 'OSM200703',
            price: 79.99,
            images: ['img/4-5.JPG', 'img/4-6.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW004',
            name: 'OSM200704',
            price: 59.99,
            images: ['img/4-7.JPG', 'img/4-8.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW005',
            name: 'OSM200705',
            price: 59.99,
            images: ['img/4-9.JPG', 'img/4-10.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW006',
            name: 'OSM200706',
            price: 59.99,
            images: ['img/4-11.JPG', 'img/4-12.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW007',
            name: 'OSM200715',
            price: 59.99,
            images: ['img/4-13.JPG', 'img/4-14.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW008',
            name: 'OSM208041A1',
            price: 59.99,
            images: ['img/4-15.JPG', 'img/4-16.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW009',
            name: 'OSM208121',
            price: 59.99,
            images: ['img/4-17.JPG', 'img/4-18.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },
        {
            id: 'FW010',
            name: 'OSM208211A1',
            price: 59.99,
            images: ['img/4-19.JPG', 'img/4-20.JPG'],
            colors: ['#000000', '#6aa84f'],
            category: 'fallWinter'
        },// Add more products...
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