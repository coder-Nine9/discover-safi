import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

export default function SwiperCard({ children }) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-70 h-100 lg:w-100 lg:h-130"
      >
        {children}
      </Swiper>
    </>
  );
}
