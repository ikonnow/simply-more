import { tns } from 'tiny-slider/src/tiny-slider';

const initSlider = () => {
    // Only initialize if the slider exists and hasn't been initialized yet
    const slider = document.querySelector('.simply-slider');
    if (!slider) return;
    
    // Check if slider is already initialized by featured-slider.hbs
    if (slider.classList.contains('tns-slider')) return;

    const options = {
        container: '.simply-slider',
        items: 1,
        slideBy: 'page',
        autoplay: true,
        controls: true,
        nav: false,
        controlsText: [
            '<svg class="icon"><use xlink:href="#icon-arrow-left"></use></svg>',
            '<svg class="icon"><use xlink:href="#icon-arrow-right"></use></svg>'
        ],
        controlsContainer: '.simply-slider-controls',
        prevButton: '.simply-slider-prev',
        nextButton: '.simply-slider-next',
        autoplayButtonOutput: false,
        autoplayTimeout: 5000,
        speed: 400,
        loop: true
    };

    try {
        tns(options);
    } catch (e) {
        // Silently handle the error to avoid console warnings
        // The slider might be initialized by featured-slider.hbs
    }
};

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', initSlider);
