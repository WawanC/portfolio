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

const Techs = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col py-24 justify-center items-center gap-8 border-b-2"
    >
      <h1 className="font-bold text-4xl">Tech Stack</h1>
      <div className="border border-black p-4 flex flex-wrap gap-4 w-[80%] justify-center">
        <div className="flex flex-col w-1/3 items-center bg-red-100 gap-2">
          <h1 className="text-2xl">Language</h1>
          <div className="border border-black p-2 flex gap-4">
            {TechStackData.filter((tech) => tech.type === "language").map(
              (tech) => (
                <div className="flex flex-col border border-black p-2 justify-center items-center gap-2">
                  <div className="w-[100px] h-[100px] border border-black"></div>
                  <h1>{tech.name}</h1>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center bg-blue-100 gap-2">
          <h1 className="text-2xl">Frontend</h1>
          <div className="border border-black p-2 flex gap-4">
            {TechStackData.filter((tech) => tech.type === "frontend").map(
              (tech) => (
                <div className="flex flex-col border border-black p-2 justify-center items-center gap-2">
                  <div className="w-[100px] h-[100px] border border-black"></div>
                  <h1>{tech.name}</h1>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center bg-green-100 gap-2">
          <h1 className="text-2xl">Backend</h1>
          <div className="border border-black p-2 flex gap-4">
            {TechStackData.filter((tech) => tech.type === "backend").map(
              (tech) => (
                <div className="flex flex-col border border-black p-2 justify-center items-center gap-2">
                  <div className="w-[100px] h-[100px] border border-black"></div>
                  <h1>{tech.name}</h1>
                </div>
              )
            )}
          </div>
        </div>
        <div className="flex flex-col w-1/3 items-center bg-yellow-100 gap-2">
          <h1 className="text-2xl">Database</h1>
          <div className="border border-black p-2 flex gap-4">
            {TechStackData.filter((tech) => tech.type === "database").map(
              (tech) => (
                <div className="flex flex-col border border-black p-2 justify-center items-center gap-2">
                  <div className="w-[100px] h-[100px] border border-black"></div>
                  <h1>{tech.name}</h1>
                </div>
              )
            )}
          </div>
        </div>
        {/* {TechStackData.map((stack) => (
          <div className="flex flex-col border border-black p-2 justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] border border-black"></div>
            <h1>{stack.name}</h1>
          </div>
        ))} */}
      </div>
    </section>
  );
});

export default Techs;
