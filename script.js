// ===== HERO VIDEO ROTATION =====
const heroVideos = ['hero1.mp4', 'hero2.mp4', 'hero3.mp4', 'hero4.mp4'];
let heroVideoIndex = 0;

document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('heroVideo');
    if (!video) return;
    video.addEventListener('ended', function () {
        heroVideoIndex = (heroVideoIndex + 1) % heroVideos.length;
        video.src = heroVideos[heroVideoIndex];
        video.play();
    });
});

// ===== PRODUCT DATA =====
const products = [
    { id: 1, name: "Brazilian Body Wave Lace Front", category: "WIGS", price: 299.99, originalPrice: 399.99, rating: 5, reviews: 128, badge: "Bestseller", texture: "Body Wave", length: '18"', density: "180%", desc: "Experience luxury with our Brazilian Body Wave Lace Front wig. Handcrafted with meticulous attention to detail, this piece features a natural-looking hairline and silky-smooth body wave texture that moves beautifully. Perfect for any occasion." },
    { id: 2, name: "Peruvian Straight Closure Wig", category: "WIGS", price: 249.99, originalPrice: 329.99, rating: 5, reviews: 96, badge: "New", texture: "Straight", length: '16"', density: "150%", desc: "Sleek and sophisticated, our Peruvian Straight Closure Wig offers a flawless, natural look. Made with premium Peruvian hair for ultimate shine and manageability." },
    { id: 3, name: "Deep Wave Bundles Set", category: "EXTENSIONS", price: 189.99, originalPrice: 249.99, rating: 4, reviews: 74, badge: "", texture: "Deep Wave", length: '20"', density: "200%", desc: "Transform your look with our Deep Wave Bundles Set. Three luxurious bundles of deep wave human hair, perfect for a full, voluminous install." },
    { id: 4, name: "Kinky Curly HD Lace Wig", category: "WIGS", price: 349.99, originalPrice: 449.99, rating: 5, reviews: 156, badge: "Hot", texture: "Kinky Curly", length: '22"', density: "250%", desc: "Our most popular wig! The Kinky Curly HD Lace Wig features an invisible lace that melts into any skin tone. Bold, beautiful curls that make a statement." },
    { id: 5, name: "Silky Straight Hair Bundle", category: "EXTENSIONS", price: 129.99, originalPrice: 169.99, rating: 4, reviews: 89, badge: "", texture: "Straight", length: '14"', density: "150%", desc: "Premium silky straight hair bundles perfect for a sleek, polished look. Can be colored, curled, and heat-styled to your preference." },
    { id: 6, name: "Water Wave Full Lace Wig", category: "WIGS", price: 399.99, originalPrice: 499.99, rating: 5, reviews: 203, badge: "Premium", texture: "Body Wave", length: '24"', density: "200%", desc: "Our showstopper! The Water Wave Full Lace Wig offers 360-degree styling freedom with gorgeous water wave texture. Ultimate luxury for the discerning client." },
    { id: 7, name: "Bob Cut Lace Front Wig", category: "WIGS", price: 199.99, originalPrice: 259.99, rating: 4, reviews: 67, badge: "", texture: "Straight", length: '10"', density: "180%", desc: "Chic and trendy, our Bob Cut Lace Front Wig is perfect for a fresh, modern look. Pre-plucked hairline with baby hairs for a natural finish." },
    { id: 8, name: "Ombre Blonde Curly Wig", category: "WIGS", price: 329.99, originalPrice: 429.99, rating: 5, reviews: 112, badge: "Trending", texture: "Curly", length: '20"', density: "200%", desc: "Make heads turn with our stunning Ombre Blonde Curly Wig. A gorgeous dark-to-blonde gradient with bouncy, defined curls." },
    { id: 9, name: "Natural Black Bone Straight", category: "EXTENSIONS", price: 159.99, originalPrice: 199.99, rating: 4, reviews: 58, badge: "", texture: "Straight", length: '18"', density: "150%", desc: "Ultra-sleek bone straight bundles in natural black. The smoothest texture in our collection, perfect for a glass-hair finish." },
    { id: 10, name: "Platinum Blonde Bob Wig", category: "WIGS", price: 279.99, originalPrice: 349.99, rating: 5, reviews: 91, badge: "New", texture: "Straight", length: '12"', density: "180%", desc: "Bold and beautiful platinum blonde bob wig. Pre-colored with premium blonde hair, this piece is perfect for making a statement." },
    { id: 11, name: "Afro Kinky Curly Bundle", category: "EXTENSIONS", price: 169.99, originalPrice: 219.99, rating: 4, reviews: 45, badge: "", texture: "Kinky Curly", length: '16"', density: "200%", desc: "Embrace your natural texture with our Afro Kinky Curly Bundles. Perfect for protective styles and natural-looking installs." },
    { id: 12, name: "Honey Blonde Deep Wave", category: "WIGS", price: 369.99, originalPrice: 469.99, rating: 5, reviews: 134, badge: "Bestseller", texture: "Deep Wave", length: '22"', density: "250%", desc: "Our gorgeous Honey Blonde Deep Wave wig combines warm blonde tones with luxurious deep wave texture. A fan favorite for good reason." }
];

const testimonials = [
    { name: "Joanna Czajkowska", initials: "JC", title: "Google Review", text: "Shelley is amazing!!! She is very welcoming and explains the process clearly. She is very careful and does not damage hair. She has done a fantastic job with my extensions. They last long, dry fast and I have had no issues whatsoever with them!" },
    { name: "Sandra Sattha", initials: "SS", title: "Google Review", text: "There is so much amazing things I want to say about Shelly that I do not know where to begin. Shelly has been doing my extensions for over 2 years now. Aside from her always making you look amazing it is her perfection that I love the most." },
    { name: "Saiyona Ghosh", initials: "SG", title: "Google Review · Local Guide", text: "Shelly is really a magician. I have inherently thin hair and always feel stressed letting my hair down. I reached out to Shelly just a few weeks before the holidays this year and she took me in even though the time of year is really busy." },
    { name: "Antoinette Cooney", initials: "AC", title: "Google Review", text: "Shelly saved my hair!!!! Had my hair installed by someone who clearly didn't know what they was doing… Shelly restored it back to the way it should have originally done — she's amazing!!! If I could give more stars I would!!!" },
    { name: "Heather Moody", initials: "HM", title: "Google Review", text: "Shelly at Stunning Hair Extensions has changed my life more than she will ever know. She has been doing my hair for years, and every time she works her magic, she gives me back a piece of my confidence and helps me feel like myself again." },
    { name: "Cristina", initials: "CR", title: "Google Review", text: "From the moment I walked in, Shelly made me feel comfortable and taken care of. She is professional and passionate about what she does. I love my hair extensions — they look natural, feel lightweight, and blend perfectly with my hair." },
    { name: "Catherine Newman", initials: "CN", title: "Google Review", text: "Absolutely love my experience here! Shelley is awesome and really took her time to make sure my extensions blended perfectly with my hair. The color match is spot-on and looks completely natural. Shelley recommended the best type of extensions for me." },
    { name: "Zara Anwar", initials: "ZA", title: "Google Review", text: "Shelly is the most skilled hair extensions technician I've ever met! She can do all types of extensions and works with you to achieve your dream look; always making it look flawless. Since getting my hair done by her, I can't imagine going anywhere else." },
    { name: "Nelia Silvestre", initials: "NS", title: "Google Review", text: "Shelly did a wonderful job and is so knowledgeable and professional. I highly recommend her to anyone interested in having extensions put in. She is so patient and the result was truly stunning!" },
    { name: "Kiran Saini", initials: "KS", title: "Google Review", text: "Shelly is literally the BEST. She's quick and so talented. Super friendly, and a master at what she does. I've been going to her for years and recommend her to anyone in need of luscious hair. I can't wait to go back!" },
    { name: "Khrystyna Verkalets", initials: "KV", title: "Google Review", text: "My girl is the best, I'm a client for 3 years now and every time my hair is spectacular. Extensions are always the best quality — I order from her highly recommended if you want your hair to look like a superstar." },
    { name: "Harpreet Kaur Saini", initials: "HK", title: "Google Review", text: "Shelly is amazing. I really love my hair extensions. I have very thin hair and wanted extensions which could last me 3 months for my wedding in India. I really loved her advice during consultation. She is very careful when applying them." },
    { name: "Josey Gadzala", initials: "JG", title: "Google Review", text: "Always satisfied with my visit. Shelley is very passionate and that passion is revealed in the patience and care she extends to her clientele. I am never disappointed and happy that I have a hairdresser that truly cares. Highly recommended!" },
    { name: "Maureen Diamantino", initials: "MD", title: "Google Review", text: "Shelley is the best at what she does! I have been wearing extensions for 13+ years and I can honestly say that this is the happiest and most pleased I have been. Shelly is my 5th and final attempt at trying different stylists. I will never go anywhere else." },
    { name: "mariamorcos3", initials: "MM", title: "Google Review · Local Guide", text: "From the moment we connected to the moment I walked out the salon I felt nothing but heard, cared for, and beyond satisfied. I recently experienced a significant amount of hair loss and I was really nervous to try hair extensions — Shelly put every concern to rest." },
    { name: "Coco Hyder", initials: "CH", title: "Google Review · Local Guide", text: "If you're looking for a flawless hair transformation, look no further than Stunning Hair Extension Salon — and ask for Shelly! I recently got iTip extensions done and I can honestly say the results are beyond stunning." },
    { name: "Camila K", initials: "CK", title: "Google Review · Local Guide", text: "I have been wearing hair extensions for 10+ years and Shelly by far has done the best placement I have ever had! I am very particular with placement and she nailed it! Shelly is worth the drive, the flight, and more to get your hair done by her!" },
    { name: "Nidhi Shukla", initials: "NS", title: "Google Review · Local Guide", text: "Shelly is one of the best hair artists in town. She is so honest and passionate about her work and it shows. She has literally transformed my basic looking hair into amazing looking hair. The pics speak for themselves. Definitely recommend her for all hair needs!" },
    { name: "Danielle O.", initials: "DO", title: "Google Review", text: "I have been loyal to Shelly for the last 7 years and that's because nobody does it better! She has always supported my hair goals & gives me exactly what I ask for. My extensions never show and always look so natural." },
    { name: "Neha A", initials: "NA", title: "Google Review · Local Guide", text: "Love Shelly! Her work is always consistent, clean and reliable. She is an absolute delight." },
    { name: "Amanda Palmer", initials: "AP", title: "Google Review", text: "My interest in hair extensions began in 2007, but I was nervous and the investment seemed large. When I found Stunning Extensions they helped me confirm my research during my consultation. The consult helped me color match and decide on exactly what I needed." },
    { name: "Grayson Novak", initials: "GN", title: "Google Review", text: "Shelly was amazing!! Got my girlfriend in for a last minute service before heading to the airport and it was amazing quality for a great price!! Highly recommend!!" },
    { name: "Alice Dsa", initials: "AD", title: "Google Review · 4 reviews", text: "I absolutely recommend Shelly for hair extensions. She is the most professional hair stylist I have come across and the warmest. Her attention to detail in ensuring the exact shade of extensions and the comfort in her technique is unmatched." },
    { name: "Manal Abaid", initials: "MA", title: "Google Review · 2 reviews", text: "She is amazing! I love my hair every time she puts in the extensions for me. I have very thin hair and she knows how to make it look perfect and very natural!" },
    { name: "Hanna Loretta", initials: "HL", title: "Google Review · 2 reviews", text: "Absolutely amazing experience with Shelly! She was super fun, attentive, made sure I was comfortable, and applied my extensions better than my previous salon in Toronto. The way she applied the extensions made my hair look absolutely beautiful." },
    { name: "Cadeshia Bhikam", initials: "CB", title: "Google Review · 3 reviews", text: "Unbelievable experience. I will never go anywhere else again. Shelly is more than amazing — the things she can do with your hair is just mind blowing. Shelly creates this unforgettable experience for you when you go in. She explains everything clearly and makes you feel at ease." },
    { name: "Paula Milford", initials: "PM", title: "Google Review · 3 reviews", text: "Shelly is an amazing artist when it comes to hair! Start to finish, she listens to what you want, how you wear your hair and the colour match is always spot on!! I have had so many compliments on my hair and YES people think it's my own. Shelly is simply the best!" },
    { name: "Ritu Sobti", initials: "RS", title: "Google Review · 6 reviews", text: "Shelly is amazing at what she does! My hair was beyond matted — due to Shelly's patience, determination and hard work, I was able to salvage my own hair before having my beautiful tape-ins reinstalled. If you're looking for someone well equipped and professional in the tape-ins field, you've found the one!" },
    { name: "Tanya White", initials: "TW", title: "Google Review · Local Guide", text: "I absolutely love my hair! Shelley does an amazing job — she's also a great person which means a lot. It's not easy to find people like her in this world anymore!! I definitely recommend going to her for your hair extensions." },
    { name: "McKayla Holliday", initials: "MH", title: "Google Review · 5 reviews", text: "Shelly is honestly the best at hair extensions! She has been doing my hair for a few years now and I couldn't be happier. The details and very gentle touch she puts into her work is incredible! Long story short — if you need to get your extensions done, just go to her, you will love it!" },
    { name: "Brian B", initials: "BB", title: "Google Review · 4 reviews", text: "Amazing experience — got my hair extensions done for my birthday! Shelly was absolutely the best technician I have ever been to. She was kind, professional, and the results were incredible. Highly recommend!" },
    { name: "Rain Storm", initials: "RS", title: "Google Review · Local Guide", text: "Thank you Shelley for getting me in ASAP, installing my wefts so fast and touching up the areas that needed tightening — you are amazing!" },
    { name: "Matilda Sukovska", initials: "MS", title: "Google Review · 1 review", text: "Love Shelly and her services! She takes her time to understand your desired result and gives professional insight on application and installation. She also works quickly and prices have no competition in the GTA! Definitely my go-to extension lady." },
    { name: "Dawn L Comeau", initials: "DC", title: "Google Review · 3 reviews", text: "When I got my haircut they hacked it way too short and I hated it — really was a shot to my self confidence. So I found Shelly and she took me in right away. After having her fix my hair I had a new found confidence and loved it. Won't trust anybody else! She's great!" },
    { name: "Simona Sukovska", initials: "SK", title: "Google Review · Local Guide", text: "Shelly is an absolute professional at what she does! Was struggling to find a salon where they are available to discuss and customize your dream result — installation type, treatment after the appointment, amount of extensions and more. The whole appointment was perfect from start to finish." },
    { name: "Veronica Cooperman", initials: "VC", title: "Google Review · 7 reviews", text: "Shelly is the best! She's delightful, highly skilled, professional and fun. I'm always very happy with how Shelly does my hair. If I could give more stars I would." },
    { name: "Z G", initials: "ZG", title: "Google Review · 7 reviews", text: "I found her using Google & was very happy about the choice. She is great at what she does and has a nice space where she does her work. The extensions she put in my hair were done well and lasted a long time. When I went back for a re-install she did an equally amazing job." },
    { name: "Karima Fahmy", initials: "KF", title: "Google Review · Local Guide", text: "Don't know what to say — Shelly is simply amazing! She is professional, friendly, sweet and knew exactly what I wanted. She put extensions in for me and for years I didn't feel that good. I will definitely recommend her to all my friends." },
    { name: "Linh Truong", initials: "LT", title: "Google Review · 3 reviews", text: "It is wonderful having my hair extensions done with Shelly at Stunning Hair. She is a highly skilled technician and master with extensions. She is very clever and careful, using each strand to make my hair longer and thicker. She spent so much time ensuring perfection." },
    { name: "Joscel Calletor", initials: "JL", title: "Google Review · 1 review", text: "I have been going to Shelly for over 2 years and it's been great. Her attention to detail is impeccable and shows she really knows what she's doing. She is very patient and listens to my requests to make sure I get what I want and am happy with it." }
];

// ===== STATE =====
let cart = [];
let currentPage = 'home';
let currentProduct = null;
let detailQty = 1;

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function () {
    setTimeout(() => {
        document.getElementById('pageLoader').classList.add('loaded');
    }, 1500);
    renderFeaturedProducts();
    renderShopProducts();
    renderTestimonials();
    renderReviewsPage();
    createParticles();
    initScrollAnimations();
    initNavbarScroll();
});

// ===== PARTICLES =====
function createParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.className = 'hero-particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 6 + 's';
        particle.style.animationDuration = (4 + Math.random() * 4) + 's';
        particle.style.width = (2 + Math.random() * 4) + 'px';
        particle.style.height = particle.style.width;
        container.appendChild(particle);
    }
}

// ===== NAVBAR SCROLL =====
function initNavbarScroll() {
    window.addEventListener('scroll', function () {
        const navbar = document.getElementById('navbar');
        const backToTop = document.getElementById('backToTop');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        if (window.scrollY > 500) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });
}

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
        observer.observe(el);
    });
}

// ===== PAGE NAVIGATION =====
function showPage(page) {
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('shopPage').classList.remove('active');
    document.getElementById('reviewsPage').classList.remove('active');
    document.getElementById('productDetailPage').classList.remove('active');
    document.getElementById('checkoutPage').classList.remove('active');
    switch (page) {
        case 'home':
            document.getElementById('homePage').style.display = 'block';
            break;
        case 'shop':
            document.getElementById('shopPage').classList.add('active');
            break;
        case 'reviews':
            document.getElementById('reviewsPage').classList.add('active');
            break;
        case 'product':
            document.getElementById('productDetailPage').classList.add('active');
            break;
        case 'checkout':
            updateCheckoutSummary();
            document.getElementById('checkoutPage').classList.add('active');
            break;
    }
    currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== RENDER HELPERS =====
function starsHtml(rating) {
    return Array.from({ length: 5 }, (_, i) =>
        `<svg class="star ${i >= rating ? 'empty' : ''}" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
    ).join('');
}

const placeholderSVG = `<svg viewBox="0 0 24 24" fill="none" stroke="#D4AF37" stroke-width="1"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>`;

function createProductCard(product) {
    return `
        <div class="product-card scale-in" data-id="${product.id}">
            <div class="product-image">
                ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                <div class="product-image-placeholder">${placeholderSVG}</div>
                <div class="product-actions">
                    <button class="product-action-btn add-cart" onclick="event.stopPropagation(); addToCart(${product.id})">
                        <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                        Add
                    </button>
                    <button class="product-action-btn quick-view" onclick="event.stopPropagation(); openQuickView(${product.id})">
                        <svg viewBox="0 0 24 24"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
                    </button>
                </div>
            </div>
            <div class="product-info" onclick="openProductDetail(${product.id})">
                <div class="product-category">${product.category}</div>
                <div class="product-name">${product.name}</div>


            </div>
        </div>`;
}

function renderFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    container.innerHTML = products.slice(0, 8).map(p => createProductCard(p)).join('');
    setTimeout(initScrollAnimations, 100);
}

function renderShopProducts(sortedProducts) {
    const container = document.getElementById('shopProductsGrid');
    const prods = sortedProducts || products;
    container.innerHTML = prods.map(p => createProductCard(p)).join('');
    document.getElementById('resultsCount').textContent = `Showing ${prods.length} products`;
    setTimeout(initScrollAnimations, 100);
}

function renderTestimonials() {
    const container = document.getElementById('testimonialsCarousel');
    container.innerHTML = testimonials.map(t => `
        <div class="testimonial-card">
            <div class="testimonial-quote">\u201C</div>
            <p class="testimonial-text">${t.text}</p>
            <div class="stars" style="margin-bottom:16px;">${starsHtml(5)}</div>
            <div class="testimonial-author">
                <div class="testimonial-avatar">${t.initials}</div>
                <div>
                    <div class="testimonial-name">${t.name}</div>
                    <div class="testimonial-title">${t.title}</div>
                </div>
            </div>
        </div>`).join('');
}

function renderReviewsPage() {
    const container = document.getElementById('reviewsPageGrid');
    if (!container) return;
    container.innerHTML = testimonials.map(t => `
        <div class="review-card-full">
            <div class="review-card-quote">“</div>
            <p class="review-card-text">${t.text}</p>
            <div class="review-card-stars">${starsHtml(5)}</div>
            <div class="review-card-author">
                <div class="review-card-avatar">${t.initials}</div>
                <div class="review-card-info">
                    <div class="review-card-name">${t.name}</div>
                    <div class="review-card-source">
                        <svg width="12" height="12" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
                        ${t.title}
                    </div>
                </div>
            </div>
        </div>`).join('');
}

function renderRelatedProducts() {
    const container = document.getElementById('relatedCarousel');
    if (!container || !currentProduct) return;
    const related = products.filter(p => p.id !== currentProduct.id).slice(0, 6);
    container.innerHTML = related.map(p => createProductCard(p)).join('');
}

// ===== CART =====
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    const existing = cart.find(item => item.id === productId);
    if (existing) {
        existing.qty++;
    } else {
        cart.push({ id: product.id, name: product.name, price: product.price, qty: 1, category: product.category });
    }
    updateCartUI();
    showToast(`${product.name} added to bag!`);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartUI();
}

function updateCartItemQty(productId, delta) {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
        removeFromCart(productId);
        return;
    }
    updateCartUI();
}

function updateCartUI() {
    const count = cart.reduce((s, i) => s + i.qty, 0);
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

    const countEl = document.getElementById('cartCount');
    countEl.textContent = count;
    count > 0 ? countEl.classList.add('show') : countEl.classList.remove('show');

    document.getElementById('cartItemCount').textContent = count;
    const itemsContainer = document.getElementById('cartItems');
    const emptyEl = document.getElementById('cartEmpty');
    const footerEl = document.getElementById('cartFooter');

    if (cart.length === 0) {
        emptyEl.style.display = 'block';
        footerEl.style.display = 'none';
        itemsContainer.innerHTML = '';
        itemsContainer.appendChild(emptyEl);
    } else {
        emptyEl.style.display = 'none';
        footerEl.style.display = 'block';
        itemsContainer.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-image">${placeholderSVG}</div>
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-variant">${item.category}</div>
                    <div class="cart-item-bottom">
                        <div class="cart-item-qty">
                            <button class="cart-qty-btn" onclick="updateCartItemQty(${item.id}, -1)">&minus;</button>
                            <div class="cart-qty-value">${item.qty}</div>
                            <button class="cart-qty-btn" onclick="updateCartItemQty(${item.id}, 1)">+</button>
                        </div>
                        <span class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</span>
                    </div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">
                    <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>`).join('');
    }
    document.getElementById('cartSubtotal').textContent = `$${subtotal.toFixed(2)}`;
}

function openCart() {
    document.getElementById('cartOverlay').classList.add('active');
    document.getElementById('cartDrawer').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCart() {
    document.getElementById('cartOverlay').classList.remove('active');
    document.getElementById('cartDrawer').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== QUICK VIEW =====
function openQuickView(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    document.getElementById('qvCategory').textContent = product.category;
    document.getElementById('qvTitle').textContent = product.name;

    document.getElementById('qvDesc').textContent = product.desc || 'Experience luxury with our premium human hair product.';
    document.getElementById('qvAddCart').onclick = () => { addToCart(productId); closeQuickView(); };
    document.getElementById('qvViewFull').onclick = () => { closeQuickView(); openProductDetail(productId); };
    document.getElementById('quickViewModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuickView() {
    document.getElementById('quickViewModal').classList.remove('active');
    document.body.style.overflow = '';
}

// ===== PRODUCT DETAIL =====
function openProductDetail(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    currentProduct = product;
    detailQty = 1;
    document.getElementById('detailBreadcrumb').textContent = product.name;
    document.getElementById('detailCategory').textContent = product.category;
    document.getElementById('detailTitle').textContent = product.name;

    document.getElementById('detailDesc').textContent = product.desc || 'Experience luxury with our premium human hair product.';
    document.getElementById('detailQty').textContent = '1';
    renderRelatedProducts();
    showPage('product');
}

function addToCartFromDetail() {
    if (!currentProduct) return;
    const existing = cart.find(item => item.id === currentProduct.id);
    if (existing) {
        existing.qty += detailQty;
    } else {
        cart.push({ id: currentProduct.id, name: currentProduct.name, price: currentProduct.price, qty: detailQty, category: currentProduct.category });
    }
    updateCartUI();
    showToast(`${currentProduct.name} added to bag!`);
}

function changeQty(delta) {
    detailQty = Math.max(1, detailQty + delta);
    document.getElementById('detailQty').textContent = detailQty;
}

function selectOption(el, type) {
    el.parentElement.querySelectorAll('.option-value').forEach(v => v.classList.remove('selected'));
    el.classList.add('selected');
}

function selectThumb(el) {
    el.parentElement.querySelectorAll('.gallery-thumb').forEach(t => t.classList.remove('active'));
    el.classList.add('active');
}

// ===== FILTERS & SORT =====
function toggleFilter(el) {
    el.classList.toggle('active');
}

function sortProducts(value) {
    let sorted = [...products];
    switch (value) {
        case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
        case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
        case 'bestselling': sorted.sort((a, b) => b.reviews - a.reviews); break;
        case 'newest': sorted.sort((a, b) => b.id - a.id); break;
    }
    renderShopProducts(sorted);
}

function updatePriceLabel() {
    const val = document.getElementById('priceRange').value;
    document.getElementById('priceValue').textContent = `$${val}`;
}

// ===== CHECKOUT =====
function updateCheckoutSummary() {
    const itemsContainer = document.getElementById('checkoutItems');
    const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
    const tax = subtotal * 0.08;
    const total = subtotal + tax;

    itemsContainer.innerHTML = cart.map(item => `
        <div class="summary-item">
            <div class="summary-item-image">${placeholderSVG}</div>
            <div class="summary-item-info">
                <div class="summary-item-name">${item.name}</div>
                <div class="summary-item-variant">${item.category} · Qty: ${item.qty}</div>
            </div>
            <span class="summary-item-price">$${(item.price * item.qty).toFixed(2)}</span>
        </div>`).join('');

    document.getElementById('checkoutSubtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('checkoutTax').textContent = `$${tax.toFixed(2)}`;
    document.getElementById('checkoutTotal').textContent = `$${total.toFixed(2)}`;
}

function selectPayment(el) {
    el.parentElement.querySelectorAll('.payment-method').forEach(m => m.classList.remove('selected'));
    el.classList.add('selected');
}

function placeOrder() {
    if (cart.length === 0) {
        showToast('Your cart is empty!');
        return;
    }
    showToast('Order placed successfully! Thank you! ✨');
    cart = [];
    updateCartUI();
    setTimeout(() => showPage('home'), 2000);
}

// ===== MISC =====
function handleNewsletter(e) {
    e.preventDefault();
    const input = e.target.querySelector('input');
    showToast('Welcome to the Stunning family! 💫');
    input.value = '';
}

function toggleMobileMenu() {
    const btn = document.getElementById('mobileMenuBtn');
    const menu = document.getElementById('mobileMenu');
    btn.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
}

function toggleSearch() {
    showToast('Search coming soon!');
}

function showToast(message) {
    const toast = document.getElementById('toast');
    document.getElementById('toastMessage').textContent = message;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 3000);
}

// Close modals on Escape
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeCart();
        closeQuickView();
    }
});
