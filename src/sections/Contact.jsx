import { Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h2 className="text-3xl font-bold mb-6 text-center text-[#c1a86b]">
        <span className="bg-black/40 rounded px-2">Contact Me</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-6 rounded-2xl shadow-md">
        {/* Contact Info Card */}
        <div className="w-full max-w-md rounded-2xl shadow-md border border-[#c1a86b] p-6">
          <div className="mb-4 flex gap-2">
            <p className="text-lg font-medium text-zinc-300">📍 </p>
            <p className="text-lg font-medium text-zinc-300">Gainesville, Florida, USA</p>
          </div>

          <div className="mb-4 flex gap-2">
            <p className="text-lg font-medium text-zinc-300">📞 </p>
            <p className="text-lg font-medium text-zinc-300">+1 321-429-7692</p>
          </div>

          <div className="mb-4 flex gap-2">
            <p className="text-lg font-medium text-zinc-300">📧 </p>
            <p className="text-lg font-medium text-zinc-300">gopiamarnathreddy@gmail.com</p>
          </div>

          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://www.linkedin.com/in/bekkem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-[#c1a86b] transition border-4 border-[#c1a86b] rounded-full p-2"
              title="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
            <a
              href="https://github.com/gbekkem1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-300 hover:text-[#c1a86b] transition border-4 border-[#c1a86b] rounded-full p-2"
              title="GitHub"
            >
              <Github size={28} />
            </a>
          </div>
        </div>

        {/* Email Form Card */}
        <div className="w-full max-w-md rounded-2xl shadow-md border border-[#c1a86b] p-6">
          <form
            action="https://formsubmit.co/gopiamarnathreddy@gmail.com"
            method="POST"
            className="flex flex-col gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="p-2 rounded border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#c1a86b]"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="p-2 rounded border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#c1a86b]"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              required
              className="p-2 rounded border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-[#c1a86b]"
            ></textarea>
            <button
              type="submit"
              className="bg-[#c1a86b] text-zinc-300 font-semibold py-2 px-4 rounded hover:bg-[#a88950] transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
