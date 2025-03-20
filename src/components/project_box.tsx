import Image from 'next/image';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

interface ProjectBoxProps {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink?: string;
    liveLink?: string;
}

export default function ProjectBox({ 
    title, 
    description, 
    technologies, 
    imageUrl, 
    githubLink, 
    liveLink 
}: ProjectBoxProps) {
    return (
        <div className="group relative overflow-hidden rounded-lg bg-zinc-800 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800 hover:scale-[1.02] flex flex-col h-full w-full">
            <div className="relative h-48 w-full overflow-hidden sm:h-56 md:h-64">
                <Image 
                    src={imageUrl} 
                    alt={title} 
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            
            <div className="p-5 flex flex-col flex-grow">
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
                
                <p className="mb-4 text-gray-300 line-clamp-3 sm:line-clamp-4">
                    {description}
                </p>
                
                <div className="mt-auto">
                    <div className="mb-4 flex flex-wrap gap-2">
                        {technologies.map((tech, index) => (
                            <span 
                                key={index} 
                                className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                    
                    <div className="flex items-center justify-start space-x-4">
                        {githubLink && (
                            <a 
                                href={githubLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-300 dark:hover:text-white transition-colors"
                                aria-label={`GitHub repository for ${title}`}
                            >
                                <div className="mr-1 h-5 w-5 text-white"><FaGithub /></div>
                                <span className="text-sm">Code</span>
                            </a>
                        )}
                        
                        {liveLink && (
                            <a 
                                href={liveLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="flex items-center text-indigo-300 hover:text-indigo-200 transition-colors"
                                aria-label={`Live demo for ${title}`}
                            >
                                <div className="mr-1 h-4 w-4"><FaExternalLinkAlt /></div>
                                <span className="text-sm">Live Demo</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
