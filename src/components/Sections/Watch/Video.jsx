import SectionHeader from "../SectionHeader";
import { motion } from "framer-motion";
export default function Video() {
  return (
    <section className="py-30 bg-[#EEF7FB]  " id="Watch">
      <div className="px-4 lg:px-8 max-w-[81.5%] m-auto  ">
        <SectionHeader
          label="Featured Film"
          title="Experience Safi"
          description="Take a short journey through Safi's coastline, pottery, and rich cultural heritage."
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: 0.4, ease: "easeIn" }}
          viewport={{ once: true, amount: 0.4 }}
          className="mt-12 aspect-video rounded-2xl overflow-hidden text-center xl:w-[70%] mx-auto"
        >
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/PH90fl1AXe0"
            title="Experience Safi"
            allowFullScreen
          />
        </motion.div>
      </div>
    </section>
  );
}
