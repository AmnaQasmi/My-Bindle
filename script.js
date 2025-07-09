// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
    initInteractions();
});

function initAnimations() {
    // Header animation on scroll
    gsap.to('.header', {
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        }
    });

    // Hero section animations
    const heroTl = gsap.timeline();
    
    heroTl.from('.hero-logo', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    })
    .from('.hero-title', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.5')
    .from('.hero-description', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.3')
    .from('.btn-secondary', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: 'power2.out'
    }, '-=0.3')
    .from('.hero-phone', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power2.out'
    }, '-=0.8');

    // Phone mockup floating animation
    gsap.to('.hero-phone .phone-mockup', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
    });

    // App content animations inside phone
    gsap.from('.app-content > *', {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        delay: 1.5,
        ease: 'power2.out'
    });

    // Features section animations
    gsap.from('.features .section-header', {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%'
        }
    });

    gsap.from('.feature-item', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.features-grid',
            start: 'top 80%'
        }
    });

    // Connection section animations
    gsap.from('.connection-phones .phone-mockup', {
        opacity: 0,
        scale: 0.8,
        rotation: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.connection',
            start: 'top 70%'
        }
    });

    gsap.from('.connection-text', {
        opacity: 0,
        x: 50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.connection',
            start: 'top 70%'
        }
    });

    gsap.from('.connection-feature', {
        opacity: 0,
        x: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.connection-features',
            start: 'top 80%'
        }
    });

    // Installation steps animation
    gsap.from('.step', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.installation-steps',
            start: 'top 80%'
        }
    });

    // Step numbers rotation animation
    gsap.from('.step-number', {
        rotation: 360,
        scale: 0,
        duration: 1,
        stagger: 0.3,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.installation-steps',
            start: 'top 80%'
        }
    });

    // Donation section animations
    gsap.from('.donation-text', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.donation',
            start: 'top 70%'
        }
    });

    gsap.from('.donation-phones .phone-mockup', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.donation',
            start: 'top 70%'
        }
    });

    // Payment methods animation
    gsap.from('.payment-method', {
        opacity: 0,
        x: 30,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.payment-methods',
            start: 'top 80%'
        }
    });

    // Heart display pulse animation
    gsap.to('.heart-display', {
        scale: 1.05,
        duration: 1.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1
    });

    // Individual heart items animation
    gsap.from('.heart-item', {
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.heart-display',
            start: 'top 80%'
        }
    });

    // Testimonials animation
    gsap.from('.testimonial', {
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%'
        }
    });

    // Stars animation
    gsap.from('.star', {
        opacity: 0,
        scale: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'back.out(1.7)',
        scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%'
        }
    });

    // Final CTA animations
    gsap.from('.cta-text', {
        opacity: 0,
        x: -50,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.final-cta',
            start: 'top 70%'
        }
    });

    gsap.from('.cta-phones .phone-mockup', {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.3,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.final-cta',
            start: 'top 70%'
        }
    });

    gsap.from('.btn-download', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.download-buttons',
            start: 'top 80%'
        }
    });

    // Footer animation
    gsap.from('.footer-content > *', {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
            trigger: '.footer',
            start: 'top 80%'
        }
    });

    // Continuous animations for phone mockups
    gsap.to('.connection-phones .phone-mockup', {
        y: -10,
        duration: 4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
    });

    gsap.to('.donation-phones .phone-mockup', {
        y: -15,
        duration: 3.5,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3
    });

    gsap.to('.cta-phones .phone-mockup', {
        y: -12,
        duration: 3.8,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.4
    });

    // Reaction icons pulse animation
    gsap.to('.reaction-icon', {
        scale: 1.1,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.3
    });

    // Logo diamond rotation
    gsap.to('.logo-diamond', {
        rotation: 360,
        duration: 8,
        ease: 'none',
        repeat: -1
    });

    gsap.fromTo('.phone-animate', 
        { x: 600, opacity: 0 }, 
        { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }
    );
}

function initInteractions() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                gsap.to(window, {
                    duration: 1,
                    scrollTo: target,
                    ease: 'power2.inOut'
                });
            }
        });
    });

    // Button hover animations
    document.querySelectorAll('.btn-primary, .btn-secondary, .btn-download').forEach(button => {
        button.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        button.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Feature item hover animations
    document.querySelectorAll('.feature-item').forEach(item => {
        item.addEventListener('mouseenter', function() {
            gsap.to(this, {
                y: -10,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        item.addEventListener('mouseleave', function() {
            gsap.to(this, {
                y: 0,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Testimonial hover animations
    document.querySelectorAll('.testimonial').forEach(testimonial => {
        testimonial.addEventListener('mouseenter', function() {
            gsap.to(this, {
                scale: 1.02,
                duration: 0.3,
                ease: 'power2.out'
            });
        });

        testimonial.addEventListener('mouseleave', function() {
            gsap.to(this, {
                scale: 1,
                duration: 0.3,
                ease: 'power2.out'
            });
        });
    });

    // Mobile menu toggle
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileToggle && navMenu) {
        mobileToggle.addEventListener('click', function() {
            const isOpen = navMenu.style.display === 'flex';
            
            if (isOpen) {
                gsap.to(navMenu, {
                    opacity: 0,
                    y: -20,
                    duration: 0.3,
                    ease: 'power2.out',
                    onComplete: () => {
                        navMenu.style.display = 'none';
                    }
                });
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.right = '0';
                navMenu.style.background = 'white';
                navMenu.style.flexDirection = 'column';
                navMenu.style.padding = '1rem';
                navMenu.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
                
                gsap.fromTo(navMenu, 
                    { opacity: 0, y: -20 },
                    { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
                );
            }
        });
    }

    // Parallax effect for hero section
    gsap.to('.hero-phone', {
        yPercent: -30,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });

    // Phone content scroll animations
    gsap.to('.app-content', {
        y: -20,
        ease: 'none',
        scrollTrigger: {
            trigger: '.hero',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}

// Add loading animation
window.addEventListener('load', function() {
    gsap.from('body', {
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out'
    });
});

// Add scroll progress indicator
gsap.to('.header', {
    '--scroll-progress': '100%',
    ease: 'none',
    scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    }
});

// Performance optimization
ScrollTrigger.refresh();