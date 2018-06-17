import Swiper from 'swiper';

export class Movie {
    constructor() {
        this.swiper = new Swiper('.container', {
            wrapperClass: 'movies-wrapper',
            slideClass: 'movie',
            slidesPerView: 2,
            slidesPerGroup: 2,
            watchSlidesVisibility: true,
            spaceBetween: 0,
            loop: false,
            preloadImages: false,
            lazy: true,
            autoplay: {
                delay: 10000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets'
            },
            scrollbar: {
                el: '.swiper-scrollbar',
                draggable: false,
            }, 
            breakpoints: {
                660: {
                  slidesPerView: 1,
                  autoplay: false
                }
            }
        });

        const wrapper = document.getElementById('banner-swipper');

        wrapper.onmouseenter = () => {
            this.swiper.autoplay.stop()
        };

        wrapper.onmouseleave = () => {
            this.swiper.autoplay.start()
        };
    }
}


window.onload = () => {
    window.movie = new Movie();
}