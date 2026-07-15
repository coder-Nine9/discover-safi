import Info from "./Info";
import Form from "./Form";
export default function Contact() {
  return (
    <section className=" py-30">
      <div className="flex flex-wrap  gap-5 px-8 w-[81.5%] m-auto">
        <Info />
        <Form />
      </div>
    </section>
  );
}
