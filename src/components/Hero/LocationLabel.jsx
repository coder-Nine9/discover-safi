export default function LocationLabel({ text, m, textS, textColor }) {
  return (
    <div
      className=" font-semibold tracking-[0.3em] uppercase flex items-center gap-3 "
      style={{
        fontFamily: "'Space Mono', monospace",
        marginBottom: m,
        fontSize: textS,
        color: textColor,
      }}
    >
      <span
        className=" w-10  h-px"
        style={{
          backgroundColor: textColor,
        }}
      ></span>
      {text}
    </div>
  );
}
