const AboutMe = () => {
  return (
    <section className="flex flex-col py-24 justify-center items-center gap-8 border-b-2">
      <h1 className="font-bold text-4xl">About Me</h1>
      <div className="flex max-w-[50%] gap-8">
        <div className="w-[200px] h-[250px] border border-black rounded-md"></div>
        <div className="w-3/4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
