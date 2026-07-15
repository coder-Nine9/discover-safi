export default function Card({ restaurant }) {
  return (
    <div className="group flex flex-col  rounded-4xl overflow-hidden shadow-lg  max-w-93.5 cursor-pointer transition-all duration-300 hover:-translate-y-1.5">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className=" rounded-t-lg w-full h-47.5  object-cover transition-all duration-300 group-hover:scale-[1.1] "
      />
      <div className=" p-5.5 text-[16px] font-['Inter',sans-serif] text-[#122431] ">
        <h3 className="font-bold mb-1.5 text-[18px] text-[#0B2E42] font-[Fraunces,serif]">
          {restaurant.name}
        </h3>
        <div className=" mb-2.5 text-[#6B7B83] flex justify-between">
          <span className="text-[13px] ">{restaurant.location}</span>
          <span className="text-[13px] ">⭐ {restaurant.rating}</span>
        </div>
        <p className="text-[14px] text-[#5A6B73] leading-6">
          {restaurant.description}
        </p>
      </div>
    </div>
  );
}
