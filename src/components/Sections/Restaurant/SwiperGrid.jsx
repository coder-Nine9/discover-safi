//         className="mySwiper"

// Import Swiper React components
import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

// import required modules
import { Grid, Pagination } from "swiper/modules";

export default function SwiperGrid({ children }) {
  return (
    <Swiper
      // force clipping no matter what global overflow-visible rules exist elsewhere
      className="mySwiper overflow-hidden! w-full! pb-15!"
      spaceBetween={30}
      grabCursor={true}
      grid={{
        rows: 1,
        fill: "row",
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Grid, Pagination]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          grid: { rows: 1, fill: "row" },
        },
        768: {
          slidesPerView: 2,
          grid: { rows: 1, fill: "row" },
        },
        1024: {
          slidesPerView: 3,
          grid: { rows: 1, fill: "row" },
        },
      }}
    >
      {children}
    </Swiper>
  );
}
