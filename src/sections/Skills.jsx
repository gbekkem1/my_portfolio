import { motion } from "framer-motion";
import {
  FaPython, FaJava, FaReact, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaGitAlt, FaDatabase,
  FaJsSquare
} from "react-icons/fa";
import {
  SiC, SiCplusplus, SiFsharp, SiRedux, SiAngular, SiTailwindcss, SiDjango,
  SiFlask, SiFastapi, SiMongodb, SiPostgresql, SiMysql, SiSqlalchemy,
  SiJenkins, SiKubernetes, SiPandas, SiNumpy, SiD3Dotjs, SiMapbox, SiGraphql,
  SiTestinglibrary, SiTensorflow, SiScrumalliance, SiGooglecloud, SiOracle
} from "react-icons/si";

// 🔥 Grouped Skills Object
const groupedSkills = {
  "Programming": [
    { icon: <FaPython />, name: "Python" },
    { icon: <FaJava />, name: "Java" },
    { icon: <SiC />, name: "C" },
    { icon: <SiCplusplus />, name: "C++" },
    { icon: <SiFsharp />, name: "F#" },
    { icon: <FaJsSquare />, name: "JavaScript" },
  ],
  "Frontend Development": [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiAngular />, name: "Angular" },
  ],
  "Backend & API": [
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiFastapi />, name: "Fast API" },
  ],
  "Databases": [
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiSqlalchemy />, name: "SQLAlchemy" },
    { icon: <SiOracle />, name: "Oracle" },
    { icon: <FaDatabase />, name: "DBMS" },
  ],
  "DevOps & Tools": [
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiGooglecloud />, name: "GCP" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiJenkins />, name: "Jenkins" },
  ],
  "Data & Visualization": [
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiD3Dotjs />, name: "D3.js" },
    { icon: <SiMapbox />, name: "MapReduce" },
    { icon: <SiGraphql />, name: "GraphQL" },
    { icon: <SiTestinglibrary />, name: "React Testing" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiScrumalliance />, name: "Scrum/Agile" },
  ]
};

const SkillGrid = () => {
  return (
    <section id="skills" className="py-20 bg-[#6e8c7b] text-white">
      <h2 className="text-3xl font-bold text-center text-zinc-300 mb-12 ">
      <span className='bg-black/40 rounded text-[#c1a86b]'>Skills</span>
      </h2>
      <div className="space-y-16 px-4">
        {Object.entries(groupedSkills).map(([category, skills], i) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-center mb-6 text-[#c1a86b]">
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group transition-transform duration-200 hover:scale-110"
                >
                  <div className="text-[40px] text-zinc-300 group-hover:text-[#c1a86b] group-hover:shadow-lg group-hover:shadow-[#c1a86b] transition-all rounded-full p-3">
                    {skill.icon}
                  </div>
                  <span className="mt-2 text-sm text-zinc-300 group-hover:text-[#c1a86b] text-center transition-all">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillGrid;
