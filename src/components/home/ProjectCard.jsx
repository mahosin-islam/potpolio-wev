const ProjectCard = ({ project }) => (
  <div className="bg-[#111827]/50 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:border-purple-500/50 transition-all duration-500 group">
    <div className="relative overflow-hidden rounded-2xl mb-6">
      <img src={project.image} alt={project.name} className="w-full h-52 object-cover group-hover:scale-110 transition duration-500" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
        <a href={project.liveLink} className="p-3 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white transition"><FaExternalLinkAlt /></a>
        <a href={project.githubLink} className="p-3 bg-white text-black rounded-full hover:bg-purple-500 hover:text-white transition"><FaGithub /></a>
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition">{project.name}</h3>
    <p className="text-gray-400 text-sm mb-4">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.stack.map(s => (
        <span key={s} className="text-xs bg-white/5 px-3 py-1 rounded-full border border-white/10">{s}</span>
      ))}
    </div>
  </div>
);

export default ProjectCard

