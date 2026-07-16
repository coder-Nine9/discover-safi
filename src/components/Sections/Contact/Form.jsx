export default function Form() {
  return (
    <form className="flex-1 w-full">
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">
        <Field label="Full name" placeHolder="Your name" />

        <Field label="Email" placeHolder="you@gmail.com" type="Email" />

        <Field label="Subject" placeHolder="What's this about?" />

        <div className=" col-span-2 flex flex-col gap-2  mb-5">
          <label
            htmlFor=""
            className="font-bold text-[12.5px] mb-2 text-[#0B2E42] font-[Inter,sans-serif]"
          >
            Message
          </label>

          <textarea
            className="py-3.5 px-4 bg-[#F7F1E3] rounded-2xl h-28.25"
            placeholder="Tell us about your trip..."
          />
        </div>
      </div>

      <div className="col-span-2">
        <button className="cursor-pointer p-[16px_30px] rounded-full bg-[#0B2E42] text-[14.5px] font-[Arial] font-bold text-white transition-all duration-300 ease  hover:-translate-y-1.25">
          Send Message
        </button>
      </div>
    </form>
  );
}

function Field({ label, placeHolder, type = "text" }) {
  return (
    <div
      className="flex flex-col gap-1 mb-5 "
      style={{ gridColumn: label === "Subject" ? "span 2 / span 2" : null }}
    >
      <label
        htmlFor=""
        className="font-bold text-[12.5px] mb-2 text-[#0B2E42] font-[Inter,sans-serif]"
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        className="py-3.5 px-4 bg-[#F7F1E3] rounded-2xl"
      />
    </div>
  );
}
