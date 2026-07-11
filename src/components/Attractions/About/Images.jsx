import mainImage from "../../../assets/images/khazaf.jpg";
import beach from "../../../assets/images/About-beach.png";

export default function Images() {
  return (
    <div className="relative z-0">
      <img
        className="max-w-full rounded-4xl shadow-xl "
        src={mainImage}
        alt="khazaf"
      />
      <img
        className="max-w-[52%] rounded-2xl absolute  border-10 border-white top-60 right-75 shadow-2xl"
        src={beach}
        alt="beach"
      />
      <div className=" shadow-blue-500  bg-[linear-gradient(135deg,#1B5D8C,#123F5E)] w-30 h-30 absolute bottom-63 left-105  uppercase rounded-full flex justify-center items-center text-white p-2.5 text-center font-[space_Mono] text-[11px] tracking-[0.2em] leading-5">
        Est.
        <br /> fortified
        <br /> 1508
      </div>
    </div>
  );
}
