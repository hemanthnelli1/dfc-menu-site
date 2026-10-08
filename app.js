const IMAGE_BY_TYPE = {
  pizza: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=82',
  wings: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=700&q=82',
  burger: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=82',
  fries: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=82',
  meal: 'https://images.unsplash.com/photo-1626082927389-6cd097cee6a6?auto=format&fit=crop&w=700&q=82',
  popcorn: 'https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=700&q=82',
  lollipop: 'https://images.unsplash.com/photo-1603073163308-9654c3fb70b5?auto=format&fit=crop&w=700&q=82',
  nuggets: 'https://images.unsplash.com/photo-1562967915-92ae0c320a01?auto=format&fit=crop&w=700&q=82',
  strips: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=82',
  bucket: 'https://images.unsplash.com/photo-1569058242253-92a9c755a0ec?auto=format&fit=crop&w=700&q=82',
  samosa: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=82',
  cheese: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=700&q=82',
  family: 'dfc-food-spread.png',
  water: 'https://images.unsplash.com/photo-1559839914-17aae19cec71?auto=format&fit=crop&w=700&q=82'
};

const DFC_LOCATIONS = {
  all: {
    label: 'All DFC locations',
    name: 'Choose your DFC outlet',
    address: 'Select a branch to see its address, timing and directions.',
    rating: '5 DFC locations',
    price: 'Menu varies by outlet',
    hours: 'Choose a branch',
    directions: '#branches'
  },
  gajuwaka: {
    label: 'Gajuwaka, Vizag',
    name: 'DFC Gajuwaka',
    address: 'Old Gajuwaka, opposite AVK College, Vizag',
    rating: '4.6 ★ · 6.7K+ ratings',
    price: '₹250 for two',
    hours: 'Open · Closes 9:30 PM',
    directions: 'https://www.google.com/maps/search/?api=1&query=Deccan+Fried+Chicken+Gajuwaka'
  },
  rushikonda: {
    label: 'Rushikonda, Vizag',
    name: 'DFC Rushikonda',
    address: 'DNO-101, Yendada, Endada, Andhra Pradesh 530045',
    rating: '3.9 ★ · 1.6K ratings',
    price: '₹200–400',
    hours: 'Open · Closes 10:00 PM',
    directions: 'https://www.google.com/maps/search/?api=1&query=Deccan+Fried+Chicken+SAGARNAGAR+Rushikonda+Yendada'
  },
  kurmannapalem: {
    label: 'Kurmannapalem, Gajuwaka',
    name: 'Dakshin Fried Chicken',
    address: 'Siddhartha Nagar, Kurmannapalem, Gajuwaka, Andhra Pradesh 530046',
    rating: '4.1 ★ · 38 ratings',
    price: '₹200–400',
    hours: 'Open · Closes 9:30 PM',
    directions: 'https://www.google.com/maps/search/?api=1&query=Dakshin+Fried+Chicken+Siddhartha+Nagar+Kurmannapalem+Gajuwaka'
  },
  rajamahendravaram: {
    label: 'Rajamahendravaram',
    name: 'DFC Rajamahendravaram',
    address: 'Gandhipuram, beside Vasan Eye Care, Rajamahendravaram 533103',
    rating: '3.6 ★ · 1.2K ratings',
    price: '₹200–800',
    hours: 'Open · Closes 11:00 PM',
    directions: 'https://www.google.com/maps/search/?api=1&query=Deccan+Fried+Chicken+Gandhipuram+Rajamahendravaram'
  },
  atchutapuram: {
    label: 'Atchutapuram',
    name: 'DFC Atchutapuram',
    address: 'Anakapalli Road, Atchutapuram, Andhra Pradesh 531011',
    rating: '4.4 ★ · 19 ratings',
    price: '₹200–400',
    hours: 'Open · Closes 9:30 PM',
    directions: 'https://www.google.com/maps/search/?api=1&query=DFC+Deccan+Fried+Chicken+Atchutapuram'
  }
};

const money = amount => `₹${Number(amount).toLocaleString('en-IN')}`;
const escapeHTML = value => String(value).replace(/[&<>'"]/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[char]));

let cart = JSON.parse(localStorage.getItem('dfc-cart') || '[]');
let activeFilter = 'all';
let activeCategory = 'All';

function saveCart() {
  localStorage.setItem('dfc-cart', JSON.stringify(cart));
  refreshCart();
}

function cartQuantity() {
  return cart.reduce((total, item) => total + item.qty, 0);
}

function addToCart(index) {
  const existing = cart.find(item => item.index === index);
  if (existing) existing.qty += 1;
  else cart.push({ index, qty: 1 });
  saveCart();
  showToast(`${DFC_MENU[index].name} added to your order`);
}

function adjustCart(index, change) {
  const existing = cart.find(item => item.index === index);
  if (!existing) return;
  existing.qty += change;
  if (existing.qty <= 0) cart = cart.filter(item => item.index !== index);
  saveCart();
}

function renderCart() {
  const container = document.getElementById('cart-items');
  const subtotal = document.getElementById('cart-subtotal');
  if (!container || !subtotal) return;

  if (!cart.length) {
    container.innerHTML = '<div class="cart-empty"><div class="display" style="font-size:34px">YOUR CART<br>IS EMPTY.</div><p>Add your DFC favourites and they will appear here.</p></div>';
    subtotal.textContent = '₹0';
    return;
  }

  container.innerHTML = cart.map(({ index, qty }) => {
    const item = DFC_MENU[index];
    return `<div class="cart-line">
      <div><strong>${escapeHTML(item.name)}</strong><small>${money(item.price)} each</small></div>
      <div><strong>${money(item.price * qty)}</strong><div class="quantity"><button aria-label="Remove one ${escapeHTML(item.name)}" data-cart-adjust="${index}" data-change="-1">−</button><span>${qty}</span><button aria-label="Add one ${escapeHTML(item.name)}" data-cart-adjust="${index}" data-change="1">+</button></div></div>
    </div>`;
  }).join('');
  subtotal.textContent = money(cart.reduce((total, line) => total + (DFC_MENU[line.index].price * line.qty), 0));
}

function refreshCart() {
  document.querySelectorAll('[data-cart-count]').forEach(el => el.textContent = cartQuantity());
  renderCart();
}

function openCart() {
  document.getElementById('cart-drawer')?.classList.add('open');
  document.getElementById('drawer-backdrop')?.classList.add('show');
  document.body.classList.add('no-scroll');
}

function closeCart() {
  document.getElementById('cart-drawer')?.classList.remove('open');
  document.getElementById('drawer-backdrop')?.classList.remove('show');
  document.body.classList.remove('no-scroll');
}

let toastTimer;
function showToast(message) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
}

function menuDestination() {
  return new URL('menu.html', window.location.href).href;
}

function initQRCode() {
  const destination = menuDestination();
  const source = `https://api.qrserver.com/v1/create-qr-code/?size=600x600&margin=0&format=png&data=${encodeURIComponent(destination)}`;
  document.querySelectorAll('[data-menu-qr]').forEach(image => {
    image.src = source;
    image.alt = 'QR code that opens the DFC website menu';
  });
  document.querySelectorAll('[data-menu-link]').forEach(link => link.href = destination);
  document.querySelectorAll('[data-menu-url]').forEach(label => {
    label.textContent = window.location.protocol === 'file:' ? 'Publish this site to activate phone scanning' : 'Opens this DFC website menu';
  });
  document.querySelectorAll('[data-qr-help]').forEach(help => {
    help.textContent = window.location.protocol === 'file:'
      ? 'Local preview detected. Publish this folder to a public web address before customers scan the QR from their phones.'
      : 'This QR opens the DFC website menu directly.';
  });
}

function setLocation(locationId, shouldUpdateUrl = true) {
  const location = DFC_LOCATIONS[locationId] || DFC_LOCATIONS.all;
  document.querySelectorAll('[data-location-select]').forEach(select => { select.value = locationId; });
  document.querySelectorAll('[data-location-name]').forEach(element => { element.textContent = location.name; });
  document.querySelectorAll('[data-location-address]').forEach(element => { element.textContent = location.address; });
  document.querySelectorAll('[data-location-rating]').forEach(element => { element.textContent = location.rating; });
  document.querySelectorAll('[data-location-price]').forEach(element => { element.textContent = location.price; });
  document.querySelectorAll('[data-location-hours]').forEach(element => { element.textContent = location.hours; });
  document.querySelectorAll('[data-location-hours-long]').forEach(element => { element.textContent = location.hours; });
  document.querySelectorAll('[data-location-directions]').forEach(link => {
    link.href = location.directions;
    if (location.directions.startsWith('http')) { link.target = '_blank'; link.rel = 'noreferrer'; }
    else { link.removeAttribute('target'); link.removeAttribute('rel'); }
  });
  if (shouldUpdateUrl) {
    const url = new URL(window.location.href);
    if (locationId === 'all') url.searchParams.delete('location');
    else url.searchParams.set('location', locationId);
    window.history.replaceState({}, '', url);
  }
}

function initLocations() {
  const selected = new URLSearchParams(window.location.search).get('location');
  const locationId = DFC_LOCATIONS[selected] ? selected : 'all';
  const options = Object.entries(DFC_LOCATIONS).map(([id, location]) => `<option value="${id}">${location.label}</option>`).join('');
  document.querySelectorAll('[data-location-select]').forEach(select => {
    select.innerHTML = options;
    select.addEventListener('change', () => setLocation(select.value));
  });
  setLocation(locationId, false);
}

function menuItemTemplate(item, index) {
  const image = IMAGE_BY_TYPE[item.image] || IMAGE_BY_TYPE.meal;
  return `<article class="menu-item">
    <img class="item-image" src="${image}" alt="${escapeHTML(item.name)}" loading="lazy">
    <div class="item-copy">
      <div class="tags">
        <span class="food-tag ${item.type === 'nonveg' ? 'nonveg' : ''}">${item.type === 'nonveg' ? 'Non veg' : 'Veg'}</span>
        ${item.best ? '<span class="best-tag">Bestseller</span>' : ''}
        ${item.custom ? '<span class="custom-tag">Customisable</span>' : ''}
      </div>
      <h3>${escapeHTML(item.name)}</h3>
      <p>${escapeHTML(item.desc)}</p>
      <div class="item-bottom">
        <div><span class="price">${money(item.price)}</span>${item.rating ? `<span class="rating">★ ${escapeHTML(item.rating)}</span>` : ''}</div>
        <button class="add-btn" data-add="${index}">ADD +</button>
      </div>
    </div>
  </article>`;
}

function renderMenu() {
  const root = document.getElementById('menu-content');
  const rail = document.getElementById('category-rail');
  const side = document.getElementById('category-list');
  if (!root) return;

  const query = (document.getElementById('menu-search')?.value || '').toLowerCase().trim();
  const matches = (item) => {
    const filterMatch = activeFilter === 'all' || item.type === activeFilter;
    const searchMatch = !query || `${item.name} ${item.desc} ${item.category}`.toLowerCase().includes(query);
    return filterMatch && searchMatch;
  };
  const filtered = DFC_MENU.filter(matches);
  const categories = ['All', ...DFC_CATEGORIES];

  const categoryButtons = categories.map(category => {
    const count = category === 'All' ? filtered.length : filtered.filter(item => item.category === category).length;
    return `<button class="category-pill ${activeCategory === category ? 'active' : ''}" data-category="${escapeHTML(category)}">${escapeHTML(category)} <span>${count}</span></button>`;
  }).join('');
  if (rail) rail.innerHTML = categoryButtons;
  if (side) side.innerHTML = `<p>Browse menu</p>${categories.slice(1).map(category => `<button class="${activeCategory === category ? 'active' : ''}" data-category="${escapeHTML(category)}">${escapeHTML(category)}</button>`).join('')}`;

  const visibleCategories = activeCategory === 'All' ? DFC_CATEGORIES : [activeCategory];
  const groups = visibleCategories.map(category => {
    const items = filtered.filter(item => item.category === category);
    if (!items.length) return '';
    return `<section class="menu-group" id="group-${category.replace(/[^a-z0-9]/gi, '-').toLowerCase()}">
      <div class="group-title"><h2>${escapeHTML(category)}</h2><span>${items.length} item${items.length === 1 ? '' : 's'}</span></div>
      <div class="item-grid">${items.map(item => menuItemTemplate(item, DFC_MENU.indexOf(item))).join('')}</div>
    </section>`;
  }).join('');

  root.innerHTML = groups || `<div class="empty-state"><h2>NOTHING FOUND.</h2><p>Try a different dish name or show all menu items.</p><button class="button sm" data-reset-search>Show all items</button></div>`;
}

function setCategory(category) {
  activeCategory = category;
  renderMenu();
  if (category !== 'All') document.getElementById(`group-${category.replace(/[^a-z0-9]/gi, '-').toLowerCase()}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

document.addEventListener('click', event => {
  const add = event.target.closest('[data-add]');
  const category = event.target.closest('[data-category]');
  const adjust = event.target.closest('[data-cart-adjust]');
  if (add) addToCart(Number(add.dataset.add));
  if (category) setCategory(category.dataset.category);
  if (adjust) adjustCart(Number(adjust.dataset.cartAdjust), Number(adjust.dataset.change));
  if (event.target.closest('[data-open-cart]')) openCart();
  if (event.target.closest('[data-close-cart]')) closeCart();
  if (event.target.closest('[data-reset-search]')) {
    const search = document.getElementById('menu-search');
    if (search) search.value = '';
    activeFilter = 'all'; activeCategory = 'All'; renderMenu();
  }
  if (event.target.closest('[data-menu-ready]')) showToast('Your selected items are saved in this browser. Please place the final order with DFC.');
});

document.addEventListener('input', event => {
  if (event.target.matches('#menu-search')) { activeCategory = 'All'; renderMenu(); }
});

document.addEventListener('click', event => {
  const filter = event.target.closest('[data-filter]');
  if (!filter) return;
  activeFilter = filter.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(button => button.classList.toggle('active', button === filter));
  renderMenu();
});

document.addEventListener('keydown', event => { if (event.key === 'Escape') closeCart(); });
document.addEventListener('DOMContentLoaded', () => {
  initLocations();
  initQRCode();
  renderMenu();
  refreshCart();
  if (window.location.hash) {
    requestAnimationFrame(() => document.querySelector(window.location.hash)?.scrollIntoView({ block: 'start' }));
  }
});
