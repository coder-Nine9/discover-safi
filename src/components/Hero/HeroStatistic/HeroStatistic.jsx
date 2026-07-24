import Statistic from "./Statistic";
import { motion } from "framer-motion";
export default function HeroStatistic() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.7 }}
      className="px-4.5 py-3 lg:px-6.5 lg:py-5 flex flex-col flex-wrap  gap-7 bg-[#FFFFFF24] rounded-2xl backdrop-blur-md border border-[#ffffff59] absolute right-3 bottom-3  text-[#FFFFFF] text-center xl:flex-row md:right-10 md:bottom-40 lg:right-20 lg:bottom-25 "
    >
      <Statistic
        NumbersSate={6}
        type={"integer"}
        TextState={"Beaches"}
        textSize={"text-[24px] md:text-[26px]"}
        paraSize={"text-[9px] md:text-[11px]"}
        tracking={"0.1em"}
      />
      <Statistic
        NumbersSate={800}
        type={"integer"}
        display={"+"}
        TextState={"YRS POTTERY"}
        textSize={"text-[22px] md:text-[26px]"}
        paraSize={"text-[9px] md:text-[11px]"}
        tracking={"0.1em"}
      />
      <Statistic
        NumbersSate={4.8}
        type={"decimal"}
        TextState={"AVG RATING"}
        textSize={"text-[24px] md:text-[26px]"}
        paraSize={"text-[9px] md:text-[11px]"}
        tracking={"0.1em"}
      />
    </motion.div>
  );
}
