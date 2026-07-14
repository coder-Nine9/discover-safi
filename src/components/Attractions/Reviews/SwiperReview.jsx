import { Swiper } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Parallax, Pagination, Navigation, Autoplay } from "swiper/modules";

export default function ReviewsSwiper({ children }) {
  return (
    <Swiper
      style={{
        "--swiper-navigation-color": "#000000",
        "--swiper-pagination-color": "#000000",
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      speed={600}
      parallax={true}
      pagination={{ clickable: true }}
      navigation={true}
      modules={[Parallax, Pagination, Navigation, Autoplay]}
      className="mySwiper relative h-130! rounded-3xl overflow-hidden"
    >
      <div
        slot="container-start"
        className="parallax-bg absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/images/safi-coast.jpg)",
        }}
        data-swiper-parallax="-23%"
      ></div>

      <div className="absolute inset-0  pointer-events-none"></div>

      {children}
    </Swiper>
  );
}
