import logo from "../assets/logo.png"; // Adjust if relative path changes

const Logo = () => {
  return (
    <a
      href="#home"
      className="flex items-center space-x-3 hover:opacity-90 transition duration-300"
    >
      <img
        src={logo}
        alt="Logo"
        className="w-10 h-10 rounded-full border-2 border-[#c1a86b] shadow-sm"
      />
      <span className="text-xl font-bold font-mono text-[#c1a86b] tracking-wide hover:text-white transition duration-300">
        Gopi Amarnath Reddy Bekkem
      </span>
    </a>
  );
};

export default Logo;
