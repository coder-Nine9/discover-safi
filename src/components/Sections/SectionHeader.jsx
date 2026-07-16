import LocationLabel from "../Hero/LocationLabel";

export default function SectionHeader({ label, title, description }) {
  return (
    <div className="max-w-157.5 mb-16">
      <LocationLabel
        text={label}
        m={"16px"}
        textS={"12px"}
        textColor={"#C1663F"}
      />
      <h1
        className=" text-[35px] lg:text-[48px]"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        {title}
      </h1>
      <p className="text-[16.5px] mt-4 font-['inter',sans-serif] text-[#43555f] leading-6.5 font-medium tracking-[1px] ">
        {description}
      </p>
    </div>
  );
}
