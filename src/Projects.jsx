import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaHome, FaExternalLinkAlt } from "react-icons/fa";

// Fade-in animation helper
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: "easeOut" } },
});

// Project list
const projects = [
  {
    name: "QR Link Converter",
    description: "A web app that converts links into QR codes for easy sharing.",
    tech: ["React", "JavaScript", "QRCode API"],
    link: "https://gauravlinktoqr.netlify.app", // <-- use full URL
  },
  {
    name: "Chatbot",
    description: "An intelligent chatbot for handling customer queries using AI and NLP.",
    tech: ["React", "Node.js", "TogetherAI API"],
    link: "https://gauravchatbot.netlify.app",
  },
  {
    name: "Portfolio Website",
    description: "My personal portfolio showcasing projects and skills.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    link: "https://gauravportfolio.netlify.app",
  },
  {
    name: "E-commerce Site",
    description: "A fully responsive online store with product listings, cart, and checkout.",
    tech: ["React", "Bootstrap"," MongoDB"],
    link: "https://gauravecommerce.netlify.app",
  },
  {
    name: "EvalEra - Online Assessment Platform",
    description: "A web platform for conducting online assessments and evaluating candidates.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://evalera.netlify.app",
  },
];


const ProjectsPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center px-6 md:px-12 pt-20 pb-12">
      {/* Animated Background */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-30 -top-[250px] -left-[350px]"
        style={{ background: "radial-gradient(circle at 40% 40%, rgba(255,100,20,0.5), transparent 70%)" }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-20 -bottom-[400px] -right-[500px]"
        style={{ background: "radial-gradient(circle at 60% 60%, rgba(0,120,255,0.4), transparent 70%)" }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Fixed Home Button */}
      <motion.button
        onClick={() => navigate("/")}
        className="fixed top-6 left-6 flex items-center space-x-2 border border-white/30 rounded-full px-5 py-2 text-sm hover:bg-orange-500 hover:border-orange-500 hover:scale-[1.02] transition-all duration-300 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <FaHome className="text-base" />
        <span>Home</span>
      </motion.button>

      {/* Page Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-light mb-12 text-center z-10 relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        My <span className="text-orange-500 font-semibold">Projects</span>
      </motion.h1>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl z-10">
        {projects.map((project, i) => (
          <motion.a
            key={project.name}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col justify-between p-6 rounded-lg cursor-pointer transition-all duration-300
                       bg-white/5 hover:bg-white/10 border border-transparent hover:border-orange-500"
            variants={fadeIn(i * 0.1 + 0.2)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.03, boxShadow: "0 0 20px rgba(255,120,0,0.5)" }}
            whileTap={{ scale: 0.97 }}
          >
            <div>
              <h2 className="text-xl font-semibold text-orange-500 mb-2">{project.name}</h2>
              <p className="text-white/70 mb-3">{project.description}</p>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 border border-white/30 rounded-md text-white/70 text-sm hover:border-orange-500 hover:text-orange-500 transition-all duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex justify-end mt-4 text-orange-500">
              <FaExternalLinkAlt />
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
