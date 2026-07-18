import { useState, useEffect } from "react";
let clientsData = [];

export default function Form() {
  const [formInputs, setFormInputs] = useState({
    fullNameInput: "",
    emailInput: "",
    subjectInput: "",
    messageInput: "",
  });

  function handleInput(label, e) {
    setFormInputs((prev) => {
      if (label === "Full name")
        return { ...prev, fullNameInput: e.target.value };
      else if (label === "Email")
        return { ...prev, emailInput: e.target.value };
      if (label === "Subject") return { ...prev, subjectInput: e.target.value };
    });
  }

  function addClient() {
    clientsData.push(formInputs);
    setFormInputs({
      fullNameInput: "",
      emailInput: "",
      subjectInput: "",
      messageInput: "",
    });
    localStorage.setItem("clients", JSON.stringify(clientsData));
  }
  useEffect(() => {
    if (localStorage.getItem("clients") != null)
      clientsData = JSON.parse(localStorage.getItem("clients"));
    console.log(clientsData);
  }, []);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
      }}
      className="flex-1 w-full"
    >
      <div className="grid grid-cols-2 gap-x-5 gap-y-6">
        <Field
          label="Full name"
          placeHolder="Your name"
          value={formInputs.fullNameInput}
          handleInput={handleInput}
        />

        <Field
          label="Email"
          placeHolder="you@gmail.com"
          type="Email"
          value={formInputs.emailInput}
          handleInput={handleInput}
        />

        <Field
          label="Subject"
          placeHolder="What's this about?"
          value={formInputs.subjectInput}
          handleInput={handleInput}
        />

        <div className=" col-span-2 flex flex-col gap-2  mb-5">
          <label
            htmlFor=""
            className="font-bold text-[12.5px] mb-2 text-[#0B2E42] font-[Inter,sans-serif]"
          >
            Message
          </label>

          <textarea
            value={formInputs.messageInput}
            className="py-3.5 px-4 bg-[#F7F1E3] rounded-2xl h-28.25"
            placeholder="Tell us about your trip..."
            onChange={(e) => {
              setFormInputs((prev) => ({
                ...prev,
                messageInput: e.target.value,
              }));
            }}
          />
        </div>
      </div>

      <div className="col-span-2">
        <button
          onClick={addClient}
          disabled={
            formInputs.emailInput === "" ||
            formInputs.fullNameInput === "" ||
            formInputs.subjectInput === ""
          }
          className="cursor-pointer p-[16px_30px] rounded-full bg-[#0b2e42] text-[14.5px] font-[Arial] font-bold text-white transition-all duration-300 ease  hover:-translate-y-1.25"
          style={{
            background:
              formInputs.emailInput === "" ||
              formInputs.fullNameInput === "" ||
              formInputs.subjectInput === ""
                ? "#0B2E42AD"
                : "#0B2E42",
          }}
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

function Field({ label, placeHolder, type = "text", value, handleInput }) {
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
        value={value}
        type={type}
        placeholder={placeHolder}
        className="py-3.5 px-4 bg-[#F7F1E3] rounded-2xl"
        onChange={(e) => {
          handleInput(label, e);
        }}
        required
      />
    </div>
  );
}
