import SectionHeader from "../../Sections/SectionHeader";
import Container from "./Container";
import map from "../../../assets/images/map.png";
import { motion } from "framer-motion";
export default function Map() {
  return (
    <section className="py-30" id="Map">
      <div className="px-4 lg:px-8 max-w-[81.5%] m-auto">
        <SectionHeader
          label="Plan your route"
          title="Find your way to the coast"
          description="Share your location too see live distance and drive-time estimates to
        every beach featured on this page."
        />
        <div className=" flex justify-evenly flex-col-reverse  items-center xl:flex-row gap-10">
          <motion.img
            className=" border-8 border-[#0F3B54] rounded-xl w-full xl:w-125"
            src={map}
            alt="Map"
            initial={{ opacity: 0, x: -200 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut", delay: 0.6 }}
          />
          <Container />
        </div>
      </div>
    </section>
  );
}
