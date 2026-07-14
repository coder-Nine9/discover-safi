export default function Card({ review }) {
  return (
    <div className="flex flex-col justify-center items-center w-180">
      <h1
        className=" text-[26px] mb-7 leading-6 font-bold tracking-[0.02em]"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        {review.quote}
      </h1>
      <div className="flex justify-around items-center gap-3 ">
        <div className="rounded-full w-13 h-13 bg-black "></div>
        <div className="flex flex-col">
          <b className="text-[15px]">{review.name}</b>
          <span className="text-[12.5px]">{review.location}</span>
        </div>
      </div>
    </div>
  );
}
