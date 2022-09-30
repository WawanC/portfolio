import Image from "next/image";
import { forwardRef } from "react";

const AboutMe = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      ref={ref}
      className="flex flex-col py-24 justify-center items-center gap-8 border-b-2"
    >
      <h1 className="font-bold text-4xl">About Me</h1>
      <div className="flex flex-col lg:flex-row lg:max-w-[50%] items-center gap-8">
        <div className="w-[200px] h-[250px] rounded-md overflow-hidden shadow-2xl">
          <Image
            src="/images/profil.jpeg"
            width={100}
            height={150}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="lg:w-3/4 w-4/5 text-justify">
          I am a full stack programmer who likes to learn new technology and
          skills. I am currently studying at Sriwijaya University. I usually use
          Javascript or Typescript language to work on projects. In my spare
          time, I like to learn about new skills through online courses or
          working on personal projects.
        </div>
      </div>
    </section>
  );
});

export default AboutMe;
