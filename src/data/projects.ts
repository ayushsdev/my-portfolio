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
        imageUrl: "/project_images/portfolio.jpg",
        githubLink: "https://github.com/ayushsdev/my-portfolio",
        liveLink: "https://www.ayush-sharma.dev"
    },
    {
        title: "Computational Photography",
        description: "A collection of computational photography projects, including image processing, computer vision, and machine learning.",
        technologies: ["Python", "OpenCV", "NumPy", "Matplotlib"],
        imageUrl: "/project_images/rohit_toast.png",
        githubLink: "https://github.com/ayushsdev/Computational-Photography-Projects"
    },
    {
        title: "UIUC Chat",
        description: "Research Assistant at NCSA developing UIUC Chat - a chatbot for the University of Illinois at Urbana-Champaign.",
        technologies: ["Python", "RAG", "Natural Language Processing", "React", "Next.js"],
        imageUrl: "/project_images/uiuc-chat.png",
        githubLink: "https://github.com/ayushsdev/uiuc-chat-frontend-main",
        liveLink: "https://uiuc.chat"
    }, 
    {
        title: "Klink!",
        description: "Co-founded Klink! - an AI-powered app that lets you find happy hours at your favorite bars and restaurants.",
        technologies: ["Swift", "IOS", "Python", "Flask", "Firebase", "OpenAI", ],
        imageUrl: "/project_images/klink.png",
        liveLink: "https://www.klink.social"
    },
    {
        title: "The Resistance Board Game",
        description: "Made a mobile app for The Resistance Board Game",
        technologies: ["Swift", "IOS", "Realtime Database", "Firebase", "Concurrency", ],
        imageUrl: "/project_images/the-resistance.png",
        githubLink: "https://github.com/ayushsdev/TheResistanceGame"
    }
]; 