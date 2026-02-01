

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
  
});


