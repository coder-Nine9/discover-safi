export default function Form() {
  return (
    <div>
      <div className="grid  grid-rows-3">
        <Field label="Full name" placeHolder="Your name" />
        <Field label="Email" placeHolder="you@gmail.com" />
        <Field label="Subject" placeHolder="What's this about?" />
        <div className="flex flex-col gap-1 mb-5">
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
        <button className="p-[16px_30px] rounded-full bg-[#0B2E42] text-[14.5px] font-[Arial] font-bold text-white">
          Send Message
        </button>
      </div>
    </div>
  );
}

function Field({ label, placeHolder }) {
  return (
    <div className="flex flex-col gap-1 mb-5">
      <label
        htmlFor=""
        className="font-bold text-[12.5px] mb-2 text-[#0B2E42] font-[Inter,sans-serif]"
      >
        {label}
      </label>
      <input
        type="textarea"
        placeholder={placeHolder}
        className="py-3.5 px-4 bg-[#F7F1E3] rounded-2xl"
      />
    </div>
  );
}
