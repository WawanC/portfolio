import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col justify-center items-center min-h-screen gap-8 border-b-2">
      <div className="bg-blue-200 w-[200px] h-[200px] rounded-full overflow-hidden shadow-2xl">
        <Image
          src="https://avatars.githubusercontent.com/u/76239837?v=4"
          width={100}
          height={100}
          layout="responsive"
          objectFit="cover"
          alt="hero_pic"
        />
      </div>
      <div className="flex flex-col items-center gap-4">
        <h1 className="font-bold lg:text-4xl text-2xl">Kurniawan Cristianto</h1>
        <p className="italic font-extralight text-xl">
          Fullstack Javascript Developer
        </p>
      </div>
    </section>
  );
};

export default Hero;
