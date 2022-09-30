import Image from "next/image";
import { forwardRef } from "react";

interface IContactData {
  name: string;
  image: string;
  link: string;
}

const ContactData: IContactData[] = [
  {
    name: "Email",
    image: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
    link: "mailto:kurniawancristianto@gmail.com?cc=&bcc=&subject=&body=",
  },
  {
    name: "GitHub",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    link: "https://github.com/WawanC",
  },
  {
    name: "LinkedIn",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg",
    link: "https://www.linkedin.com/in/kurniawan-cristianto-107a8b1b6/",
  },
  {
    name: "Discord",
    image:
      "https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ",
    link: "discordapp.com/users/nh#0613",
  },
];

interface IContactIcon {
  title: string;
  image: string;
  link: string;
}

const ContactIcon: React.FC<IContactIcon> = (props) => {
  const clickHandler = () => {
    window.open(props.link);
  };

  return (
    <div
      key={props.title}
      className="flex flex-col justify-center items-center gap-4 w-1/3 lg:w-fit hover:cursor-pointer"
      onClick={clickHandler}
    >
      <div className="w-[75px] h-[75px] rounded-full border border-black overflow-hidden">
        <Image
          src={props.image}
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
        />
      </div>
      <span>{props.title}</span>
    </div>
  );
};

const ContactMe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col py-24 justify-center items-center gap-8 border-b-2"
    >
      <h1 className="font-bold text-4xl">Contact Me</h1>
      <div className="flex border border-black p-4 gap-4 lg:w-[80%] lg:justify-between flex-wrap justify-center">
        {ContactData.map((contact) => (
          <ContactIcon
            title={contact.name}
            image={contact.image}
            link={contact.link}
          />
        ))}
      </div>
    </section>
  );
});

export default ContactMe;
