import { use, useEffect } from "react";
import Logo from "./Logo";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = ({isMenuOpen, setIsMenuOpen}) => {
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";
    }, [isMenuOpen]);
return (
    <nav className="fixed top-0 w-full z-40 bg-[#2f2f2f]/90 shadow-md">
        <div className="max-w-5xl mx-auto px-4">
            <div className="flex justify-between items-center h-16">
                <Logo />
                <div onClick={() => setIsMenuOpen((prev) => !prev)} className="text-2xl absolute right-7 z-40 md:hidden cursor-pointer font-mono text-[#c1a86b] bg-transparent">
                    <TiThMenuOutline />
                </div>
                <div className="flex md:flex items-center space-x-8">
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-[#c1a86b] hover:text-white transition duration-300">Home</a>
                        <a href="#about" className="text-[#c1a86b] hover:text-white transition duration-300">About</a>
                        <a href="#skills" className="text-[#c1a86b] hover:text-white transition duration-300">Skills</a>
                        <a href="#experience" className="text-[#c1a86b] hover:text-white transition duration-300">Experience</a>
                        <a href="#projects" className="text-[#c1a86b] hover:text-white transition duration-300">Projects</a>
                        <a href="#contact" className="text-[#c1a86b] hover:text-white transition duration-300">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
);
};

export default Navbar;
