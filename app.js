/* =============================================
   FRESHMART – COMPLETE APP LOGIC (app.js)
   ============================================= */

'use strict';

// =============================================
// 1. PRODUCT DATA
// =============================================
// Product image paths (relative to project root)
const IMG_BASE = 'C:/Users/Purushoth V/.gemini/antigravity/brain/869a52b5-59fb-4b66-b10b-e43a971637a7/';
const IMGS = {
  tomatoes:   IMG_BASE + 'tomatoes_product_1773839723027.png',
  broccoli:   IMG_BASE + 'broccoli_product_1773839739586.png',
  carrots:    IMG_BASE + 'carrots_product_1773839768920.png',
  bellpepper: IMG_BASE + 'bell_peppers_product_1773839787718.png',
  spinach:    IMG_BASE + 'spinach_product_1773839805113.png',
  cucumber:   IMG_BASE + 'cucumber_product_1773839837025.png',
  onion:      IMG_BASE + 'onion_potato_product_1773839853473.png',
  potato:     IMG_BASE + 'onion_potato_product_1773839853473.png',
  fruits:     IMG_BASE + 'fruits_product_1773839881651.png',
  dairy:      IMG_BASE + 'dairy_product_1773839902369.png',
  bakery:     IMG_BASE + 'bakery_meat_product_1773839919827.png',
  beverages:  IMG_BASE + 'beverages_snacks_product_1773839952287.png',
  snacks:     IMG_BASE + 'beverages_snacks_product_1773839952287.png',
  meat:       IMG_BASE + 'meat_product_1773839970287.png',
};

const PRODUCTS = [
  // VEGETABLES
  { id: 1,  name: 'Fresh Tomatoes',    category: 'vegetables', emoji: '🍅', img: IMGS.tomatoes,   price: 35,  originalPrice: 55,  unit: '500g',    rating: 4.8, reviews: 284, badge: 'Fresh',   inStock: true },
  { id: 2,  name: 'Broccoli',          category: 'vegetables', emoji: '🥦', img: IMGS.broccoli,   price: 65,  originalPrice: 90,  unit: '500g',    rating: 4.6, reviews: 142, badge: 'Organic', inStock: true },
  { id: 3,  name: 'Carrots',           category: 'vegetables', emoji: '🥕', img: IMGS.carrots,    price: 30,  originalPrice: 45,  unit: '1 kg',    rating: 4.7, reviews: 320, badge: 'Fresh',   inStock: true },
  { id: 4,  name: 'Bell Peppers',      category: 'vegetables', emoji: '🫑', img: IMGS.bellpepper, price: 80,  originalPrice: 110, unit: '3 pcs',   rating: 4.5, reviews: 198, badge: 'Hot',     inStock: true },
  { id: 5,  name: 'Spinach',           category: 'vegetables', emoji: '🥬', img: IMGS.spinach,    price: 25,  originalPrice: 40,  unit: '250g',    rating: 4.9, reviews: 412, badge: 'Organic', inStock: true },
  { id: 6,  name: 'Cucumber',          category: 'vegetables', emoji: '🥒', img: IMGS.cucumber,   price: 20,  originalPrice: 30,  unit: '2 pcs',   rating: 4.4, reviews: 87,  badge: 'Fresh',   inStock: true },
  { id: 7,  name: 'Onions',            category: 'vegetables', emoji: '🧅', img: IMGS.onion,      price: 40,  originalPrice: 55,  unit: '1 kg',    rating: 4.6, reviews: 510, badge: null,      inStock: true },
  { id: 8,  name: 'Potatoes',          category: 'vegetables', emoji: '🥔', img: IMGS.potato,     price: 35,  originalPrice: 50,  unit: '1 kg',    rating: 4.5, reviews: 680, badge: null,      inStock: true },

  // FRUITS
  { id: 9,  name: 'Red Apples',        category: 'fruits',     emoji: '🍎', img: IMGS.fruits,     price: 120, originalPrice: 160, unit: '1 kg',    rating: 4.8, reviews: 356, badge: 'Organic', inStock: true },
  { id: 10, name: 'Bananas',           category: 'fruits',     emoji: '🍌', img: IMGS.fruits,     price: 45,  originalPrice: 60,  unit: '1 dozen', rating: 4.7, reviews: 425, badge: 'Fresh',   inStock: true },
  { id: 11, name: 'Oranges',           category: 'fruits',     emoji: '🍊', img: IMGS.fruits,     price: 90,  originalPrice: 120, unit: '1 kg',    rating: 4.6, reviews: 278, badge: null,      inStock: true },
  { id: 12, name: 'Mangoes',           category: 'fruits',     emoji: '🥭', img: IMGS.fruits,     price: 180, originalPrice: 240, unit: '1 kg',    rating: 4.9, reviews: 688, badge: 'Hot',     inStock: true },
  { id: 13, name: 'Grapes',            category: 'fruits',     emoji: '🍇', img: IMGS.fruits,     price: 110, originalPrice: 145, unit: '500g',    rating: 4.7, reviews: 312, badge: 'Fresh',   inStock: true },
  { id: 14, name: 'Strawberries',      category: 'fruits',     emoji: '🍓', img: IMGS.fruits,     price: 150, originalPrice: 200, unit: '250g',    rating: 4.8, reviews: 198, badge: 'Organic', inStock: true },
  { id: 15, name: 'Pineapple',         category: 'fruits',     emoji: '🍍', img: IMGS.fruits,     price: 85,  originalPrice: 110, unit: '1 pc',    rating: 4.5, reviews: 145, badge: null,      inStock: true },
  { id: 16, name: 'Watermelon',        category: 'fruits',     emoji: '🍉', img: IMGS.fruits,     price: 120, originalPrice: 150, unit: '1 pc',    rating: 4.4, reviews: 98,  badge: null,      inStock: true },

  // DAIRY
  { id: 17, name: 'Full Cream Milk',   category: 'dairy',      emoji: '🥛', img: IMGS.dairy,      price: 55,  originalPrice: 65,  unit: '1 litre', rating: 4.8, reviews: 920, badge: 'Fresh',   inStock: true },
  { id: 18, name: 'Fresh Paneer',      category: 'dairy',      emoji: '🧀', img: IMGS.dairy,      price: 85,  originalPrice: 110, unit: '200g',    rating: 4.7, reviews: 445, badge: 'Organic', inStock: true },
  { id: 19, name: 'Farm Eggs',         category: 'dairy',      emoji: '🥚', img: IMGS.dairy,      price: 72,  originalPrice: 90,  unit: '12 pcs',  rating: 4.9, reviews: 732, badge: 'Fresh',   inStock: true },
  { id: 20, name: 'Amul Butter',       category: 'dairy',      emoji: '🧈', img: IMGS.dairy,      price: 60,  originalPrice: 75,  unit: '100g',    rating: 4.6, reviews: 621, badge: null,      inStock: true },
  { id: 21, name: 'Greek Yogurt',      category: 'dairy',      emoji: '🫙', img: IMGS.dairy,      price: 95,  originalPrice: 120, unit: '400g',    rating: 4.7, reviews: 289, badge: 'Organic', inStock: true },
  { id: 22, name: 'Cheddar Cheese',    category: 'dairy',      emoji: '🧀', img: IMGS.dairy,      price: 185, originalPrice: 220, unit: '200g',    rating: 4.5, reviews: 178, badge: null,      inStock: true },

  // BAKERY
  { id: 23, name: 'Whole Wheat Bread', category: 'bakery',     emoji: '🍞', img: IMGS.bakery,     price: 45,  originalPrice: 55,  unit: '400g',    rating: 4.6, reviews: 534, badge: 'Fresh',   inStock: true },
  { id: 24, name: 'Butter Croissant',  category: 'bakery',     emoji: '🥐', img: IMGS.bakery,     price: 35,  originalPrice: 45,  unit: '2 pcs',   rating: 4.8, reviews: 312, badge: 'Hot',     inStock: true },
  { id: 25, name: 'Blueberry Muffin',  category: 'bakery',     emoji: '🧁', img: IMGS.bakery,     price: 65,  originalPrice: 80,  unit: '2 pcs',   rating: 4.7, reviews: 245, badge: null,      inStock: true },
  { id: 26, name: 'Sourdough Loaf',    category: 'bakery',     emoji: '🍞', img: IMGS.bakery,     price: 120, originalPrice: 150, unit: '600g',    rating: 4.9, reviews: 189, badge: 'Organic', inStock: true },

  // BEVERAGES
  { id: 27, name: 'Orange Juice',      category: 'beverages',  emoji: '🍊', img: IMGS.beverages,  price: 75,  originalPrice: 95,  unit: '1 litre', rating: 4.7, reviews: 412, badge: 'Fresh',   inStock: true },
  { id: 28, name: 'Green Tea',         category: 'beverages',  emoji: '🍵', img: IMGS.beverages,  price: 180, originalPrice: 220, unit: '30 bags', rating: 4.8, reviews: 567, badge: 'Organic', inStock: true },
  { id: 29, name: 'Coconut Water',     category: 'beverages',  emoji: '🥥', img: IMGS.beverages,  price: 45,  originalPrice: 60,  unit: '250ml',   rating: 4.6, reviews: 234, badge: 'Fresh',   inStock: true },
  { id: 30, name: 'Cold Coffee',       category: 'beverages',  emoji: '☕', img: IMGS.beverages,  price: 85,  originalPrice: 110, unit: '300ml',   rating: 4.5, reviews: 345, badge: 'Hot',     inStock: true },

  // SNACKS
  { id: 31, name: 'Almonds',           category: 'snacks',     emoji: '🥜', img: IMGS.snacks,     price: 280, originalPrice: 350, unit: '250g',    rating: 4.9, reviews: 782, badge: 'Organic', inStock: true },
  { id: 32, name: 'Mixed Nuts',        category: 'snacks',     emoji: '🌰', img: IMGS.snacks,     price: 320, originalPrice: 400, unit: '200g',    rating: 4.8, reviews: 421, badge: null,      inStock: true },
  { id: 33, name: 'Popcorn',           category: 'snacks',     emoji: '🍿', img: IMGS.snacks,     price: 55,  originalPrice: 70,  unit: '150g',    rating: 4.5, reviews: 312, badge: null,      inStock: true },
  { id: 34, name: 'Dark Chocolate',    category: 'snacks',     emoji: '🍫', img: IMGS.snacks,     price: 145, originalPrice: 180, unit: '100g',    rating: 4.7, reviews: 598, badge: 'Hot',     inStock: true },

  // MEAT
  { id: 35, name: 'Chicken Breast',    category: 'meat',       emoji: '🍗', img: IMGS.meat,       price: 220, originalPrice: 280, unit: '500g',    rating: 4.7, reviews: 445, badge: 'Fresh',   inStock: true },
  { id: 36, name: 'Salmon Fillet',     category: 'meat',       emoji: '🐟', img: IMGS.meat,       price: 380, originalPrice: 450, unit: '400g',    rating: 4.8, reviews: 234, badge: 'Fresh',   inStock: true },
  { id: 37, name: 'Prawns',            category: 'meat',       emoji: '🦐', img: IMGS.meat,       price: 280, originalPrice: 340, unit: '500g',    rating: 4.6, reviews: 312, badge: 'Fresh',   inStock: true },
  { id: 38, name: 'Mutton Keema',      category: 'meat',       emoji: '🥩', img: IMGS.meat,       price: 340, originalPrice: 420, unit: '500g',    rating: 4.5, reviews: 189, badge: null,      inStock: true },
];

// =============================================
// 2. STATE
// =============================================
let cart = JSON.parse(localStorage.getItem('fm_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('fm_wishlist') || '[]');
let currentCategory = 'all';
let currentSort = 'default';
let searchQuery = '';
let currentOrderId = '';
let currentStep = 1;
let trackingInterval = null;
let trackingStep = 1;
let currentUserPhone = '';

// =============================================
// 3. LOADER
// =============================================
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('fade-out');
    setTimeout(() => document.getElementById('loader').remove(), 700);
    renderProducts();
    initScrollReveal();
    updateCartUI();
  }, 2400);
});

// =============================================
// 4. NAVBAR SCROLL
// =============================================
const nav = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 50);
});

// =============================================
// 5. TOAST
// =============================================
function showToast(msg, type = '') {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.className = `toast show ${type}`;
  setTimeout(() => t.classList.remove('show'), 3000);
}

// =============================================
// 6. PRODUCT RENDERING
// =============================================
function getFilteredProducts() {
  let prods = PRODUCTS.slice();
  if (currentCategory !== 'all') prods = prods.filter(p => p.category === currentCategory);
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    prods = prods.filter(p => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q));
  }
  if (currentSort === 'price-asc') prods.sort((a, b) => a.price - b.price);
  else if (currentSort === 'price-desc') prods.sort((a, b) => b.price - a.price);
  else if (currentSort === 'name') prods.sort((a, b) => a.name.localeCompare(b.name));
  else if (currentSort === 'rating') prods.sort((a, b) => b.rating - a.rating);
  return prods;
}

function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const prods = getFilteredProducts();
  document.getElementById('resultsCount').textContent = prods.length;
  grid.innerHTML = '';
  if (!prods.length) {
    grid.innerHTML = '<div style="grid-column:1/-1;text-align:center;padding:60px;color:#94a3b8;font-size:18px;">😕 No products found. Try a different search.</div>';
    return;
  }
  prods.forEach((p, i) => {
    const inCart = getCartItem(p.id);
    const inWish = wishlist.includes(p.id);
    const discount = Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100);
    const stars = '★'.repeat(Math.floor(p.rating)) + (p.rating % 1 >= 0.5 ? '½' : '');
    const badgeClass = p.badge ? p.badge.toLowerCase() : '';

    const card = document.createElement('div');
    card.className = 'product-card reveal';
    card.style.transitionDelay = `${(i % 8) * 0.06}s`;
    card.innerHTML = `
      <div class="product-img-wrap">
        ${p.img
          ? `<img src="${p.img}" alt="${p.name}" class="product-real-img" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'" />
             <div class="product-emoji" style="display:none">${p.emoji}</div>`
          : `<div class="product-emoji">${p.emoji}</div>`
        }
        ${p.badge ? `<span class="product-badge ${badgeClass}">${p.badge}</span>` : ''}
        <button class="product-wishlist ${inWish ? 'active' : ''}" onclick="toggleWishlist(${p.id}, event)" title="Wishlist">
          ${inWish ? '❤️' : '🤍'}
        </button>
      </div>
      <div class="product-info">
        <div class="product-category">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">
          <span class="stars">${stars}</span>
          <span class="rating-val">${p.rating} (${p.reviews})</span>
        </div>
        <div class="product-price-row">
          <div class="product-price">
            <span class="price-current">₹${p.price}</span>
            <span class="price-original">₹${p.originalPrice}</span>
          </div>
          ${inCart
            ? `<div class="product-in-cart">
                <button class="qty-btn" onclick="changeCartQty(${p.id}, -1, event)">−</button>
                <span class="qty-val">${inCart.qty}</span>
                <button class="qty-btn" onclick="changeCartQty(${p.id}, 1, event)">+</button>
               </div>`
            : `<button class="btn-add" onclick="addToCart(${p.id}, event)" title="Add to cart">+</button>`
          }
        </div>
        <div class="product-unit-info">${p.unit} • <span class="discount-tag">${discount}% OFF</span></div>
      </div>
    `;
    grid.appendChild(card);
  });
  initScrollReveal();
}

// =============================================
// 7. CART LOGIC
// =============================================
function getCartItem(id) { return cart.find(i => i.id === id); }

function addToCart(id, event) {
  if (event) { event.stopPropagation(); }
  const prod = PRODUCTS.find(p => p.id === id);
  if (!prod) return;
  const existing = getCartItem(id);
  if (existing) { existing.qty++; }
  else { cart.push({ ...prod, qty: 1 }); }
  saveCart();
  updateCartUI();
  renderProducts();
  showToast(`✅ ${prod.name} added to cart!`, 'success');
  animateCartBadge();
}

function changeCartQty(id, delta, event) {
  if (event) event.stopPropagation();
  const item = getCartItem(id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) { cart = cart.filter(i => i.id !== id); }
  saveCart();
  updateCartUI();
  renderProducts();
  renderCartItems();
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCartUI();
  renderProducts();
  renderCartItems();
  showToast('Item removed from cart');
}

function saveCart() { localStorage.setItem('fm_cart', JSON.stringify(cart)); }

function getCartTotals() {
  const subtotal = cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  const delivery = subtotal >= 499 ? 0 : 40;
  return { subtotal, delivery, total: subtotal + delivery };
}

function updateCartUI() {
  const totalItems = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  const navBadge = document.getElementById('navCartCount');
  [badge, navBadge].forEach(b => {
    if (totalItems > 0) { b.textContent = totalItems; b.classList.remove('hidden'); }
    else { b.classList.add('hidden'); }
  });
  const { subtotal, delivery, total } = getCartTotals();
  document.getElementById('cartSubtotal').textContent = `₹${subtotal.toFixed(2)}`;
  document.getElementById('cartDelivery').textContent = delivery === 0 ? 'FREE 🎉' : `₹${delivery.toFixed(2)}`;
  document.getElementById('cartTotal').textContent = `₹${total.toFixed(2)}`;
  const checkoutBtn = document.getElementById('checkoutBtn');
  checkoutBtn.disabled = cart.length === 0;
}

function renderCartItems() {
  const container = document.getElementById('cartItems');
  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty"><span>🛒</span><p>Your cart is empty</p><small>Add items to get started!</small></div>`;
    return;
  }
  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">${item.emoji}</div>
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <div class="price">₹${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="changeCartQty(${item.id}, -1)">−</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="changeCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.id})">🗑️</button>
    </div>
  `).join('');
}

function animateCartBadge() {
  const badge = document.getElementById('cartBadge');
  badge.style.animation = 'none';
  badge.offsetHeight;
  badge.style.animation = 'pop 0.3s cubic-bezier(0.68,-0.55,0.27,1.55)';
}

// =============================================
// 8. CART SIDEBAR
// =============================================
function openCart() {
  renderCartItems();
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}
function closeCartFn() {
  document.getElementById('cartSidebar').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('active');
  document.body.style.overflow = '';
}
document.getElementById('floatCart').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCartFn);
document.getElementById('cartOverlay').addEventListener('click', closeCartFn);
document.getElementById('checkoutBtn').addEventListener('click', () => {
  closeCartFn();
  openPaymentModal();
});

// =============================================
// 9. WISHLIST
// =============================================
function toggleWishlist(id, event) {
  if (event) event.stopPropagation();
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(w => w !== id);
    showToast('💔 Removed from wishlist');
  } else {
    wishlist.push(id);
    showToast('❤️ Added to wishlist!', 'success');
  }
  localStorage.setItem('fm_wishlist', JSON.stringify(wishlist));
  renderProducts();
}

// =============================================
// 10. FILTER & SORT
// =============================================
function filterCategory(cat) {
  currentCategory = cat;
  document.querySelectorAll('.category-card').forEach(c => c.classList.toggle('active', c.dataset.cat === cat));
  renderProducts();
  document.getElementById('products').scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function sortProducts() {
  currentSort = document.getElementById('sortSelect').value;
  renderProducts();
}
document.getElementById('searchInput').addEventListener('input', function () {
  searchQuery = this.value.trim();
  renderProducts();
  if (searchQuery) document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
});

// =============================================
// 11. PAYMENT MODAL
// =============================================
function openPaymentModal() {
  currentStep = 1;
  renderPaymentStep();
  document.getElementById('paymentModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}
document.getElementById('closePayment').addEventListener('click', () => {
  document.getElementById('paymentModal').classList.add('hidden');
  document.body.style.overflow = '';
});

function renderPaymentStep() {
  ['formInfo', 'formPay', 'formDone'].forEach((f, i) => {
    document.getElementById(f).classList.toggle('hidden', i !== currentStep - 1);
  });
  ['stepInfo', 'stepPay', 'stepDone'].forEach((s, i) => {
    const el = document.getElementById(s);
    el.classList.remove('active', 'completed');
    if (i + 1 === currentStep) el.classList.add('active');
    if (i + 1 < currentStep) el.classList.add('completed');
  });
}

function goToPayment() {
  const name = document.getElementById('userName').value.trim();
  const phone = document.getElementById('userPhone').value.trim();
  const address = document.getElementById('userAddress').value.trim();
  if (!name || !phone || !address) { showToast('⚠️ Please fill all fields', 'error'); return; }
  currentUserPhone = phone;
  currentStep = 2;
  renderPaymentStep();
  renderMiniCart();
}

function renderMiniCart() {
  const container = document.getElementById('miniCartItems');
  const { subtotal, delivery, total } = getCartTotals();
  container.innerHTML = cart.map(i => `
    <div class="mini-item"><span>${i.emoji} ${i.name} ×${i.qty}</span><span>₹${(i.price * i.qty).toFixed(2)}</span></div>
  `).join('');
  if (delivery === 0) container.innerHTML += `<div class="mini-item" style="color:#22c55e"><span>Delivery</span><span>FREE 🎉</span></div>`;
  document.getElementById('miniTotal').textContent = `₹${total.toFixed(2)}`;
}

// Payment methods
document.querySelectorAll('.pay-method').forEach(m => {
  m.addEventListener('click', function () {
    document.querySelectorAll('.pay-method').forEach(x => x.classList.remove('active'));
    this.classList.add('active');
    const method = this.dataset.method;
    document.getElementById('upiSection').classList.toggle('hidden', method !== 'upi');
    document.getElementById('cardSection').classList.toggle('hidden', method !== 'card');
  });
});

function processPayment() {
  const payBtn = document.querySelector('.pay-btn');
  const btnText = payBtn.querySelector('.pay-btn-text');
  const spinner = payBtn.querySelector('.pay-spinner');
  btnText.classList.add('hidden');
  spinner.classList.remove('hidden');
  payBtn.disabled = true;

  setTimeout(() => {
    currentStep = 3;
    currentOrderId = 'FM-' + Math.floor(100000 + Math.random() * 900000);
    renderPaymentStep();
    document.getElementById('orderId').textContent = `Order ID: ${currentOrderId}`;
    document.getElementById('confirmMsg').textContent = `Thank you! Your order ${currentOrderId} has been placed successfully.`;
    cart = [];
    saveCart();
    updateCartUI();
    renderProducts();
    btnText.classList.remove('hidden');
    spinner.classList.add('hidden');
    payBtn.disabled = false;
  }, 2800);
}

// =============================================
// 12. WHATSAPP INTEGRATION
// =============================================
function getWhatsAppUrl(phone, msg) {
  const cleaned = phone.replace(/[^0-9]/g, '');
  const num = cleaned.startsWith('91') ? cleaned : '91' + cleaned;
  return `https://wa.me/${num}?text=${encodeURIComponent(msg)}`;
}

function sendWhatsAppConfirmation() {
  const { subtotal, delivery, total } = getCartTotals();
  const name = document.getElementById('userName').value;
  const address = document.getElementById('userAddress').value;
  const lastOrder = JSON.parse(localStorage.getItem('fm_last_order') || '[]');
  const itemList = lastOrder.length
    ? lastOrder.map(i => `  ✅ ${i.name} × ${i.qty}  →  ₹${(i.price * i.qty).toFixed(2)}`).join('\n')
    : '  • Selected grocery items';
  const deliveryText = delivery === 0 ? 'FREE 🎉' : `₹${delivery.toFixed(2)}`;
  const now = new Date();
  const eta = new Date(now.getTime() + 35 * 60000);
  const etaStr = eta.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });

  const msg =
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `🛒 *FreshMart – Order Confirmed!*\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `Hello *${name}* 👋\n` +
    `Your order has been *successfully placed* and is being prepared!\n\n` +
    `📋 *Order Details*\n` +
    `🆔 Order ID: *${currentOrderId}*\n` +
    `📅 Date: ${now.toLocaleDateString('en-IN')}  |  🕐 ${now.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'})}\n\n` +
    `🛍️ *Items Ordered:*\n` +
    `${itemList}\n\n` +
    `💰 *Bill Summary*\n` +
    `  Subtotal  :  ₹${subtotal.toFixed(2)}\n` +
    `  Delivery  :  ${deliveryText}\n` +
    `  ─────────────────\n` +
    `  *Total Paid  :  ₹${total.toFixed(2)}*\n\n` +
    `📍 *Delivery Address:*\n  ${address}\n\n` +
    `⏱️ *Estimated Arrival:* ~${etaStr}\n` +
    `🛵 Our rider will be at your door within 30–45 mins!\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `📲 *Track your order live – updates will follow automatically!*\n\n` +
    `Need help? Reply *HELP* or call us:\n` +
    `📞 +91 98765 43210\n\n` +
    `🌿 *Thank you for choosing FreshMart!*\n` +
    `💚 Fresh • Fast • Delivered`;

  window.open(getWhatsAppUrl(currentUserPhone, msg), '_blank');
}

function sendWhatsAppTracking() {
  const now = new Date();
  const msg =
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `📦 *FreshMart – Live Order Tracking*\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `🆔 Order: *${currentOrderId}*\n` +
    `🕐 Placed at: ${now.toLocaleTimeString('en-IN', {hour:'2-digit', minute:'2-digit'})}\n\n` +
    `📍 *Real-Time Status Updates:*\n\n` +
    `✅  *Order Confirmed*  ← You are here\n` +
    `🔄  Preparing your order...\n` +
    `📦  Packed & Ready for pickup\n` +
    `🛵  Out for Delivery\n` +
    `🏠  Delivered!\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `💡 *What happens next?*\n` +
    `We'll message you at each stage automatically.\n` +
    `You'll get your rider's name & number when they leave our store!\n\n` +
    `⏱️ *Estimated Delivery:* 30–45 minutes\n\n` +
    `📞 Support: +91 98765 43210\n` +
    `Reply *CANCEL* within 2 mins to cancel the order.\n\n` +
    `🌿 *FreshMart – Fresh, Fast & Reliable!*`;
  window.open(getWhatsAppUrl(currentUserPhone, msg), '_blank');
}

function sendOutForDeliveryWA() {
  const phone = currentUserPhone || document.getElementById('userPhone')?.value || '';
  const now = new Date();
  const eta = new Date(now.getTime() + 13 * 60000);
  const etaStr = eta.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
  const msg =
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `🛵 *FreshMart – Out for Delivery!*\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n\n` +
    `🎉 Great news! Your order *${currentOrderId || 'FM-DEMO'}* is on its way!\n\n` +
    `🧑‍🚀 *Your Delivery Rider:*\n` +
    `   👤 Name: *Rajesh Kumar*\n` +
    `   📞 Mobile: *+91 98765 12345*\n` +
    `   🏍️ Vehicle: KA 05 MX 4422\n\n` +
    `⏱️ *ETA:* ${etaStr} (approx. 12–15 mins)\n\n` +
    `📍 *Please ensure someone is available to receive the order.*\n\n` +
    `━━━━━━━━━━━━━━━━━━━━━\n` +
    `💡 *Tips:*\n` +
    `• Keep your phone handy — rider may call\n` +
    `• Check all items upon delivery\n` +
    `• Rate your experience after delivery!\n\n` +
    `📞 Help: +91 98765 43210\n\n` +
    `🌿 *FreshMart – Delivering Freshness to Your Door!* 💚`;
  const num = phone ? phone.replace(/[^0-9]/g, '') : '919876543210';
  window.open(`https://wa.me/${num.startsWith('91') ? num : '91' + num}?text=${encodeURIComponent(msg)}`, '_blank');
}

// =============================================
// 13. TRACKING MODAL
// =============================================
function openTracking() {
  document.getElementById('paymentModal').classList.add('hidden');
  document.getElementById('trackerModal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (currentOrderId) document.getElementById('trackerOrderId').textContent = `Order ${currentOrderId}`;
  document.getElementById('ds1Time').textContent = new Date().toLocaleTimeString();
  startTracking();
}
function closeTracker() {
  document.getElementById('trackerModal').classList.add('hidden');
  document.body.style.overflow = '';
  if (trackingInterval) clearInterval(trackingInterval);
}

function startTracking() {
  if (trackingInterval) clearInterval(trackingInterval);
  trackingStep = 1;
  applyTrackingStep(trackingStep);
  const steps = [2, 3, 4, 5];
  let i = 0;
  trackingInterval = setInterval(() => {
    if (i >= steps.length) { clearInterval(trackingInterval); return; }
    trackingStep = steps[i];
    applyTrackingStep(trackingStep);
    const etas = ['25 mins', '18 mins', '10 mins', 'Delivered! 🎉'];
    document.getElementById('etaTime').textContent = etas[i];
    i++;
  }, 4000);
}

function applyTrackingStep(step) {
  for (let s = 1; s <= 5; s++) {
    const el = document.getElementById(`ds${s}`);
    el.classList.remove('active', 'completed');
    if (s < step) el.classList.add('completed');
    if (s === step) el.classList.add('active');
  }
}

function continueShopping() {
  document.getElementById('paymentModal').classList.add('hidden');
  document.body.style.overflow = '';
}

// =============================================
// 14. SCROLL REVEAL
// =============================================
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
  document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
}

// =============================================
// 15. INIT & MISC
// =============================================
// Save last order before payment is processed
document.querySelector('.pay-btn')?.addEventListener('click', () => {
  localStorage.setItem('fm_last_order', JSON.stringify(cart));
});

// Keyboard: Escape closes modals
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    closeCartFn();
    document.getElementById('paymentModal').classList.add('hidden');
    closeTracker();
    document.body.style.overflow = '';
  }
});

// Add reveal classes to section elements on init
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.category-card').forEach((el, i) => {
    el.classList.add('reveal'); el.style.transitionDelay = `${i * 0.05}s`;
  });
  document.querySelectorAll('.offer-card').forEach((el, i) => {
    el.classList.add('reveal'); el.style.transitionDelay = `${i * 0.1}s`;
  });
  document.querySelectorAll('.wa-feature').forEach((el, i) => {
    el.classList.add('reveal-left'); el.style.transitionDelay = `${i * 0.1}s`;
  });
  document.querySelectorAll('.footer-col').forEach((el, i) => {
    el.classList.add('reveal'); el.style.transitionDelay = `${i * 0.1}s`;
  });
  initScrollReveal();
});

console.log('%c🛒 FreshMart App Loaded!', 'color:#22c55e;font-size:16px;font-weight:bold;');
