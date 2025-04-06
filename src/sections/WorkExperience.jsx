import React from 'react';
import ghibliProfile from '../assets/gopiprofile.png';
import ufloridaLogo from '../assets/uflorida-logo.jpg';
import dxcLogo from '../assets/DXC-logo.png';

const experiences = [
  {
    role: 'Full Stack Developer',
    company: 'University of Florida',
    location: 'Gainesville, FL | On-site',
    period: 'Aug 2024 - Present',
    logo: ufloridaLogo,
    tech: 'React.js, Redux, D3.js, Node.js, JavaScript, GraphQL, MS SQL Server, Auth0, Docker, Nginx, AWS',
    highlights: [
      'Transformed cancer nanomedicine datasets into interactive dashboards using React, D3.js, Node.js, and PostgreSQL.',
      'Improved model predictability by 10% for PBPK analysis following dashboard launch.',
      'Architected a PostgreSQL + Node.js backend, boosting data retrieval efficiency by 15%.',
      'Deployed using Docker/Kubernetes on AWS with 99.9% uptime; integrated Auth0 for secure access.',
      'Built ML-powered QSAR models to predict plasma half-lives in food animals — reduced analysis time to <30 seconds.',
      'Created rapid tissue/tumor delivery prediction tools, cutting analysis time to <5 seconds and supporting reduction in animal testing.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'DXC Technology',
    location: 'Hyderabad, India | Remote',
    period: 'Aug 2020 - Jan 2023',
    logo: dxcLogo,
    tech: 'Python, Flask, Django, REST APIs, Pandas, NumPy, PostgreSQL, SQLAlchemy',
    highlights: [
      'Designed scalable Flask/Django applications enhancing system performance.',
      'Built RESTful APIs enabling robust and secure microservices.',
      'Automated workflows with Pandas/NumPy, reducing manual tasks significantly.',
      'Optimized SQL queries with SQLAlchemy, improving query speed by 15%.',
      'Collaborated cross-functionally to align engineering with business outcomes.',
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="p-6 md:p-12 text-gray-900">
      <h2 className="text-3xl font-bold mb-8 text-center text-[#c1a86b]"> <span className="bg-black/40 rounded px-2">Work Experience</span> </h2>
      <div className="flex justify-center mb-10">
        <img
          src={ghibliProfile}
          alt="Profile"
          className="w-40 h-40 rounded-full shadow-lg object-cover"
        />
      </div>
      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl shadow-md border border-[#c1a86b] hover:shadow-lg transition"
          >
            <div className="flex items-center mb-4 text-zinc-300">
              <img
                src={exp.logo}
                alt={`${exp.company} logo`}
                className="w-12 h-12 mr-4 rounded"
              />
              <div>
                <h3 className="text-xl font-semibold text-zinc-300">{exp.role}</h3>
                <p className="text-sm  text-zinc-300 ">{exp.company} | {exp.location}</p>
                <p className="text-sm  text-zinc-300 ">{exp.period}</p>
              </div>
            </div>
            <p className="text-sm mb-3 text-zinc-300 "><strong>Technologies:</strong> {exp.tech}</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-zinc-300 ">
              {exp.highlights.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkExperience;
