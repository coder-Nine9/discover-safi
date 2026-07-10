export default function ActionButton({ action, bgColor, id }) {
  return (
    <a
      id={id}
      className={`bg-[${bgColor}] text-white  shadow-xl rounded-full px-7.5 py-4 text-[14.5px] font-bold tracking-wider backdrop-blur-sm duration-300 ease-out hover:-translate-y-0.75 transition-all hover:[box-shadow:0_10px_28px_var(--shadow-color)] cursor-pointer`}
      style={{
        fontFamily: "'Inter', sans-serif",
        "--shadow-color": bgColor,
      }}
    >
      {action}
    </a>
  );
}
// .btn-primary:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 16px 36px -8px rgba(193, 102, 63, .75);
// }
