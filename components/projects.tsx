import { forwardRef } from "react";

const ProjectsData = [
  { name: "Project A" },
  { name: "Project B" },
  { name: "Project C" },
  { name: "Project D" },
];

const Projects = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col py-24 justify-center items-center gap-8 border-b-2"
    >
      <h1 className="font-bold text-4xl">My Projects</h1>
      <div className="border border-black flex p-4 gap-4 flex-wrap justify-center lg:w-[80%]">
        {ProjectsData.map((project) => (
          <div
            key={project.name}
            className="flex flex-col justify-center items-center"
          >
            <div className="w-[300px] h-[200px] border border-black"></div>
            <h1>{project.name}</h1>
          </div>
        ))}
      </div>
    </section>
  );
});

export default Projects;
