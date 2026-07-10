export default function HeroBackGround({ children, image }) {
  return (
    <div
      className=" h-screen min-h-170 bg-cover bg-center flex flex-col  justify-center items-center text-[#E8D9BC] text-left"
      style={{
        backgroundImage: `
      linear-gradient(
        180deg,
        rgba(11,46,66,0.55) 0%,
        rgba(11,46,66,0.35) 40%,
        rgba(11,46,66,0.75) 100%
      ),
      url(${image})
    `,
      }}
    >
      {children}
    </div>
  );
}
