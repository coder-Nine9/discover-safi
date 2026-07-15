import SectionHeader from "../SectionHeader";

export default function Video() {
  return (
    <section className="py-30 bg-white" id="Watch">
      <div className="px-8 max-w-[81.5%] m-auto">
        <SectionHeader
          label="Featured Film"
          title="Experience Safi"
          description="Take a short journey through Safi's coastline, pottery, and rich cultural heritage."
        />
        <div className="mt-12 aspect-video rounded-2xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/PH90fl1AXe0"
            title="Experience Safi"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
