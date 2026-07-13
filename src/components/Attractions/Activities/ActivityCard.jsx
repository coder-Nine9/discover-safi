export default function ActivityCard({ activity }) {
  return (
    <div
      style={{
        backgroundImage: `url(${activity.image})`,
      }}
      className="bg-cover bg-center w-100 h-130 relative p-5.5 rounded-2xl"
    >
      <div className="absolute bottom-5 left-5 ">
        <span className="text-[20.5px] font-['Space_mono',monospace] opacity-[0.7] text-white">
          {activity.id}
        </span>
        <h3 className="text-[32px] font-['Fraunces',serif] text-white">
          {activity.title}
        </h3>
      </div>
    </div>
  );
}
