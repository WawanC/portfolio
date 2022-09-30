import Image from "next/image";
import { forwardRef } from "react";

interface ITech {
  type: string;
  name: string;
  image: string;
}

const TechStackData: ITech[] = [
  {
    type: "language",
    name: "Javascript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    type: "language",
    name: "Typescript",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    type: "frontend",
    name: "React JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    type: "frontend",
    name: "Next JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    type: "backend",
    name: "Express JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    type: "backend",
    name: "Nest JS",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-plain.svg",
  },
  {
    type: "database",
    name: "PostgreSQL",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    type: "database",
    name: "MongoDB",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
];

interface ITechStackItem {
  title: string;
  techs: ITech[];
}

const TechStackItem: React.FC<ITechStackItem> = (props) => {
  return (
    <div className="flex flex-col lg:w-1/3 items-center gap-2 border p-2 shadow-2xl rounded">
      <h1 className="text-2xl font-bold">{props.title}</h1>
      <div className="p-2 flex gap-4">
        {props.techs.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col p-2 justify-center items-center gap-2"
          >
            <div className="w-[100px] h-[100px] overflow-hidden">
              <Image
                src={tech.image}
                width={100}
                height={100}
                layout="responsive"
                objectFit="cover"
              />
            </div>
            <h1>{tech.name}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

const Techs = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col py-24 justify-center items-center gap-8 border-b-2"
    >
      <h1 className="font-bold text-4xl">Tech Stack</h1>
      <div className="p-4 flex flex-wrap gap-4 lg:w-[80%] justify-center">
        <TechStackItem
          title="Language"
          techs={TechStackData.filter((stack) => stack.type === "language")}
        />
        <TechStackItem
          title="Frontend"
          techs={TechStackData.filter((stack) => stack.type === "frontend")}
        />
        <TechStackItem
          title="Backend"
          techs={TechStackData.filter((stack) => stack.type === "backend")}
        />
        <TechStackItem
          title="Database"
          techs={TechStackData.filter((stack) => stack.type === "database")}
        />
      </div>
    </section>
  );
});

export default Techs;
