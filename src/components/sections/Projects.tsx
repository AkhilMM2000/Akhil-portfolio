"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layers, ArrowRight, Key } from "lucide-react";
import { FiGithub as Github } from "react-icons/fi";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: "sarathi",
    title: "Sarathi – Specialized Driver-On-Demand Platform",
    description: "A specialized ride-booking ecosystem bridging car owners with verified professional drivers. Features real-time driver tracking, secure in-app payments, and peer-to-peer WebRTC communication.",
    highlight: "Flagship Project",
    tech: ["TypeScript", "Node.js", "Express", "MongoDB", "React", "Material UI", "TSyringe", "Socket.IO", "WebRTC", "Stripe", "Upstash Redis", "AWS EC2", "Cloudinary"],
    liveUrl: process.env.NEXT_PUBLIC_SARATHI_LIVE_URL,
    githubUrls: [
      { label: "Frontend", url: process.env.NEXT_PUBLIC_SARATHI_GITHUB_CLIENT_URL },
      { label: "Backend", url: process.env.NEXT_PUBLIC_SARATHI_GITHUB_SERVER_URL }
    ],
    features: [
      "Clean Architecture with TSyringe Dependency Injection & SOLID principles",
      "Real-time chat & video calling via raw WebRTC and Socket.IO",
      "Stripe Connected Account onboarding with 90/10 automatic fare split",
      "Signed Cloudinary uploads for vehicle RC, license, and Aadhaar verification",
      "Google Maps API for location autocomplete and roadwise distance calculations"
    ],
    image: "/sarathi-screenshot.png",
    demoCredentials: [
      { role: "User", email: process.env.NEXT_PUBLIC_SARATHI_USER_EMAIL, pass: process.env.NEXT_PUBLIC_SARATHI_USER_PASS },
      { role: "Driver", email: process.env.NEXT_PUBLIC_SARATHI_DRIVER_EMAIL, pass: process.env.NEXT_PUBLIC_SARATHI_DRIVER_PASS },
      { role: "Admin", email: process.env.NEXT_PUBLIC_SARATHI_ADMIN_EMAIL, pass: process.env.NEXT_PUBLIC_SARATHI_ADMIN_PASS, adminUrl: process.env.NEXT_PUBLIC_SARATHI_ADMIN_LIVE_URL }
    ]
  },
  {
    id: "aichat",
    title: "AI-Powered Real-Time Group Chat",
    description: "A scalable real-time group chat application featuring an integrated Gemini AI Assistant driven by a custom RAG architecture. Built for high performance, infinite scrolling, and semantic context retrieval.",
    tech: ["Next.js", "TypeScript", "Node.js", "MongoDB Vector Search", "Gemini API", "TanStack Virtual", "Socket.IO", "AWS S3", "GCP", "Clean Architecture"],
    liveUrl: process.env.NEXT_PUBLIC_AICHAT_LIVE_URL,
    githubUrls: [
      { label: "Frontend", url: process.env.NEXT_PUBLIC_AICHAT_GITHUB_CLIENT_URL },
      { label: "Backend", url: process.env.NEXT_PUBLIC_AICHAT_GITHUB_SERVER_URL }
    ],
    features: [
      "Custom RAG pipeline using Gemini API and MongoDB Atlas Vector Search for semantic retrieval",
      "High-performance UI with TanStack Virtual for infinite scrolling across thousands of messages",
      "Strict Clean Architecture backend deployed to GCP, featuring JWT rotation and Google OAuth",
      "Real-time Socket.IO messaging with IntersectionObserver read receipts",
      "Secure AWS S3 presigned URLs for direct media uploads, reducing server bandwidth usage"
    ],
    image: "/aichat-screenshot.png"
  },
  {
    id: "eyegaze",
    title: "Eyegaze – Premium E-Commerce Platform",
    description: "A comprehensive, full-stack eyewear e-commerce platform. Engineered with dynamic product discovery, persistent cart management, and a seamless multi-step checkout flow.",
    tech: ["Node.js", "Express.js", "MongoDB", "EJS", "Bootstrap", "Chart.js", "Razorpay", "Multer"],
    liveUrl: process.env.NEXT_PUBLIC_EYEGAZE_LIVE_URL,
    githubUrls: [
      { label: "Source Code", url: process.env.NEXT_PUBLIC_EYEGAZE_GITHUB_URL }
    ],
    features: [
      "Premium Admin Dashboard utilizing Chart.js to visualize real-time business metrics (Revenue, AOV)",
      "Secure Razorpay payment gateway integration coupled with robust session-based authentication",
      "Optimized multi-image processing pipeline for the product catalog using Multer",
      "Advanced dynamic Offer and Coupon management system designed to maximize sales conversions"
    ],
    image: "/eyegaze-screenshot.png",
    demoCredentials: [
      { role: "Admin", email: process.env.NEXT_PUBLIC_EYEGAZE_ADMIN_EMAIL, pass: process.env.NEXT_PUBLIC_EYEGAZE_ADMIN_PASS, adminUrl: process.env.NEXT_PUBLIC_EYEGAZE_ADMIN_LIVE_URL }
    ]
  }
];

export default function Projects() {
  return (
    <section className="py-24 relative" id="projects">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Products</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into production-grade systems I've architected and deployed.
          </p>
        </motion.div>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <div key={project.id} className="relative group">
              <div className={`flex flex-col ${index % 2 !== 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                
                {/* Project Visual/Image */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className="w-full lg:w-1/2 aspect-video rounded-2xl overflow-hidden glass-card relative flex items-center justify-center border-white/10 shadow-2xl"
                >
                  {project.image ? (
                    <Image 
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <>
                      <div className={`absolute inset-0 opacity-80 ${project.imagePlaceholder}`}></div>
                      <div className="relative z-10 text-center p-8">
                        <Layers className="w-16 h-16 mx-auto mb-4 text-white/50" />
                        <p className="text-white/70 font-mono text-sm">Product Visual Placeholder</p>
                        <p className="text-white/40 text-xs mt-2">Replace with /public/{project.id}-screenshot.png</p>
                      </div>
                    </>
                  )}
                </motion.div>

                {/* Project Details */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-1/2 flex flex-col justify-center"
                >
                  {project.highlight && (
                    <Badge variant="outline" className="w-fit mb-4 text-primary border-primary/50 bg-primary/10">
                      {project.highlight}
                    </Badge>
                  )}
                  <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
                  <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-foreground mb-3">Key Engineering Highlights</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-muted-foreground">
                          <ArrowRight className="w-4 h-4 mr-2 mt-1 flex-shrink-0 text-primary" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.map((t, i) => (
                      <Badge key={i} variant="secondary" className="bg-card/50 hover:bg-card border-white/5">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-4 mt-8">
                    <a href={project.liveUrl || "#"} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants(), "rounded-full shadow-[0_0_15px_rgba(var(--primary),0.2)]")}>
                      <ExternalLink className="w-4 h-4 mr-2" /> Live Demo
                    </a>
                    {project.githubUrls?.map((repo, i) => (
                      <a key={i} href={repo.url || "#"} target="_blank" rel="noopener noreferrer" className={cn(buttonVariants({ variant: "outline" }), "rounded-full glass hover:bg-white/5 border-white/10")}>
                        <Github className="w-4 h-4 mr-2" /> {repo.label}
                      </a>
                    ))}
                    
                    {project.demoCredentials && (
                      <Dialog>
                        <DialogTrigger className={cn(buttonVariants({ variant: "outline" }), "rounded-full glass border-primary/50 text-primary hover:bg-primary/10 transition-colors")}>
                          <Key className="w-4 h-4 mr-2" /> Test Credentials
                        </DialogTrigger>
                        <DialogContent className="glass-card border-white/10 sm:max-w-md">
                          <DialogHeader>
                            <DialogTitle className="text-2xl font-bold mb-4">Demo Credentials</DialogTitle>
                          </DialogHeader>
                          <div className="flex flex-col gap-4">
                            {project.demoCredentials.map((cred, i) => (
                              <div key={i} className="p-4 rounded-xl bg-background/50 border border-white/5">
                                <h4 className="font-semibold text-primary mb-2 flex justify-between items-center">
                                  <span>{cred.role} Login</span>
                                  {cred.adminUrl && (
                                    <a href={cred.adminUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-accent hover:underline flex items-center">
                                      Open Admin Panel <ExternalLink className="w-3 h-3 ml-1" />
                                    </a>
                                  )}
                                </h4>
                                <div className="grid grid-cols-1 gap-2 text-sm">
                                  <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Email:</span>
                                    <span className="font-mono text-foreground">{cred.email}</span>
                                  </div>
                                  <div className="flex justify-between items-center">
                                    <span className="text-muted-foreground">Password:</span>
                                    <span className="font-mono text-foreground">{cred.pass}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                </motion.div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
