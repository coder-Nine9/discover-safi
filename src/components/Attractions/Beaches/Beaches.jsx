import Card from "./Card";
import SectionHeader from "../../Attractions/SectionHeader";
import { contentList } from "../../Data/Beaches";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function Beaches() {
  const swiperSliders = contentList.map((content) => {
    return (
      <SwiperSlide key={content.id} className="w-auto!">
        <Card content={content} />
      </SwiperSlide>
    );
  });
  return (
    <div className="py-30 bg-[#F7F1E3]">
      <div className="px-8 max-w-[81.5%] m-auto">
        <SectionHeader
          label="Featured beaches"
          title="Six coastlines, six moods"
          description="From cliffside surf breaks to a sheltered lagoon known for its oysters —
        each beach near Safi has its own character."
        />
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          initialSlide={2}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: -100,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true} // display ...
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper py-10! -my-10!"
        >
          {swiperSliders}
        </Swiper>
      </div>
    </div>
  );
}
