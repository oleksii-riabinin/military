

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "/src/sass/ui/style.scss";
import "/src/sass/ui/tailwind.css";


const swiper = new Swiper('.swiper', {

  modules: [Navigation, Pagination],
slidesPerView: 4, 
spaceBetween: 17,
  loop: true, 
  speed: 2000,



  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});

document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.footer__wrapper');
  const footer = document.querySelector('.footer');

  if (!wrapper || !footer) return;

  window.addEventListener('scroll', () => {
    const rect = footer.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const progress = Math.min(
      Math.max((windowHeight - rect.top) / windowHeight, 0),
      1
    );

    wrapper.style.transform = `translateY(${(-150 + progress * 150)}px)`;
    wrapper.style.opacity = progress;
  });
});