// DOM Elements
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.menu-close');
    const overlay = document.querySelector('.overlay');
    const submenuToggles = document.querySelectorAll('.submenu-toggle');
    const searchToggle = document.querySelector('.search-toggle');
    const searchOverlay = document.querySelector('.search-overlay');
    const searchClose = document.querySelector('.search-close');
    const cartToggle = document.querySelector('.cart-toggle');
    const cartSidebar = document.querySelector('.cart-sidebar');
    const cartClose = document.querySelector('.cart-close');
    //const quickViewBtns = document.querySelectorAll('.quick-view-btn');
    const quickViewModal = document.querySelector('.quick-view-modal');
    const modalClose = document.querySelector('.modal-close');
    const modalOverlay = document.querySelector('.modal-overlay');
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.querySelector('.main-image');
    const filterBtns = document.querySelectorAll('.filter-btn');
    const colorOptions = document.querySelectorAll('.color-option');
    const variantOptions = document.querySelectorAll('.variant-option');
    const quantityBtns = document.querySelectorAll('.quantity-btn');
    const quantityInput = document.querySelector('.quantity-input');
    const navItems = document.querySelectorAll('.nav-item');

    // 添加触摸设备支持
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    
    // 导航菜单交互优化
    if (isTouchDevice && navItems) {
        // 在触摸设备上，第一次点击显示子菜单，第二次点击跳转
        navItems.forEach(item => {
            const link = item.querySelector('a');
            const dropdown = item.querySelector('.dropdown-menu');
            
            if (dropdown && link) {
                link.addEventListener('click', function(e) {
                    if (!item.classList.contains('active')) {
                        e.preventDefault();
                        // 关闭其他打开的菜单
                        navItems.forEach(otherItem => {
                            if (otherItem !== item) {
                                otherItem.classList.remove('active');
                            }
                        });
                        item.classList.add('active');
                    }
                });
                
                // 点击外部关闭下拉菜单
                document.addEventListener('click', function(e) {
                    if (!item.contains(e.target)) {
                        item.classList.remove('active');
                    }
                });
            }
        });
    }

    // Mobile Menu Toggle
    if (navToggle && mobileMenu && overlay) {
        navToggle.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (menuClose && mobileMenu && overlay) {
        menuClose.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Submenu Toggle - 改进移动端子菜单交互
    if (submenuToggles) {
        submenuToggles.forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();
                
                const parent = toggle.parentElement;
                
                // 关闭其他打开的子菜单
                submenuToggles.forEach(otherToggle => {
                    if (otherToggle !== toggle) {
                        const otherParent = otherToggle.parentElement;
                        if (otherParent && otherParent.classList.contains('submenu-active')) {
                            otherParent.classList.remove('submenu-active');
                            otherToggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
                        }
                    }
                });
                
                // 切换当前子菜单
                if (parent && parent.classList.contains('submenu-active')) {
                    parent.classList.remove('submenu-active');
                    toggle.innerHTML = '<i class="fas fa-chevron-down"></i>';
                } else if (parent) {
                    parent.classList.add('submenu-active');
                    toggle.innerHTML = '<i class="fas fa-chevron-up"></i>';
                }
            });
        });
    }

    // Search Toggle
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', (e) => {
            e.preventDefault();
            searchOverlay.style.display = 'flex';
            searchOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            // 自动聚焦到搜索输入框
            setTimeout(() => {
                const searchInput = document.querySelector('.search-input');
                if (searchInput) {
                    searchInput.focus();
                }
            }, 100);
        });
    }

    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', () => {
            searchOverlay.classList.remove('active');
            setTimeout(() => {
                searchOverlay.style.display = 'none';
            }, 300); // 等待过渡效果完成
            document.body.style.overflow = '';
        });
    }

    // Cart Toggle
    if (cartToggle && cartSidebar && overlay) {
        cartToggle.addEventListener('click', (e) => {
            e.preventDefault();
            cartSidebar.classList.add('active');
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    if (cartClose && cartSidebar && overlay) {
        cartClose.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Quick View Modal
    // if (quickViewBtns && quickViewModal) {
    //     quickViewBtns.forEach(btn => {
    //         btn.addEventListener('click', (e) => {
    //             e.preventDefault();
    //             e.stopPropagation();
    //             quickViewModal.style.display = 'block';
    //             quickViewModal.classList.add('active');
    //             document.body.style.overflow = 'hidden';
    //         });
    //     });
    // }

    if (modalClose && quickViewModal) {
        modalClose.addEventListener('click', () => {
            quickViewModal.classList.remove('active');
            setTimeout(() => {
                quickViewModal.style.display = 'none';
            }, 300); // 等待过渡效果完成
            document.body.style.overflow = '';
        });
    }

    if (modalOverlay && quickViewModal) {
        modalOverlay.addEventListener('click', () => {
            quickViewModal.classList.remove('active');
            setTimeout(() => {
                quickViewModal.style.display = 'none';
            }, 300); // 等待过渡效果完成
            document.body.style.overflow = '';
        });
    }

    // Overlay Click (Close All)
    if (overlay && mobileMenu && cartSidebar) {
        overlay.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Product Gallery Thumbnails
    if (thumbnails && mainImage) {
        thumbnails.forEach(thumbnail => {
            thumbnail.addEventListener('click', () => {
                mainImage.src = thumbnail.src.replace('w=200', 'w=800');
            });
        });
    }

    // Product Filter Buttons
    if (filterBtns) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }

    // 产品卡片交互增强
    const productCards = document.querySelectorAll('.product-card');
    
    if (productCards) {
        productCards.forEach(card => {
            const mainImage = card.querySelector('.product-image');
            const hoverImage = card.querySelector('.product-image-hover');
            
            // 预加载悬停图片
            if (hoverImage) {
                const preloadImage = new Image();
                preloadImage.src = hoverImage.src;
            }
            
            // 添加触摸设备支持
            if (isTouchDevice && mainImage && hoverImage) {
                card.addEventListener('touchstart', function() {
                    mainImage.style.opacity = '0';
                    hoverImage.style.opacity = '1';
                });
                
                card.addEventListener('touchend', function() {
                    setTimeout(() => {
                        mainImage.style.opacity = '1';
                        hoverImage.style.opacity = '0';
                    }, 300);
                });
            }
        });
    }
    
    // 颜色选项交互
    if (colorOptions) {
        colorOptions.forEach(option => {
            option.addEventListener('click', () => {
                const parent = option.closest('.color-options');
                if (parent) {
                    parent.querySelectorAll('.color-option').forEach(o => o.classList.remove('selected'));
                    option.classList.add('selected');
                }
            });
        });
    }

    // Variant Options
    if (variantOptions) {
        variantOptions.forEach(option => {
            option.addEventListener('click', () => {
                const parent = option.closest('.variant-options');
                if (parent) {
                    parent.querySelectorAll('.variant-option').forEach(o => o.classList.remove('selected'));
                    option.classList.add('selected');
                }
            });
        });
    }

    // Quantity Buttons
    if (quantityBtns && quantityInput) {
        quantityBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                let value = parseInt(quantityInput.value);
                if (btn.textContent === '+') {
                    value++;
                } else if (btn.textContent === '-' && value > 1) {
                    value--;
                }
                quantityInput.value = value;
            });
        });
    }
    
    // 确保所有模态框和侧边栏初始状态正确
    if (cartSidebar) cartSidebar.classList.remove('active');
    if (searchOverlay) {
        searchOverlay.style.display = 'none';
        searchOverlay.classList.remove('active');
    }
    if (quickViewModal) {
        quickViewModal.style.display = 'none';
        quickViewModal.classList.remove('active');
    }
    
    // 修复底部白色栏问题
    document.documentElement.style.height = '100%';
    document.body.style.minHeight = '100vh';
    document.body.style.backgroundColor = 'var(--secondary-color)';
    
    // 确保main元素填充可用空间
    const mainElement = document.querySelector('main');
    const headerElement = document.querySelector('header');
    const footerElement = document.querySelector('footer');
    const topBarElement = document.querySelector('.top-bar');
    
    if (mainElement && headerElement && footerElement && topBarElement) {
        const windowHeight = window.innerHeight;
        const headerHeight = headerElement.offsetHeight;
        const footerHeight = footerElement.offsetHeight;
        const topBarHeight = topBarElement.offsetHeight;
        const availableHeight = windowHeight - headerHeight - footerHeight - topBarHeight;
        
        mainElement.style.minHeight = availableHeight + 'px';
        
        // 监听窗口大小变化，重新调整main元素高度
        window.addEventListener('resize', function() {
            const windowHeight = window.innerHeight;
            const headerHeight = headerElement.offsetHeight;
            const footerHeight = footerElement.offsetHeight;
            const topBarHeight = topBarElement.offsetHeight;
            const availableHeight = windowHeight - headerHeight - footerHeight - topBarHeight;
            
            mainElement.style.minHeight = availableHeight + 'px';
        });
    }

    // 从 localStorage 获取保存的语言设置并初始化语言切换功能
    initLanguageSelector();
});

// 语言包
const translations = {
    zh: {
        'current_lang': '中文',
        'shop_by_style': '按风格选购',
        'find_perfect_pair': '找到适合您脸型和个人风格的完美眼镜',
        'aviator': '飞行员款',
        'sport': '运动款',
        'cat_eye': '猫眼款',
        'classic': '经典款',
        'round': '圆形款',
        'wayfarer': '徒步旅行者款',
        'oversized': '大框款',
        'limited_edition': '限量版',
        'frame_color': '镜框颜色',
        'lens_type': '镜片类型',
        'standard': '标准',
        'polarized': '偏光 (+€10)',
        'mirrored': '镜面 (+€8)',
        'quantity': '数量',
        'sku': '商品编号',
        'categories': '分类',
        'tags': '标签',
        'social_links': '社交媒体',
        'follow_us': '关注我们',
        'app_store': 'App Store下载',
        'google_play': 'Google Play下载',
        'product_description': '经典设计',
        'search': '搜索',
        'search_placeholder': '搜索产品...',
        'cart_empty': '您的购物车是空的',
        'subtotal': '小计',
        'checkout': '结账',
        'view_cart': '查看购物车',
        'free_shipping': 'WOW',
        'sunglasses': '太阳镜',
        'eyeglasses': '眼镜',
        'collections': '系列',
        'sale': '特卖',
        'my_account': '我的账户',
        'contact_us': '联系我们',
        'hero_title': '2025春夏\n系列',
        'hero_text': '探索我们采用优质材料和前沿设计的最新款式。用一副完美的POLA太阳镜提升您的形象。',
        'shop_collection': '浏览系列',
        'mens_collection': '男士系列',
        'womens_collection': '女士系列',
        'shop_now': '立即购买',
        'best_sellers': '畅销产品',
        'best_sellers_subtitle': '全球客户喜爱的最受欢迎款式',
        'add_to_cart': '加入购物车',
        'add_to_wishlist': '加入愿望清单',
        'quick_view': '快速查看',
        'new_arrivals': '新品上市',
        'classic_collection': '经典系列',
        'spring_summer': '2025春夏',
        'fall_winter': '2025秋冬',
        'all': '全部',
        'new_arrivals_filter': '新品',
        'polarized_filter': '偏光',
        'limited_edition_filter': '限量版',
        'view_all_products': '查看所有产品',
        'features_shipping': '免费配送',
        'features_shipping_text': '订单满€50免运费',
        'features_returns': '轻松退货',
        'features_returns_text': '30天免费退货政策',
        'features_payments': '安全支付',
        'features_payments_text': '100%安全支付方式',
        'features_support': '24/7客户支持',
        'section_support_subtitle': '在 Instagram 上关注我们并使用 #pola 标签标记你的照片',
        'features_support_text': '专业客户支持服务',
        'newsletter_title': '订阅我们的通讯',
        'newsletter_text': '注册我们的通讯，直接在您的收件箱中接收独家优惠、新品到货和时尚灵感。',
        'newsletter_placeholder': '您的电子邮件地址',
        'newsletter_button': '订阅',
        'about_pola_taitle': '关于 POLA',
        'about_pola_text': 'POLA，一个承载着深厚历史底蕴的时尚眼镜品牌，自创立以来，始终致力于为全球消费者带来高品质、设计独特的墨镜。凭借其悠久的历史、精湛的工艺和不断创新的设计理念，POLA在时尚眼镜领域树立了卓越的声誉，成为追求时尚与品质的消费者的首选。',
        'shop_foot':'商店',
        'New_Arrivals_foot': '新品上市',
        'Classic_foot': '经典系列',
        'Spring_Summer_foot': '2025春夏',
        'Fall_Winter_foot': '2025秋冬',
        'help_foot': '帮助',
        'FAQ_foot': '常见问题',
        'Size_Guide_foot': '尺寸指南',
        'privacy_policy_foot': '隐私政策',
        'contact_us_foot': '联系我们',
    },
    en: {
        'current_lang': 'English',
        'shop_by_style': 'Shop by Style',
        'find_perfect_pair': 'Find the perfect pair for your face shape and personal style',
        'aviator': 'Aviator',
        'sport': 'Sport',
        'cat_eye': 'Cat Eye',
        'classic': 'Classic',
        'round': 'Round',
        'wayfarer': 'Wayfarer',
        'oversized': 'Oversized',
        'limited_edition': 'Limited Edition',
        'frame_color': 'Frame Color',
        'lens_type': 'Lens Type',
        'standard': 'Standard',
        'polarized': 'Polarized (+€10)',
        'mirrored': 'Mirrored (+€8)',
        'quantity': 'Quantity',
        'sku': 'SKU',
        'categories': 'Categories',
        'tags': 'Tags',
        'social_links': 'Social Media',
        'follow_us': 'Follow Us',
        'app_store': 'Download on App Store',
        'google_play': 'Download on Google Play',
        'product_description': 'Classic Design',
        'search': 'Search',
        'search_placeholder': 'Search products...',
        'cart_empty': 'Your cart is empty',
        'subtotal': 'Subtotal',
        'checkout': 'Checkout',
        'view_cart': 'View Cart',
        'free_shipping': 'Free shipping on orders over €50',
        'sunglasses': 'Sunglasses',
        'eyeglasses': 'Eyeglasses',
        'collections': 'Collections',
        'sale': 'Sale',
        'my_account': 'My Account',
        'contact_us': 'Contact Us',
        'hero_title': 'Spring/Summer 2025\nCollection',
        'hero_text': 'Explore our latest styles crafted with premium materials and cutting-edge designs. Elevate your look with the perfect pair of POLA sunglasses.',
        'shop_collection': 'Shop the Collection',
        'mens_collection': 'Men\'s Collection',
        'womens_collection': 'Women\'s Collection',
        'shop_now': 'Shop Now',
        'best_sellers': 'Best Sellers',
        'best_sellers_subtitle': 'Our most popular styles loved by customers worldwide',
        'add_to_cart': 'Add to Cart',
        'add_to_wishlist': 'Add to Wishlist',
        'quick_view': 'Quick View',
        'new_arrivals': 'New Arrivals',
        'classic_collection': 'Classic Collection',
        'spring_summer': 'Spring/Summer 2025',
        'fall_winter': 'Fall/Winter 2025',
        'all': 'All',
        'new_arrivals_filter': 'New Arrivals',
        'polarized_filter': 'Polarized',
        'limited_edition_filter': 'Limited Edition',
        'view_all_products': 'View All Products',
        'features_shipping': 'Free Shipping',
        'features_shipping_text': 'Free shipping on orders over €50',
        'features_returns': 'Easy Returns',
        'features_returns_text': '30-day free returns policy',
        'features_payments': 'Secure Payments',
        'features_payments_text': '100% secure payment methods',
        'features_support': '24/7 Customer Support',
        'section_support_subtitle': 'Follow us on Instagram and tag your photos with #pola',
        'features_support_text': 'Professional customer support service',
        'newsletter_title': 'Subscribe to Our Newsletter',
        'newsletter_text': 'Sign up for our newsletter to receive exclusive offers, new arrivals, and fashion inspiration straight to your inbox.',
        'newsletter_placeholder': 'Your email address',
        'newsletter_button': 'Subscribe',
        'about_pola_taitle': 'About POLA',
        'about_pola_text': 'POLA, a fashion eyewear brand with a rich heritage, has been dedicated to offering high-quality, unique sunglasses globally since its start. With its history, fine craftsmanship, and innovative designs, POLA enjoys a strong reputation in fashion eyewear, appealing to those who value style and quality.',
        'shop_foot':'Shop',
        'New_Arrivals_foot': 'New Arrivals',
        'Classic_foot': 'Classic Collection',
        'Spring_Summer_foot': 'Spring/Summer 2025',
        'Fall_Winter_foot': 'Fall/Winter 2025',
        'help_foot': 'Help',
        'FAQ_foot': 'FAQ',
        'Size_Guide_foot': 'Size Guide',
        'privacy_policy_foot': 'Privacy Policy',
        'contact_us_foot': 'Contact US',
    },
    ru: {
        'current_lang': 'Русский',
        'shop_by_style': 'Покупка по стилю',
        'find_perfect_pair': 'Найдите идеальную пару для вашей формы лица и личного стиля',
        'aviator': 'Авиатор',
        'sport': 'Спортивные',
        'cat_eye': 'Кошачий глаз',
        'classic': 'Классические',
        'round': 'Круглые',
        'wayfarer': 'Вайфарер',
        'oversized': 'Оверсайз',
        'limited_edition': 'Лимитированная серия',
        'frame_color': 'Цвет оправы',
        'lens_type': 'Тип линз',
        'standard': 'Стандартные',
        'polarized': 'Поляризованные (+€10)',
        'mirrored': 'Зеркальные (+€8)',
        'quantity': 'Количество',
        'sku': 'Артикул',
        'categories': 'Категории',
        'tags': 'Теги',
        'social_links': 'Социальные сети',
        'follow_us': 'Следите за нами',
        'app_store': 'Скачать в App Store',
        'google_play': 'Скачать в Google Play',
        'product_description': 'Классический дизайн',
        'search': 'Поиск',
        'search_placeholder': 'Поиск товаров...',
        'cart_empty': 'Ваша корзина пуста',
        'subtotal': 'Промежуточный итог',
        'checkout': 'Оформить заказ',
        'view_cart': 'Просмотреть корзину',
        'free_shipping': 'Бесплатная доставка при заказе от €50',
        'sunglasses': 'Солнцезащитные очки',
        'eyeglasses': 'Очки',
        'collections': 'Коллекции',
        'sale': 'Распродажа',
        'my_account': 'Мой аккаунт',
        'contact_us': 'Связаться с нами',
        'hero_title': 'Весна/Лето 2025\nКоллекция',
        'hero_text': 'Ознакомьтесь с нашими новейшими моделями, созданными из высококачественных материалов и с использованием передовых дизайнов. Подчеркните свой образ с идеальной парой солнцезащитных очков POLA.',
        'shop_collection': 'Просмотреть коллекцию',
        'mens_collection': 'Мужская коллекция',
        'womens_collection': 'Женская коллекция',
        'shop_now': 'Купить сейчас',
        'best_sellers': 'Бестселлеры',
        'best_sellers_subtitle': 'Наши самые популярные модели, любимые клиентами по всему миру',
        'add_to_cart': 'Добавить в корзину',
        'add_to_wishlist': 'Добавить в список желаний',
        'quick_view': 'Быстрый просмотр',
        'new_arrivals': 'Новинки',
        'classic_collection': 'Классическая коллекция',
        'spring_summer': 'Весна/Лето 2025',
        'fall_winter': 'Осень/Зима 2025',
        'all': 'Все',
        'new_arrivals_filter': 'Новинки',
        'polarized_filter': 'Поляризованные',
        'limited_edition_filter': 'Лимитированная серия',
        'view_all_products': 'Просмотреть все товары',
        'features_shipping': 'Бесплатная доставка',
        'features_shipping_text': 'Бесплатная доставка при заказе от €50',
        'features_returns': 'Легкий возврат',
        'features_returns_text': '30-дневная политика бесплатного возврата',
        'features_payments': 'Безопасные платежи',
        'features_payments_text': '100% безопасные способы оплаты',
        'features_support': 'Круглосуточная поддержка клиентов',
        'section_support_subtitle': 'Подпишитесь на нас в Instagram и отметьте свои фотографии тегом #pola',
        'features_support_text': 'Профессиональная служба поддержки клиентов',
        'newsletter_title': 'Подпишитесь на нашу рассылку',
        'newsletter_text': 'Подпишитесь на нашу рассылку, чтобы получать эксклюзивные предложения, новинки и модные идеи прямо на ваш email.',
        'newsletter_placeholder': 'Ваш email адрес',
        'newsletter_button': 'Подписаться',
        'about_pola_taitle': 'О POLA',
        'about_pola_text': 'POLA, бренд модных очков с богатым наследием, с момента своего основания посвящает себя предложению высококачественных, уникальных солнцезащитных очков по всему миру. Благодаря своей истории, тонкому мастерству и инновационным дизайнам, POLA пользуется высокой репутацией в мире модных очков, привлекая тех, кто ценит стиль и качество.',
        'shop_foot': 'Магазин',
        'New_Arrivals_foot': 'Новинки',
        'Classic_foot': 'Классическая коллекция',
        'Spring_Summer_foot': 'Весна/Лето 2025',
        'Fall_Winter_foot': 'Осень/Зима 2025',
        'help_foot': 'Помощь',
        'FAQ_foot': 'Часто задаваемые вопросы',
        'Size_Guide_foot': 'Руководство по размерам',
        'privacy_policy_foot': 'Политика конфиденциальности',
        'contact_us_foot': 'Связаться с нами',

    }
};

// 初始化语言选择器功能
function initLanguageSelector() {
    const languageToggle = document.querySelector('.language-toggle');
    const languageDropdown = document.querySelector('.language-dropdown');
    const languageOptions = document.querySelectorAll('.language-option');
    const currentLangSpan = document.querySelector('.current-lang');
    
    // 从localStorage获取保存的语言设置，如果没有则默认为英语
    let currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // 应用保存的语言设置
    applyLanguage(currentLang);
    
    // 更新当前语言显示
    if (currentLangSpan) {
        currentLangSpan.textContent = translations[currentLang]['current_lang'] || 'English';
    }
    
    // 更新语言选项的激活状态
    languageOptions.forEach(option => {
        if (option.textContent === translations[currentLang]['current_lang']) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
    
    // 语言切换按钮点击事件
    if (languageToggle && languageDropdown) {
        languageToggle.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const languageSelector = languageToggle.closest('.language-selector');
            if (languageSelector) {
                languageSelector.classList.toggle('open');
            }
        });
        
        // 点击外部关闭语言下拉菜单
        document.addEventListener('click', (e) => {
            if (!languageToggle.contains(e.target)) {
                const languageSelector = document.querySelector('.language-selector');
                if (languageSelector) {
                    languageSelector.classList.remove('open');
                }
            }
        });
    }
    
    // 语言选项点击事件
    if (languageOptions) {
        languageOptions.forEach(option => {
            option.addEventListener('click', (e) => {
                e.preventDefault();
                
                // 移除所有选项的激活状态
                languageOptions.forEach(opt => opt.classList.remove('active'));
                
                // 添加当前选项的激活状态
                option.classList.add('active');
                
                // 获取选择的语言
                let selectedLang;
                if (option.textContent === '中文') {
                    selectedLang = 'zh';
                } else if (option.textContent === 'Русский') {
                    selectedLang = 'ru';
                } else {
                    selectedLang = 'en';
                }
                
                // 保存语言设置到localStorage
                localStorage.setItem('selectedLanguage', selectedLang);
                
                // 更新当前语言显示
                if (currentLangSpan) {
                    currentLangSpan.textContent = translations[selectedLang]['current_lang'];
                }
                
                // 应用语言设置
                applyLanguage(selectedLang);
                
                // 关闭下拉菜单
                const languageSelector = document.querySelector('.language-selector');
                if (languageSelector) {
                    languageSelector.classList.remove('open');
                }
            });
        });
    }
}

// 应用语言设置到页面元素
function applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const attr = element.getAttribute('data-i18n-attr');
        if (translations[lang] && translations[lang][key]) {
            if (attr) {
                element.setAttribute(attr, translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    const event = new CustomEvent('languageChanged', { detail: { language: lang } });
    document.dispatchEvent(event);
}

// 示例：动态添加带有国际化的内容
function addLocalizedContent(containerId, contentKey) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    // 获取当前语言
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // 创建新元素并添加国际化属性
    const newElement = document.createElement('div');
    newElement.setAttribute('data-i18n', contentKey);
    newElement.textContent = translations[currentLang][contentKey] || contentKey;
    
    // 添加到容器
    container.appendChild(newElement);
}

// 示例：创建国际化的动态通知
function showLocalizedNotification(messageKey, type = 'info') {
    // 获取当前语言
    const currentLang = localStorage.getItem('selectedLanguage') || 'en';
    
    // 创建通知元素
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = translations[currentLang][messageKey] || messageKey;
    
    // 添加到页面
    document.body.appendChild(notification);
    
    // 显示通知
    setTimeout(() => {
        notification.classList.add('show');
    }, 10);
    
    // 自动关闭通知
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// 示例：国际化的搜索功能
function setupLocalizedSearch() {
    const searchForm = document.querySelector('.search-form');
    const searchInput = document.querySelector('.search-input');
    
    if (searchForm && searchInput) {
        // 更新搜索输入框的占位符
        document.addEventListener('languageChanged', (e) => {
            const lang = e.detail.language;
            if (translations[lang] && translations[lang]['search_placeholder']) {
                searchInput.placeholder = translations[lang]['search_placeholder'];
            }
        });
        
        // 搜索表单提交
        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const query = searchInput.value.trim();
            
            if (query) {
                // 这里可以实现实际的搜索逻辑
                console.log(`Searching for: ${query}`);
                
                // 示例：显示搜索结果数量的本地化消息
                const currentLang = localStorage.getItem('selectedLanguage') || 'en';
                const resultMessage = {
                    'en': `Found 5 results for "${query}"`,
                    'zh': `找到5个关于"${query}"的结果`,
                    'ru': `Найдено 5 результатов для "${query}"`
                };
                
                alert(resultMessage[currentLang]);
            }
        });
    }
}

// 页面加载完成后初始化搜索功能
document.addEventListener('DOMContentLoaded', function() {
    // 其他初始化代码已经在主DOMContentLoaded事件中
    // 这里只是一个示例，实际上不需要重复添加事件监听器
    setupLocalizedSearch();
});
