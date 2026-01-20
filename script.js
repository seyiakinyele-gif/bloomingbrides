// Dropdown menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const navDropdown = document.querySelector('.nav-dropdown');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    
    if (navDropdown && dropdownMenu) {
        let timeout;
        
        navDropdown.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
            dropdownMenu.style.display = 'flex';
        });
        
        navDropdown.addEventListener('mouseleave', function() {
            timeout = setTimeout(function() {
                dropdownMenu.style.display = 'none';
            }, 200);
        });
        
        dropdownMenu.addEventListener('mouseenter', function() {
            clearTimeout(timeout);
        });
        
        dropdownMenu.addEventListener('mouseleave', function() {
            dropdownMenu.style.display = 'none';
        });
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    // Newsletter form submission
    const newsletterForms = document.querySelectorAll('.newsletter-form, .footer-newsletter-form');
    newsletterForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            if (email) {
                alert('Thank you for subscribing! We\'ll be in touch soon.');
                this.querySelector('input[type="email"]').value = '';
            }
        });
    });
    
    // Button interactions
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function(e) {
            if (!this.hasAttribute('type') || this.getAttribute('type') === 'button') {
                const text = this.textContent.trim();
                if (text === 'Sign in' || text === 'Join' || text === 'Join now' || text === 'Browse events' || text === 'Contact us') {
                    // Handle navigation or modal opening
                    console.log('Button clicked:', text);
                }
            }
        });
    });
});
