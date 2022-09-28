import { forwardRef } from "react";

interface ITech {
  type: string;
  name: string;
}

const TechStackData: ITech[] = [
  { type: "language", name: "Javascript" },
  { type: "language", name: "Typescript" },
  { type: "frontend", name: "React JS" },
  { type: "frontend", name: "Next JS" },
  { type: "backend", name: "Express JS" },
  { type: "backend", name: "Nest JS" },
  { type: "database", name: "PostgreSQL" },
  { type: "database", name: "MongoDB" },
];

interface ITechStackItem {
  title: string;
  techs: ITech[];
}

const TechStackItem: React.FC<ITechStackItem> = (props) => {
  return (
    <div className="flex flex-col lg:w-1/3 items-center gap-2">
      <h1 className="text-2xl">{props.title}</h1>
      <div className="border border-black p-2 flex gap-4">
        {props.techs.map((tech) => (
          <div className="flex flex-col border border-black p-2 justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] border border-black"></div>
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
      <div className="border border-black p-4 flex flex-wrap gap-4 lg:w-[80%] justify-center">
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
