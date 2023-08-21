To create responsive sliders:

https://stackoverflow.com/questions/60595112/swiperjs-responsive-browser-width-problems

https://github.com/nolimits4web/Swiper/blob/master/demos/380-responsive-breakpoints.html

https://stackblitz.com/edit/swiper-demo-37-responsive-breakpoints?file=index.html



For Automatic and Smooth Transition
	<script>
		var swiper = new Swiper('.mySwiper', {
      slidesPerView: 1,
      spaceBetween: 10,
      loop: true,
      loopFillGroupWithBlank: true,
      // init: false,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
     ** autoplay: {
        delay: 3000, // Delay in milliseconds between slides
        disableOnInteraction: false, // Set to true to stop autoplay when user interacts with the slider
      },
      speed: 800, // Adjust the speed (in milliseconds) for smoother transitions**
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });
	</script>
