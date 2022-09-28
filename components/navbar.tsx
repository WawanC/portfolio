import { ReactNode, RefObject } from "react";

interface IProps {
  sectionsRef: {
    aboutMeRef: RefObject<HTMLElement>;
    techsRef: RefObject<HTMLElement>;
    projectsRef: RefObject<HTMLElement>;
    contactMeRef: RefObject<HTMLElement>;
  };
}

const scrollToSection = (sectionRef: RefObject<HTMLElement>) => {
  sectionRef.current?.scrollIntoView({ behavior: "smooth" });
};

interface INavLinkProps {
  sectionRef: RefObject<HTMLElement>;
  children: ReactNode;
}

const NavLink: React.FC<INavLinkProps> = (props) => {
  return (
    <li
      className="hover:cursor-pointer hover:font-bold"
      onClick={() => scrollToSection(props.sectionRef)}
    >
      {props.children}
    </li>
  );
};

const NavBar: React.FC<IProps> = (props) => {
  return (
    <nav className="flex bg-blue-300 lg:justify-between justify-center items-center px-12 py-4">
      <h1 className="font-bold text-xl">Portfolio</h1>
      <ul className="lg:flex gap-8 hidden">
        <NavLink sectionRef={props.sectionsRef.aboutMeRef}>About</NavLink>
        <NavLink sectionRef={props.sectionsRef.techsRef}>Techs</NavLink>
        <NavLink sectionRef={props.sectionsRef.projectsRef}>Projects</NavLink>
        <NavLink sectionRef={props.sectionsRef.contactMeRef}>Contact</NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
