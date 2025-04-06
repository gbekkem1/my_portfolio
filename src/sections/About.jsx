
import UFLogo2 from '../assets/University-of-Florida-Logo.png';
import RevaLogo from '../assets/RevaLogo.png';

const About = () => {
  return (
    <div className="max-w-screen-md mx-auto px-4 sm:px-6 py-8 rounded-2xl shadow-md ">
      <h2 className="text-3xl font-bold mb-4 text-[#c1a86b] text-center">
        <span className="bg-black/40 rounded px-2">About Me</span>
      </h2>
      <p className="text-zinc-300 text-lg">
        I'm currently pursuing my Master's in Computer Science at the University of Florida, where I blend academic rigor with over 3 years of hands-on experience as a Full Stack Developer. I specialize in building dynamic and responsive user interfaces using <strong>React</strong>, and developing scalable backend systems with <strong>Python (Django & Flask)</strong>. With a solid grasp of cloud infrastructure, API design, and data visualization, I bring ideas to life through clean, secure, and production-ready code.
      </p>



      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
  {/* University of Florida */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
    <img src={UFLogo2} alt="University of Florida Gator Logo" className="w-28 h-28 object-contain" />
    <div>
      <h3 className="text-xl font-semibold text-blue-900">University of Florida</h3>
      <p className="text-sm text-zinc-300">Master of Science, Computer Science</p>
      <p className="text-sm text-zinc-300">Jan 2023 - Dec 2024</p>
    </div>
  </div>

  {/* Reva University */}
  <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
    <img src={RevaLogo} alt="Reva University Logo" className="w-32 h-32 object-contain" />
    <div>
      <h3 className="text-xl font-semibold text-orange-400">Reva University</h3>
      <p className="text-sm text-zinc-300">Bachelor of Technology, Computer Science and Engineering</p>
      <p className="text-sm text-zinc-300">Aug 2017 - May 2021</p>
    </div>
  </div>
</div>

    </div>
  );
};

export default About;
