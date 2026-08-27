/**
 * script.js — Charlyz Hair by GraceMJ
 * Boutique de perruques en ligne — Franceville, Gabon
 * Vanilla JS, sans dépendance externe (hors Font Awesome pour les icônes).
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. DONNÉES PRODUITS
    // ==========================================

    const colors = ['#1a1a1a', '#4a2c2c', '#8B4513', '#D2691E', '#FFD700', '#C0C0C0'];

    const products = [
        { id: 'prod-001', name: 'Perruque Bob Courte Lisse', category: 'lisse', size: 10, price: 82500, image: 'wig-collection.jpg', description: 'Une magnifique perruque coupe bob, idéale pour un look chic et professionnel. Facile à entretenir.', badge: 'popular', colors: [colors[0], colors[1]] },
        { id: 'prod-002', name: 'Lace Front Ondulée Naturelle', category: 'lace-front', size: 14, price: 137500, image: 'wig-lace-front-ondulee.jpg', description: 'Lace front indétectable avec des ondulations naturelles parfaites pour toutes les occasions.', badge: 'new', colors: [colors[0], colors[2], colors[3]] },
        { id: 'prod-003', name: 'Longue Lisse Soyeuse', category: 'lisse', size: 24, price: 302500, image: 'wig-lace-front-ondulee.jpg', description: "Des cheveux longs et lisses d'une douceur incomparable. Peut être bouclée ou lissée à nouveau.", badge: null, colors: [colors[0], colors[1]] },
        { id: 'prod-004', name: 'Boucles Profondes Synthétique', category: 'synthetique', size: 18, price: 192500, image: 'wig-boucles-profondes.jpg', description: 'Fibre synthétique de haute qualité imitant à la perfection le cheveu humain. Boucles rebondissantes.', badge: 'promo', colors: [colors[0], colors[3], colors[4]] },
        { id: 'prod-005', name: 'Full Lace Extra Longue', category: 'full-lace', size: 32, price: 522500, image: 'wig-boucles-profondes.jpg', description: 'Full lace wig permettant de faire toutes sortes de coiffures, y compris des chignons hauts.', badge: 'premium', colors: [colors[0]] },
        { id: 'prod-006', name: 'Cheveux Naturels Ondulés', category: 'naturel', size: 20, price: 220000, image: 'wig-beach-waves.jpg', description: '100% vrais cheveux humains. Texture ondulée naturelle, très douce au toucher.', badge: null, colors: [colors[0], colors[1], colors[2]] },
        { id: 'prod-007', name: 'Carré Plongeant Lisse', category: 'lisse', size: 12, price: 110000, image: 'wig-collection.jpg', description: 'Un carré plongeant moderne et élégant. Parfait pour sublimer les traits de votre visage.', badge: 'popular', colors: [colors[0], colors[1]] },
        { id: 'prod-008', name: 'Lace Front Blonde', category: 'lace-front', size: 22, price: 275000, image: 'wig-lace-front-ondulee.jpg', description: 'Lace front avec une magnifique coloration blonde miel. Prête à poser.', badge: 'new', colors: [colors[4]] },
        { id: 'prod-009', name: 'Maxi Longueur Lisse', category: 'lisse', size: 40, price: 880000, image: 'wig-boucles-profondes.jpg', description: "Pour celles qui aiment les longueurs extrêmes. Cheveux d'une qualité exceptionnelle.", badge: 'premium', colors: [colors[0]] },
        { id: 'prod-010', name: 'Boucles Kinky Naturelles', category: 'naturel', size: 16, price: 165000, image: 'wig-beach-waves.jpg', description: 'Texture afro kinky qui se marie parfaitement avec les cheveux crépus naturels.', badge: null, colors: [colors[0], colors[1]] },
        { id: 'prod-011', name: 'Perruque Grise Tendance', category: 'synthetique', size: 26, price: 357500, image: 'wig-collection.jpg', description: 'Couleur grise argentée très tendance. Fibres résistantes à la chaleur.', badge: 'promo', colors: [colors[5]] },
        { id: 'prod-012', name: 'Ondulations Plage (Beach Waves)', category: 'ondule', size: 28, price: 412500, image: 'wig-beach-waves.jpg', description: 'Des ondulations effet "retour de plage" pour un look décontracté et sexy.', badge: 'popular', colors: [colors[0], colors[2], colors[3]] },
        { id: 'prod-013', name: 'Full Lace Lisse Parfaite', category: 'full-lace', size: 30, price: 467500, image: 'wig-lace-front-ondulee.jpg', description: 'Lissage baguette impeccable. La full lace offre une liberté totale de coiffage.', badge: null, colors: [colors[0], colors[1]] },
        { id: 'prod-014', name: 'Perruque Pixie Cut', category: 'lisse', size: 10, price: 82500, image: 'wig-boucles-profondes.jpg', description: 'Coupe garçonne très féminine. Ne nécessite pratiquement aucun entretien.', badge: 'new', colors: [colors[0], colors[1], colors[5]] },
        { id: 'prod-015', name: 'Cheveux Naturels Lisses XXL', category: 'naturel', size: 36, price: 687500, image: 'wig-beach-waves.jpg', description: 'Qualité Remy hair exceptionnelle. Lisses, brillants et sans aucun nœud.', badge: 'premium', colors: [colors[0]] },
        { id: 'prod-016', name: 'Ondulée Rousse', category: 'ondule', size: 24, price: 302500, image: 'wig-collection.jpg', description: 'Une couleur rousse vibrante avec de légères ondulations pour un style unique.', badge: null, colors: [colors[3]] }
    ];

    const WHATSAPP_NUMBER = '24177244083';
    const CART_STORAGE_KEY = 'charlyzhair_cart';
    let cart = [];

    // ==========================================
    // 2. RÉFÉRENCES DOM
    // ==========================================

    const el = {
        navbar: document.getElementById('navbar'),
        navToggle: document.getElementById('navToggle'),
        navLinks: document.getElementById('navLinks'),
        backToTop: document.getElementById('backToTop'),

        productsGrid: document.getElementById('products-grid'),
        noResults: document.getElementById('no-results'),
        filterCategory: document.getElementById('filter-category'),
        filterSize: document.getElementById('filter-size'),
        filterSort: document.getElementById('filter-sort'),
        searchInput: document.getElementById('search-input'),

        cartBtn: document.getElementById('cartBtn'),
        cartCount: document.getElementById('cart-count'),
        cartOverlay: document.getElementById('cart-overlay'),
        cartSidebar: document.getElementById('cart-sidebar'),
        cartClose: document.getElementById('cart-close'),
        cartItems: document.getElementById('cart-items'),
        cartEmpty: document.getElementById('cart-empty'),
        cartFooter: document.getElementById('cart-footer'),
        cartTotal: document.getElementById('cart-total'),
        cartCheckout: document.getElementById('cart-checkout'),
        cartClear: document.getElementById('cart-clear'),
        cartShopBtn: document.getElementById('cart-shop-btn'),

        modal: document.getElementById('product-modal'),
        modalOverlay: document.getElementById('modal-overlay'),
        modalClose: document.getElementById('modal-close'),
        modalImage: document.getElementById('modal-product-image'),
        modalCategory: document.getElementById('modal-category'),
        modalName: document.getElementById('modal-product-name'),
        modalDescription: document.getElementById('modal-description'),
        modalPrice: document.getElementById('modal-price'),
        modalSize: document.getElementById('modal-size'),
        modalColors: document.getElementById('modal-colors'),
        modalQuantity: document.getElementById('modal-quantity'),
        qtyMinus: document.getElementById('qty-minus'),
        qtyPlus: document.getElementById('qty-plus'),
        modalAddCart: document.getElementById('modal-add-cart'),
        modalWhatsapp: document.getElementById('modal-whatsapp'),

        toast: document.getElementById('toast'),
        toastMessage: document.getElementById('toast-message'),

        testimonialTrack: document.getElementById('testimonial-track'),
        testimonialDots: document.getElementById('testimonial-dots'),
        prevTestimonial: document.getElementById('prevTestimonial'),
        nextTestimonial: document.getElementById('nextTestimonial')
    };

    // ==========================================
    // 3. UTILITAIRES
    // ==========================================

    const formatPrice = (price) => price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' FCFA';

    const buildWhatsappLink = (text) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

    let toastTimer = null;
    const showToast = (message) => {
        if (!el.toast || !el.toastMessage) return;
        el.toastMessage.textContent = message;
        el.toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => el.toast.classList.remove('show'), 2500);
    };

    const badgeLabel = { new: 'Nouveau', promo: 'Promo', popular: 'Populaire', premium: 'Premium' };

    // ==========================================
    // 4. RENDU DES PRODUITS
    // ==========================================

    let currentProducts = [...products];

    const renderProducts = (list) => {
        if (!el.productsGrid) return;

        if (list.length === 0) {
            el.productsGrid.innerHTML = '';
            if (el.noResults) el.noResults.style.display = 'block';
            return;
        }
        if (el.noResults) el.noResults.style.display = 'none';

        el.productsGrid.innerHTML = list.map(product => `
            <div class="product-card" data-id="${product.id}">
                <div class="product-img-wrapper product-open" data-id="${product.id}">
                    <img class="product-img" src="${product.image}" alt="${product.name}" loading="lazy">
                    ${product.badge ? `<div class="product-badges"><span class="badge badge-${product.badge}">${badgeLabel[product.badge]}</span></div>` : ''}
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category.replace('-', ' ')}</span>
                    <h3 class="product-title product-open" data-id="${product.id}">${product.name}</h3>
                    <div class="product-price-wrapper">
                        <span class="product-price">${formatPrice(product.price)}</span>
                    </div>
                    <div class="product-meta">
                        <span class="size-tag">${product.size}"</span>
                        <button class="btn-action-round add-to-cart-btn" data-id="${product.id}" aria-label="Ajouter au panier" title="Ajouter au panier">
                            <i class="fas fa-shopping-bag"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        attachProductCardEvents();
    };

    const attachProductCardEvents = () => {
        el.productsGrid.querySelectorAll('.product-open').forEach(node => {
            node.addEventListener('click', () => openModal(node.getAttribute('data-id')));
        });
        el.productsGrid.querySelectorAll('.add-to-cart-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                const product = products.find(p => p.id === btn.getAttribute('data-id'));
                if (product) {
                    addToCart(product, 1, product.colors ? product.colors[0] : null);
                    showToast(`${product.name} ajouté au panier`);
                }
            });
        });
    };

    // ==========================================
    // 5. FILTRES, TRI & RECHERCHE
    // ==========================================

    const applyFilters = () => {
        let result = [...products];

        const term = el.searchInput ? el.searchInput.value.trim().toLowerCase() : '';
        if (term) {
            result = result.filter(p => p.name.toLowerCase().includes(term) || p.description.toLowerCase().includes(term));
        }

        const category = el.filterCategory ? el.filterCategory.value : 'all';
        if (category && category !== 'all') {
            result = result.filter(p => p.category === category);
        }

        const size = el.filterSize ? el.filterSize.value : 'all';
        if (size && size !== 'all') {
            result = result.filter(p => p.size === parseInt(size, 10));
        }

        const sort = el.filterSort ? el.filterSort.value : 'popular';
        switch (sort) {
            case 'price-asc':
                result.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                result.sort((a, b) => b.price - a.price);
                break;
            case 'name':
                result.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default: // popular
                result.sort((a, b) => (b.badge === 'popular') - (a.badge === 'popular'));
        }

        currentProducts = result;
        renderProducts(currentProducts);
    };

    [el.filterCategory, el.filterSize, el.filterSort].forEach(select => {
        if (select) select.addEventListener('change', applyFilters);
    });
    if (el.searchInput) el.searchInput.addEventListener('input', applyFilters);

    // Filtres cliquables depuis le footer (data-filter)
    document.querySelectorAll('a[data-filter]').forEach(link => {
        link.addEventListener('click', () => {
            if (el.filterCategory) {
                el.filterCategory.value = link.getAttribute('data-filter');
                applyFilters();
            }
        });
    });

    // ==========================================
    // 6. MODALE PRODUIT
    // ==========================================

    let activeModalProduct = null;
    let activeModalColor = null;

    const openModal = (productId) => {
        const product = products.find(p => p.id === productId);
        if (!product || !el.modal) return;

        activeModalProduct = product;
        activeModalColor = product.colors && product.colors.length ? product.colors[0] : null;

        el.modalImage.src = product.image;
        el.modalImage.alt = product.name;
        el.modalCategory.textContent = product.category.replace('-', ' ');
        el.modalName.textContent = product.name;
        el.modalDescription.textContent = product.description;
        el.modalPrice.textContent = formatPrice(product.price);
        el.modalSize.textContent = `${product.size}"`;
        el.modalQuantity.value = 1;

        el.modalColors.innerHTML = (product.colors || []).map((color, idx) => `
            <span class="color-swatch ${idx === 0 ? 'active' : ''}" data-color="${color}" style="background-color:${color}"></span>
        `).join('');

        el.modalColors.querySelectorAll('.color-swatch').forEach(swatch => {
            swatch.addEventListener('click', () => {
                el.modalColors.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
                swatch.classList.add('active');
                activeModalColor = swatch.getAttribute('data-color');
            });
        });

        updateModalWhatsappLink();

        el.modal.classList.add('active');
        el.modalOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    };

    const updateModalWhatsappLink = () => {
        if (!activeModalProduct) return;
        const qty = parseInt(el.modalQuantity.value, 10) || 1;
        const text = `Bonjour, je suis intéressé(e) par la perruque "${activeModalProduct.name}" (${activeModalProduct.size} pouces), quantité : ${qty}, à ${formatPrice(activeModalProduct.price * qty)}.`;
        el.modalWhatsapp.href = buildWhatsappLink(text);
    };

    const closeModal = () => {
        if (!el.modal) return;
        el.modal.classList.remove('active');
        el.modalOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
        activeModalProduct = null;
    };

    if (el.modalClose) el.modalClose.addEventListener('click', closeModal);
    if (el.modalOverlay) el.modalOverlay.addEventListener('click', closeModal);

    if (el.qtyMinus) el.qtyMinus.addEventListener('click', () => {
        const v = Math.max(1, (parseInt(el.modalQuantity.value, 10) || 1) - 1);
        el.modalQuantity.value = v;
        updateModalWhatsappLink();
    });
    if (el.qtyPlus) el.qtyPlus.addEventListener('click', () => {
        const v = Math.min(10, (parseInt(el.modalQuantity.value, 10) || 1) + 1);
        el.modalQuantity.value = v;
        updateModalWhatsappLink();
    });
    if (el.modalQuantity) el.modalQuantity.addEventListener('input', updateModalWhatsappLink);

    if (el.modalAddCart) el.modalAddCart.addEventListener('click', () => {
        if (!activeModalProduct) return;
        const qty = parseInt(el.modalQuantity.value, 10) || 1;
        addToCart(activeModalProduct, qty, activeModalColor);
        showToast(`${activeModalProduct.name} ajouté au panier`);
        closeModal();
    });

    // ==========================================
    // 7. PANIER (CART)
    // ==========================================

    const loadCart = () => {
        try {
            const saved = localStorage.getItem(CART_STORAGE_KEY);
            cart = saved ? JSON.parse(saved) : [];
        } catch (err) {
            cart = [];
        }
        renderCart();
    };

    const saveCart = () => {
        try {
            localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
        } catch (err) {
            // stockage indisponible : le panier reste en mémoire pour la session
        }
    };

    const addToCart = (product, qty, color) => {
        const lineId = `${product.id}__${color || 'default'}`;
        const existing = cart.find(item => item.lineId === lineId);
        if (existing) {
            existing.qty += qty;
        } else {
            cart.push({
                lineId,
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                size: product.size,
                color: color,
                qty: qty
            });
        }
        saveCart();
        renderCart();
    };

    const updateCartQty = (lineId, delta) => {
        const item = cart.find(i => i.lineId === lineId);
        if (!item) return;
        item.qty = Math.max(1, item.qty + delta);
        saveCart();
        renderCart();
    };

    const removeFromCart = (lineId) => {
        cart = cart.filter(i => i.lineId !== lineId);
        saveCart();
        renderCart();
    };

    const clearCart = () => {
        cart = [];
        saveCart();
        renderCart();
    };

    const cartTotal = () => cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    const renderCart = () => {
        const count = cart.reduce((sum, item) => sum + item.qty, 0);
        if (el.cartCount) el.cartCount.textContent = count;

        if (!el.cartItems) return;

        if (cart.length === 0) {
            el.cartItems.innerHTML = '';
            if (el.cartEmpty) el.cartEmpty.style.display = 'flex';
            if (el.cartFooter) el.cartFooter.style.display = 'none';
            return;
        }

        if (el.cartEmpty) el.cartEmpty.style.display = 'none';
        if (el.cartFooter) el.cartFooter.style.display = 'block';

        el.cartItems.innerHTML = cart.map(item => `
            <div class="cart-item" data-line-id="${item.lineId}">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div class="cart-item-info">
                    <h5>${item.name}</h5>
                    <span class="cart-item-meta">${item.size}"${item.color ? ` &middot; <span class="cart-item-color" style="background-color:${item.color}"></span>` : ''}</span>
                    <span class="cart-item-price">${formatPrice(item.price)}</span>
                    <div class="cart-item-qty">
                        <button class="qty-btn cart-qty-minus" data-line-id="${item.lineId}">−</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn cart-qty-plus" data-line-id="${item.lineId}">+</button>
                    </div>
                </div>
                <button class="cart-item-remove" data-line-id="${item.lineId}" aria-label="Retirer">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        `).join('');

        if (el.cartTotal) el.cartTotal.textContent = formatPrice(cartTotal());

        el.cartItems.querySelectorAll('.cart-qty-minus').forEach(btn => {
            btn.addEventListener('click', () => updateCartQty(btn.getAttribute('data-line-id'), -1));
        });
        el.cartItems.querySelectorAll('.cart-qty-plus').forEach(btn => {
            btn.addEventListener('click', () => updateCartQty(btn.getAttribute('data-line-id'), 1));
        });
        el.cartItems.querySelectorAll('.cart-item-remove').forEach(btn => {
            btn.addEventListener('click', () => removeFromCart(btn.getAttribute('data-line-id')));
        });
    };

    const openCart = () => {
        if (!el.cartSidebar) return;
        el.cartSidebar.classList.add('active');
        if (el.cartOverlay) el.cartOverlay.classList.add('active');
        document.body.classList.add('no-scroll');
    };

    const closeCart = () => {
        if (!el.cartSidebar) return;
        el.cartSidebar.classList.remove('active');
        if (el.cartOverlay) el.cartOverlay.classList.remove('active');
        document.body.classList.remove('no-scroll');
    };

    if (el.cartBtn) el.cartBtn.addEventListener('click', openCart);
    if (el.cartClose) el.cartClose.addEventListener('click', closeCart);
    if (el.cartOverlay) el.cartOverlay.addEventListener('click', closeCart);
    if (el.cartShopBtn) el.cartShopBtn.addEventListener('click', closeCart);
    if (el.cartClear) el.cartClear.addEventListener('click', clearCart);

    if (el.cartCheckout) el.cartCheckout.addEventListener('click', () => {
        if (cart.length === 0) return;
        const lines = cart.map(item => `- ${item.name} (${item.size}") x${item.qty} = ${formatPrice(item.price * item.qty)}`).join('\n');
        const text = `Bonjour, je souhaite commander :\n${lines}\n\nTotal : ${formatPrice(cartTotal())}`;
        window.open(buildWhatsappLink(text), '_blank');
    });

    // ==========================================
    // 8. NAVIGATION (mobile + scroll)
    // ==========================================

    if (el.navToggle && el.navLinks) {
        el.navToggle.addEventListener('click', () => {
            el.navLinks.classList.toggle('active');
            el.navToggle.classList.toggle('active');
        });
        el.navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                el.navLinks.classList.remove('active');
                el.navToggle.classList.remove('active');
            });
        });
    }

    const handleScroll = () => {
        if (el.navbar) {
            el.navbar.classList.toggle('scrolled', window.scrollY > 40);
        }
        if (el.backToTop) {
            el.backToTop.classList.toggle('visible', window.scrollY > 500);
        }
    };
    window.addEventListener('scroll', handleScroll);

    if (el.backToTop) {
        el.backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const targetId = anchor.getAttribute('href');
            if (targetId.length <= 1) return;
            const targetEl = document.querySelector(targetId);
            if (targetEl) {
                e.preventDefault();
                window.scrollTo({ top: targetEl.offsetTop - 80, behavior: 'smooth' });
            }
        });
    });

    // ==========================================
    // 9. ANIMATIONS AU DÉFILEMENT
    // ==========================================

    const initScrollReveal = () => {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.scroll-reveal:not(.visible)').forEach(elToObserve => observer.observe(elToObserve));
    };

    // ==========================================
    // 10. SLIDER DE TÉMOIGNAGES
    // ==========================================

    const initTestimonialSlider = () => {
        if (!el.testimonialTrack) return;
        const slides = Array.from(el.testimonialTrack.querySelectorAll('.testimonial-card'));
        if (slides.length === 0) return;

        if (el.testimonialDots) {
            el.testimonialDots.innerHTML = slides.map((_, i) => `<button class="testimonial-dot ${i === 0 ? 'active' : ''}" data-index="${i}" aria-label="Témoignage ${i + 1}"></button>`).join('');
        }
        const dots = el.testimonialDots ? Array.from(el.testimonialDots.querySelectorAll('.testimonial-dot')) : [];

        let current = 0;
        let autoplay;

        const goTo = (index) => {
            current = (index + slides.length) % slides.length;
            el.testimonialTrack.style.transform = `translateX(-${current * 100}%)`;
            dots.forEach((dot, i) => dot.classList.toggle('active', i === current));
        };

        const resetAutoplay = () => {
            clearInterval(autoplay);
            autoplay = setInterval(() => goTo(current + 1), 6000);
        };

        if (el.prevTestimonial) el.prevTestimonial.addEventListener('click', () => { goTo(current - 1); resetAutoplay(); });
        if (el.nextTestimonial) el.nextTestimonial.addEventListener('click', () => { goTo(current + 1); resetAutoplay(); });
        dots.forEach(dot => dot.addEventListener('click', () => { goTo(parseInt(dot.getAttribute('data-index'), 10)); resetAutoplay(); }));

        goTo(0);
        resetAutoplay();
    };

    // ==========================================
    // 11. INITIALISATION
    // ==========================================

    const init = () => {
        handleScroll();
        loadCart();
        renderProducts(currentProducts);
        initScrollReveal();
        initTestimonialSlider();
    };

    init();
});
