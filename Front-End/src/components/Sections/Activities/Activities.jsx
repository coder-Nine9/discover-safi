import SectionHeader from "../SectionHeader";
import { SwiperSlide } from "swiper/react";
import { ActivitiesList } from "../../Data/Activities";
import SwiperCard from "./SwiperCard";
import ActivityCard from "./ActivityCard";
export default function Activities() {
  const activitySlides = ActivitiesList.map((activity) => {
    return (
      <SwiperSlide key={activity.id} className="w-auto!">
        <ActivityCard activity={activity} />
      </SwiperSlide>
    );
  });
  return (
    <section className="py-30 bg-[#F8F1E5] overflow-x-hidden " id="Activities">
      <div className="px-4 lg:px-8 max-w-[81.5%] m-auto ">
        <SectionHeader
          label="Things to do"
          title="An active coastline"
          description="Eight ways to spend your days, from the water to the potter's wheel."
        />
        <SwiperCard>{activitySlides}</SwiperCard>
      </div>
    </section>
  );
}
