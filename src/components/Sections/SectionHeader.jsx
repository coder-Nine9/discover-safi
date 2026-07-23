import LocationLabel from "../Hero/LocationLabel";
import { motion } from "framer-motion";
export default function SectionHeader({ label, title, description }) {
  return (
    <div className="max-w-157.5 mb-16 text-left">
      <LocationLabel
        text={label}
        m={"16px"}
        textS={"12px"}
        textColor={"#C1663F"}
      />
      <motion.h1
        initial={{ opacity: 0, x: -60, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className=" text-[35px] lg:text-[48px]"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, x: -60, scale: 0.97 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-[16.5px] mt-4 font-['inter',sans-serif] text-[#43555f] leading-6.5 font-medium tracking-[1px] "
      >
        {description}
      </motion.p>
    </div>
  );
}
