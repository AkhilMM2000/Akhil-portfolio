"use client";

import { motion } from "framer-motion";
import { 
  SiReact, SiNextdotjs, SiTailwindcss, SiRedux, SiTypescript,
  SiNodedotjs, SiExpress, SiSocketdotio,
  SiMongodb, SiRedis,
  SiGooglecloud, SiNginx, SiVercel, SiPm2,
  SiWebrtc
} from "react-icons/si";
import { FaAws as SiAmazon } from "react-icons/fa";
import { BrainCircuit, DatabaseZap, Workflow } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
      { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
      { name: "Redux", icon: <SiRedux className="text-[#764ABC]" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-[#3178C6]" /> },
    ]
  },
  {
    title: "Backend Development",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs className="text-[#339933]" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "REST APIs", icon: <Workflow className="text-primary" /> },
      { name: "Socket.IO", icon: <SiSocketdotio className="text-white" /> },
    ]
  },
  {
    title: "Database Systems",
    skills: [
      { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
      { name: "Redis", icon: <SiRedis className="text-[#DC382D]" /> },
      { name: "Vector Search", icon: <DatabaseZap className="text-primary" /> },
    ]
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS EC2 & S3", icon: <SiAmazon className="text-[#FF9900]" /> },
      { name: "GCP", icon: <SiGooglecloud className="text-[#4285F4]" /> },
      { name: "NGINX", icon: <SiNginx className="text-[#009639]" /> },
      { name: "PM2", icon: <SiPm2 className="text-[#2B037A]" /> },
      { name: "Vercel", icon: <SiVercel className="text-white" /> },
    ]
  },
  {
    title: "AI & Real-Time",
    skills: [
      { name: "Gemini API", icon: <BrainCircuit className="text-[#4285F4]" /> },
      { name: "RAG Architecture", icon: <Workflow className="text-primary" /> },
      { name: "WebRTC", icon: <SiWebrtc className="text-[#333333]" /> },
    ]
  }
];

export default function Skills() {
  return (
    <section className="py-24 relative bg-card/20" id="skills">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Arsenal</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of my core technologies, frameworks, and architectural tools used for production deployments.
          </p>
        </motion.div>

        <div className="flex flex-col gap-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h3 className="text-2xl font-semibold mb-6 border-b border-white/10 pb-4 inline-block">
                {category.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="glass-card p-4 rounded-xl flex items-center gap-4 border-white/5 hover:border-primary/50 transition-all cursor-default relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="text-3xl relative z-10">
                      {skill.icon}
                    </div>
                    <span className="font-medium text-sm md:text-base relative z-10">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
