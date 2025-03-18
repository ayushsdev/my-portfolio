import ProjectBox from '../components/project_box';
import { projects } from '../data/projects';

export default function Projects() {
    return (
        <div className="flex flex-col items-center justify-end px-4 sm:px-6 md:px-10 lg:px-20 py-10">
            <div className="flex flex-row items-end lg:justify-end justify-center w-full pb-10">
                <div className="lg:text-9xl md:text-7xl text-5xl font-bold text-white text-center">Projects</div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
                     {projects.map((project, index) => (
                        <ProjectBox
                            key={index}
                            {...project}
                        />
                    ))}
                </div>
        </div>
    );
}