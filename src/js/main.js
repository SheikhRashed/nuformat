'use strict'

// testimonial slider
var swiper = new Swiper('.testimonial-slider', {
	slidesPerView: 2,
	spaceBetween: 24,
	// autoplay: {
	// 	delay: 1800,
	// 	disableOnInteraction: false,
	// },
	pagination: {
		el: '.swiper-pagination',
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			navigation: {
				nextEl: '.swiper-button-next.testimonial-btn--next',
				prevEl: '.swiper-button-prev.testimonial-btn--prev',
			},
		},
	},
})
