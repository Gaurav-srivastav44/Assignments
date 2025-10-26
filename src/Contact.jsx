import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FaEnvelope, FaLinkedin, FaGithub, FaHome } from "react-icons/fa";
import { SiGeeksforgeeks, SiLeetcode, SiCodeforces } from "react-icons/si";

// Fade-in animation helper
const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { delay, duration: 0.7, ease: "easeOut" } },
});

const profiles = [
  {
    name: "Email",
    icon: <FaEnvelope size={28} />,
    link: "mailto:gauravsrivastav1601@gmail.com",
    detail: "gauravsrivastav1601@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={28} />,
    link: "https://www.linkedin.com/in/gaurav-srivastav-a4b2142aa/",
    detail: "/in/gaurav-srivastav",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={28} />,
    link: "https://github.com/Gaurav-srivastav44",
    detail: "github.com/Gaurav-srivastav44",
  },
  {
    name: "LeetCode",
    icon: <SiLeetcode size={28} />,
    link: "https://leetcode.com/u/Gaurav_4444/",
    detail: "leetcode.com/u/Gaurav_4444",
  },
  {
    name: "GFG",
    icon: <SiGeeksforgeeks size={28} />,
    link: "https://www.geeksforgeeks.org/user/gauravsrivastav44/",
    detail: "geeksforgeeks.org/user/gauravsrivastav44",
  },
  {
    name: "Codeforces",
    icon: <SiCodeforces size={28} />,
    link: "https://codeforces.com/profile/gauravsrivastav160105",
    detail: "codeforces.com/profile/gauravsrivastav",
  },
];

const ContactPage = () => {
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
        Let's <span className="text-orange-500 font-semibold">Connect</span>
      </motion.h1>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 w-full max-w-3xl z-10">
        {profiles.map((profile, i) => (
          <motion.a
            key={profile.name}
            href={profile.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all duration-300
                       bg-white/5 hover:bg-white/10 border border-transparent hover:border-orange-500"
            variants={fadeIn(i * 0.1 + 0.2)}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255,120,0,0.5)" }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="mb-2 text-orange-500">{profile.icon}</div>
            <span className="font-semibold text-white/90 mb-1 text-lg">{profile.name}</span>
            {profile.detail && (
              <span className="text-sm text-white/50 break-all text-center px-2">{profile.detail}</span>
            )}
          </motion.a>
        ))}
      </div>

     <motion.a
  href="/Gaurav Resume.pdf"
  target="_blank"
  className="mt-12 px-8 py-3 bg-white/10 border border-white/30 rounded-md
             hover:border-orange-500 hover:text-orange-500 hover:scale-105
             transition-all duration-300 font-medium text-lg z-10"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ boxShadow: "0 0 20px rgba(255,165,0,0.7)", scale: 1.05 }}
  transition={{ duration: 0.8, delay: 0.5 }} // adjust delay if needed
>
  Download Resume
</motion.a>

    </div>
  );
};

export default ContactPage;
