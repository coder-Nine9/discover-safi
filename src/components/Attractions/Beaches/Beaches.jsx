import Content from "./Content";
import Card from "./Card";
//images
import sidiBouzid from "../../../assets/images/sidiBouzid.png";
import lallaFatna from "../../../assets/images/LalaFatna.png";
import safiBeach from "../../../assets/images/SafiBeach.png";
import souiriaLakdima from "../../../assets/images/Souiria Lakdima.png";
import capeBeddouza from "../../../assets/images/Cape Beddouza.png";
import sidiKaram from "../../../assets/images/Sidi Karam Addaif.png";
import { v4 as uuidv4 } from "uuid";

//swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
export default function Beaches() {
  const contentList = [
    {
      id: uuidv4(),
      image: sidiBouzid,
      title: "Sidi Bouzid",
      details:
        "Safi's closest beach — a lively cliffside promenade with cafés, families, and reliable waves for beginner surfers.",
      categories: ["Surfing", "Swimming", "Cafés"],
      duration: "10 min drive",
      rating: 4.7,
      distance: "3 km from Safi",
    },
    {
      id: uuidv4(),
      image: lallaFatna,
      title: "Lalla Fatna",
      details:
        "A stunning beach surrounded by dramatic cliffs, offering crystal-clear water and a peaceful atmosphere perfect for relaxing and photography.",
      categories: ["Nature", "Photography", "Swimming"],
      duration: "20 min drive",
      rating: 4.6,
      distance: "15 km from Safi",
    },
    {
      id: uuidv4(),
      image: safiBeach,
      title: "Safi Beach",
      details:
        "The city's main beach with a long promenade, family-friendly atmosphere, restaurants, and beautiful Atlantic Ocean views.",
      categories: ["Family", "Walking", "Sunsets"],
      duration: "City Center",
      rating: 4.3,
      distance: "0 km (City Center)",
    },
    {
      id: uuidv4(),
      image: souiriaLakdima,
      title: "Souiria Lakdima",
      details:
        "A peaceful stretch of golden sand known for fishing, camping, and water sports in a quiet natural setting.",
      categories: ["Camping", "Fishing", "Water Sports"],
      duration: "40 min drive",
      rating: 4.5,
      distance: "36 km from Safi",
    },
    {
      id: uuidv4(),
      image: capeBeddouza,
      title: "Cape Beddouza",
      details:
        "A scenic coastal destination famous for its lighthouse, rugged cliffs, spectacular sunsets, and uncrowded shoreline.",
      categories: ["Lighthouse", "Hiking", "Sunsets"],
      duration: "45 min drive",
      rating: 4.4,
      distance: "45 km from Safi",
    },
    {
      id: uuidv4(),
      image: sidiKaram,
      title: "Sidi Karam Addaif",
      details:
        "A quiet sandy beach ideal for swimming, family picnics, and enjoying a relaxing day away from the crowds.",
      categories: ["Swimming", "Picnics", "Relaxation"],
      duration: "1 hr drive",
      rating: 4.5,
      distance: "60 km from Safi",
    },
  ];

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
        <Content />

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
