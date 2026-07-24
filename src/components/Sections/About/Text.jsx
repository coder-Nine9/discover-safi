export default function Text({ text1, text2 }) {
  return (
    <p className=" text-[14px] text-base  mb-4.5 font-['Georgia', serif ] text-[#43555f] leading-6.5 font-medium tracking-[1px] ">
      {text1}
      <br />
      <br />
      {text2}
    </p>
  );
}
