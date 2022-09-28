const NavBar = () => {
  return (
    <nav className="flex bg-blue-300 justify-between items-center px-12 py-4">
      <h1 className="font-bold text-xl">Portfolio</h1>
      <ul className="flex gap-8">
        <li>About</li>
        <li>Techs</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default NavBar;
