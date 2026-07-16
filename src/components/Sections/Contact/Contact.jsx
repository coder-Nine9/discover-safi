import Info from "./Info";
import Form from "./Form";
export default function Contact() {
  return (
    <section className=" py-30" id="Contact">
      <div className="mx-auto flex max-w-7xl items-start gap-14 px-4 lg:px-8 flex-col lg:flex-row">
        <Info />
        <Form />
      </div>
    </section>
  );
}
