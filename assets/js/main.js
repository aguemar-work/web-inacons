
// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();

        // Typewriter animation for hero text
        function initTypewriterAnimation() {
            const typewriterWords = document.querySelectorAll(".word.typewriter");
            let currentIndex = 0;

            function typeWord(word, text, callback) {
                word.classList.add("active", "typing");
                let currentText = "";
                let charIndex = 0;

                const typeInterval = setInterval(() => {
                    if (charIndex < text.length) {
                        currentText += text[charIndex];
                        word.textContent = currentText;
                        charIndex++;
                    } else {
                        clearInterval(typeInterval);
                        word.classList.remove("typing");
                        word.classList.add("completed");

                        if (callback) {
                            setTimeout(callback, 300);
                        }
                    }
                }, 90); // 90ms per character
            }

            function typeNextWord() {
                if (currentIndex >= typewriterWords.length) return;

                const word = typewriterWords[currentIndex];
                const text = word.getAttribute("data-text");

                typeWord(word, text, () => {
                    currentIndex++;
                    if (currentIndex < typewriterWords.length) {
                        typeNextWord();
                    }
                });
            }

            // Start animation after a short delay
            setTimeout(typeNextWord, 1000);
        }

        // Initialize typewriter animation when page loads
        window.addEventListener("load", initTypewriterAnimation);

        // Counter animation for hero indicators
        function animateCounters() {
            const counters = document.querySelectorAll(".indicator-number");
            let hasAnimated = false;

            function animateCounter(counter) {
                const target = parseInt(counter.getAttribute("data-target"));
                const duration = 2000;
                let startTime = null;
                
                function step(timestamp) {
                    if (!startTime) startTime = timestamp;
                    const progress = Math.min((timestamp - startTime) / duration, 1);
                    const value = Math.floor(progress * target);
                    
                    counter.textContent = value.toLocaleString();
                    
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    } else {
                        counter.textContent = target.toLocaleString();
                    }
                }
                
                requestAnimationFrame(step);
            }

            function startCountAnimation() {
                if (hasAnimated) return;
                hasAnimated = true;

                counters.forEach((counter, index) => {
                    setTimeout(() => {
                        animateCounter(counter);
                    }, index * 200); // Stagger animation by 200ms
                });
            }

            // Check if hero indicators are in viewport
            function checkViewport() {
                const heroIndicators = document.querySelector(".hero-indicators");
                if (!heroIndicators) return;

                const rect = heroIndicators.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight && rect.bottom > 0;

                if (isVisible) {
                    startCountAnimation();
                    window.removeEventListener("scroll", checkViewport);
                }
            }

            // Start animation when page loads (if indicators are visible)
            setTimeout(() => {
                checkViewport();
                window.addEventListener("scroll", checkViewport);
            }, 3000); // Wait for typewriter animation to complete
        }

        // Initialize counter animation
        window.addEventListener("load", animateCounters);

        // Mobile menu functionality
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileMenuClose = document.getElementById('mobileMenuClose');

        if (menuToggle && mobileMenu) {
            menuToggle.addEventListener('click', () => {
                mobileMenu.classList.add('active');
            });
        }

        if (mobileMenuClose && mobileMenu) {
            mobileMenuClose.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
            });
        }

        if (mobileMenu) {
            const mobileMenuLinks = mobileMenu.querySelectorAll('a');
            // Close mobile menu when clicking on a link
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                });
            });
        }

        // Header and topbar scroll behavior
        const header = document.getElementById('header');
        const topBar = document.querySelector('.top-bar');
        let lastScrollTop = 0;
        let scrollTimeout;

        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                // Topbar logic: only show when at the very top
                if (topBar && window.innerWidth >= 768) {
                    if (scrollTop === 0) {
                        topBar.classList.remove('hidden');
                    } else {
                        topBar.classList.add('hidden');
                    }
                }
                
                // Header logic: hide/show based on scroll direction after 50px
                if (scrollTop > 50) {
                    if (scrollTop > lastScrollTop) {
                        // Scrolling down
                        header.classList.add('hidden');
                    } else {
                        // Scrolling up
                        header.classList.remove('hidden');
                    }
                } else {
                    header.classList.remove('hidden');
                }
                lastScrollTop = scrollTop;
            }, 10);
        });

        // Back to top button
        const backToTop = document.getElementById('backToTop');

        if (backToTop) {
            window.addEventListener('scroll', () => {
                if (window.pageYOffset > 400) {
                    backToTop.classList.add('visible');
                } else {
                    backToTop.classList.remove('visible');
                }
            });

            backToTop.addEventListener('click', () => {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
        }

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const headerHeight = header.offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        // const contactForm = document.querySelector('.contact-form');
        // if (contactForm) {
        //     contactForm.addEventListener('submit', (e) => {
        //         e.preventDefault();
        //         
        //         // Get form data
        //         const formData = new FormData(contactForm);
        //         const data = Object.fromEntries(formData);
        //         
        //         // Simple validation
        //         if (!data.name || !data.email || !data.message) {
        //             alert('Por favor, completa todos los campos requeridos.');
        //             return;
        //         }
        //         
        //         // Simulate form submission
        //         alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        //         contactForm.reset();
        //     });
        // }

        // Responsive adjustments
        function handleResize() {
            const header = document.getElementById('header');
            const topBar = document.querySelector('.top-bar');
            const main = document.querySelector('.main');
            
            if (window.innerWidth >= 768) {
                if (header && header.classList) header.classList.add('with-topbar');
                if (main && main.classList) main.classList.add('with-topbar');
            } else {
                if (header && header.classList) header.classList.remove('with-topbar');
                if (main && main.classList) main.classList.remove('with-topbar');
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // Call on initial load

        // Header scroll effect for logo change
        function initHeaderScrollEffect() {
            const header = document.getElementById('header');
            
            if (!header) return;
            
            window.addEventListener('scroll', function() {
                if (window.scrollY > 50) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });
        }

        // Initialize header scroll effect
        initHeaderScrollEffect();

        // Initialize clients carousel
        initializeClientsCarousel();

});

// ===== CLIENTS CAROUSEL FUNCTIONALITY =====
function initializeClientsCarousel() {
  // Inicializar carrusel infinito para home-clients (index.html)
  initializeClientsHome();
  
  // Inicializar carrusel estático para about-clients (nosotros.html)
  initializeClientsAbout();
}

// Carrusel infinito para home-clients
function initializeClientsHome() {
  const carouselTrack = document.getElementById('clientsCarouselTrack');
  
  if (!carouselTrack) return;
  
  let isUserInteracting = false;
  let touchStartX = 0;
  let touchEndX = 0;
  
  // Función para pausar/reanudar animación
  function pauseAnimation() {
    carouselTrack.style.animationPlayState = 'paused';
  }
  
  function resumeAnimation() {
    if (!isUserInteracting) {
      carouselTrack.style.animationPlayState = 'running';
    }
  }
  
  // Event listeners para hover (desktop)
  carouselTrack.addEventListener('mouseenter', () => {
    isUserInteracting = true;
    pauseAnimation();
  });
  
  carouselTrack.addEventListener('mouseleave', () => {
    isUserInteracting = false;
    resumeAnimation();
  });
  
  // Event listeners para touch (mobile)
  carouselTrack.addEventListener('touchstart', (e) => {
    isUserInteracting = true;
    touchStartX = e.touches[0].clientX;
    pauseAnimation();
  }, { passive: true });
  
  carouselTrack.addEventListener('touchmove', (e) => {
    // Mantener pausado durante el deslizamiento
    e.preventDefault();
  }, { passive: false });
  
  carouselTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].clientX;
    
    // Pequeño delay antes de reanudar para mejor UX
    setTimeout(() => {
      isUserInteracting = false;
      resumeAnimation();
    }, 500);
  }, { passive: true });
  
  // Event listeners individuales para cada logo
  const clientLogos = carouselTrack.querySelectorAll('.client-logo');
  clientLogos.forEach(logo => {
    logo.addEventListener('mouseenter', () => {
      isUserInteracting = true;
      pauseAnimation();
    });
    
    logo.addEventListener('mouseleave', () => {
      isUserInteracting = false;
      resumeAnimation();
    });
  });
}

// Carrusel estático con controles para about-clients
function initializeClientsAbout() {
  const clientsGrid = document.getElementById('clientsGrid');
  const prevBtn = document.getElementById('clientsPrev');
  const nextBtn = document.getElementById('clientsNext');
  
  if (!clientsGrid || !prevBtn || !nextBtn) return;
  
  const logos = clientsGrid.querySelectorAll('.client-logo');
  const itemsPerPage = 10; // 5 columnas x 2 filas
  let currentPage = 0;
  const totalPages = Math.ceil(logos.length / itemsPerPage);
  
  // Función para mostrar página específica
  function showPage(pageIndex) {
    logos.forEach((logo, index) => {
      const startIndex = pageIndex * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      
      if (index >= startIndex && index < endIndex) {
        logo.style.display = 'flex';
      } else {
        logo.style.display = 'none';
      }
    });
    
    // Actualizar estado de botones
    prevBtn.disabled = pageIndex === 0;
    nextBtn.disabled = pageIndex === totalPages - 1;
  }
  
  // Event listeners para botones
  prevBtn.addEventListener('click', () => {
    if (currentPage > 0) {
      currentPage--;
      showPage(currentPage);
    }
  });
  
  nextBtn.addEventListener('click', () => {
    if (currentPage < totalPages - 1) {
      currentPage++;
      showPage(currentPage);
    }
  });
  
  // Mostrar primera página inicialmente
  showPage(0);
}
    