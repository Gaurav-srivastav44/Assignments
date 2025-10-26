import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bgImage from "./assets/bg.jpg";
import profileImage from "./assets/profile2.jpg";

// Fade-in animation helper
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: "easeOut" } },
});

// Professional animated name
const ProfessionalName = () => (
  <motion.div
    className="text-2xl md:text-4xl font-semibold tracking-tight text-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    Gaurav <span className="text-orange-500">Srivastav</span>
  </motion.div>
);

const PortfolioHero = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const navItems = ["Home", "Work", "Projects", "About", "Contact"];
const techStack = [
  "React",
  "JavaScript",
  "TypeScript",
  "Java",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "Bootstrap",
  "MongoDB",
  "DataStructures",
];

  return (
    <div
      className="relative min-h-screen bg-cover bg-center text-white overflow-hidden"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/85 z-0"></div>

      {/* Floating Background */}
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

      {/* Navbar */}
      <motion.nav initial="hidden" animate="show" variants={fadeIn(0.2)} className="flex justify-between items-center px-6 md:px-12 py-6 relative z-10">
        <ProfessionalName />

        <div className="hidden md:flex space-x-8 text-sm text-white/70">
          {navItems.map((item, i) => (
            <span
              key={i}
              className="cursor-pointer hover:text-white transition-colors duration-200"
              onClick={() => navigate(`/${item.toLowerCase()}`)}
            >
              {item}
            </span>
          ))}
        </div>

        <button
          className="hidden md:block border border-white/30 rounded-full px-5 py-2 text-sm hover:bg-white/10 hover:scale-105 transition-all duration-300"
          onClick={() => navigate("/contact")}
        >
          Let’s Connect →
        </button>
      </motion.nav>

      {/* Hero Section */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between items-start px-6 md:px-12 pt-20 md:pt-32">
        {/* Left Section */}
        <motion.div initial="hidden" animate="show" variants={fadeIn(0.3)} className="flex flex-col md:flex-row items-start gap-10 w-full">
          <div className="relative w-72 h-72 group transition-all duration-500 shrink-0">
            <div
              className="absolute inset-0 rounded-full transition-all duration-700"
              style={{
                background: 'radial-gradient(circle, rgba(255,120,0,0.5) 0%, rgba(255,120,0,0.2) 50%, transparent 80%)',
                filter: 'blur(10px)',
              }}
            />
            <img
              src={profileImage}
              alt="Gaurav Srivastav"
              className="relative w-full h-full rounded-full object-cover border-4 border-black group-hover:scale-105 transition-all duration-500 z-10 shadow-xl"
            />
          </div>

          <div className="flex-1 mt-8 md:mt-0">
            <h1 className="text-5xl md:text-5xl font-light leading-tight mb-6">
              I build <span className="font-semibold">modern web apps</span> <br className="hidden md:inline" />
              with <span className="text-orange-500 font-semibold">React & JavaScript</span>, <br />
              <span className="font-semibold text-4xl">crafting interactive and high-performance experiences</span>.
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-lg leading-relaxed">
              As a frontend developer, I specialize in creating clean, responsive, and user-friendly web applications. 
              I focus on performance, simplicity, and turning ideas into well-structured, maintainable code.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-md font-medium transition"
                onClick={() => navigate("/work")}
              >
                View Work
              </button>
              <button
                className="border border-white/30 hover:border-orange-500 px-6 py-3 rounded-md font-medium transition"
                onClick={() => navigate("/contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </motion.div>

        {/* Right - Tech Stack */}
        <motion.div className="hidden md:flex flex-col space-y-4 items-center md:items-end mt-12 md:mt-0" initial="hidden" animate="show" variants={fadeIn(0.6)}>
          {techStack.map((tech, i) => (
            <motion.div
              key={tech}
              variants={fadeIn(i * 0.1 + 0.6)}
              className="flex justify-center items-center text-white/70 text-sm md:text-base 
                         px-0 py-0 cursor-pointer 
                         transition-all
                         hover:px-4 hover:py-2 hover:rounded-full hover:border hover:border-cyan-500 
                         hover:scale-110 m-2"
            >
              {tech}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default PortfolioHero;
