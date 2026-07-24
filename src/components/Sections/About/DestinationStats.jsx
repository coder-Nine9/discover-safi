import Statistic from "../../Hero/HeroStatistic/Statistic";
import { motion } from "framer-motion";
export default function DestinationStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8 }}
      className=" mt-12 pt-10 flex gap-10 text-left border-t-2 border-gray-200"
    >
      <Statistic
        NumbersSate={800}
        type={"integer"}
        TextState={"Years of pottery heritage"}
        textSize={"text-[30px] lg:text-[40px]"}
        paraSize={"text-[12px] lg:text-[13px]"}
        textColor={"#1B5D8C"}
        tracking={"0.05em"}
        paraColor={"#6B7B83"}
      />
      <Statistic
        NumbersSate={6}
        type={"integer"}
        TextState={"Beaches within 45 min"}
        textSize={"text-[30px] lg:text-[40px]"}
        paraSize={"text-[12px] lg:text-[13px]"}
        textColor={"#1B5D8C"}
        tracking={"0.05em"}
        paraColor={"#6B7B83"}
      />
      <Statistic
        NumbersSate={120000}
        type={"largeNumber"}
        TextState={"Residents, still uncrowded"}
        textSize={"text-[30px] lg:text-[40px]"}
        paraSize={"text-[12px] lg:text-[13px]"}
        textColor={"#1B5D8C"}
        tracking={"0.05em"}
        paraColor={"#6B7B83"}
      />
    </motion.div>
  );
}
