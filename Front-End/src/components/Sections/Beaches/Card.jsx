export default function Card({ content }) {
  const categories = content.categories.map((category) => {
    return (
      <li
        key={content.id}
        className="text-center rounded-full border border-[#E8D9BC] bg-[#FCF8EF] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-[#0F3B54] transition-colors duration-300 hover:bg-[#E8D9BC]"
      >
        {category}
      </li>
    );
  });
  return (
    <div className="group rounded-4xl flex flex-col bg-white w-68.25 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-7 relative">
      <div className="px-3.5 py-1.5 text-[12px] text-white bg-[#FFFFFF24] rounded-[100px] backdrop-blur-md border border-[#ffffff59] absolute top-3.5 left-3.5  text-center z-10 font-medium ">
        {content.distance} From Safi
      </div>
      <div className="bg-white text-[#0B2E42]  text-[12.5px] px-3 py-1.5 rounded-full absolute top-3.5  right-3.5 z-10 font-bold text-center">
        ⭐{content.rating}
      </div>
      <img
        className="rounded-t-4xl h-57.5 object-cover  transition-transform duration-300  group-hover:scale-[1.1]  "
        src={content.image}
        alt={content.title}
      />
      <div className="p-[22px_22px_26px] flex flex-col gap-3 ">
        <h1 className="text-[21px] text-[#0B2E42] font-semibold font-[fraunces,serif]">
          {content.title}
        </h1>
        <p className="text-[14.5px] text-[#5A6B73] font-[inter,sans-serif] leading-6 font-medium tracking-[1px] ">
          {content.details}
        </p>
        <ul className=" flex  justify-center items-center gap-2 list-none">
          {categories}
        </ul>
        <div className="flex justify-between mt-1.5">
          <p className="text-[13px] text-[#8A9AA2] font-['inter',sans-serif]  font-medium tracking-[0.6px]  ">
            {content.duration}
          </p>
          <a
            href={"#Map"}
            className="group text-[13.5px] text-[#C1663F] font-[inter,sans-serif]  font-bold  cursor-pointer "
          >
            Explore Map{" "}
            <span className="inline-block transition-all duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
