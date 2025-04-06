
import profile from '../assets/gopi.jpeg';
import '../index.css'; // assuming your custom styles are here
import Contact from './Contact';

const Home = () => {
  return (
    <div className='custom-gradient-overlay'>
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-6 gap-10 ">
      {/* Image Section */}
      <div className="flex-shrink-0">
      <img
        src={profile}
        alt="Gopi Amarnath Reddy Bekkem"
        className="w-48 h-48 lg:w-72 lg:h-72 object-cover rounded-full border-8"
        style={{
        borderColor: 'var(--golden-brown)',
        boxShadow: '0 0 30px var(--golden-brown)',
        }}
      />
      </div>

      {/* Text Section */}
      <div className="text-center lg:text-left max-w-xl ">

      <p className="text-xl text-zinc-300"> Hi, I'm <span className="font-semibold rounded bg-black/40 text-[#c1a86b] transition-all duration-300 hover:shadow-lg hover:shadow-[#c1a86b]/50 hover:scale-105">
        Gopi Amarnath Reddy Bekkem
      </span>, a Full Stack Developer passionate about building secure, scalable, and user-centric web applications. Let's explore my journey in tech!
      </p>
      
      </div>
    </div>
    </div>
    );
};

export default Home;
