"use client";

import { motion } from "framer-motion";
import { Lock, Server, Video, CreditCard, CloudCog, ShieldCheck } from "lucide-react";

const architectures = [
  {
    id: "clean-arch",
    title: "Clean Architecture & SOLID",
    icon: <ShieldCheck className="w-10 h-10 text-primary" />,
    description: "Separation of concerns using Controller-Service-Repository patterns. Injecting dependencies to decouple business logic from framework-specific code.",
  },
  {
    id: "auth-flow",
    title: "Advanced JWT Authentication",
    icon: <Lock className="w-10 h-10 text-primary" />,
    description: "Secure Auth flow utilizing short-lived Access Tokens in memory and HTTP-only secure cookies for Refresh Tokens to mitigate XSS and CSRF attacks.",
  },
  {
    id: "realtime",
    title: "Event-Driven Real-Time",
    icon: <Server className="w-10 h-10 text-primary" />,
    description: "Highly scalable Socket.IO namespaces and rooms, backed by a Redis adapter to distribute events across horizontally scaled Node.js instances.",
  },
  {
    id: "webrtc",
    title: "WebRTC Peer-to-Peer",
    icon: <Video className="w-10 h-10 text-primary" />,
    description: "Establishing low-latency P2P mesh networks via signaling servers for seamless in-app video and voice communication streams.",
  },
  {
    id: "payments",
    title: "Payment Processing",
    icon: <CreditCard className="w-10 h-10 text-primary" />,
    description: "Idempotent payment pipelines integrated with Stripe and Razorpay, handling complex webhook verifications and asynchronous fulfillment.",
  },
  {
    id: "cloud",
    title: "Cloud Infrastructure",
    icon: <CloudCog className="w-10 h-10 text-primary" />,
    description: "Deploying via automated pipelines to AWS EC2/GCP. Using NGINX as a reverse proxy/load balancer and PM2 for process management and zero-downtime reloads.",
  }
];

export default function Engineering() {
  return (
    <section className="py-24 relative bg-background" id="architecture">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            System <span className="text-gradient">Architecture</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A look under the hood at the architectural decisions and patterns that power my applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {architectures.map((arch, index) => (
            <motion.div
              key={arch.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group p-[1px] rounded-2xl overflow-hidden bg-gradient-to-b from-white/10 to-transparent hover:from-primary/50 transition-colors"
            >
              <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl z-0" />
              <div className="relative z-10 p-8 h-full flex flex-col">
                <div className="mb-6 p-4 rounded-xl bg-card border border-white/5 w-fit shadow-xl group-hover:scale-110 transition-transform">
                  {arch.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{arch.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {arch.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Placeholder for an Architecture Diagram */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 glass-card rounded-2xl border-white/10 p-8 md:p-12 text-center aspect-[21/9] flex flex-col items-center justify-center relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
          <Server className="w-16 h-16 text-white/30 mb-4 relative z-10" />
          <h3 className="text-xl font-medium text-white/70 relative z-10 mb-2">High-Level System Architecture Diagram</h3>
          <p className="text-white/40 text-sm relative z-10">
            Replace this container with your actual visual diagrams (e.g., Draw.io, Excalidraw exports) showcasing your Clean Architecture flow.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
