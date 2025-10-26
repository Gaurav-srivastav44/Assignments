import React from "react";
import { motion } from "framer-motion";
import profileImage from "./assets/profile2.jpg"; // Replace with your actual profile image
import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa"; // Added FaHome for consistency


const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.6, ease: "easeOut" } },
});

const techStack = [
  "React",
  "JavaScript",
  "TypeScript",
  "Tailwind CSS",
  "Bootstrap",
  "Node.js",
  "Java",
];

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden flex flex-col items-center px-6 md:px-12 py-20">
      
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

      {/* Home Button */}
<motion.button
  onClick={() => navigate("/")}
  className="fixed top-6 left-6 flex items-center space-x-2 border border-white/30 rounded-full px-5 py-2 text-sm hover:bg-orange-500 hover:border-orange-500 hover:scale-[1.02] transition-all duration-300 z-50"
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
        About <span className="text-orange-500 font-semibold">Me</span>
      </motion.h1>

      {/* Main Content */}
      <motion.div
        className="flex flex-col md:flex-row items-center md:items-start gap-10 z-10 relative"
        initial="hidden"
        animate="show"
        variants={fadeIn(0.2)}
      >
        {/* Profile Image */}
        <div className="relative w-72 h-72 md:w-80 md:h-80">
          <div
            className="absolute inset-0 rounded-full transition-all duration-700"
            style={{
              background: 'radial-gradient(circle, rgba(255,120,0,0.9) 0%, rgba(255,120,0,0.4) 50%, transparent 80%)',
              filter: 'blur(15px)',
              opacity: 0.8,
              transform: 'scale(1.05)',
            }}
          />
          <img
            src={profileImage}
            alt="Gaurav Srivastav"
            className="relative w-full h-full rounded-full object-cover border-4 border-black shadow-xl"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 mt-8 md:mt-0">
          <motion.p
            className="text-base md:text-lg text-white/70 mb-6 max-w-xl leading-relaxed"
            variants={fadeIn(0.3)}
          >
            Hi! I'm <span className="font-semibold text-orange-500">Gaurav Srivastav</span>, a passionate frontend developer and React enthusiast. 
            I specialize in building <span className="font-semibold">modern, responsive web applications</span> with clean, maintainable code.
            My focus is on performance, simplicity, and bringing ideas to life.
          </motion.p>

          <motion.p
            className="text-base md:text-lg text-white/70 mb-6 max-w-xl leading-relaxed"
            variants={fadeIn(0.4)}
          >
            I also enjoy solving competitive programming problems and improving my DSA skills. 
            Outside coding, I love chess and exploring new technologies to enhance my projects.
          </motion.p>

          {/* Tech Stack */}
          <motion.div
            className="flex flex-wrap gap-4 mt-4"
            variants={fadeIn(0.5)}
          >
            {techStack.map((tech, i) => (
              <motion.div
                key={tech}
                className="px-4 py-2 border border-white/30 rounded-md text-white/70 cursor-pointer transition-all duration-300 hover:border-orange-500 hover:text-orange-500 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,165,0,0.8)]"
                variants={fadeIn(i * 0.1)}
                whileHover={{ scale: 1.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
