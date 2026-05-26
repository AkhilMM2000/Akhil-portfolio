"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error" | null; message: string }>({ type: null, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Strict email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address (e.g., name@domain.com)." });
      setIsSubmitting(false);
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus({ type: "error", message: data.error || "Something went wrong." });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Failed to send message. Please try again later." });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 relative" id="contact">
      <div className="container px-6 md:px-12 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Let's Build Something <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Currently open for new opportunities. Whether you have a question or just want to say hi, 
            I'll try my best to get back to you!
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 flex flex-col gap-8"
          >
            <div className="glass-card p-6 rounded-2xl border-white/5 flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">
                  <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS || ""}`} className="hover:text-primary transition-colors">
                    {process.env.NEXT_PUBLIC_EMAIL_ADDRESS || "hello@example.com"}
                  </a>
                </p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border-white/5 flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">Available Worldwide (Remote)</p>
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl border-white/5 flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-full text-primary">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">
                  <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || ""}`} className="hover:text-primary transition-colors">
                    {process.env.NEXT_PUBLIC_PHONE_NUMBER || "+1 234 567 890"}
                  </a>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full lg:w-2/3"
          >
            <div className="glass-card p-8 rounded-2xl border-white/10">
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" value={formData.subject} onChange={handleChange} required placeholder="Project Inquiry" className="bg-background/50 border-white/10 focus-visible:ring-primary" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" value={formData.message} onChange={handleChange} required placeholder="Hello, I'd like to talk about..." rows={5} className="bg-background/50 border-white/10 focus-visible:ring-primary resize-none" />
                </div>

                {status.type && (
                  <div className={cn("p-4 rounded-lg text-sm flex items-center gap-2", status.type === "success" ? "bg-emerald-500/10 text-emerald-500 border border-emerald-500/20" : "bg-destructive/10 text-destructive border border-destructive/20")}>
                    {status.type === "success" && <CheckCircle2 className="w-4 h-4" />}
                    {status.message}
                  </div>
                )}

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full sm:w-auto self-start mt-2 shadow-[0_0_15px_rgba(var(--primary),0.2)] transition-all">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
