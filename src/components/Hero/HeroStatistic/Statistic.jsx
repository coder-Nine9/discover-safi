export default function Statistic({
  NumbersSate,
  TextState,
  textSize,
  textColor,
  paraSize,
  tracking,
  paraColor,
}) {
  return (
    <div className="  flex flex-col gap-2">
      <h1
        className="  font-bold"
        style={{
          fontFamily: "'Fraunces', serif",
          fontSize: textSize,
          color: textColor,
        }}
      >
        {NumbersSate}
      </h1>
      <p
        className="   font-medium transform-[scaleY(1.2)] "
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: paraSize,
          color: paraColor,
          letterSpacing: tracking,
        }}
      >
        {TextState}
      </p>
    </div>
  );
}
