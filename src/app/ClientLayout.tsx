"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import PortfolioPreloader from "@/components/PreLoader";



export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
    >
      {loading && <PortfolioPreloader onComplete={() => setLoading(false)} />}
      {!loading && <main>{children}</main>}
    </ThemeProvider>
  );
}
