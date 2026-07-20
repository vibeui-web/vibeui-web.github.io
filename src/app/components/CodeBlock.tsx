"use client";

import { Check, Copy } from "lucide-react";
import { useState } from "react";

export function CodeBlock({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group h-full w-full">
      <button
        onClick={handleCopy}
        className="absolute top-4 right-4 p-2 rounded-md bg-white/10 hover:bg-white/20 text-white opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
      </button>
      <pre className="p-6 h-full w-full overflow-auto text-sm font-mono text-white/80">
        <code>{code}</code>
      </pre>
    </div>
  );
}
