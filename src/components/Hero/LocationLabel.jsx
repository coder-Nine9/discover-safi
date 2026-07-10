export default function LocationLabel({ text }) {
  return (
    <div
      className=" text-[18px] tracking-[0.2em] uppercase flex items-center gap-3 mb-6.5"
      style={{ fontFamily: "'Space Mono', monospace" }}
    >
      <span className="w-10 h-px bg-[#E8D9BC]"></span>
      {text}
    </div>
  );
}
