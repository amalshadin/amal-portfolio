import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaJava } from 'react-icons/fa';
import { SiC, SiCplusplus, SiPython, SiJavascript, SiTypescript, SiReact, SiNodedotjs, SiPostgresql, SiMongodb, SiGit, SiLinux, SiLatex } from 'react-icons/si';
import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const Home = () => {
  const skills = [
    { icon: <SiC />, name: 'C' },
    { icon: <SiCplusplus />, name: 'C++' },
    { icon: <SiPython />, name: 'Python' },
    { icon: <FaJava />, name: 'Java' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <SiReact />, name: 'React/Native' },
    { icon: <SiNodedotjs />, name: 'Node.js' },
    { icon: <SiPostgresql />, name: 'PostgreSQL' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiGit />, name: 'Git' },
    { icon: <SiLinux />, name: 'Linux' },
    { icon: <SiLatex />, name: 'LaTeX' },
  ];

  const projects = [
    {
      title: "Weather Flappy Bird",
      description: "A TypeScript-based Flappy Bird game using React. The game's theme and difficulty dynamically adjust based on the real-time weather at the user's location, fetched from the OpenWeather API.",
      tags: ["React", "TypeScript", "OpenWeather API", "Game Dev"],
      github: "https://github.com/amalshadin/weather-flappy-bird",
      live: "https://amalshadin.github.io/weather-flappy-bird/"
    },
    {
      title: "ReGen",
      description: "A React Native app that uses the Gemini API to scan trash. It identifies items, suggests eco-friendly disposal methods, provides alternative products, and offers creative upcycling ideas.",
      tags: ["React Native", "Gemini API", "AI/ML", "Mobile App"],
      github: "https://github.com/amalshadin/re-gen",
      live: ""
    },
    {
      title: "Personal Linux Server",
      description: "Setup and configuration of a home server on a laptop running Ubuntu Server. Used for hosting personal projects, databases, and experimenting with networking and system administration.",
      tags: ["Linux", "Ubuntu Server", "Networking", "Self-Hosting"],
      github: "",
      live: ""
    },
    {
      title: "Hotel Booking App",
      description: "Currently developing a desktop application for hotel booking management using Java Swing. This project focuses on object-oriented programming principles and GUI design.",
      tags: ["Java", "Swing", "Desktop App", "In Progress"],
      github: "",
      live: ""
    }
  ];

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="py-12 space-y-24">
      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        className="text-center md:text-left flex flex-col md:flex-row items-center justify-between"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-primary">Amal Shadin A</h1>
          <p className="font-mono text-accent text-lg mt-2">Computer Science & Engineering Student</p>
          <p className="text-secondary max-w-xl mt-4">
            Based in Calicut, Kerala. I'm passionate about programming, networking, and building innovative software solutions for both web and mobile platforms. Currently exploring the worlds of Machine Learning and Cybersecurity.
          </p>
          <div className="flex justify-center md:justify-start space-x-4 mt-6 text-2xl text-secondary">
              <a href="https://github.com/amalshadin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/amal-shadin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaLinkedin /></a>
              <a href="https://x.com/AmalShadin" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors"><FaTwitter /></a>
              <a href="mailto:amalshadin10@gmail.com" className="hover:text-accent transition-colors"><FaEnvelope /></a>
          </div>
        </div>
      </motion.section>

      {/* About & Skills Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-primary mb-8 font-mono"><span className="text-accent">01.</span> About & Skills</h2>
        <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-secondary leading-relaxed">
                Hello! I'm Amal, a computer science student at RIT Kottayam. My journey into tech started with a deep curiosity for how things work, which quickly evolved into a passion for software development. I have hands-on experience building projects from the ground up, tackling challenges in web development, cross-platform app creation, and server management.
                <br/><br/>
                Beyond coding, I'm an avid football fan and enjoy the strategic challenges in video games, especially Souls-like titles. I'm always eager to learn new technologies and apply my skills to solve real-world problems.
              </p>
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-4">
              {skills.map(skill => (
                <div key={skill.name} className="flex flex-col items-center justify-center p-4 bg-blue-900 bg-opacity-20 rounded-lg hover:bg-opacity-40 transition-all">
                  <div className="text-4xl text-accent">{skill.icon}</div>
                  <span className="mt-2 text-xs text-secondary">{skill.name}</span>
                </div>
              ))}
            </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl font-bold text-primary mb-8 font-mono"><span className="text-accent">02.</span> Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map(project => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </motion.section>
    </div>
  );
};

export default Home;