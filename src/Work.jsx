import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

import devslane from "./assets/devslane.jpg";
import filed from "./assets/filed.jpg";

const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.8, ease: "easeOut" } },
});

const workExperiences = [
  {
    role: "Frontend Developer Intern",
    company: "DevsLane",
    duration: "June 2025 - Present",
    description:
      "Worked on building responsive React applications and components using Tailwind CSS and Bootstrap.",
    image: devslane,
  },
  {
    role: "VR Therapy Project",
    company: "GLA University",
    duration: "2024",
    description:
      "Developed a VR-based therapy application to assist in treating psychological issues using immersive virtual reality environments.",
    image: filed,
  },
];

const Work = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black text-white px-6 md:px-12 py-20 font-sans relative overflow-hidden">
      {/* Floating Background */}
      <motion.button
              onClick={() => navigate("/")}
              className="absolute top-6 left-6 px-4 py-2 border border-white/30 rounded-md hover:border-orange-500 hover:text-orange-500 transition-all duration-300 z-10"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(255,165,0,0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              Home
            </motion.button>
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full blur-3xl opacity-30 -top-[250px] -left-[350px]"
        style={{
          background:
            "radial-gradient(circle at 40% 40%, rgba(255,100,20,0.4), transparent 70%)",
        }}
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full blur-3xl opacity-20 -bottom-[400px] -right-[500px]"
        style={{
          background:
            "radial-gradient(circle at 60% 60%, rgba(0,120,255,0.3), transparent 70%)",
        }}
        animate={{ x: [0, -40, 0], y: [0, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Page Title */}
      <motion.h2
        initial="hidden"
        animate="show"
        variants={fadeIn(0)}
        className="text-3xl md:text-4xl font-semibold mb-12 text-center z-10 relative"
      >
        My <span className="text-orange-500">Work</span>
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl mx-auto relative z-10">
        {/* Work Cards */}
        <motion.div className="flex-1 flex flex-col gap-8">
          {workExperiences.map((work, i) => (
            <motion.div
              key={i}
              variants={fadeIn(i * 0.1)}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(255,165,0,0.7)",
              }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="bg-gray-800/70 p-6 rounded-xl border border-white/10 cursor-pointer transition-transform duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 rounded-xl border-2 border-transparent hover:border-orange-500 transition-all duration-500 pointer-events-none"></div>
              <h3 className="text-xl md:text-2xl font-semibold mb-1 text-orange-500">
                {work.role}
              </h3>
              <p className="text-white/70 mb-1">
                {work.company} | {work.duration}
              </p>
              <p className="text-white/70">{work.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Hover Images */}
        <div className="relative w-full max-w-xs md:max-w-md h-64 md:h-80 md:block hidden">
        <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
            <motion.img
                key={hoveredIndex}
                src={workExperiences[hoveredIndex].image}
                alt="Project Preview"
                initial={{ opacity: 0, x: 50, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                transition={{ duration: 0.5 }}
                className="rounded-xl shadow-2xl border border-orange-500 object-contain w-full h-full bg-black p-2"
            />
            )}
        </AnimatePresence>
        </div>

      </div>
    </div>
  );
};

export default Work;
