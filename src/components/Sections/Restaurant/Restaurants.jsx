import SectionHeader from "../SectionHeader";
import { restaurantsData } from "../../Data/Restaurants";
import { SwiperSlide } from "swiper/react";
import Card from "./Card";
import SwiperGrid from "./SwiperGrid";
import { useState, useMemo } from "react";
import { Funnel, FunnelPlus } from "lucide-react";
export default function Restaurants() {
  const [isDropFilterOpen, setIsDropFilterOpen] = useState(false);
  const [selected, setSelected] = useState("All");
  const [search, setSearch] = useState("");

  let restaurants = useMemo(() => {
    let filtered = restaurantsData;
    switch (selected) {
      case "more than 4.5":
        filtered = filtered.filter((restaurant) => restaurant.rating > 4.5);
        break;
      case "less than 4.0":
        filtered = filtered.filter((restaurant) => restaurant.rating < 4.0);
        break;
      case "between 4.0 and 4.5":
        filtered = filtered.filter(
          (restaurant) => restaurant.rating >= 4.0 && restaurant.rating <= 4.5,
        );
    }

    //Search by input

    if (search.trim() !== "") {
      console.log(filtered);
      filtered = filtered.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(search.toLowerCase()),
      );
    }

    return filtered;
  }, [selected, search]);

  const RestaurantsList = restaurants.map((restaurant) => {
    return (
      <SwiperSlide key={restaurant.id}>
        <Card restaurant={restaurant} />
      </SwiperSlide>
    );
  });

  function handleFilterIcon() {
    setIsDropFilterOpen((prev) => !prev);
  }

  function handleSelected(optionSelected) {
    setSelected(optionSelected);
  }
  return (
    <section className="py-30 bg-[#F7F1E3]" id="Restaurants">
      <div className="px-8 max-w-[81.5%] m-auto">
        <div className="flex flex-col w-full ">
          <SectionHeader
            label="Where to eat"
            title="Straight off the boat"
            description="Safi's harbour supplies some of the freshest seafood on the Atlantic coast."
          />
          <div className="w-full flex justify-end items-center gap-3 mb-5">
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              type="text"
              className="p-3 bg-white rounded-xl border border-gray-300 w-75 outline-none"
              placeholder="Search"
            />
            <div className="relative">
              {isDropFilterOpen ? (
                <DropFilter
                  handleFilterIcon={handleFilterIcon}
                  handleSelected={handleSelected}
                  selected={selected}
                />
              ) : (
                <FunnelPlus
                  onClick={handleFilterIcon}
                  size={32}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>
        <SwiperGrid>{RestaurantsList}</SwiperGrid>
      </div>
    </section>
  );
}

function DropFilter({ handleFilterIcon, handleSelected, selected }) {
  return (
    <>
      <Funnel size={32} onClick={handleFilterIcon} className="cursor-pointer" />
      <div className=" w-60  bg-white rounded-lg absolute top-12 right-1 z-10 ">
        <div
          onClick={() => {
            handleSelected("All");
            handleFilterIcon();
          }}
          style={{
            background: selected === "All" ? "#0F3B547D" : "white",
          }}
          className=" px-5 py-2  border-b-2 border-gray-100 font-medium transition-all duration-300 easeInOut  hover:bg-[#0F3B54]! hover:text-[#E8D9BC] cursor-pointer"
        >
          All
        </div>
        <div
          onClick={() => {
            handleSelected("more than 4.5");
            handleFilterIcon();
          }}
          style={{
            background: selected === "more than 4.5" ? "#0F3B547D" : "white",
          }}
          className=" px-5 py-2  border-b-2 border-gray-100 font-medium transition-all duration-300 easeInOut  hover:bg-[#0F3B54]! hover:text-[#E8D9BC] cursor-pointer"
        >
          more than 4.5
        </div>
        <div
          onClick={() => {
            handleSelected("less than 4.0");
            handleFilterIcon();
          }}
          style={{
            background: selected === "less than 4.0" ? "#0F3B547D" : "white",
          }}
          className=" px-5 py-2 border-b-2 border-gray-100 font-medium transition-all duration-300 easeInOut  hover:bg-[#0F3B54]! hover:text-[#E8D9BC] cursor-pointer"
        >
          less than 4.0
        </div>
        <div
          onClick={() => {
            handleSelected("between 4.0 and 4.5");
            handleFilterIcon();
          }}
          style={{
            background:
              selected === "between 4.0 and 4.5" ? "#0F3B547D" : "white",
          }}
          className="px-5 py-2  border-b-2 border-gray-100 font-medium  transition-all duration-300 easeInOut  hover:bg-[#0F3B54]! hover:text-[#E8D9BC] cursor-pointer"
        >
          between 4.0 and 4.5
        </div>
      </div>
    </>
  );
}
