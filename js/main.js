// NAVBAR -----------------------------------------
let menuIsOpened = false;
const button = document.querySelector('.nav-button')
const menu = document.querySelector('.nav-list')

button.addEventListener("click", () =>{
    if (!menuIsOpened) {
        menu.style.display = 'flex'
        menuIsOpened = true;
    } else{
        menu.style.display = 'none'
        menuIsOpened = false;
    }
} )

// CARROSEL -----------------------------------------
new Swiper("#swiper-1", {
    slidesPerView: 1,
    centeredSlides: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ("#swiper-1 .swiper-custom-pagination"),
        clickable: true,
        renderBullet: function (index, className) {
        return `<div class=${className}>
            <span class="number">${index + 1}</span>
            <span class="line"></span>
            </div>`;
        }
    },
    lazyLoading: true,
    loop: true,
    keyboard: {
        enabled:true
    }
})

new Swiper("#swiper-2", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
      delay: 5500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ("#swiper-2 .swiper-custom-pagination"),
      clickable: true,
      renderBullet: function (index, className) {
      return `<div class=${className}>
          <span class="number">${index + 1}</span>
          <span class="line"></span>
          </div>`;
      }
  },
  lazyLoading: true,
  loop: true,
  keyboard: {
      enabled:true
  },
  breakpoints: {
      800: {
          slidesPerView: 3
      },
  }
})