const TechStackData = [
  { name: "Javascript" },
  { name: "Typescript" },
  { name: "React JS" },
  { name: "Node JS" },
  { name: "Express JS" },
  { name: "MongoDB" },
];

const Techs = () => {
  return (
    <section className="flex flex-col py-24 justify-center items-center gap-8 border-b-2">
      <h1 className="font-bold text-4xl">Tech Stack</h1>
      <div className="border border-black p-4 flex gap-4">
        {TechStackData.map((stack) => (
          <div className="flex flex-col border border-black p-2 justify-center items-center gap-2">
            <div className="w-[100px] h-[100px] border border-black"></div>
            <h1>{stack.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Techs;
