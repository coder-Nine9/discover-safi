import {
  animate,
  useMotionValue,
  useTransform,
  motion,
  useInView,
} from "framer-motion";
import { useRef, useEffect } from "react";

export default function Statistic({
  NumbersSate,
  TextState,
  textSize,
  textColor,
  paraSize,
  tracking,
  paraColor,
  type,
  display = "",
}) {
  return (
    <div className="  flex flex-col gap-2">
      <Counter
        type={type}
        value={NumbersSate}
        size={textSize}
        color={textColor}
        display={display}
      />
      <p
        className={`${paraSize} font-medium transform-[scaleY(1.2)] `}
        style={{
          fontFamily: "'Inter', sans-serif",
          color: paraColor,
          letterSpacing: tracking,
        }}
      >
        {TextState}
      </p>
    </div>
  );
}

function Counter({ value, size, color, type, display = "" }) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: true,
  });

  const count = useMotionValue(0);

  const rounded = useTransform(count, (latest) => {
    switch (type) {
      case "largeNumber":
        return Math.round(latest).toLocaleString();
      case "decimal":
        return latest.toFixed(1);
      case "integer":
      default:
        return Math.round(latest);
    }
  });
  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, { duration: 2 });
    return controls.stop;
  }, [isInView, value, count]);

  return (
    <div className={`${size} flex justify-center items-center`}>
      <motion.h1
        className="  font-bold"
        style={{
          fontFamily: "'Fraunces', serif",
          color: color,
        }}
        ref={ref}
      >
        {rounded}
      </motion.h1>
      <span>{display}</span>
    </div>
  );
}
