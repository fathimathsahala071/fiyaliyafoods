(function ($) {
    "use strict";

    $(document).ready(function () {

        // Testimonial sliders
        $(".testimonial-sliders").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            responsive: {
                0: { items: 1, nav: false },
                600: { items: 1, nav: false },
                1000: { items: 1, nav: false }
            }
        });

        // Homepage slider
        $(".homepage-slider").owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            nav: true,
            dots: false,
            navText: [
                '<i class="fas fa-angle-left"></i>',
                '<i class="fas fa-angle-right"></i>'
            ],
            responsive: {
                0: { items: 1, nav: false },
                600: { items: 1, nav: true },
                1000: { items: 1, nav: true }
            }
        });

        // Logo carousel
        $(".logo-carousel-inner").owlCarousel({
            items: 4,
            loop: true,
            autoplay: true,
            margin: 30,
            responsive: {
                0: { items: 1, nav: false },
                600: { items: 3, nav: false },
                1000: { items: 4, nav: false }
            }
        });

        // Manual slideshow
        let slideIndex = 0;
        showSlides();

        function showSlides() {
            const slides = document.getElementsByClassName("slides");
            const dots = document.getElementsByClassName("dot");

            for (let i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }

            slideIndex++;
            if (slideIndex > slides.length) { slideIndex = 1; }

            for (let i = 0; i < dots.length; i++) {
                dots[i].className = dots[i].className.replace(" active", "");
            }

            if (slides.length > 0) {
                slides[slideIndex - 1].style.display = "block";
                if (dots.length > 0) {
                    dots[slideIndex - 1].className += " active";
                }
            }

            setTimeout(showSlides, 4000); // Change image every 4 seconds
        }

        // Countdown
        if ($('.time-countdown').length) {
            $('.time-countdown').each(function () {
                const $this = $(this),
                    finalDate = $this.data('countdown');
                $this.countdown(finalDate, function (event) {
                    $this.html(event.strftime(''
                        + '<div class="counter-column"><div class="inner"><span class="count">%D</span>Days</div></div>'
                        + '<div class="counter-column"><div class="inner"><span class="count">%H</span>Hours</div></div>'
                        + '<div class="counter-column"><div class="inner"><span class="count">%M</span>Mins</div></div>'
                        + '<div class="counter-column"><div class="inner"><span class="count">%S</span>Secs</div></div>'
                    ));
                });
            });
        }

        // Product filters (isotope)
        $(".product-filters li").on('click', function () {
            $(".product-filters li").removeClass("active");
            $(this).addClass("active");

            const selector = $(this).attr('data-filter');
            $(".product-lists").isotope({ filter: selector });
        });

        // Initialize isotope
        $(".product-lists").isotope();

        // Magnific popup for YouTube
        $('.popup-youtube').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });

        // Magnific popup for images
        $('.image-popup-vertical-fit').magnificPopup({
            type: 'image',
            closeOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: { verticalFit: true }
        });

        // Homepage slider animations
        $(".homepage-slider").on("translate.owl.carousel", function () {
            $(".hero-text-tablecell .subtitle").removeClass("animated fadeInUp").css('opacity', '0');
            $(".hero-text-tablecell h1").removeClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.3s' });
            $(".hero-btns").removeClass("animated fadeInUp").css({ 'opacity': '0', 'animation-delay': '0.5s' });
        });

        $(".homepage-slider").on("translated.owl.carousel", function () {
            $(".hero-text-tablecell .subtitle").addClass("animated fadeInUp").css('opacity', '1');
            $(".hero-text-tablecell h1").addClass("animated fadeInUp").css({ 'opacity': '1', 'animation-delay': '0.3s' });
            $(".hero-btns").addClass("animated fadeInUp").css({ 'opacity': '1', 'animation-delay': '0.5s' });
        });

        // Sticky header
        $("#sticker").sticky({ topSpacing: 0 });

        // Mean menu for mobile
        $('.main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "992"
        });

        // Search form toggle
        $(".search-bar-icon").on("click", function () {
            $(".search-area").addClass("search-active");
        });

        $(".close-btn").on("click", function () {
            $(".search-area").removeClass("search-active");
        });
    });

    // Loader on window load
    $(window).on("load", function () {
        $(".loader").fadeOut(1000);
    });

})(jQuery);
