"use client";
import { motion } from "framer-motion";
import { LuRocket, LuBrain, LuActivity } from "react-icons/lu";

const AboutSection = ({ icon: Icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="space-y-4"
  >
    <div className="flex items-center gap-3">
      {/* Icon: Theme transition smooth করার জন্য Tailwind colors ব্যবহার করা হয়েছে */}
      <div className="text-purple-600 dark:text-purple-400 text-3xl transition-colors duration-500">
        <Icon />
      </div>
      <h3 className="text-2xl md:text-3xl font-bold text-slate-800 dark:text-slate-100 transition-colors duration-500">
        {title}
      </h3>
    </div>
    <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed pl-1 transition-colors duration-500">
      {description}
    </p>
  </motion.div>
);

const About = () => {
  return (
    <section 
      id="about" 
      // এখানে bg-background সরাসরি CSS Variable থেকে কালার নিবে
      className="py-10  px-6 bg-background transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        
        {/* মেইন টাইটেল */}
        <div className="mb-6 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white transition-colors duration-500">
            About <span className="text-purple-600 dark:text-purple-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-purple-600 dark:bg-purple-400 mx-auto mt-4 rounded-full transition-all duration-500"></div>
        </div>

        {/* কন্টেন্ট লিস্ট */}
        <div className="space-y-16">
          <AboutSection 
            delay={0.1}
            icon={LuRocket}
            title="The Programming Journey"
            description="My professional development journey truly took off with Programming Hero, where I am currently focused on mastering the MERN stack. I have 1+ years of experience in building modern, scalable web applications with a detail-oriented approach."
          />

          <AboutSection 
            delay={0.2}
            icon={LuBrain}
            title="Work Ethic and Personality"
            description="I thrive on solving complex problems with elegant, functional solutions. Characterized by a composed nature, I maintain balance in challenging situations, ensuring my code remains clean, maintainable, and highly focused on the user experience."
          />

          <AboutSection 
            delay={0.3}
            icon={LuActivity}
            title="Beyond the Code"
            description="Outside of coding, I enjoy long-distance walking in nature to sharpen my perspective and rejuvenate my creativity, always striving for a healthy life-work balance."
          />
        </div>
      </div>
    </section>
  );
};

export default About;