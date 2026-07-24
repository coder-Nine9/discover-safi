export default function SocialLinks({ social }) {
  const soialList = social.map((s) => {
    return (
      <a
        href={s.link}
        target="_blank"
        className=" w-9.5 h-9.5 bg-[#FFFFFF24] rounded-full flex justify-center items-center"
      >
        {s.name}
      </a>
    );
  });
  return soialList;
}
