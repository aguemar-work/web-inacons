document.addEventListener('DOMContentLoaded', function() {
    // Configuración para carrusel de clientes
    var clientsSwiper = new Swiper('.clients-swiper', { 
        loop: true,
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
        },
        navigation: { 
            nextEl: '.clients-btn-next', 
            prevEl: '.clients-btn-prev', 
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            768: {
                slidesPerView: 1,
                spaceBetween: 0
            },
            1024: {
                slidesPerView: 1,
                spaceBetween: 0
            }
        },
        on: {
            init: function () {
                // Initialize Lucide icons
                if (typeof lucide !== 'undefined') {
                    lucide.createIcons();
                }
            }
        }
    });

    // Funcionalidades adicionales para el carrusel de clientes
    if (clientsSwiper) {
        // Pause autoplay on hover for individual logo items
        const logoItems = document.querySelectorAll('.client-logo-item');
        logoItems.forEach((item) => {
            item.addEventListener('mouseenter', () => {
                clientsSwiper.autoplay.stop();
            });

            item.addEventListener('mouseleave', () => {
                clientsSwiper.autoplay.start();
            });
        });

        // Touch/swipe support for mobile
        if (window.innerWidth <= 767) {
            clientsSwiper.allowTouchMove = true;
        }
    }

    // Configuración para otros carruseles (si existen)
    var generalSwiper = new Swiper('.swiper-container', { 
        loop: true,
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: { 
            el: '.swiper-pagination', 
            clickable: true, 
        }, 
        navigation: { 
            nextEl: '.swiper-button-next', 
            prevEl: '.swiper-button-prev', 
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 25
            },
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});