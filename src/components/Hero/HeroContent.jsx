export default function HeroContent() {
  return (
    <div className="text-left">
      <h1
        className="mb-5.5 text-white text-[clamp(48px,8vw,96px)] leading-[1.08] tracking-[-0.01em]"
        style={{
          fontFamily: "'Fraunces', serif",
          fontWeight: 600,
          fontOpticalSizing: "auto",
        }}
      >
        Discover <span className="italic text-[#E2A87A] ">Safi</span>
      </h1>
      <p
        className="text-[19px] max-w-130 mb-10 text-[#ffffffd9] font-semibold leading-[1.6]"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        Where cobalt-glazed pottery meets the crashing Atlantic. Explore wild
        beaches, a living craft tradition dating back centuries, and a coastline
        still largely undiscovered.
      </p>
    </div>
  );
}
