"use client";

import React, { useState } from "react";
import { LiveProvider, LiveEditor, LiveError, LivePreview } from "react-live";
import { Check, Copy, Code, Eye } from "lucide-react";
import { Button } from "@/registry/components/Button";
import { Card } from "@/registry/components/Card";
import { Input } from "@/registry/components/Input";
import { motion } from "framer-motion";
import { cn } from "@/registry/components/utils";

// Make our UI components available to the Live Editor
const scope = {
  Button,
  Card,
  Input,
  motion,
  cn,
};

export function LivePlayground({ usageCode, componentCode }: { usageCode: string, componentCode: string }) {
  const [activeTab, setActiveTab] = useState<"live" | "source">("live");
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const textToCopy = activeTab === "live" ? usageCode : componentCode;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full">
      {/* Preview Area */}
      <div className="flex-1 min-w-[300px]">
        <LiveProvider code={usageCode} scope={scope}>
          <div className="glass-card flex items-center justify-center p-12 min-h-[400px] h-full w-full">
            <LivePreview className="w-full h-full flex flex-col items-center justify-center gap-4" />
          </div>
          <div className="mt-4 p-4 text-red-400 bg-red-950/50 rounded-lg max-w-full overflow-hidden text-sm [&>pre]:whitespace-pre-wrap hidden peer-invalid:block">
            <LiveError />
          </div>
        </LiveProvider>
      </div>

      {/* Editor Area */}
      <div className="flex-1 w-full max-w-full min-w-[300px] flex flex-col h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d] shadow-2xl">
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-black/50">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("live")}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                activeTab === "live" ? "bg-white/10 text-white" : "text-white/50 hover:text-white/80"
              )}
            >
              <Eye className="w-3.5 h-3.5" />
              Live Editor
            </button>
            <button
              onClick={() => setActiveTab("source")}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-xs font-medium rounded-md transition-colors",
                activeTab === "source" ? "bg-white/10 text-white" : "text-white/50 hover:text-white/80"
              )}
            >
              <Code className="w-3.5 h-3.5" />
              Source Code
            </button>
          </div>
          <button
            onClick={handleCopy}
            className="p-1.5 rounded-md hover:bg-white/10 text-white/70 hover:text-white transition-colors"
            title="Copy Code"
          >
            {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
        
        <div className="flex-1 overflow-auto w-full">
          {activeTab === "live" ? (
            <LiveProvider code={usageCode} scope={scope}>
              <LiveEditor 
                className="font-mono text-sm min-h-full p-4 !bg-transparent"
                style={{ fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
              />
            </LiveProvider>
          ) : (
            <pre className="p-4 text-sm font-mono text-white/80">
              <code>{componentCode}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}
