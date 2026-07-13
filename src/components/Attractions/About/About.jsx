import Container from "./Container";
import Images from "./Images";
export default function About() {
  return (
    <div className=" bg-white   py-30" id="About">
      <div className=" bg-white flex justify-between gap-10 items-center px-8 mx-auto w-[81.5328%]">
        <Images />
        <Container />
      </div>
    </div>
  );
}
