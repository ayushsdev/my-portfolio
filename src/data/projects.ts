export interface Project {
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubLink?: string;
    liveLink?: string;
}

export const projects: Project[] = [
    {
        title: "Portfolio Website",
        description: "A modern portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and responsive design.",
        technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
        imageUrl: "/project_images/vienna.jpg",
        githubLink: "https://github.com/yourusername/portfolio",
        liveLink: "https://your-portfolio.com"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-stack e-commerce platform with user authentication, product management, and payment integration.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        imageUrl: "/project_images/vienna.jpg",
        githubLink: "https://github.com/yourusername/ecommerce",
        liveLink: "https://your-ecommerce.com"
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat application powered by AI, featuring natural language processing and sentiment analysis.",
        technologies: ["Python", "TensorFlow", "WebSocket", "React"],
        imageUrl: "/project_images/vienna.jpg",
        githubLink: "https://github.com/yourusername/ai-chat"
    }
]; 