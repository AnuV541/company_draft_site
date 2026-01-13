// ==================== NAVIGATION FUNCTIONALITY ====================
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.getElementById('navbar');
    const navMenu = document.getElementById('navMenu');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.querySelectorAll('.nav-link');
    const contactForm = document.getElementById('contactForm');
    const productCards = document.querySelectorAll('.product-card');

    // Sticky navbar on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Close menu when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');

            // Handle navigation
            const section = this.getAttribute('data-section');
            updateActiveLink(section);
        });
    });

    // Update active nav link based on scroll position
    window.addEventListener('scroll', function() {
        updateActiveNavOnScroll();
    });

    function updateActiveNavOnScroll() {
        const sections = document.querySelectorAll('section');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;

            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === current) {
                link.classList.add('active');
            }
        });
    }

    function updateActiveLink(section) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-section') === section) {
                link.classList.add('active');
            }
        });
    }

    // ==================== PRODUCT CARD INTERACTIONS ====================
    productCards.forEach(card => {
        const expandBtn = card.querySelector('.expand-btn');
        const productDetails = card.querySelector('.product-details');
        const productImage = card.querySelector('.product-image');

        // Check if this is a link or button
        const isLink = expandBtn.tagName === 'A';

        if (!isLink) {
            // Only add these interactions if it's a button (for expanding details)
            // Expand/Collapse on button click
            expandBtn.addEventListener('click', function(e) {
                e.preventDefault();

                if (productDetails.style.display === 'none') {
                    productDetails.style.display = 'block';
                    expandBtn.textContent = 'Hide Details';
                    expandBtn.classList.add('active');
                    
                    // Slide animation
                    productDetails.style.animation = 'slideDown 0.4s ease-out';
                } else {
                    productDetails.style.display = 'none';
                    expandBtn.textContent = 'View Details';
                    expandBtn.classList.remove('active');
                }
            });

            // Image click to toggle details
            productImage.addEventListener('click', function() {
                expandBtn.click();
            });
        }

        // Card click effect
        card.addEventListener('click', function(e) {
            if (e.target !== expandBtn && e.target !== productImage) {
                // Subtle bounce effect
                this.style.animation = 'pulse 0.3s ease-out';
                setTimeout(() => {
                    this.style.animation = '';
                }, 300);
            }
        });
    });

    // ==================== CONTACT FORM HANDLING ====================
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const company = document.getElementById('company').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Basic validation
            if (!name || !email || !subject || !message) {
                showFormMessage('Please fill in all required fields', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showFormMessage('Please enter a valid email address', 'error');
                return;
            }

            // Simulate form submission
            const submitBtn = contactForm.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;

            // Simulate API call
            setTimeout(() => {
                showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;

                // Clear message after 5 seconds
                setTimeout(() => {
                    const messageEl = document.getElementById('formMessage');
                    messageEl.style.display = 'none';
                }, 5000);
            }, 1500);
        });
    }

    function showFormMessage(message, type) {
        const messageEl = document.getElementById('formMessage');
        messageEl.textContent = message;
        messageEl.className = `form-message ${type}`;
        messageEl.style.display = 'block';

        // Auto-hide error messages after 4 seconds
        if (type === 'error') {
            setTimeout(() => {
                messageEl.style.display = 'none';
            }, 4000);
        }
    }

    // ==================== SMOOTH SCROLL BEHAVIOR ====================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ==================== INTERSECTION OBSERVER FOR ANIMATIONS ====================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.6s ease-out';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for fade-in animation
    document.querySelectorAll('.product-card, .stat-card, .about-text').forEach(el => {
        observer.observe(el);
    });

    // ==================== IMAGE LAZY LOADING ====================
    const images = document.querySelectorAll('img[loading="lazy"]');
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.style.opacity = '1';
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease-in';
            imageObserver.observe(img);
        });
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.style.opacity = '1';
        });
    }

    // ==================== ACCESSIBILITY IMPROVEMENTS ====================
    // Keyboard navigation for product cards
    productCards.forEach((card, index) => {
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const expandBtn = this.querySelector('.expand-btn');
                expandBtn.click();
            }
        });
    });

    // ==================== PERFORMANCE OPTIMIZATION ====================
    // Debounce scroll events
    let scrollTimeout;
    window.addEventListener('scroll', function() {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function() {
            updateActiveNavOnScroll();
        }, 50);
    }, { passive: true });

    // ==================== ADDITIONAL INTERACTIVITY ====================
    // Add hover effects to stat cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ==================== MOBILE MENU CLOSE ON ESCAPE ====================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });

    // ==================== FORM INPUT VALIDATION ====================
    const formInputs = document.querySelectorAll('.form-group input, .form-group textarea');
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.borderColor = '#3498db';
        });

        input.addEventListener('blur', function() {
            if (this.value === '') {
                this.style.borderColor = '#ddd';
            }
        });
    });

    console.log('Website initialized successfully!');
});
