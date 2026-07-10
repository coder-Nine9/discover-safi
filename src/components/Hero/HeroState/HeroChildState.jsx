export default function HeroChildState({ NumbersSate, TextState }) {
  return (
    <div className="text-[#FFFFFF] text-center flex flex-col gap-2">
      <h1
        className=" text-[26px] font-bold"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        {NumbersSate}
      </h1>
      <p
        className=" text-[#ffffffe3] text-[11px] tracking-widest font-medium transform-[scaleY(1.2)] "
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {TextState}
      </p>
    </div>
  );
}
