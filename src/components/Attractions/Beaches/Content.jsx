import LocationLabel from "../../Hero/LocationLabel";

export default function Content() {
  return (
    <div className="w-157.5 mb-16">
      <LocationLabel
        text={"Featured beaches"}
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
        Six coastlines, six moods
      </h1>
      <p className="text-[16.5px] mt-4 font-['inter',sans-serif] text-[#43555f] leading-6.5 font-medium tracking-[1px] ">
        From cliffside surf breaks to a sheltered lagoon known for its oysters —
        each beach near Safi has its own character.
      </p>
    </div>
  );
}
