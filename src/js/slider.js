import { tns } from 'tiny-slider/src/tiny-slider';

const initSlider = () => {
    const slider = document.querySelector('.simply-slider');
    if (!slider) return;

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
        console.warn('Slider initialization failed:', e);
    }
};

document.addEventListener('DOMContentLoaded', initSlider);
