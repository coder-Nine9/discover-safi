import LocationLabel from "../../Hero/LocationLabel";

export default function Content() {
  return (
    <div className="w-157.5 mb-16">
      <LocationLabel
        text={"Plan your route"}
        m={"16px"}
        textS={"12px"}
        textColor={"#C1663F"}
      />
      <h1
        className=" text-[48px]"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        Find your way to the coast
      </h1>
      <p className="text-[16.5px] mt-4 font-['inter',sans-serif] text-[#43555f] leading-6.5 font-medium tracking-[1px] ">
        Share your location too see live distance and drive-time estimates to
        every beach featured on this page.
      </p>
    </div>
  );
}
