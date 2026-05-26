import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";

// Dynamically import below-the-fold sections to reduce initial client-side JS bundle size
const About = dynamic(() => import("@/components/sections/About"), { ssr: true });
const Skills = dynamic(() => import("@/components/sections/Skills"), { ssr: true });
const Projects = dynamic(() => import("@/components/sections/Projects"), { ssr: true });
const Engineering = dynamic(() => import("@/components/sections/Engineering"), { ssr: true });
const Contact = dynamic(() => import("@/components/sections/Contact"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Engineering />
      <Contact />
    </>
  );
}
