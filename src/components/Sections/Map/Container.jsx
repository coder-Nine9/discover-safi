// import { contentList } from "../../Data/Beaches";
import BeachesDropDown from "./BeachesDropDown";
import { motion } from "framer-motion";
export default function Container() {
  return (
    <motion.div
      className="p-9 bg-[#0F3B54] rounded-2xl max-w-fit h-fit"
      initial={{ opacity: 0, x: 80, scale: 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 90,
        damping: 16,
        delay: 0.4,
      }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h1 className="mb-1.5 text-[15px] uppercase font-['Space_Mono',monospace] font-extrabold tracking-wider text-[#E8D9BC] leading-[1.8]">
        Your Location
      </h1>
      <button className=" cursor-pointer px-4 py-3 bg-[#FFFFFF14] text-[#FFFFFF] rounded-4xl text-[14px] font-['Arial'] w-full text-left border border-[#FFFFFF24] font-bold tracking-widest transition-all duration-300 ease-in-out active:border-[#FFFFFF50] ">
        📍 Use my current location
      </button>
      <h1 className="text-[15px] text-[#E8D9BC] uppercase mb-1.5 mt-2.5 font-['Space_Mono',monospace] tracking-wider font-extrabold leading-[1.8]">
        Beaches
      </h1>
      <BeachesDropDown />
    </motion.div>
  );
}
