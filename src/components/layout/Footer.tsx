import Link from "next/link";
import { Mail } from "lucide-react";
import { FiGithub as Github, FiLinkedin as Linkedin, FiTwitter as Twitter } from "react-icons/fi";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const ownerName = process.env.NEXT_PUBLIC_PORTFOLIO_OWNER_NAME || "Developer";

  return (
    <footer className="border-t border-white/10 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-6 md:px-12 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-bold tracking-tighter mb-4 inline-block">
              <span className="text-gradient">Portfolio</span>.
            </Link>
            <p className="text-muted-foreground max-w-sm">
              Building scalable real-time applications with modern web technologies.
              Crafting production-ready systems for the web.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="#about" className="text-muted-foreground hover:text-primary transition-colors">About</Link></li>
              <li><Link href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projects</Link></li>
              <li><Link href="#architecture" className="text-muted-foreground hover:text-primary transition-colors">Architecture</Link></li>
              <li><Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href={process.env.NEXT_PUBLIC_GITHUB_URL || "#"} target="_blank" rel="noopener noreferrer" className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Github size={20} />
              </a>
              <a href={process.env.NEXT_PUBLIC_LINKEDIN_URL || "#"} target="_blank" rel="noopener noreferrer" className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Linkedin size={20} />
              </a>
              <a href={process.env.NEXT_PUBLIC_TWITTER_URL || "#"} target="_blank" rel="noopener noreferrer" className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Twitter size={20} />
              </a>
              <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL_ADDRESS || ""}`} className="p-2 bg-card rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} {ownerName}. All rights reserved.
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            Built with Next.js & Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
