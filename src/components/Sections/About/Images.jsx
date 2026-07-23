import mainImage from "../../../assets/images/khazaf.jpg";
import beach from "../../../assets/images/About-beach.png";
import { motion } from "framer-motion";
export default function Images() {
  return (
    <motion.div
      initial={{ x: -30, opacity: 0, scale: 0.97 }}
      whileInView={{ x: 0, opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: "spring", stiffness: 90, damping: 16 }}
      viewport={{ once: false, amount: 0.6 }}
      className="relative z-0 w-[90%] xl:max-w-[40%]"
    >
      <img
        className="max-w-full rounded-4xl shadow-xl "
        src={mainImage}
        alt="khazaf"
      />
      <img
        className="w-[52%] rounded-2xl   border-10 border-white absolute  -bottom-15 -left-15 shadow-2xl"
        src={beach}
        alt="beach"
      />
      <div className=" shadow-blue-500  bg-[linear-gradient(135deg,#1B5D8C,#123F5E)] w-30 h-30 absolute -top-8 -right-8  uppercase rounded-full flex justify-center items-center text-white p-2.5 text-center font-[space_Mono] text-[11px] tracking-[0.2em] leading-5">
        Est.
        <br /> fortified
        <br /> 1508
      </div>
    </motion.div>
  );
}
