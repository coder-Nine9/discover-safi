import { Swiper } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-cards";

import { EffectCards } from "swiper/modules";

export default function SwiperCard({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: 0.2 }}
    >
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper w-70 h-100 lg:w-100 lg:h-130"
      >
        {children}
      </Swiper>
    </motion.div>
  );
}
