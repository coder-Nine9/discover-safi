import SectionHeader from "../SectionHeader";
import { restaurantsData } from "../../Data/Restaurants";
import { SwiperSlide } from "swiper/react";
import Card from "./Card";
import SwiperGrid from "./SwiperGrid";
export default function Restaurants() {
  const RestaurantsList = restaurantsData.map((restaurant) => {
    return (
      <SwiperSlide key={restaurant.id}>
        <Card restaurant={restaurant} />
      </SwiperSlide>
    );
  });
  return (
    <section className="py-30 bg-[#F7F1E3]" id="Restaurants">
      <div className="px-8 max-w-[81.5%] m-auto">
        <SectionHeader
          label="Where to eat"
          title="Straight off the boat"
          description="Safi's harbour supplies some of the freshest seafood on the Atlantic coast."
        />
        <SwiperGrid>{RestaurantsList}</SwiperGrid>
      </div>
    </section>
  );
}
