import Container from "./Container";
import Images from "./Images";
export default function About() {
  return (
    <section className=" bg-white   py-30" id="About">
      <div className=" bg-white flex justify-between items-center  px-4 lg:px-8 mx-auto w-[81.5328%] flex-col-reverse gap-20 xl:gap-10 xl:flex-row">
        <Images />
        <Container />
      </div>
    </section>
  );
}
