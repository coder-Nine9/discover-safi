import { reviewData } from "../../Data/Review";
import Card from "./Card";
import { SwiperSlide } from "swiper/react";
import SwiperReview from "./SwiperReview";
export default function Reviews() {
  const reviewList = reviewData.map((review) => {
    return (
      <SwiperSlide
        key={review.id}
        className="flex! items-center justify-center px-8 md:px-16"
      >
        <div data-swiper-parallax="-200" className="relative z-10">
          <Card review={review} />
        </div>
      </SwiperSlide>
    );
  });
  return (
    <section className="py-30 bg-[#0B2E42] text-white  text-center ">
      <div className="px-8 max-w-[81.5%] m-auto">
        <h3
          className=" font-bold tracking-[0.3em] uppercase flex justify-center items-center gap-3  "
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "18px",
            color: "#C1663F",
          }}
        >
          Traveller stories
        </h3>
        <SwiperReview>{reviewList}</SwiperReview>
      </div>
    </section>
  );
}
