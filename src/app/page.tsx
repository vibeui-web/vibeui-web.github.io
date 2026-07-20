import { Button } from "@/registry/components/Button";
import { Card } from "@/registry/components/Card";
import { Input } from "@/registry/components/Input";
import fs from "fs";
import path from "path";
import { CodeBlock } from "./components/CodeBlock";
import { Sparkles, ArrowRight } from "lucide-react";

// Read source code for display
function getComponentSource(filename: string) {
  try {
    const filePath = path.join(process.cwd(), "src", "registry", "components", filename);
    return fs.readFileSync(filePath, "utf8");
  } catch (e) {
    return "// Error loading source code";
  }
}

export default function Home() {
  const buttonCode = getComponentSource("Button.tsx");
  const cardCode = getComponentSource("Card.tsx");
  const inputCode = getComponentSource("Input.tsx");

  return (
    <main className="min-h-screen flex flex-col items-center pt-24 pb-32 px-6">
      
      {/* Hero Section */}
      <section className="text-center max-w-3xl mb-24 space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-sm text-white/80 mb-4">
          <Sparkles className="w-4 h-4 text-yellow-400" />
          <span>Vibe UI v1.0 is now live</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50">
          Premium UI for <br/> Vibe Coders.
        </h1>
        <p className="text-lg text-white/60 max-w-xl mx-auto">
          Copy and paste beautifully designed, animated, and accessible React components directly into your apps. No npm install required.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Button>
            Browse Components <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
          <Button className="bg-white/10 text-white hover:bg-white/20">
            GitHub
          </Button>
        </div>
      </section>

      {/* Component Showcase */}
      <section className="w-full max-w-5xl space-y-24">
        
        {/* Button Showcase */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Button</h2>
            <p className="text-white/60">A highly interactive button with micro-animations.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card flex items-center justify-center p-12 min-h-[300px]">
              <div className="flex flex-col gap-4">
                <Button>Primary Button</Button>
                <Button className="bg-white/10 text-white hover:bg-white/20">Secondary Button</Button>
                <Button className="bg-red-500/10 text-red-500 hover:bg-red-500/20">Danger Button</Button>
              </div>
            </div>
            <div className="h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black">
              <CodeBlock code={buttonCode} />
            </div>
          </div>
        </div>

        {/* Card Showcase */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Card</h2>
            <p className="text-white/60">A glassmorphism card with a glowing hover effect.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card flex items-center justify-center p-12 min-h-[400px]">
              <Card className="max-w-sm">
                <h3 className="font-semibold text-lg mb-2">Vibe Coding</h3>
                <p className="text-white/70 text-sm">Writing software by describing the intent and letting AI handle the syntax.</p>
              </Card>
            </div>
            <div className="h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-black">
              <CodeBlock code={cardCode} />
            </div>
          </div>
        </div>

        {/* Input Showcase */}
        <div className="space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold">Input</h2>
            <p className="text-white/60">A sleek input field with focus animations.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="glass-card flex items-center justify-center p-12 min-h-[300px]">
              <div className="w-full max-w-xs space-y-4">
                <Input placeholder="Enter your email..." />
                <Input placeholder="Search components..." type="search" />
              </div>
            </div>
            <div className="h-[300px] overflow-hidden rounded-2xl border border-white/10 bg-black">
              <CodeBlock code={inputCode} />
            </div>
          </div>
        </div>

      </section>

    </main>
  );
}
