import React from "react";
import gopiprofile from "../assets/gopiprofile1.png";
import project1 from "../assets/project/project1.png";
import project2 from "../assets/project/project2.png";

const Projects = () => {
  return (
    <section className="py-10 px-4 md:px-10 " id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#c1a86b]"><span className='bg-black/40 rounded'>Projects</span></h2>

        <div className="flex flex-col md:flex-row items-center justify-center mb-16">
          {/* Text on Left */}
          <div className="md:w-2/3 text-left">
            <p className="text-lg text-zinc-300">
              Here's a quick look at some of my recent work—from crafting full-stack e-commerce platforms to designing responsive landing pages. Every project reflects my passion for clean design, efficient code, and seamless user experience.
            </p>
          </div>

          {/* Ghibli-style Image on Right */}
          <img
            src={gopiprofile}
            alt="Ghibli Style"
            className="w-64 h-64 object-cover rounded-2xl shadow-lg mt-6 md:mt-0 md:ml-10 hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Project 1 */}
          <div className="border border-[#c1a86b] rounded-2xl p-5 shadow hover:shadow-xl transition duration-300">
            <img
              src={project1}
              alt="E-commerce project"
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#c1a86b]">E-commerce Website</h3>
            <p className="text-zinc-300 mb-3">
              Built a scalable e-commerce platform using Django and SQLite. Integrated AWS S3 for secure media management and optimized file handling for both local and cloud.
            </p>
            <ul className="list-disc list-inside text-gray-600 mb-2">
              <li className="text-zinc-300">CI/CD with GitHub and Render</li>
              <li className="text-zinc-300">Secure environment variable usage</li>
              <li className="text-zinc-300">Fully responsive and optimized performance</li>
            </ul>
          </div>

          {/* Project 2 */}
          <div className="border border-[#c1a86b] rounded-2xl p-5 shadow hover:shadow-xl transition duration-300">
            <img
              src={project2}
              alt="Nike Landing Page"
              className="rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 text-[#c1a86b]">Nike Landing Page</h3>
            <p className="text-zinc-300 mb-3">
              Designed an engaging Nike landing page with React, Tailwind, and Vite. Focused on responsive design, clean animations, and performance.
            </p>
            <ul className="list-disc list-inside mb-2">
              <li className="text-zinc-300">Interactive UI built with Tailwind CSS</li>
              <li className="text-zinc-300">Version control with GitHub</li>
              <li className="text-zinc-300">Deployed on GitHub Pages</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
