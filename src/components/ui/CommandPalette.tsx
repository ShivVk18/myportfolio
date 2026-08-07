"use client";

import { useEffect, useState, useTransition } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  Home,
  User,
  Code2,
  FolderGit2,
  Briefcase,
  FileText,
  Github,
  Linkedin,
  Sun,
  Moon,
  Terminal,
  Command,
  ArrowRight,
} from "lucide-react";
import { useTheme } from "next-themes";

type CommandItem = {
  id: string;
  title: string;
  category: "Navigation" | "Actions" | "Socials";
  icon: React.ReactNode;
  action: () => void;
  shortcut?: string;
};

export const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();
  const [, startTransition] = useTransition();

  const handleNavigate = (hash: string) => {
    setIsOpen(false);
    startTransition(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    });
  };

  const commands: CommandItem[] = [
    {
      id: "hero",
      title: "Jump to Hero / Overview",
      category: "Navigation",
      icon: <Home className="w-4 h-4 text-emerald-400" />,
      action: () => handleNavigate("#hero"),
      shortcut: "G H",
    },
    {
      id: "about",
      title: "Jump to About Me",
      category: "Navigation",
      icon: <User className="w-4 h-4 text-cyan-400" />,
      action: () => handleNavigate("#about"),
      shortcut: "G A",
    },
    {
      id: "skills",
      title: "Jump to Tech Stack & Arsenal",
      category: "Navigation",
      icon: <Code2 className="w-4 h-4 text-amber-400" />,
      action: () => handleNavigate("#skills"),
      shortcut: "G S",
    },
    {
      id: "projects",
      title: "Jump to Featured Projects",
      category: "Navigation",
      icon: <FolderGit2 className="w-4 h-4 text-violet-400" />,
      action: () => handleNavigate("#projects"),
      shortcut: "G P",
    },
    {
      id: "experience",
      title: "Jump to Experience Timeline",
      category: "Navigation",
      icon: <Briefcase className="w-4 h-4 text-rose-400" />,
      action: () => handleNavigate("#experience"),
      shortcut: "G E",
    },
    {
      id: "resume",
      title: "View Official Resume (CV)",
      category: "Actions",
      icon: <FileText className="w-4 h-4 text-primary" />,
      action: () => {
        setIsOpen(false);
        window.open("https://autumn-bird-212.linkyhost.com", "_blank");
      },
      shortcut: "↵",
    },
    {
      id: "theme",
      title: `Switch Theme (Current: ${theme === "dark" ? "Dark" : "Light"})`,
      category: "Actions",
      icon: theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />,
      action: () => {
        setTheme(theme === "dark" ? "light" : "dark");
        setIsOpen(false);
      },
      shortcut: "T",
    },
    {
      id: "github",
      title: "Open GitHub Profile (@ShivVk18)",
      category: "Socials",
      icon: <Github className="w-4 h-4 text-foreground" />,
      action: () => {
        setIsOpen(false);
        window.open("https://github.com/ShivVk18", "_blank");
      },
    },
    {
      id: "linkedin",
      title: "Connect on LinkedIn",
      category: "Socials",
      icon: <Linkedin className="w-4 h-4 text-blue-400" />,
      action: () => {
        setIsOpen(false);
        window.open("https://www.linkedin.com/", "_blank");
      },
    },
  ];

  const filtered = commands.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const handleKeyDownInModal = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filtered.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % (filtered.length || 1));
    } else if (e.key === "Enter" && filtered[selectedIndex]) {
      e.preventDefault();
      filtered[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Floating Keyboard Shortcut Trigger */}
      <motion.button
        onClick={() => setIsOpen(true)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-[4000] hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-card/80 border border-primary/30 backdrop-blur-xl text-xs font-mono shadow-2xl text-foreground hover:border-primary transition-all group"
        data-cursor="pointer"
      >
        <Terminal className="w-3.5 h-3.5 text-primary group-hover:rotate-12 transition-transform" />
        <span>Command Palette</span>
        <kbd className="px-1.5 py-0.5 rounded bg-muted border border-border text-[10px] text-muted-foreground font-semibold">
          ⌘K
        </kbd>
      </motion.button>

      {/* Modal Backdrop & Dialog */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-20 px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              onKeyDown={handleKeyDownInModal}
              className="relative w-full max-w-xl rounded-2xl bg-card/95 border border-primary/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] backdrop-blur-2xl overflow-hidden z-10 flex flex-col font-sans"
            >
              {/* Header Bar */}
              <div className="flex items-center px-4 py-3 border-b border-border/50 gap-3 bg-secondary/30">
                <Search className="w-4 h-4 text-primary shrink-0" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none font-mono"
                  autoFocus
                />
                <kbd className="px-2 py-1 text-[10px] font-mono text-muted-foreground bg-background rounded border border-border">
                  ESC
                </kbd>
              </div>

              {/* Commands List */}
              <div className="max-h-[340px] overflow-y-auto p-2 space-y-1">
                {filtered.length === 0 ? (
                  <div className="py-8 text-center text-xs font-mono text-muted-foreground">
                    No matching commands found.
                  </div>
                ) : (
                  filtered.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-xs text-left transition-all ${
                        idx === selectedIndex
                          ? "bg-primary/15 text-primary border border-primary/30 font-medium"
                          : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-1.5 rounded-lg bg-background border border-border/40">
                          {item.icon}
                        </div>
                        <div className="flex flex-col">
                          <span className="text-foreground text-xs font-medium">
                            {item.title}
                          </span>
                          <span className="text-[10px] font-mono opacity-60">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {item.shortcut ? (
                        <kbd className="px-2 py-0.5 text-[10px] font-mono rounded bg-background border border-border text-muted-foreground">
                          {item.shortcut}
                        </kbd>
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                      )}
                    </button>
                  ))
                )}
              </div>

              {/* Modal Footer */}
              <div className="px-4 py-2 border-t border-border/40 bg-secondary/20 flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Command className="w-3 h-3 text-primary" /> Shivansh Saxena CLI
                  </span>
                </div>
                <span>Use ↑↓ to navigate, Enter to select</span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
