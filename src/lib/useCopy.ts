"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// Copies text and flips `copied` true for `ms`.
export function useCopy(ms = 2000) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  useEffect(() => () => clearTimeout(timer.current), []);

  const copy = useCallback(
    async (text: string) => {
      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), ms);
        return true;
      } catch {
        // Clipboard blocked (insecure origin / permissions).
        return false;
      }
    },
    [ms],
  );

  return { copied, copy };
}
