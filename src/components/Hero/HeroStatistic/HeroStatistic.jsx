import Statistic from "./Statistic";
import { motion } from "framer-motion";
export default function HeroStatistic() {
  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true, amount: 0.7 }}
      className="px-6.5 py-5 flex flex-col flex-wrap  gap-7 bg-[#FFFFFF24] rounded-2xl backdrop-blur-md border border-[#ffffff59] absolute right-8 bottom-8  text-[#FFFFFF] text-center lg:flex-row lg:right-20 lg:bottom-25  "
    >
      <Statistic
        NumbersSate={6}
        type={"integer"}
        TextState={"Beaches"}
        textSize={"26px"}
        paraSize={"11px"}
        tracking={"0.1em"}
      />
      <Statistic
        NumbersSate={800}
        type={"integer"}
        display={"+"}
        TextState={"YRS POTTERY"}
        textSize={"26px"}
        paraSize={"11px"}
        tracking={"0.1em"}
      />
      <Statistic
        NumbersSate={4.8}
        type={"decimal"}
        TextState={"AVG RATING"}
        textSize={"26px"}
        paraSize={"11px"}
        tracking={"0.1em"}
      />
    </motion.div>
  );
}
