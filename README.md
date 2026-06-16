# Akhil M M | Full Stack Developer Portfolio

Welcome to the source code of my personal portfolio. This project was built to showcase not only my professional experience and highlighted projects but also my engineering capabilities in frontend performance, modern CSS architecture, and Next.js full-stack features.

🌐 **[View Live Portfolio](https://akhil-portfolio.vercel.app/)** *(Replace with your actual Vercel URL if different)*

---

## 🚀 Technical Architecture

This portfolio is not just a static site; it's a highly optimized, production-ready web application built with a modern tech stack:

- **Framework**: Next.js 15 (App Router) for Server-Side Rendering (SSR) and optimized bundle sizes.
- **Language**: 100% TypeScript for robust, type-safe code.
- **Styling**: Tailwind CSS v4 utilizing custom OKLCH color spaces, advanced glassmorphism techniques, and CSS variables for theming.
- **Animations**: Framer Motion for scroll-linked animations, micro-interactions, and fluid component mounting.
- **Backend/API**: Next.js Route Handlers integrated with `nodemailer` for a fully functional, server-side contact form.
- **UI Components**: ShadCN UI (accessible, headless Radix UI components).
- **Performance**: Heavy utilization of `next/dynamic` for lazy-loading below-the-fold sections, ensuring maximum Lighthouse performance scores.

---

## 💻 Featured Projects Showcased

The portfolio acts as a gateway to my most complex, full-stack applications:

### 1. Sarathi – Specialized Driver-On-Demand Platform
A complex ride-booking ecosystem bridging car owners with verified drivers.
- **Tech**: Node.js, Express, TSyringe (Clean Architecture), WebRTC, Socket.IO, Stripe.
- **Highlights**: Peer-to-peer video calling, automatic 90/10 Stripe fare splitting, and robust SOLID backend design.

### 2. AI-Powered Real-Time Group Chat
A futuristic real-time messaging platform augmented with AI.
- **Tech**: Next.js, Gemini API, MongoDB Atlas Vector Search, TanStack Virtual.
- **Highlights**: Custom RAG pipeline for semantic context retrieval, hyper-optimized virtualized message rendering for infinite scroll, and strict JWT authentication.

### 3. Eyegaze – Premium E-Commerce Platform
A comprehensive, business-ready eyewear e-commerce solution.
- **Tech**: Node.js, EJS, MongoDB, Razorpay, Chart.js.
- **Highlights**: Persistent cart management, Razorpay payment gateway, and a premium Admin Dashboard with real-time business metric visualizations.

---

## ⚙️ Local Development Setup

If you'd like to clone and run this portfolio locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/AkhilMM2000/Akhil-portfolio.git
   cd Akhil-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env.local` file in the root directory and add your own credentials:
   ```env
   # Owner Info
   NEXT_PUBLIC_PORTFOLIO_OWNER_NAME="Akhil M M"
   NEXT_PUBLIC_PORTFOLIO_OWNER_TITLE="Full Stack Developer"
   NEXT_PUBLIC_GITHUB_URL="https://github.com/AkhilMM2000"
   NEXT_PUBLIC_LINKEDIN_URL="https://www.linkedin.com/in/akhil-m-m-mernstack/"
   NEXT_PUBLIC_EMAIL_ADDRESS="your_email@gmail.com"
   NEXT_PUBLIC_PHONE_NUMBER="+91 0000000000"

   # Contact Form Nodemailer Setup (Optional)
   EMAIL_USER="your_email@gmail.com"
   EMAIL_PASS="your_google_app_password"
   
   # Add your specific Project URLs as defined in the source code...
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📬 Contact & Connect

I am currently open to new opportunities! Feel free to reach out:
- **LinkedIn**: [Akhil M M](https://www.linkedin.com/in/akhil-m-m-mernstack/)
- **GitHub**: [AkhilMM2000](https://github.com/AkhilMM2000)

*Designed and engineered by Akhil M M.*
