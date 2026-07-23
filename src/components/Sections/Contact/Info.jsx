import { motion } from "framer-motion";

export default function Info() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ amount: 0.6 }}
      className="text-white flex flex-col font-['Inter',sans-serif] bg-[linear-gradient(160deg,#1B5D8C,#123F5E)]  rounded-4xl p-11 w-full lg:w-[42%]"
    >
      <h1
        className="mb-3 text-[26px] font-semibold "
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        Let's plan your visit
      </h1>
      <p className="text-[14.5px] mb-7.5  opacity-[0.7] ">
        Questions about beaches, pottery workshops, or getting around? Send a
        message and our local team will reply within a day.
      </p>
      <div className="flex flex-col mb-5 ">
        <b className=" text-[12px] mb-0.75 font-['Space_Mono',monospace] opacity-[0.7] tracking-[0.02em]">
          Address
        </b>
        <p className=" text-[14.5px]  ">Avenue Zerktouni, Safi, Morocco</p>
      </div>
      <div className="flex flex-col mb-5">
        <b className=" text-[12px] mb-0.75 font-['Space_Mono',monospace] opacity-[0.7] tracking-[0.02em]">
          Phone
        </b>
        <p className=" text-[14.5px]  ">+212 5 24 46 00 00</p>
      </div>
      <div className="flex flex-col mb-5 ">
        <b className=" text-[12px] mb-0.75 font-['Space_Mono',monospace] opacity-[0.7] tracking-[0.02em]">
          Email
        </b>
        <p className=" text-[14.5px]  ">hello@visitsafi.ma</p>
      </div>
      <div className="flex gap-5 text-[13px] font-['Inter',sans-serif] pt-7.5 ">
        <a className=" w-9.5 h-9.5 bg-[#FFFFFF24] rounded-full flex justify-center items-center">
          IG
        </a>
        <a className=" w-9.5 h-9.5 bg-[#FFFFFF24] rounded-full flex justify-center items-center">
          FB
        </a>
        <a className=" w-9.5 h-9.5 bg-[#FFFFFF24] rounded-full flex justify-center items-center">
          X
        </a>
        <a className=" w-9.5 h-9.5 bg-[#FFFFFF24] rounded-full flex justify-center items-center">
          YT
        </a>
      </div>
    </motion.div>
  );
}
