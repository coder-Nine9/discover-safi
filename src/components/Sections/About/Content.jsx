import LocationLabel from "../../Hero/LocationLabel";
import Text from "./Text";
import DestinationStats from "./DestinationStats";
import { motion } from "framer-motion";
export default function AboutText() {
  return (
    <div className="w-full max-w-xl">
      <LocationLabel
        text={"About the city"}
        m={"16px"}
        textS={"12px"}
        textColor={"#C1663F"}
      />
      <motion.h3
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 1 }}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
        }}
        className=" text-2xl md:text-3xl lg:text-4xl"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        A working port city, glazed in cobalt blue
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Text
          text1="Safi has been shaped by two forces: the Atlantic and clay. Long before it became Morocco's largest sardine port, the hills above the medina were already home to potters firing the deep cobalt-and-white ceramics the city is still known for today."
          text2="Portuguese ramparts, the Kechla citadel, and the Colline des Potiers — the potters' hill — sit within walking distance of a working harbour where boats still return each afternoon with the day's catch. Just beyond the city, a string of quiet, largely undeveloped beaches stretches along dramatic ochre cliffs."
        />
      </motion.div>
      <DestinationStats />
    </div>
  );
}
