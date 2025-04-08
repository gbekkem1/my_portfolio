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
      ' Crafted interactive research portals with React.js, Node.js, D3.js, and PostgreSQL, transforming complex scientific datasets into visually intuitive, cross-platform dashboards to aid clinical and preclinical data exploration.',
      'Enabled live data interaction by incorporating WebSockets and asynchronous pipelines, significantly enhancing the performance of pharmacokinetic modeling workflows and boosting predictive analysis by 10%.',
      'Streamlined data infrastructure by architecting a centralized PostgreSQL environment backed by modular Node.js services, resulting in faster and more reliable information retrieval across research teams.',
      'Provisioned secure and resilient deployment architecture using Docker, Kubernetes, and AWS, while integrating Auth0 and Nginx to ensure high availability, robust access control, and 99.9% system uptime.',
      'Built ML-powered QSAR engines to estimate drug plasma half-lives in multiple species, deploying lightweight and accessible interfaces that reduced data processing time to under 30 seconds.',
      'Developed AI-driven delivery models for predicting nanoparticle efficiency and tissue distribution, complemented by real-time dashboards that delivered near-instant feedback and contributed to reducing reliance on animal testing.',
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
      'Contributed to the development of scalable backend systems with Python, FastAPI, and Flask, applying asynchronous programming techniques to build efficient and resilient services early in my career',
      'Engineered end-to-end application features leveraging technologies like React, Node.js, and PostgreSQL, delivering solutions accessible via both web and mobile-friendly interfaces.',
      'Designed efficient APIs and microservices through REST and GraphQL standards, enabling real-time, secure data exchange across distributed systems and frontend platforms.',
      'Collaborated with cross-functional and domain-specific teams in Agile ceremonies, contributing to design discussions, feature planning, and inter-team integrations that aligned technology with business goals.',
      'Built intuitive and adaptive user experiences with React, Angular, and Tailwind CSS, ensuring adaptability across various devices and user environments.',
      ' Partnered with DevOps and infrastructure teams to streamline CI/CD workflows by means of Docker, Kubernetes, and Azure DevOps, supporting smooth deployments across development and production stages.',
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
