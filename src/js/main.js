"use strict"

// mobile menu
const navbar = document.querySelector("header nav")
document.querySelector(".menu-bar").addEventListener("click", function (e) {
	e.preventDefault()
	navbar.classList.toggle("active")
})

// testimonial slider
var swiper = new Swiper(".testimonial-slider", {
	slidesPerView: 2,
	spaceBetween: 24,
	pagination: {
		el: ".swiper-pagination",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
			navigation: {
				nextEl: ".swiper-button-next.testimonial-btn--next",
				prevEl: ".swiper-button-prev.testimonial-btn--prev",
			},
		},
	},
})

// review slider
var swiper = new Swiper(".review-slider", {
	slidesPerView: 3,
	spaceBetween: 24,
	autoplay: {
		delay: 1800,
		disableOnInteraction: false,
	},
	pagination: {
		el: ".swiper-pagination",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 3,
			navigation: {
				nextEl: ".swiper-button-next.testimonial-btn--next",
				prevEl: ".swiper-button-prev.testimonial-btn--prev",
			},
		},
	},
})
// post slider
var swiper = new Swiper(".post-slider", {
	spaceBetween: 20,
	pagination: {
		el: ".swiper-pagination",
	},

	breakpoints: {
		0: {
			slidesPerView: 1,
		},
		768: {
			slidesPerView: 2,
		},
		1024: {
			slidesPerView: 4,
			navigation: {
				nextEl: ".instagram-btn--next",
				prevEl: ".instagram-btn--prev",
			},
		},
	},
})

$(document).ready(function () {
	$(".popup").magnificPopup({
		type: "iframe",
	})
})
