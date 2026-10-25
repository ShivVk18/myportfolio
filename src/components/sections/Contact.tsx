"use client";

import React, { useState } from "react";
import { Mail, Copy, Check, Linkedin, Github, FileText, ArrowUp } from "lucide-react";
import { toast } from "sonner";

export const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "shivansh.dev2708@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied!");
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="relative w-full py-16 md:py-24">
      <div className="max-w-[1140px] w-[90%] sm:w-[88%] mx-auto space-y-12">
        
        {/* Minimal Editorial Invite */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-mono text-xs text-primary font-bold tracking-widest uppercase">
            <span>04</span>
            <span>{"//"}</span>
            <span>CONTACT</span>
          </div>
          <h2 className="font-heading text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-[#141414] dark:text-[#F5F4EE] uppercase leading-[0.9]">
            LET&apos;S BUILD <br />
            SOMETHING.
          </h2>
          <p className="text-lg sm:text-xl text-[#555555] dark:text-[#A8A69E] font-sans max-w-xl">
            Have a project, opportunity, or interesting problem?
          </p>
        </div>

        {/* Direct Action Links */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Email Me Button */}
          <a
            href={`mailto:${email}`}
            className="px-6 py-3.5 rounded-sm bg-primary text-white font-mono text-xs sm:text-sm font-bold border-2 border-[#141414] tactile-btn flex items-center gap-2"
          >
            <Mail className="w-4 h-4" />
            <span>Email Me →</span>
          </a>

          {/* Quick Copy Button */}
          <button
            onClick={copyEmail}
            className="px-4 py-3.5 rounded-sm border-2 border-[#141414] dark:border-white/20 bg-[#FFFFFF] dark:bg-[#1A1A18] text-xs font-mono font-bold tactile-btn flex items-center gap-1.5"
            title="Copy email to clipboard"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
          </button>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/shivansh-saxena-0679ab22a/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-sm border-2 border-[#141414] dark:border-white/20 bg-[#FFFFFF] dark:bg-[#1A1A18] text-[#141414] dark:text-[#F5F4EE] font-mono text-xs sm:text-sm font-bold tactile-btn flex items-center gap-1.5"
          >
            <Linkedin className="w-3.5 h-3.5 text-primary" />
            <span>LinkedIn →</span>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/ShivVk18"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-sm border-2 border-[#141414] dark:border-white/20 bg-[#FFFFFF] dark:bg-[#1A1A18] text-[#141414] dark:text-[#F5F4EE] font-mono text-xs sm:text-sm font-bold tactile-btn flex items-center gap-1.5"
          >
            <Github className="w-3.5 h-3.5 text-primary" />
            <span>GitHub →</span>
          </a>

          {/* Resume */}
          <a
            href="https://drive.google.com/file/d/1cI3seyZ0gpCzkRKnG1vkeePFBwpEFgpg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-3.5 rounded-sm border-2 border-[#141414] dark:border-white/20 bg-[#F0EDE6] dark:bg-[#252422] text-[#141414] dark:text-[#F5F4EE] font-mono text-xs sm:text-sm font-bold tactile-btn flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5 text-primary" />
            <span>Resume ↗</span>
          </a>
        </div>

        {/* Minimal Printed Colophon Footer */}
        <footer className="pt-16 mt-16 border-t border-[#141414]/15 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#555555] dark:text-[#9C9A92]">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#141414] dark:text-[#F5F4EE]">SHIVANSH SAXENA</span>
            <span>·</span>
            <span>FULL-STACK ENGINEER</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-[11px]">
              <span>Madhya Pradesh, IN</span>
              <span>·</span>
              <span>© {new Date().getFullYear()}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 px-2.5 py-1 rounded-sm border border-[#141414]/20 hover:border-[#141414] text-[#555555] dark:text-[#9C9A92] hover:text-[#141414] dark:hover:text-white transition-colors"
            >
              <span>TOP</span>
              <ArrowUp className="w-3 h-3 text-primary" />
            </button>
          </div>
        </footer>

      </div>
    </section>
  );
};

export default Contact;
