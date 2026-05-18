"use client";

import { AlertCircle, Check, Copy } from "lucide-react";
import { useEffect, useState } from "react";

type CopyState = "idle" | "copied" | "failed";

export function CopyButton({
  value,
  label = "Copy to clipboard",
}: {
  value: string;
  label?: string;
}) {
  const [state, setState] = useState<CopyState>("idle");

  useEffect(() => {
    if (state === "idle") return;

    const timeout = window.setTimeout(() => setState("idle"), 1800);
    return () => window.clearTimeout(timeout);
  }, [state]);

  async function handleCopy() {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(value);
        setState("copied");
        return;
      }

      if (typeof document !== "undefined") {
        const textarea = document.createElement("textarea");
        textarea.value = value;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        textarea.style.pointerEvents = "none";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        const ok = document.execCommand("copy");
        document.body.removeChild(textarea);

        if (ok) {
          setState("copied");
          return;
        }
      }

      setState("failed");
    } catch {
      setState("failed");
    }
  }

  const ariaLabel = state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : label;

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      title={ariaLabel}
      className="rounded-md p-1.5 text-on-surface-variant transition-[background-color,color,transform] duration-200 ease-out hover:bg-surface-variant/50 hover:text-primary active:scale-[0.96] motion-reduce:transition-none motion-reduce:active:scale-100"
      onClick={handleCopy}
    >
      {state === "copied" ? (
        <Check className="h-4 w-4" />
      ) : state === "failed" ? (
        <AlertCircle className="h-4 w-4 text-amber-400" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
      <span className="sr-only">{ariaLabel}</span>
    </button>
  );
}
