import { motion } from "framer-motion";

export default function ActionButton({ action, bgColor, id }) {
  return (
    <motion.a
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6, ease: "easeInOut" }}
      viewport={{ once: true, amount: 1 }}
      href={id}
      className={`bg-[${bgColor}] text-white  shadow-xl rounded-full px-7.5 py-4 text-[14.5px] font-bold tracking-wider backdrop-blur-sm duration-300 ease-out hover:-translate-y-0.75 transition-all hover:[box-shadow:0_10px_28px_var(--shadow-color)] cursor-pointer`}
      style={{
        fontFamily: "'Inter', sans-serif",
        "--shadow-color": bgColor,
      }}
    >
      {action}
    </motion.a>
  );
}
