import Hero from "../sections/hero";
import Projects from "../sections/projects";
export default function Home() {
  return (
    // <div className = "w-full bg-black">
      <div className="h-screen flex flex-col">
        <div className = "sm:h-2/3 h-1/2">
          <Hero />
        </div>
        <div className = "sm:h-1/3 h-1/2">
          <Projects />
        </div>
      </div>
    // </div>
  );
}
