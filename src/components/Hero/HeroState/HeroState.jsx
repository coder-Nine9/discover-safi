import HeroChildState from "./HeroChildState";

export default function HeroState() {
  return (
    <div className="px-6.5 py-5 flex flex-wrap gap-7 bg-[#FFFFFF24] rounded-2xl backdrop-blur-md border border-[#ffffff59] absolute right-25 bottom-30  ">
      <HeroChildState NumbersSate={"6"} TextState={"Beaches"} />
      <HeroChildState NumbersSate={"800+"} TextState={"YRS POTTERY"} />
      <HeroChildState NumbersSate={"4.8"} TextState={"AVG RATING"} />
    </div>
  );
}
