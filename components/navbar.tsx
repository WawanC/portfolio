import { ReactNode, RefObject, useState } from "react";

interface IProps {
  sectionsRef: {
    aboutMeRef: RefObject<HTMLElement>;
    techsRef: RefObject<HTMLElement>;
    projectsRef: RefObject<HTMLElement>;
    contactMeRef: RefObject<HTMLElement>;
  };
}

interface INavLinkProps {
  sectionRef: RefObject<HTMLElement>;
  children: ReactNode;
}

const NavBar: React.FC<IProps> = (props) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState<boolean>(false);

  const toggleSideMenu = (val: boolean) => setIsSideMenuOpen(val);

  const NavLink: React.FC<INavLinkProps> = (props) => {
    return (
      <li
        className="hover:cursor-pointer hover:font-bold lg:p-0 lg:w-fit w-full p-4 flex justify-center"
        onClick={() => scrollToSection(props.sectionRef)}
      >
        {props.children}
      </li>
    );
  };

  const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
    sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    toggleSideMenu(false);
  };

  const MenuIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 hover:cursor-pointer absolute left-4 lg:hidden"
        onClick={() => toggleSideMenu(true)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    );
  };

  return (
    <nav className="flex bg-blue-300 lg:justify-between justify-center items-center px-12 py-4 sticky top-0 z-10 ">
      {!isSideMenuOpen && <MenuIcon />}
      <h1 className="font-bold text-xl">KurniawanC</h1>
      {isSideMenuOpen && (
        <div
          className="lg:hidden fixed bg-black top-0 left-0 right-0 bottom-0 z-10 opacity-50"
          onClick={() => toggleSideMenu(false)}
        />
      )}
      <ul
        className={`lg:flex lg:flex-row lg:static lg:w-fit lg:py-0 lg:gap-8 
      flex flex-col fixed left-[-50%] top-0 bottom-0 w-1/2 z-10 items-center py-16 
      bg-blue-300 transition-all ${isSideMenuOpen && "translate-x-[100%]"}`}
      >
        <NavLink sectionRef={props.sectionsRef.aboutMeRef}>About</NavLink>
        <NavLink sectionRef={props.sectionsRef.techsRef}>Techs</NavLink>
        <NavLink sectionRef={props.sectionsRef.projectsRef}>Projects</NavLink>
        <NavLink sectionRef={props.sectionsRef.contactMeRef}>Contact</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
