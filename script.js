// ============================================================
// 1. LANGUAGE SWITCHER (Sinhala / English)
// ============================================================
const translations = {
    si: {
        nav_visitors: 'දැන් online',
        nav_join: 'JOIN NOW',
        hero_title: 'ලියාපදිංචි වී <span class="text-blue-400">500% බෝනස්</span> ලබාගන්න',
        hero_desc: 'ශ්‍රී ලංකාවේ විශ්වාසනීයම සහ වේගවත්ම ගෙවීම් සහිත ක්‍රීඩා අඩවිය. අදම ඔබේ වාසනාව උරගා බලන්න.',
        hero_players: 'ක්‍රීඩකයින්',
        hero_winnings: 'දිනූ මුදල්',
        hero_bonus: 'ලිදුම් බෝනස්',
        promo_label: 'ප්‍රොමෝ කෝඩ් - ස්පර්ශ කර කොපි කරන්න',
        promo_instruction: 'ලියාපදිංචි වීමේදී ඇතුළත් කර 500% බෝනස් ලබාගන්න',
        countdown_title: 'සීමිත කාල ප්‍රවර්ධනය!',
        countdown_hours: 'පැය',
        countdown_minutes: 'මිනිත්තු',
        countdown_seconds: 'තත්පර',
        countdown_btn: 'දැන් ලියාපදිංචි වන්න →',
        games_title: 'අපගේ ජනප්‍රිය ක්‍රීඩා',
        games_sub: 'විවිධ ක්‍රීඩා වර්ග සහ ජාත්‍යන්තර තරඟ ඔබ සඳහා',
        slots: 'ස්ලොට්',
        roulette: 'රූලට්',
        poker: 'පෝකර්',
        sports: 'ස්පෝර්ට්ස්',
        payments_title: 'ඉක්මන් ගෙවීම් පද්ධති',
        payments_sub: '100+ ගෙවීම් ක්‍රම — දේශීය හා ජාත්‍යන්තර',
        instant_deposit: 'ක්ෂණික තැන්පතු',
        instant_desc: 'තත්පර කිහිපයකින් ගිණුමට',
        secure: 'ආරක්ෂිත SSL',
        secure_desc: '256-bit encryption',
        support: '24/7 සහය',
        support_desc: 'සිංහලෙන් සහාය',
        faq_title: 'නිතර අසන ප්‍රශ්න',
        faq_sub: 'ඔබගේ සියලුම ප්‍රශ්න සඳහා පිළිතුරු',
        responsible_title: 'වගකීම් සහගත ජුවාව | 18+ පමණි',
        responsible_desc: 'ජුවාව ගැටලුකාරී විය හැකිය. ඔබේ සීමා නියම කරගන්න. ගැටළු ඇත්නම් සහය ලබාගන්න.',
        help_btn: 'සහය',
        feature1: 'ඉක්මන් ගෙවීම්',
        feature1_desc: 'EzCash, mCash සහ බැංකු ගිණුම් හරහා ක්ෂණිකව.',
        feature2: '24/7 සහයෝගය',
        feature2_desc: 'ඕනෑම ගැටලුවකදී සිංහලෙන් සහය.',
        feature3: 'ඉහළම බෝනස්',
        feature3_desc: 'පළමු තැන්පතුව සඳහා 500% දැවැන්ත බෝනස්.',
        app_title: 'අපගේ ජංගම යෙදුම',
        app_desc: 'ඔබේ දුරකථනයෙන්ම ඕනෑම වේලාවක ක්‍රීඩා කරන්න!',
        footer_copyright: '© 2026 1win Partners Sri Lanka. All Rights Reserved.',
        footer_affiliate: 'මෙම වෙබ් අඩවිය 1win affiliate වැඩසටහනේ නිල සහකරුවෙකු විසින් මෙහෙයවනු ලබයි. වයස අවුරුදු 18+ පමණි.',
        footer_privacy: 'ගොපනීයතා ප්‍රතිපත්තිය',
        footer_terms: 'පද සහ කොන්දේසි',
        footer_contact: 'සම්බන්ධ කරගන්න',
        trust_ssl: 'SSL සුරක්ෂිත',
        trust_ssl_desc: '256-bit ගුප්තකේතනය',
        trust_license: 'Curacao බලපත්‍රය',
        trust_license_desc: 'ජාත්‍යන්තර අනුමත',
        trust_fast: 'ක්ෂණික ගෙවීම්',
        trust_fast_desc: 'තත්පර 30ක් ඇතුළත',
        trust_rating: '4.8/5 ශ්‍රේණිගත',
        trust_rating_desc: '1000+ පාරිභෝගිකයින්',
        exit_title: 'ඉක්මන් වෙන්න!',
        exit_desc: 'ඔබ පිටවෙන්න කලින්, මෙම විශේෂ ප්‍රවර්ධනය අතපසු කරන්න එපා!',
        exit_bonus: '500% බෝනස්',
        exit_btn: 'දැන් ලියාපදිංචි වන්න',
        exit_note: '* කෝඩ් එක ලියාපදිංචි වීමේදී යොදන්න'
    },
    en: {
        nav_visitors: 'online now',
        nav_join: 'JOIN NOW',
        hero_title: 'Register & Get <span class="text-blue-400">500% Bonus</span>',
        hero_desc: 'Sri Lanka\'s most trusted and fastest-paying gaming site. Try your luck today.',
        hero_players: 'Players',
        hero_winnings: 'Won (LKR)',
        hero_bonus: 'Welcome Bonus',
        promo_label: 'PROMO CODE - TAP TO COPY',
        promo_instruction: 'Use during registration to get 500% bonus',
        countdown_title: 'Limited Time Offer!',
        countdown_hours: 'Hours',
        countdown_minutes: 'Minutes',
        countdown_seconds: 'Seconds',
        countdown_btn: 'Register Now →',
        games_title: 'Our Popular Games',
        games_sub: 'Various game types and international matches for you',
        slots: 'Slots',
        roulette: 'Roulette',
        poker: 'Poker',
        sports: 'Sports',
        payments_title: 'Fast Payment Systems',
        payments_sub: '100+ payment methods — Local & International',
        instant_deposit: 'Instant Deposit',
        instant_desc: 'Credited within seconds',
        secure: 'Secure SSL',
        secure_desc: '256-bit encryption',
        support: '24/7 Support',
        support_desc: 'Help in Sinhala',
        faq_title: 'Frequently Asked Questions',
        faq_sub: 'Answers to all your questions',
        responsible_title: 'Responsible Gambling | 18+ Only',
        responsible_desc: 'Gambling can be problematic. Set your limits. Get help if needed.',
        help_btn: 'Get Help',
        feature1: 'Fast Payments',
        feature1_desc: 'Instant via EzCash, mCash & banks.',
        feature2: '24/7 Support',
        feature2_desc: 'Support in Sinhala anytime.',
        feature3: 'Top Bonuses',
        feature3_desc: 'Massive 500% bonus on first deposit.',
        app_title: 'Our Mobile App',
        app_desc: 'Play anytime from your phone!',
        footer_copyright: '© 2026 1win Partners Sri Lanka. All Rights Reserved.',
        footer_affiliate: 'This site is operated by an official partner of the 1win affiliate program. Age 18+ only.',
        footer_privacy: 'Privacy Policy',
        footer_terms: 'Terms & Conditions',
        footer_contact: 'Contact Us',
        trust_ssl: 'SSL Secure',
        trust_ssl_desc: '256-bit encryption',
        trust_license: 'Curacao License',
        trust_license_desc: 'Internationally approved',
        trust_fast: 'Fast Payments',
        trust_fast_desc: 'Within 30 seconds',
        trust_rating: '4.8/5 Rating',
        trust_rating_desc: '1000+ customers',
        exit_title: 'Wait! Don\'t Go!',
        exit_desc: 'Before you leave, don\'t miss this special promotion!',
        exit_bonus: '500% Bonus',
        exit_btn: 'Register Now',
        exit_note: '* Use the code during registration'
    }
};

let currentLang = 'si';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];

    document.getElementById('lang-si').className = lang === 'si' ? 'lang-btn active px-2.5 py-1 rounded text-xs font-medium transition-all' : 'lang-btn inactive px-2.5 py-1 rounded text-xs font-medium transition-all';
    document.getElementById('lang-en').className = lang === 'en' ? 'lang-btn active px-2.5 py-1 rounded text-xs font-medium transition-all' : 'lang-btn inactive px-2.5 py-1 rounded text-xs font-medium transition-all';

    document.querySelector('#nav-visitors').nextSibling.textContent = ' ' + t.nav_visitors;
    document.querySelector('nav .btn-pulse').textContent = t.nav_join;

    document.querySelector('.hero-gradient h1').innerHTML = t.hero_title;
    document.querySelector('.hero-gradient p').textContent = t.hero_desc;
    document.querySelectorAll('.hero-gradient .text-center .text-xs')[0].textContent = t.hero_players;
    document.querySelectorAll('.hero-gradient .text-center .text-xs')[1].textContent = t.hero_winnings;
    document.querySelectorAll('.hero-gradient .text-center .text-xs')[2].textContent = t.hero_bonus;

    document.querySelector('#promo-code p:first-child').textContent = t.promo_label;
    document.querySelector('#promo-code p:last-child').textContent = t.promo_instruction;

    document.querySelector('.bg-gradient-to-r h3').textContent = t.countdown_title;
    document.querySelectorAll('.bg-black\\/40 .text-xs')[0].textContent = t.countdown_hours;
    document.querySelectorAll('.bg-black\\/40 .text-xs')[1].textContent = t.countdown_minutes;
    document.querySelectorAll('.bg-black\\/40 .text-xs')[2].textContent = t.countdown_seconds;
    document.querySelector('.bg-gradient-to-r a').textContent = t.countdown_btn;

    const gameSection = document.querySelector('.max-w-6xl.mx-auto.py-12.px-4.fade-in');
    if (gameSection) {
        gameSection.querySelector('h2').textContent = t.games_title;
        gameSection.querySelector('p').textContent = t.games_sub;
        const gameCards = gameSection.querySelectorAll('.game-card h3');
        if (gameCards.length >= 4) {
            gameCards[0].textContent = t.slots;
            gameCards[1].textContent = t.roulette;
            gameCards[2].textContent = t.poker;
            gameCards[3].textContent = t.sports;
        }
    }

    const paySection = document.querySelector('.border-t.border-b.border-gray-800\\/50');
    if (paySection) {
        paySection.querySelector('h2').innerHTML = '<i class="fas fa-bolt text-blue-400 mr-2"></i>' + t.payments_title;
        paySection.querySelector('p.max-w-2xl').textContent = t.payments_sub;
        const boxes = paySection.querySelectorAll('.bg-blue-900\\/20, .bg-green-900\\/20, .bg-purple-900\\/20');
        if (boxes.length >= 3) {
            boxes[0].querySelector('h3').textContent = t.instant_deposit;
            boxes[0].querySelector('p').textContent = t.instant_desc;
            boxes[1].querySelector('h3').textContent = t.secure;
            boxes[1].querySelector('p').textContent = t.secure_desc;
            boxes[2].querySelector('h3').textContent = t.support;
            boxes[2].querySelector('p').textContent = t.support_desc;
        }
        const badges = paySection.querySelectorAll('.trust-badge');
        if (badges.length >= 4) {
            badges[0].querySelector('.badge-label').textContent = t.trust_ssl;
            badges[0].querySelector('br + span').textContent = t.trust_ssl_desc;
            badges[1].querySelector('.badge-label').textContent = t.trust_license;
            badges[1].querySelector('br + span').textContent = t.trust_license_desc;
            badges[2].querySelector('.badge-label').textContent = t.trust_fast;
            badges[2].querySelector('br + span').textContent = t.trust_fast_desc;
            badges[3].querySelector('.badge-label').textContent = t.trust_rating;
            badges[3].querySelector('br + span').textContent = t.trust_rating_desc;
        }
    }

    const faqSection = document.querySelector('.max-w-4xl.mx-auto.py-10.px-4.fade-in');
    if (faqSection) {
        faqSection.querySelector('h2').innerHTML = '<i class="fas fa-question-circle text-blue-400 mr-2"></i>' + t.faq_title;
        faqSection.querySelector('p.max-w-xl').textContent = t.faq_sub;
    }

    const respSection = document.querySelector('.bg-gradient-to-r.from-red-900\\/20');
    if (respSection) {
        respSection.querySelector('h3').textContent = t.responsible_title;
        respSection.querySelector('p.text-gray-300').textContent = t.responsible_desc;
        respSection.querySelector('button').textContent = t.help_btn;
    }

    const featSection = document.querySelector('.max-w-6xl.mx-auto.py-10.px-4.grid');
    if (featSection) {
        const featCards = featSection.querySelectorAll('.p-5');
        if (featCards.length >= 3) {
            featCards[0].querySelector('h3').textContent = t.feature1;
            featCards[0].querySelector('p').textContent = t.feature1_desc;
            featCards[1].querySelector('h3').textContent = t.feature2;
            featCards[1].querySelector('p').textContent = t.feature2_desc;
            featCards[2].querySelector('h3').textContent = t.feature3;
            featCards[2].querySelector('p').textContent = t.feature3_desc;
        }
    }

    const appSection = document.querySelector('.max-w-4xl.mx-auto.py-10.px-4.text-center.fade-in');
    if (appSection) {
        appSection.querySelector('h2').textContent = t.app_title;
        appSection.querySelector('p.text-gray-400').textContent = t.app_desc;
    }

    const footer = document.querySelector('footer');
    if (footer) {
        footer.querySelector('.text-gray-400.text-sm').textContent = t.footer_copyright;
        footer.querySelector('.text-gray-500.text-xs').textContent = t.footer_affiliate;
        const footerLinks = footer.querySelectorAll('.flex-wrap span');
        if (footerLinks.length >= 3) {
            footerLinks[0].textContent = t.footer_privacy;
            footerLinks[2].textContent = t.footer_terms;
            footerLinks[4].textContent = t.footer_contact;
        }
    }

    document.querySelector('#exit-popup h2').textContent = t.exit_title;
    document.querySelector('#exit-popup p.text-gray-300').textContent = t.exit_desc;
    document.querySelector('#exit-popup .popup-bonus').textContent = t.exit_bonus;
    document.querySelector('#exit-popup .popup-btn').innerHTML = '<i class="fas fa-rocket mr-2"></i> ' + t.exit_btn;
    document.querySelector('#exit-popup p:last-child').textContent = t.exit_note;
}

document.getElementById('lang-si').addEventListener('click', () => { setLanguage('si'); });
document.getElementById('lang-en').addEventListener('click', () => { setLanguage('en'); });

// ============================================================
// 2. EXIT-INTENT POPUP
// ============================================================
let exitPopupShown = false;
const exitOverlay = document.getElementById('exit-popup-overlay');

function showExitPopup() {
    if (!exitPopupShown) {
        exitPopupShown = true;
        exitOverlay.classList.add('open');
        document.body.style.overflow = 'hidden';
    }
}

function hideExitPopup() {
    exitOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

document.addEventListener('mouseleave', (e) => {
    if (e.clientY < 0 && !exitPopupShown) {
        showExitPopup();
    }
});

document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden' && !exitPopupShown) {
        setTimeout(() => { if (!exitPopupShown) showExitPopup(); }, 100);
    }
});

document.getElementById('exit-popup-close').addEventListener('click', hideExitPopup);
exitOverlay.addEventListener('click', (e) => {
    if (e.target === exitOverlay) hideExitPopup();
});

// ============================================================
// 3. COOKIES BANNER
// ============================================================
(function initCookiesBanner() {
    const banner = document.getElementById('cookies-banner');
    const acceptBtn = document.getElementById('cookies-accept');
    const declineBtn = document.getElementById('cookies-decline');

    function hideBanner() { banner.style.display = 'none'; }

    const consent = localStorage.getItem('cookie_consent_1win');
    if (consent === 'accepted' || consent === 'declined') {
        hideBanner();
    } else {
        banner.style.display = 'block';
    }

    acceptBtn.addEventListener('click', () => {
        localStorage.setItem('cookie_consent_1win', 'accepted');
        showToast('✅ ඔබ cookies පිළිගත්තා. ස්තුතියි!');
        hideBanner();
    });

    declineBtn.addEventListener('click', () => {
        localStorage.setItem('cookie_consent_1win', 'declined');
        showToast('⚠️ ඔබ cookies ප්‍රතික්ෂේප කළා.');
        hideBanner();
    });
})();

// ============================================================
// 4. OTHER SCRIPTS
// ============================================================

// Mobile Menu
const overlayMenu = document.getElementById('menu-overlay');
document.getElementById('menu-toggle').addEventListener('click', () => {
    overlayMenu.style.display = 'block';
    requestAnimationFrame(() => overlayMenu.classList.add('open'));
    document.body.classList.add('overflow-hidden');
});
function closeMenu() {
    overlayMenu.classList.remove('open');
    setTimeout(() => { overlayMenu.style.display = 'none'; }, 300);
    document.body.classList.remove('overflow-hidden');
}
document.getElementById('close-menu').addEventListener('click', closeMenu);
overlayMenu.addEventListener('click', e => { if (e.target === overlayMenu) closeMenu(); });

// Countdown Timer
const targetTime = Date.now() + (23 * 3600 + 45 * 60 + 18) * 1000;
function updateTimer() {
    const rem = Math.max(0, Math.floor((targetTime - Date.now()) / 1000));
    document.getElementById('timer-hours').textContent = String(Math.floor(rem / 3600)).padStart(2, '0');
    document.getElementById('timer-minutes').textContent = String(Math.floor((rem % 3600) / 60)).padStart(2, '0');
    document.getElementById('timer-seconds').textContent = String(rem % 60).padStart(2, '0');
}
updateTimer();
setInterval(updateTimer, 1000);

// Toast
function showToast(msg, type = 'success') {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div');
    t.className = 'toast-item';
    const icon = type === 'success' ? 'check-circle' : (type === 'info' ? 'info-circle' : 'exclamation-triangle');
    const color = type === 'success' ? '#60a5fa' : (type === 'info' ? '#fbbf24' : '#f87171');
    t.innerHTML = `<i class="fas fa-${icon}" style="color:${color};font-size:1.1rem;flex-shrink:0"></i><span style="font-size:0.85rem">${msg}</span>`;
    c.appendChild(t);
    requestAnimationFrame(() => requestAnimationFrame(() => t.classList.add('show')));
    setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 350); }, 3500);
}
window.showToast = showToast;

// Promo Code Copy
const promoEl = document.getElementById('promo-code');
promoEl.addEventListener('click', () => {
    navigator.clipboard.writeText('WINLANKA')
        .then(() => showToast('✅ WINLANKA කොපි විය! ලියාපදිංචි වීමේදී යොදන්න.'))
        .catch(() => showToast('ප්‍රොමෝ කෝඩ්: WINLANKA', 'error'));
});
promoEl.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') promoEl.click(); });

// Scroll Fade-in
const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

// Live visitor counter
function randomBetween(a, b) { return Math.floor(Math.random() * (b - a + 1)) + a; }
let visitors = 1247;
setInterval(() => {
    visitors += randomBetween(-3, 5);
    visitors = Math.max(1100, Math.min(1500, visitors));
    const formatted = visitors.toLocaleString();
    const navEl = document.getElementById('nav-visitors');
    const heroEl = document.getElementById('hero-visitors');
    if (navEl) navEl.textContent = formatted;
    if (heroEl) heroEl.textContent = formatted;
}, 4000);

// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(q => {
    q.addEventListener('click', function() {
        const targetId = this.dataset.target;
        const answer = document.getElementById(targetId);
        const icon = this.querySelector('.faq-icon');

        document.querySelectorAll('.faq-answer').forEach(a => {
            if (a.id !== targetId) {
                a.classList.remove('open');
                a.style.maxHeight = '0';
                const siblingIcon = a.closest('.bg-gray-900\\/40')?.querySelector('.faq-icon');
                if (siblingIcon) siblingIcon.classList.remove('open');
            }
        });

        if (answer.classList.contains('open')) {
            answer.classList.remove('open');
            answer.style.maxHeight = '0';
            icon.classList.remove('open');
        } else {
            answer.classList.add('open');
            answer.style.maxHeight = answer.scrollHeight + 'px';
            icon.classList.add('open');
        }
    });
});