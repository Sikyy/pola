/**
 * Mobile interactions for POLA website
 * Handles mobile menu, responsive behaviors, and touch interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('Mobile JS initialized');
    
    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    const menuClose = document.querySelector('.menu-close');
    const header = document.querySelector('header');
    
    console.log('Mobile toggle found:', !!mobileToggle);
    console.log('Mobile menu found:', !!mobileMenu);
    
    // Initialize mobile menu with main navigation
    initMobileMenu();
    
    // Create pull-to-refresh element
    const pullToRefresh = document.createElement('div');
    pullToRefresh.className = 'pull-to-refresh';
    pullToRefresh.innerHTML = '<div class="pull-to-refresh-spinner"></div>';
    document.body.appendChild(pullToRefresh);
    
    // Function to initialize mobile menu with main navigation links
    function initMobileMenu() {
        console.log('Initializing mobile menu');
        if (mobileMenu) {
            const mobileNav = mobileMenu.querySelector('.mobile-nav');
            console.log('Mobile nav found:', !!mobileNav);
            if (mobileNav) {
                // 如果main-links已经存在，则不需要创建
                if (mobileNav.querySelector('.main-links')) {
                    console.log('Main links already exist');
                    return;
                }
                
                console.log('Creating main links');
                
                // Always manually add the links to ensure they appear
                const mainLinks = document.createElement('ul');
                mainLinks.className = 'main-links';
                
                // Add a title before the links
                const title = document.createElement('h3');
                title.className = 'mobile-nav-title';
                title.textContent = 'Main Navigation';
                mobileNav.appendChild(title);
                
                // Create the navigation links manually
                const pages = [
                    { href: 'new-arrivals.html', text: 'New Arrivals' },
                    { href: 'classic-collection.html', text: 'Classic Collection' },
                    { href: 'spring-summer.html', text: 'Spring/Summer 2025' },
                    { href: 'fall-winter.html', text: 'Fall/Winter 2025' }
                ];
                
                pages.forEach(page => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = page.href;
                    a.textContent = page.text;
                    
                    // Check if this is the active page
                    const currentPath = window.location.pathname;
                    console.log('Current path:', currentPath);
                    if (currentPath.includes(page.href) || 
                        (currentPath.endsWith('/') && page.href === 'index.html')) {
                        a.classList.add('active');
                    }
                    
                    li.appendChild(a);
                    mainLinks.appendChild(li);
                });
                
                // Insert the main links
                const existingList = mobileNav.querySelector('ul');
                if (existingList) {
                    mobileNav.insertBefore(mainLinks, existingList);
                } else {
                    mobileNav.appendChild(mainLinks);
                }
                console.log('Main links added to mobile menu');
            }
        }
    }
    
    // Add header shadow on scroll for mobile
    if (window.innerWidth <= 992) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 10) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
        
        // Simple pull-to-refresh implementation
        let touchStartY = 0;
        let touchEndY = 0;
        
        document.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        }, { passive: true });
        
        document.addEventListener('touchmove', function(e) {
            if (window.scrollY <= 0) {
                touchEndY = e.touches[0].clientY;
                const distance = touchEndY - touchStartY;
                
                if (distance > 50) {
                    pullToRefresh.classList.add('active');
                }
            }
        }, { passive: true });
        
        document.addEventListener('touchend', function() {
            if (pullToRefresh.classList.contains('active')) {
                pullToRefresh.classList.remove('active');
                
                // Simulate reload after a delay
                setTimeout(function() {
                    window.location.reload();
                }, 500);
            }
        });
    }
    
    // Add mobile menu toggle functionality
    if (mobileToggle) {
        console.log('Adding click event to mobile toggle');
        mobileToggle.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Mobile toggle clicked');
            
            // Ensure mobile menu exists
            if (!mobileMenu) {
                console.error('Mobile menu not found');
                // 尝试再次查找
                const mobileMenuRetry = document.querySelector('.mobile-menu');
                if (!mobileMenuRetry) {
                    console.error('Mobile menu still not found after retry');
                    return;
                } else {
                    console.log('Mobile menu found on retry');
                    mobileMenu = mobileMenuRetry;
                }
            }
            
            console.log('Showing mobile menu');
            
            // 直接设置显示
            mobileMenu.style.display = 'block';
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Handle overlay
            if (overlay) {
                overlay.classList.add('active');
            } else {
                // Create overlay if it doesn't exist
                const newOverlay = document.createElement('div');
                newOverlay.className = 'overlay';
                document.body.appendChild(newOverlay);
                setTimeout(() => {
                    newOverlay.classList.add('active');
                }, 10);
                
                // Add click event to close menu
                newOverlay.addEventListener('click', closeMobileMenu);
            }
        });
    } else {
        console.error('Mobile toggle button not found!');
    }
    
    if (menuClose) {
        menuClose.addEventListener('click', closeMobileMenu);
    }
    
    function closeMobileMenu() {
        if (!mobileMenu) return;
        
        mobileMenu.classList.remove('active');
        mobileMenu.style.display = 'none';
        document.body.style.overflow = '';
        const overlay = document.querySelector('.overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
    
    // Mobile submenu toggles
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    submenuToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const parentLi = this.closest('li');
            parentLi.classList.toggle('submenu-active');
        });
    });
    
    // Enhanced mobile product interactions
    if (window.innerWidth <= 992) {
        // Make product cards clickable
        const productCards = document.querySelectorAll('.product-card');
        productCards.forEach(card => {
            const productLink = card.querySelector('.product-title a');
            if (productLink) {
                const href = productLink.getAttribute('href');
                card.addEventListener('click', function(e) {
                    // Don't trigger if clicking on action buttons
                    if (!e.target.closest('.product-actions')) {
                        window.location.href = href;
                    }
                });
            }
        });
        
        // Optimize cart interactions for touch
        const cartBtns = document.querySelectorAll('.product-action-btn');
        cartBtns.forEach(btn => {
            btn.addEventListener('touchstart', function() {
                this.style.transform = 'scale(0.95)';
            });
            
            btn.addEventListener('touchend', function() {
                this.style.transform = '';
            });
        });
    }
    
    // Fix for iOS 100vh issue
    function setMobileHeight() {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    
    setMobileHeight();
    window.addEventListener('resize', setMobileHeight);
    
    // Handle orientation changes
    window.addEventListener('orientationchange', function() {
        setTimeout(setMobileHeight, 100);
    });
    
    // Sticky Add to Cart for Product Pages
    if (window.innerWidth <= 992) {
        // Check if we're on a product page by looking for product-single class
        const productSingle = document.querySelector('.product-single');
        
        if (productSingle) {
            // Create sticky add to cart if not exists
            if (!document.querySelector('.sticky-add-to-cart')) {
                const regularPrice = document.querySelector('.product-single .product-price');
                const addToCartBtn = document.querySelector('.product-single .add-to-cart-btn');
                
                if (regularPrice && addToCartBtn) {
                    const stickyBar = document.createElement('div');
                    stickyBar.className = 'sticky-add-to-cart';
                    stickyBar.innerHTML = `
                        <div class="product-price">${regularPrice.innerHTML}</div>
                        <button class="btn add-to-cart-btn">${addToCartBtn.innerHTML}</button>
                    `;
                    document.body.appendChild(stickyBar);
                    
                    // Show/hide sticky bar based on scroll position
                    window.addEventListener('scroll', function() {
                        const addToCartPosition = addToCartBtn.getBoundingClientRect().top;
                        
                        if (addToCartPosition < 0 || addToCartPosition > window.innerHeight) {
                            stickyBar.classList.add('visible');
                        } else {
                            stickyBar.classList.remove('visible');
                        }
                    });
                    
                    // Handle sticky add to cart click
                    const stickyAddToCartBtn = stickyBar.querySelector('.add-to-cart-btn');
                    if (stickyAddToCartBtn) {
                        stickyAddToCartBtn.addEventListener('click', function() {
                            addToCartBtn.click();
                        });
                    }
                }
            }
        }
    }
    
    // Improved mobile search experience
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const searchInput = document.querySelector('.search-input');
    
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function(e) {
            e.preventDefault();
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Focus the search input after a small delay (for animation)
            setTimeout(() => {
                if (searchInput) searchInput.focus();
            }, 300);
        });
    }
    
    if (searchClose) {
        searchClose.addEventListener('click', function() {
            searchOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
}); 