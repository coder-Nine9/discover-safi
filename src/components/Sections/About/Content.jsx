import LocationLabel from "../../Hero/LocationLabel";
import Text from "./Text";
import DestinationStats from "./DestinationStats";
import { motion } from "framer-motion";
export default function AboutText() {
  return (
    <motion.div
      initial={{ x: 70, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, delay: 0.1 }}
      className="w-full max-w-xl"
    >
      <LocationLabel
        text={"About the city"}
        m={"16px"}
        textS={"12px"}
        textColor={"#C1663F"}
      />
      <h3
        className=" text-2xl md:text-3xl lg:text-4xl"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        A working port city, glazed in cobalt blue
      </h3>
      <Text text="Safi has been shaped by two forces: the Atlantic and clay. Long before it became Morocco's largest sardine port, the hills above the medina were already home to potters firing the deep cobalt-and-white ceramics the city is still known for today." />
      <Text text="Portuguese ramparts, the Kechla citadel, and the Colline des Potiers — the potters' hill — sit within walking distance of a working harbour where boats still return each afternoon with the day's catch. Just beyond the city, a string of quiet, largely undeveloped beaches stretches along dramatic ochre cliffs." />
      <DestinationStats />
    </motion.div>
  );
}
