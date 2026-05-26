"use client";

import { motion } from "framer-motion";
import { Server, Database, Cpu, Cloud, Code, Network } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const features = [
    {
      icon: <Server className="h-8 w-8 text-primary" />,
      title: "Backend Engineering",
      description: "Building robust APIs, microservices, and handling complex business logic with Clean Architecture principles.",
    },
    {
      icon: <Network className="h-8 w-8 text-primary" />,
      title: "Real-Time Systems",
      description: "Developing highly concurrent applications using WebRTC, Socket.IO, and scalable event-driven architectures.",
    },
    {
      icon: <Cpu className="h-8 w-8 text-primary" />,
      title: "AI Integrations",
      description: "Implementing RAG pipelines, Vector Databases, and LLM integrations for intelligent data retrieval and processing.",
    },
    {
      icon: <Cloud className="h-8 w-8 text-primary" />,
      title: "Cloud Deployment",
      description: "Architecting scalable infrastructure on AWS and GCP with NGINX, PM2, and automated CI/CD pipelines.",
    },
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: "System Design",
      description: "Designing optimized database schemas, caching layers (Redis), and scalable data storage solutions.",
    },
    {
      icon: <Code className="h-8 w-8 text-primary" />,
      title: "Frontend Optimization",
      description: "Crafting performant React/Next.js interfaces with advanced state management, virtualized lists, and SSR strategies.",
    },
  ];

  return (
    <section className="py-24 relative" id="about">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Engineering <span className="text-gradient">Philosophy</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl">
            I specialize in building scalable, production-grade applications that solve real-world problems. 
            My focus lies in strong system architecture, optimizing complex data flows, and integrating AI 
            to create next-generation product experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="glass-card h-full border-white/5 hover:border-primary/30 transition-colors group">
                <CardContent className="p-6 md:p-8">
                  <div className="mb-6 p-4 rounded-2xl bg-primary/10 inline-block group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
