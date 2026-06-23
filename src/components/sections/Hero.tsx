"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin } from "react-icons/fi";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Hero() {
  const ownerName = process.env.NEXT_PUBLIC_PORTFOLIO_OWNER_NAME || "Manoj";
  const ownerTitle = process.env.NEXT_PUBLIC_PORTFOLIO_OWNER_TITLE || "Full Stack Developer";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden" id="hero">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10 px-6 md:px-12 flex flex-col items-center text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={itemVariants} className="mb-8 flex justify-center">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full p-1 bg-gradient-to-tr from-primary/30 to-accent/30 backdrop-blur-sm shadow-[0_0_30px_rgba(var(--primary),0.2)]">
              <div className="relative w-full h-full rounded-full overflow-hidden bg-background">
                <Image 
                  src="/profile.png.png" 
                  alt={ownerName} 
                  fill 
                  sizes="(max-width: 768px) 128px, 160px"
                  className="object-cover" 
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-white/10 text-sm font-medium text-primary">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new opportunities
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Hi, I'm {ownerName}. <br />
            <span className="text-gradient">{ownerTitle}</span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Building scalable real-time applications with modern web technologies.
            Specialized in system architecture, AI integrations, and cloud deployment.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-8 text-base shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-all")}>
              View Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <a href="/AKHIL%20MM.pdf" target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8 text-base glass hover:bg-white/5 border-white/10")}>
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 flex items-center justify-center gap-6">
            <a href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github className="h-6 w-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin className="h-6 w-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
