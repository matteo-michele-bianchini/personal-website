// Language detection and redirect
(function() {
    const langPref = localStorage.getItem('lang-preference');
    const currentPage = window.location.pathname;
    const isEnglishPage = currentPage.includes('index-en');

    if (!langPref) {
        const userLang = navigator.language || navigator.userLanguage;
        const isItalian = userLang.startsWith('it');

        // Redirect based on browser language
        if (isItalian && isEnglishPage) {
            window.location.replace('index.html');
        } else if (!isItalian && !isEnglishPage) {
            window.location.replace('index-en.html');
        }
    }
})();

// Initialize after DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu when clicking a link
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }

    // Save language preference when switching
    document.querySelectorAll('a[href="index-en.html"]').forEach(link => {
        link.addEventListener('click', () => {
            localStorage.setItem('lang-preference', 'en');
        });
    });

    document.querySelectorAll('a[href="index.html"]').forEach(link => {
        link.addEventListener('click', () => {
            localStorage.setItem('lang-preference', 'it');
        });
    });
});
