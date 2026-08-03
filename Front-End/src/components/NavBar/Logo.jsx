import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.a
      initial={{ x: -30 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      href="#Home"
      className="font-bold text-[22px] cursor-pointer flex gap-1 "
      style={{ fontFamily: "var(--font-fraunces)" }}
    >
      <div className=" w-2 h-2.5 rounded-full bg-orange-500 mt-2.5 "></div>
      Visit Safi
    </motion.a>
  );
}
