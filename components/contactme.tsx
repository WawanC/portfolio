import { forwardRef } from "react";

const ContactData = [
  { name: "Email" },
  { name: "GitHub" },
  { name: "LinkedIn" },
  { name: "Discord" },
];

const ContactMe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col py-24 justify-center items-center gap-8 border-b-2"
    >
      <h1 className="font-bold text-4xl">Contact Me</h1>
      <div className="flex border border-black p-4 gap-4 w-[80%] justify-between">
        {ContactData.map((contact) => (
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-[75px] h-[75px] rounded-full border border-black"></div>
            <span>{contact.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
});

export default ContactMe;
