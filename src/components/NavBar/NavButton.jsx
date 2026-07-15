import { motion } from "framer-motion";

export default function NavButton({ size = "" }) {
  return (
    <>
      <motion.button
        animate={{
          x: [0, 0, 5, 5, 0],
          y: [0, 5, 5, 0, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ width: size }}
        className="px-6 py-3 text-[13.5px] font-bold text-white rounded-full  bg-[#C1663F] shadow-sm transition-all duration-300 ease-out hover:-translate-0.75 hover:shadow-[0_16px_36px_-8px_rgba(193,102,63,0.75)]  cursor-pointer"
      >
        Plan Your PLan
      </motion.button>
    </>
  );
}
