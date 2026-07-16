import Statistic from "./Statistic";

export default function HeroStatistic() {
  return (
    <div className="px-6.5 py-5 flex flex-col flex-wrap  gap-7 bg-[#FFFFFF24] rounded-2xl backdrop-blur-md border border-[#ffffff59] absolute right-8 bottom-8  text-[#FFFFFF] text-center lg:flex-row lg:right-20 lg:bottom-25  ">
      <Statistic
        NumbersSate={"6"}
        TextState={"Beaches"}
        textSize={"26px"}
        paraSize={"11px"}
        tracking={"0.1em"}
      />
      <Statistic
        NumbersSate={"800+"}
        TextState={"YRS POTTERY"}
        textSize={"26px"}
        paraSize={"11px"}
        tracking={"0.1em"}
      />
      <Statistic
        NumbersSate={"4.8"}
        TextState={"AVG RATING"}
        textSize={"26px"}
        paraSize={"11px"}
        tracking={"0.1em"}
      />
    </div>
  );
}
