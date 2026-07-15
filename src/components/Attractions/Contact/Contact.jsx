import Info from "./Info";
import Form from "./Form";
export default function Contact() {
  return (
    <section className=" py-30">
      <div className="mx-auto flex max-w-7xl items-start gap-14 px-8">
        <Info />
        <Form />
      </div>
    </section>
  );
}
