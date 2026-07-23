import { motion } from "framer-motion";

export default function LocationLabel({ text, m, textS, textColor }) {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      whileInView={{ opacity: 1, height: "auto" }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
      viewport={{ once: true, amount: 1 }}
      className=" font-semibold tracking-[0.3em] uppercase flex items-center gap-3 "
      style={{
        fontFamily: "'Space Mono', monospace",
        marginBottom: m,
        fontSize: textS,
        color: textColor,
      }}
    >
      <span
        className=" w-10  h-px"
        style={{
          backgroundColor: textColor,
        }}
      ></span>
      {text}
    </motion.div>
  );
}
