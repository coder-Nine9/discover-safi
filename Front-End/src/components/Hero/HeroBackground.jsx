export default function HeroBackGround({ children }) {
  return (
    <div
      id="Home"
      className="relative w-full h-screen min-h-170 bg-cover bg-center flex flex-col  justify-center items-center text-[#E8D9BC] text-left "
      style={{
        backgroundImage: `
      linear-gradient(
        180deg,
        rgba(11,46,66,0.55) 0%,
        rgba(11,46,66,0.35) 40%,
        rgba(11,46,66,0.75) 100%
      )
    `,
      }}
    >
      {children}
    </div>
  );
}

// linear-gradient(
//   180deg,
//   rgba(248, 251, 253, 0.15) 0%,
//   rgba(238, 247, 251, 0.25) 40%,
//   rgba(33, 70, 91, 0.45) 100%
// )
