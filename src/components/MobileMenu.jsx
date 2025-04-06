import { RxCross2 } from "react-icons/rx";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <div
      className={`fixed w-full top-0 left-0 z-40 flex flex-col items-center justify-center transition-all duration-300 ease-in-out bg-[#2f2f2f]/90 ${
        isMenuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"
      }`}
    >
      <button
        onClick={() => setIsMenuOpen(false)}
        className="absolute top-5 right-7 text-2xl focus:outline-none cursor-pointer text-[#c1a86b]"
        aria-label="Close Menu"
      >
        <RxCross2 />
      </button>

      <nav className="flex flex-col space-y-6 text-[#c1a86b] text-2xl md:text-3xl font-semibold mt-20">
        <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
        <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
        <a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </nav>
    </div>
  );
};

export default MobileMenu;
