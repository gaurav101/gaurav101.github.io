document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Load Animations
    const elementsToAnimate = document.querySelectorAll('.hidden-onload');
    
    setTimeout(() => {
        elementsToAnimate.forEach(el => {
            const delay = el.getAttribute('data-delay') || 0;
            setTimeout(() => {
                el.classList.add('visible-onload');
            }, delay);
        });
    }, 100);

    // 2. Scroll Animations using Intersection Observer
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target); // Stop observing once it's appeared
            }
        });
    }, observerOptions);
    
    fadeElements.forEach(el => {
        observer.observe(el);
    });

    // 3. Navbar scroll effect & Active Link highlight
    const navbar = document.querySelector('.navbar');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        // Sticky Navbar styling
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        // Active Link Highlighting
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });

    // 4. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        
        // Animate hamburger icon
        const spans = mobileMenuBtn.querySelectorAll('span');
        if (mobileMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const spans = mobileMenuBtn.querySelectorAll('span');
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        });
    });

    // 5. Custom Cursor (Optional subtle interactive element)
    const cursor = document.getElementById('glow-cursor');
    if (cursor && !('ontouchstart' in window)) {
        // Only on non-touch devices
        cursor.style.position = 'fixed';
        cursor.style.pointerEvents = 'none';
        cursor.style.width = '400px';
        cursor.style.height = '400px';
        cursor.style.background = 'radial-gradient(circle, rgba(0, 240, 255, 0.03) 0%, rgba(0,0,0,0) 70%)';
        cursor.style.borderRadius = '50%';
        cursor.style.transform = 'translate(-50%, -50%)';
        cursor.style.zIndex = '9999';
        cursor.style.mixBlendMode = 'screen';
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
    }
});
