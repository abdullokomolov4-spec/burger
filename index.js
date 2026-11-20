/* ==========================================================================
   ANDI BURGER — ANDIJON SHAHRI FAST FOOD YETKAZIB BERISH PLATFORMASI
   100% Vanilla JavaScript (ES6+)
   ========================================================================== */

// 1. BARCHA 11 TA KATEGORIYA RO'YXATI
const CATEGORIES = [
    { id: 'lavashlar', name: 'Lavashlar' },
    { id: 'burgerlar', name: 'Burgerlar' },
    { id: 'hot-doglar', name: 'Hot-doglar' },
    { id: 'pitsalar', name: 'Pitsalar' },
    { id: 'sendvichlar', name: 'Sendvichlar' },
    { id: 'kartoshka-fri', name: 'Kartoshka fri' },
    { id: 'gazli-ichimliklar', name: 'Gazli ichimliklar' },
    { id: 'gazsiz-ichimliklar', name: 'Gazsiz ichimliklar' },
    { id: 'sharbatlar', name: 'Sharbatlar' },
    { id: 'souslar', name: 'Souslar' },
    { id: 'setlar', name: 'Setlar va kombo menyular' }
];

// 2. MAHSULOTLAR BAZASI (Barcha 11 kategoriya qamrab olingan)
const PRODUCTS = [
    // 1. LAVASHLAR
    {
        id: 'lav-1',
        category: 'lavashlar',
        name: 'Tandir Mol Go‘shtli Lavash',
        desc: 'Tandirda qizartirilgan yupqa xamir, 100% halol mol go‘shti, yangi pomidor, bodring, chipslar va firmenniy oq-qizil sous.',
        price: 34000,
        oldPrice: 39000,
        discount: '-13%',
        isHit: true,
        image: 'https://images.unsplash.com/photo-1626700051175-6818013e1d4f?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'lav-2',
        category: 'lavashlar',
        name: 'Pishloqli Tovuq Lavash',
        desc: 'Mayin tovuq filesi, eritilgan Cheddar pishlog‘i, qarsildoq kartoshka chipslari va maxsus sarimsoqli sous.',
        price: 31000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'lav-3',
        category: 'lavashlar',
        name: 'Andijon Achchiq Big Lavash',
        desc: 'Ikki hissa mol go‘shti, xalapenyo qalampiri, pomidor, bodring va olovli achchiq sous bilan katta porsiya.',
        price: 40000,
        oldPrice: 45000,
        discount: '-11%',
        isHit: false,
        image: 'https://images.unsplash.com/photo-1642783944285-b33b18ef6c3b?auto=format&fit=crop&w=600&q=80'
    },

    // 2. BURGERLAR
    {
        id: 'bur-1',
        category: 'burgerlar',
        name: 'Andi Double Cheeseburger',
        desc: 'Ikkita shirador mol go‘shti kotleti, ikki qavat Cheddar pishlog‘i, tuzlangan bodring, piyoz va maxsus burger sousi.',
        price: 38000,
        oldPrice: 44000,
        discount: '-14%',
        isHit: true,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'bur-2',
        category: 'burgerlar',
        name: 'Klassik Gamburger',
        desc: 'Yumshoq kunjutli bulochka, grilda pishirilgan mol go‘shti kotleti, aysberg salati, pomidor va klassik sous.',
        price: 27000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'bur-3',
        category: 'burgerlar',
        name: 'Crispy Chicken Burger',
        desc: 'Qarsildoq panirovkadagi tovuq filesi, aysberg bargi, pishloq va mayin qaymoqli sous.',
        price: 29000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1615297928064-24977384d0da?auto=format&fit=crop&w=600&q=80'
    },

    // 3. HOT-DOGLAR
    {
        id: 'hot-1',
        category: 'hot-doglar',
        name: 'Shohona Double Hot-Dog',
        desc: 'Ikkita dudlangan mol go‘shtli sosiska, qovurilgan piyoz, pishloq sousi, xantal va ketchup uzun bulochkada.',
        price: 22000,
        oldPrice: 25000,
        discount: '-12%',
        isHit: false,
        image: 'https://images.unsplash.com/photo-1619740455993-9e612b1af08a?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'hot-2',
        category: 'hot-doglar',
        name: 'Klassik Hot-Dog',
        desc: 'Yumshoq bulochka, halol sosiska, yangi sabzavotlar, mayonez va ketchup.',
        price: 16000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1541214113241-21578d2d9b62?auto=format&fit=crop&w=600&q=80'
    },

    // 4. PITSALAR
    {
        id: 'pit-1',
        category: 'pitsalar',
        name: 'Pepperoni Pitsa (33 sm)',
        desc: 'Yupqa italyan xamiri, cho‘ziluvchan Motsarella pishlog‘i, dudlangan halol pepperoni kolbasasi va tomat sousi.',
        price: 68000,
        oldPrice: 78000,
        discount: '-13%',
        isHit: true,
        image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'pit-2',
        category: 'pitsalar',
        name: 'Andijon Go‘shtli Assorti (33 sm)',
        desc: 'Mol go‘shti, tovuq go‘shti, dudlangan kolbasa, qo‘ziqorin, zaytun, bolgar qalampiri va ko‘p Motsarella.',
        price: 75000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'pit-3',
        category: 'pitsalar',
        name: 'Margarita Pitsa (33 sm)',
        desc: 'Klassik tomat sousi, haqiqiy Motsarella pishlog‘i, yangi pomidor bo‘laklari va rayhon.',
        price: 55000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=600&q=80'
    },

    // 5. SENDVICHLAR
    {
        id: 'sen-1',
        category: 'sendvichlar',
        name: 'Klab Sendvich Tovuqli',
        desc: 'Qizartirilgan toster noni, gril tovuq filesi, pishloq, pomidor, bodring, salat bargi va kartoshka fri.',
        price: 30000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sen-2',
        category: 'sendvichlar',
        name: 'Pishloqli Panini Sendvich',
        desc: 'Issiq presslangan italyan noni ichida mol go‘shti vetchinasi, ikki xil pishloq va maxsus sous.',
        price: 28000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1554433607-66b5efe9d304?auto=format&fit=crop&w=600&q=80'
    },

    // 6. KARTOSHKA FRI
    {
        id: 'fri-1',
        category: 'kartoshka-fri',
        name: 'Kartoshka Fri (Katta)',
        desc: 'Oltin rangda qovurilgan, tashqarisi qarsildoq, ichi yumshoq sarxil kartoshka bo‘laklari.',
        price: 16000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'fri-2',
        category: 'kartoshka-fri',
        name: 'Qishloqcha Kartoshka (Po-derevenski)',
        desc: 'Maxsus ziravorlar bilan pechda qizartirilgan yirik kartoshka bo‘lakchalari.',
        price: 18000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1630384060421-cb20d0e0649d?auto=format&fit=crop&w=600&q=80'
    },

    // 7. GAZLI ICHIMLIKLAR
    {
        id: 'gaz-1',
        category: 'gazli-ichimliklar',
        name: 'Coca-Cola (1 L)',
        desc: 'Muzdek salqin Coca-Cola — burger va lavashlar bilan ideal uyg‘unlik.',
        price: 13000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'gaz-2',
        category: 'gazli-ichimliklar',
        name: 'Fanta Apelsin (1 L)',
        desc: 'Yorqin apelsin ta’mli salqin gazlangan ichimlik.',
        price: 13000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1624517452488-04869289c4ca?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'gaz-3',
        category: 'gazli-ichimliklar',
        name: 'Sprite (0.5 L)',
        desc: 'Limon va laym ta’mli tetiklantiruvchi gazli ichimlik.',
        price: 8000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?auto=format&fit=crop&w=600&q=80'
    },

    // 8. GAZSIZ ICHIMLIKLAR
    {
        id: 'gsiz-1',
        category: 'gazsiz-ichimliklar',
        name: 'Muzdek Moxito Limonad (0.4 L)',
        desc: 'Yangi yalpiz barglari, laym bo‘laklari va muz bilan tayyorlangan tetiklantiruvchi ichimlik.',
        price: 15000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'gsiz-2',
        category: 'gazsiz-ichimliklar',
        name: 'Gazsiz Toza Suv (0.5 L)',
        desc: 'Tog‘ buloqlaridan olingan salqin ichimlik suvi.',
        price: 4000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?auto=format&fit=crop&w=600&q=80'
    },

    // 9. SHARBATLAR
    {
        id: 'shar-1',
        category: 'sharbatlar',
        name: 'Tabiiy Apelsin Sharbati (1 L)',
        desc: '100% quyoshli apelsinlardan tayyorlangan vitaminlarga boy sharbat.',
        price: 16000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'shar-2',
        category: 'sharbatlar',
        name: 'Olcha Sharbati (1 L)',
        desc: 'Nordon-shirin tabiiy olcha nektari.',
        price: 15000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?auto=format&fit=crop&w=600&q=80'
    },

    // 10. SOUSLAR
    {
        id: 'sous-1',
        category: 'souslar',
        name: 'Firmenniy Pishloqli Sous',
        desc: 'Kartoshka fri va burgerlar uchun mayin Cheddar pishloqli sous.',
        price: 4000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sous-2',
        category: 'souslar',
        name: 'Sarimsoqli Oq Sous',
        desc: 'Ko‘katlar va sarimsoq bilan tayyorlangan maxsus qaymoqli sous.',
        price: 4000,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1472476443507-c7a5948772fc?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'sous-3',
        category: 'souslar',
        name: 'Tomatli Ketchup Sous',
        desc: 'Pishgan pomidorlardan tayyorlangan klassik shirin-nordon ketchup.',
        price: 3500,
        oldPrice: null,
        discount: null,
        isHit: false,
        image: 'https://images.unsplash.com/photo-1607532941433-304659e8198a?auto=format&fit=crop&w=600&q=80'
    },

    // 11. SETLAR VA KOMBO MENYULAR
    {
        id: 'set-1',
        category: 'setlar',
        name: 'Andijon Oilaviy Set (-20%)',
        desc: '2 ta Tandir Mol Go‘shtli Lavash + 2 ta Double Cheeseburger + 2 ta Katta Fri + 1.5L Coca-Cola.',
        price: 135000,
        oldPrice: 168000,
        discount: '-20%',
        isHit: true,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=600&q=80'
    },
    {
        id: 'set-2',
        category: 'setlar',
        name: 'Talabalar Kombo Seti',
        desc: '1 ta Pishloqli Tovuq Lavash + 1 ta O‘rta Kartoshka Fri + 0.5L Coca-Cola + 1 ta Sous.',
        price: 45000,
        oldPrice: 52000,
        discount: '-13%',
        isHit: false,
        image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=600&q=80'
    }
];

// Yetkazib berish narxi (Andijon shahri ichida)
const DELIVERY_FEE = 12000;
const FREE_DELIVERY_THRESHOLD = 100000;

// Savatcha holati (localStorage dan yuklanadi)
let cart = JSON.parse(localStorage.getItem('andi_burger_cart')) || [];
let activeCategory = 'all';
let searchQuery = '';

// ==========================================================================
// YORDAMCHI FUNKSIYALAR
// ==========================================================================
function formatPrice(amount) {
    return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ') + ' so‘m';
}

function saveCart() {
    localStorage.setItem('andi_burger_cart', JSON.stringify(cart));
    updateCartUI();
}

function showToast(message) {
    const container = document.getElementById('toast-container');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="fa-solid fa-circle-check"></i> <span>${message}</span>`;
    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(-100%)';
        toast.style.transition = 'all 0.3s ease';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// ==========================================================================
// MAHSULOT KARTOCHKASINI YARATISH
// ==========================================================================
function createProductCardHTML(product) {
    const discountBadge = product.discount 
        ? `<span class="badge badge-discount">${product.discount}</span>` 
        : '';
    const hitBadge = product.isHit 
        ? `<span class="badge badge-hit"><i class="fa-solid fa-fire"></i> XIT</span>` 
        : '';
    const oldPriceHTML = product.oldPrice 
        ? `<span class="old-price">${formatPrice(product.oldPrice)}</span>` 
        : '';

    return `
        <article class="product-card" data-product-id="${product.id}">
            <div class="product-img-box">
                <div class="badges-wrapper">
                    ${discountBadge}
                    ${hitBadge}
                </div>
                <img src="${product.image}" alt="${product.name}" loading="lazy">
            </div>
            <div class="product-body">
                <h3 class="product-title">${product.name}</h3>
                <p class="product-desc">${product.desc}</p>
                <div class="product-price-row">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${oldPriceHTML}
                </div>
                <div class="product-controls">
                    <div class="qty-selector">
                        <button type="button" class="qty-btn minus-card-qty" aria-label="Kamaytirish">−</button>
                        <span class="qty-value card-qty-val">1</span>
                        <button type="button" class="qty-btn plus-card-qty" aria-label="Oshirish">+</button>
                    </div>
                    <button type="button" class="btn btn-primary add-to-cart-btn" data-id="${product.id}">
                        <i class="fa-solid fa-cart-plus"></i> Savatga qo‘shish
                    </button>
                </div>
            </div>
        </article>
    `;
}

// ==========================================================================
// XIT MAHSULOTLAR VA TO'LIQ MENYUNI CHIZISH
// ==========================================================================
function renderBestsellers() {
    const grid = document.getElementById('bestsellers-grid');
    const hits = PRODUCTS.filter(p => p.isHit);
    grid.innerHTML = hits.map(createProductCardHTML).join('');
}

function renderMenu() {
    const container = document.getElementById('menu-categories-container');
    const noResults = document.getElementById('no-results');
    container.innerHTML = '';

    let totalRendered = 0;

    CATEGORIES.forEach(category => {
        if (activeCategory !== 'all' && activeCategory !== category.id) {
            return;
        }

        const filteredProducts = PRODUCTS.filter(product => {
            const matchesCat = product.category === category.id;
            const query = searchQuery.toLowerCase().trim();
            const matchesSearch = !query || 
                product.name.toLowerCase().includes(query) || 
                product.desc.toLowerCase().includes(query);
            return matchesCat && matchesSearch;
        });

        if (filteredProducts.length > 0) {
            totalRendered += filteredProducts.length;
            const sectionBlock = document.createElement('div');
            sectionBlock.className = 'category-section-block';
            sectionBlock.id = `cat-${category.id}`;

            sectionBlock.innerHTML = `
                <div class="category-block-header">
                    <h3 class="category-block-title">${category.name}</h3>
                    <span class="category-count">${filteredProducts.length} xil taom</span>
                </div>
                <div class="products-grid">
                    ${filteredProducts.map(createProductCardHTML).join('')}
                </div>
            `;
            container.appendChild(sectionBlock);
        }
    });

    if (totalRendered === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
    }
}

// ==========================================================================
// SAVATCHA LOGIKASI (QO'SHISH, O'CHIRISH, SONINI O'ZGARTIRISH)
// ==========================================================================
function addToCart(productId, quantity = 1) {
    const product = PRODUCTS.find(p => p.id === productId);
    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity
        });
    }

    saveCart();
    animateCartBadge();
    showToast(`"${product.name}" (${quantity} ta) savatchaga qo‘shildi!`);
}

function updateCartItemQty(productId, delta) {
    const itemIndex = cart.findIndex(item => item.id === productId);
    if (itemIndex === -1) return;

    cart[itemIndex].quantity += delta;
    if (cart[itemIndex].quantity <= 0) {
        cart.splice(itemIndex, 1);
    }
    saveCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    showToast('Mahsulot savatchadan o‘chirildi');
}

function clearCart() {
    if (cart.length === 0) return;
    cart = [];
    saveCart();
    showToast('Savatcha tozalandi');
}

function animateCartBadge() {
    const badge = document.getElementById('header-cart-count');
    badge.classList.remove('bump');
    void badge.offsetWidth; // reflow
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 350);
}

function calculateTotals() {
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    const delivery = subtotal === 0 ? 0 : (subtotal >= FREE_DELIVERY_THRESHOLD ? 0 : DELIVERY_FEE);
    const total = subtotal + delivery;

    return { subtotal, totalCount, delivery, total };
}

function updateCartUI() {
    const { subtotal, totalCount, delivery, total } = calculateTotals();

    // Header badge
    document.getElementById('header-cart-count').textContent = totalCount;

    // Drawer elements
    const cartContainer = document.getElementById('cart-items-container');
    const cartFooter = document.getElementById('cart-footer');

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-state">
                <i class="fa-solid fa-basket-shopping"></i>
                <h4>Savatchangiz hozircha bo‘sh</h4>
                <p>Andijonning eng mazali burger va lavashlaridan tanlang!</p>
                <button class="btn btn-primary" id="empty-cart-menu-btn">Menyuga o‘tish</button>
            </div>
        `;
        cartFooter.classList.add('hidden');
    } else {
        cartFooter.classList.remove('hidden');
        cartContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price * item.quantity)}</div>
                    <div class="cart-item-controls">
                        <div class="cart-qty-box">
                            <button type="button" class="cart-qty-btn cart-dec" data-id="${item.id}">−</button>
                            <span>${item.quantity}</span>
                            <button type="button" class="cart-qty-btn cart-inc" data-id="${item.id}">+</button>
                        </div>
                        <button type="button" class="remove-item-btn" data-id="${item.id}" title="O‘chirish">
                            <i class="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');

        document.getElementById('drawer-subtotal').textContent = formatPrice(subtotal);
        document.getElementById('drawer-delivery').textContent = delivery === 0 ? 'BEPUL' : formatPrice(delivery);
        document.getElementById('drawer-total').textContent = formatPrice(total);
    }

    // Checkout bo'limidagi xulosa oynasini ham yangilash
    updateCheckoutSummary(subtotal, delivery, total);
}

function updateCheckoutSummary(subtotal, delivery, total) {
    const listEl = document.getElementById('checkout-items-list');
    if (cart.length === 0) {
        listEl.innerHTML = `<p style="color: var(--text-gray); font-size: 0.9rem; padding: 12px 0;">Buyurtma berish uchun avval menyudan taom tanlang.</p>`;
    } else {
        listEl.innerHTML = cart.map(item => `
            <div class="checkout-item-row">
                <span>${item.name} <strong>× ${item.quantity}</strong></span>
                <strong>${formatPrice(item.price * item.quantity)}</strong>
            </div>
        `).join('');
    }

    document.getElementById('checkout-subtotal').textContent = formatPrice(subtotal);
    document.getElementById('checkout-delivery').textContent = subtotal === 0 ? '0 so‘m' : (delivery === 0 ? 'BEPUL' : formatPrice(delivery));
    document.getElementById('checkout-total').textContent = formatPrice(total);
}

// ==========================================================================
// SAVATCHA VA MOBIL MENYU OCHISH/YOPISH
// ==========================================================================
const cartDrawer = document.getElementById('cart-drawer');
const cartOverlay = document.getElementById('cart-overlay');
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburger-btn');
const mobileOverlay = document.getElementById('mobile-menu-overlay');

function openCart() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

function toggleMobileMenu() {
    navbar.classList.toggle('open');
    hamburgerBtn.classList.toggle('active');
    mobileOverlay.classList.toggle('open');
}

function closeMobileMenu() {
    navbar.classList.remove('open');
    hamburgerBtn.classList.remove('active');
    mobileOverlay.classList.remove('open');
}

// ==========================================================================
// BUYURTMA FORMASI TEKSHIRUVI VA DEMO YUBORISH (Telegram Botga tayyor)
// ==========================================================================
function validateAndSubmitOrder(e) {
    e.preventDefault();

    if (cart.length === 0) {
        showToast('Savatchangiz bo‘sh! Avval mahsulot tanlang.');
        document.getElementById('menyu').scrollIntoView({ behavior: 'smooth' });
        return;
    }

    const nameInput = document.getElementById('customer-name');
    const phoneInput = document.getElementById('customer-phone');
    const addressInput = document.getElementById('customer-address');
    const landmarkInput = document.getElementById('customer-landmark');
    const noteInput = document.getElementById('customer-note');
    const paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    const errName = document.getElementById('error-name');
    const errPhone = document.getElementById('error-phone');
    const errAddress = document.getElementById('error-address');
    const errLandmark = document.getElementById('error-landmark');

    let isValid = true;

    // 1. Ism tekshiruvi
    if (nameInput.value.trim().length < 3) {
        errName.textContent = 'Iltimos, ism va familiyangizni to‘liq kiriting (kamida 3 ta harf).';
        nameInput.classList.add('invalid');
        isValid = false;
    } else {
        errName.textContent = '';
        nameInput.classList.remove('invalid');
    }

    // 2. Telefon raqami tekshiruvi (+998 bilan 9 ta raqam)
    const cleanPhone = phoneInput.value.replace(/\D/g, '');
    if (cleanPhone.length < 12 || !cleanPhone.startsWith('998')) {
        errPhone.textContent = 'Telefon raqamini to‘g‘ri kiriting. Masalan: +998 90 123 45 67';
        phoneInput.classList.add('invalid');
        isValid = false;
    } else {
        errPhone.textContent = '';
        phoneInput.classList.remove('invalid');
    }

    // 3. Manzil tekshiruvi
    if (addressInput.value.trim().length < 5) {
        errAddress.textContent = 'Andijon shahridagi aniq manzilingizni kiriting.';
        addressInput.classList.add('invalid');
        isValid = false;
    } else {
        errAddress.textContent = '';
        addressInput.classList.remove('invalid');
    }

    // 4. Mo'ljal tekshiruvi
    if (landmarkInput.value.trim().length < 3) {
        errLandmark.textContent = 'Kuryer tez topishi uchun mo‘ljalni kiriting.';
        landmarkInput.classList.add('invalid');
        isValid = false;
    } else {
        errLandmark.textContent = '';
        landmarkInput.classList.remove('invalid');
    }

    if (!isValid) {
        showToast('Iltimos, formadagi xatoliklarni to‘g‘rilang!');
        return;
    }

    // Buyurtma obyektini shakllantirish (Keyinchalik Backend yoki Telegram Bot API ga yuborish uchun tayyor)
    const { subtotal, delivery, total } = calculateTotals();
    const orderNumber = '#AND-' + Math.floor(1000 + Math.random() * 9000);

    const orderPayload = {
        orderId: orderNumber,
        city: 'Andijon shahri',
        customer: {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            address: addressInput.value.trim(),
            landmark: landmarkInput.value.trim(),
            note: noteInput.value.trim(),
            payment: paymentMethod
        },
        items: [...cart],
        pricing: { subtotal, delivery, total },
        createdAt: new Date().toLocaleString('uz-UZ')
    };

    // Konsolda demo natijani ko'rsatish (Telegram bot integratsiyasi uchun namuna)
    console.info('Yangi buyurtma (Backend / Telegram Bot uchun tayyor JSON):', orderPayload);

    // Muvaffaqiyat modalini ko'rsatish
    document.getElementById('modal-order-id').textContent = orderNumber;
    document.getElementById('modal-customer-name').textContent = orderPayload.customer.name;
    document.getElementById('modal-customer-phone').textContent = orderPayload.customer.phone;
    document.getElementById('modal-order-details').innerHTML = `
        <p><strong>Manzil:</strong> Andijon sh., ${orderPayload.customer.address} (Mo‘ljal: ${orderPayload.customer.landmark})</p>
        <p><strong>To‘lov turi:</strong> ${orderPayload.customer.payment}</p>
        <p><strong>Umumiy summa:</strong> <span style="color: var(--primary-orange); font-weight: 800;">${formatPrice(total)}</span></p>
    `;

    document.getElementById('success-modal').classList.add('open');

    // Savatchani va formani tozalash
    cart = [];
    saveCart();
    document.getElementById('order-form').reset();
    phoneInput.value = '+998 ';
}

// ==========================================================================
// EVENT LISTENERS (BARCHA TUGMALAR VA INTERAKTIVLIK)
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
    renderBestsellers();
    renderMenu();
    updateCartUI();

    // Kartochkalardagi +, - va "Savatga qo'shish" tugmalari (Event Delegation)
    document.body.addEventListener('click', (e) => {
        // Kartochka miqdorini oshirish
        if (e.target.closest('.plus-card-qty')) {
            const card = e.target.closest('.product-card');
            const valEl = card.querySelector('.card-qty-val');
            let val = parseInt(valEl.textContent, 10);
            if (val < 50) valEl.textContent = val + 1;
        }

        // Kartochka miqdorini kamaytirish
        if (e.target.closest('.minus-card-qty')) {
            const card = e.target.closest('.product-card');
            const valEl = card.querySelector('.card-qty-val');
            let val = parseInt(valEl.textContent, 10);
            if (val > 1) valEl.textContent = val - 1;
        }

        // Savatga qo'shish tugmasi
        const addBtn = e.target.closest('.add-to-cart-btn');
        if (addBtn) {
            const productId = addBtn.dataset.id;
            const card = addBtn.closest('.product-card');
            const qty = card ? parseInt(card.querySelector('.card-qty-val').textContent, 10) : 1;
            addToCart(productId, qty);
            if (card) card.querySelector('.card-qty-val').textContent = '1';
        }

        // Aksiya bo'limidagi tezkor qo'shish tugmasi
        const promoBtn = e.target.closest('.promo-order-btn');
        if (promoBtn) {
            addToCart(promoBtn.dataset.productId, 1);
            openCart();
        }

        // Savatcha ichidagi +, - va o'chirish tugmalari
        const incBtn = e.target.closest('.cart-inc');
        if (incBtn) updateCartItemQty(incBtn.dataset.id, 1);

        const decBtn = e.target.closest('.cart-dec');
        if (decBtn) updateCartItemQty(decBtn.dataset.id, -1);

        const remBtn = e.target.closest('.remove-item-btn');
        if (remBtn) removeFromCart(remBtn.dataset.id);

        // Bo'sh savatchadan menyuga o'tish
        if (e.target.closest('#empty-cart-menu-btn')) {
            closeCart();
            document.getElementById('menyu').scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Kategoriya tablari
    document.getElementById('category-tabs').addEventListener('click', (e) => {
        const tab = e.target.closest('.cat-tab');
        if (!tab) return;

        document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        activeCategory = tab.dataset.category;
        renderMenu();
    });

    // Qidiruv tizimi
    const searchInput = document.getElementById('search-input');
    const clearSearchBtn = document.getElementById('clear-search-btn');

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        clearSearchBtn.classList.toggle('hidden', searchQuery.length === 0);
        renderMenu();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderMenu();
    });

    document.getElementById('reset-filters-btn').addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        activeCategory = 'all';
        document.querySelectorAll('.cat-tab').forEach(t => t.classList.remove('active'));
        document.querySelector('.cat-tab[data-category="all"]').classList.add('active');
        renderMenu();
    });

    // Savatcha ochish/yopish tugmalari
    document.getElementById('open-cart-btn').addEventListener('click', openCart);
    document.getElementById('close-cart-btn').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    document.getElementById('clear-cart-btn').addEventListener('click', clearCart);

    document.getElementById('go-to-checkout-btn').addEventListener('click', () => {
        closeCart();
        document.getElementById('buyurtma-berish').scrollIntoView({ behavior: 'smooth' });
    });

    // Mobil menyu
    hamburgerBtn.addEventListener('click', toggleMobileMenu);
    mobileOverlay.addEventListener('click', closeMobileMenu);
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', closeMobileMenu);
    });

    // Buyurtma formasi
    document.getElementById('order-form').addEventListener('submit', validateAndSubmitOrder);

    // Muvaffaqiyat modalini yopish
    document.getElementById('close-success-modal').addEventListener('click', () => {
        document.getElementById('success-modal').classList.remove('open');
    });

    // Scroll effektlari (Header va Reveal animatsiyalari)
    const header = document.getElementById('header');
    const revealElements = document.querySelectorAll('.reveal');

    const handleScroll = () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        revealElements.forEach(el => {
            const top = el.getBoundingClientRect().top;
            if (top < window.innerHeight - 70) {
                el.classList.add('visible');
            }
        });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
});