"use client";
import { useParams } from "next/navigation";
import { projectsData } from "@/data/projectsData";
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from "react-icons/fa"; // React Icons ব্যবহার করা হয়েছে
import Link from "next/link";

const ProjectDetails = () => {
  const { id } = useParams();
  
  // আপনার data/projectsData.js থেকে ডাটা খুঁজে বের করা
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="text-center py-20 dark:text-white">
        <h2 className="text-2xl font-bold">Project not found!</h2>
        <Link href="/#projects" className="text-blue-500 underline mt-4 block">
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <main className="min-h-screen py-20 px-6 max-w-4xl mx-auto transition-colors duration-300">
      {/* Back Button */}
      <Link 
        href="/#projects" 
        className="flex items-center gap-2 text-blue-600 dark:text-blue-400 mb-8 hover:underline font-medium"
      >
        <FaArrowLeft /> Back to Home
      </Link>

      {/* Project Image */}
      <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-3xl mb-8 border border-gray-200 dark:border-gray-800 shadow-lg">
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Project Header */}
      <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
        {project.name}
      </h1>
      
      {/* Tech Stack Tags */}
      <div className="flex flex-wrap gap-2 mb-8">
        {project.stack.map((tech) => (
          <span 
            key={tech} 
            className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-4 py-1 rounded-full text-sm font-medium border border-blue-200 dark:border-blue-500/20"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="space-y-10 text-gray-700 dark:text-gray-300">
        {/* Description Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">Project Overview</h2>
          <p className="leading-relaxed text-lg">
            {project.description}
          </p>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-wrap gap-4">
          <a 
            href={project.liveLink} 
            target="_blank" 
            className="flex items-center gap-2 bg-blue-600 px-6 py-3 rounded-xl text-white font-semibold hover:bg-blue-700 transition shadow-md"
          >
            <FaExternalLinkAlt size={16} /> Live Project
          </a>
          <a 
            href={project.githubLink} 
            target="_blank" 
            className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-6 py-3 rounded-xl text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-700 transition shadow-sm"
          >
            <FaGithub size={20} /> Client Repo
          </a>
        </div>

        {/* Requirements Details (Challenges & Future Plans) */}
        <div className="grid md:grid-cols-2 gap-8 pt-10 border-t border-gray-200 dark:border-gray-800">
          <div className="bg-gray-50 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Challenges Faced</h3>
            <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
              "{project.challenges}"
            </p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-100 dark:border-gray-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Potential Improvements</h3>
            <p className="text-gray-600 dark:text-gray-400 italic leading-relaxed">
              "{project.futurePlan}"
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetails;