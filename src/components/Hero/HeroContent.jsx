import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="text-left">
      <motion.h1
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 1 }}
        className="mb-5.5 text-white text-[clamp(48px,4vw,96px)] leading-[1.08] tracking-[-0.01em]"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        Discover <span className="italic text-[#E2A87A] ">Safi</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, height: 0 }}
        whileInView={{ opacity: 1, height: "auto" }}
        transition={{ duration: 0.6, delay: 0.5, ease: "easeInOut" }}
        viewport={{ once: true, amount: 1 }}
        className="text-[19px] max-w-130 mb-10 text-[#ebe9e9] font-semibold leading-[1.6]"
        style={{ fontFamily: "'Georgia', serif " }}
      >
        Where cobalt-glazed pottery meets the crashing Atlantic. Explore wild
        beaches, a living craft tradition dating back centuries, and a coastline
        still largely undiscovered.
      </motion.p>
    </div>
  );
}
