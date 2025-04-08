import { FaGithub, FaYoutube, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  imageUrl,
  githubUrl,
  liveUrl,
  deployedUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
  deployedUrl: string;
}) {
  return (
    <div className="border border-gray-300 rounded-2xl bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover rounded-t-2xl"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4 flex-grow overflow-hidden">{description}</p>
        <div className="flex justify-between items-center mt-4">
          {githubUrl !== "" && (<a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center gap-2"
          >
            <FaGithub size={20} /> GitHub
          </a>)}
          {liveUrl !== "" && (<a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline flex items-center gap-2"
          >
            <FaYoutube size={20} /> Demo
          </a>)}
          {deployedUrl !== "" && (<a
            href={deployedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-500 hover:underline flex items-center gap-2"
          >
            <FaExternalLinkAlt size={20} /> Visit
          </a>)}
        </div>
      </div>
    </div>
  );
}
