# Vibe UI 🎨🤖

**"shadcn/ui, but optimized for AI Agents"**

When you ask AI (Cursor, Windsurf, Copilot, Gemini) to build a complex UI using existing component libraries (like Material UI or Ant Design), the AI often struggles. It hallucinates props, breaks the component structure, or runs out of context window memory because the underlying library is too complex.

**Vibe UI** solves this.

This is a collection of React + Tailwind CSS components designed specifically to be **read, understood, and modified by AI**.

## Core Philosophy

1. **Zero Abstraction:** Components are single-file, raw React + Tailwind. No complex `cva` variants spread across multiple files.
2. **AI Vibe Instructions:** Every component contains inline comments (`// AI VIBE INSTRUCTION`) that explicitly tell AI models how to customize the component safely.
3. **Copy-Paste Native:** You don't `npm install vibe-ui`. You copy the `components/` folder into your project and let your AI take over.

## Usage

1. Copy the `components/` directory into your React/Next.js project.
2. Ensure you have `tailwindcss`, `clsx`, and `tailwind-merge` installed.
3. Open a chat with your AI and say:
   > *"Use the Vibe UI `<Card>` and `<Button>` components to build a pricing section. Follow the AI VIBE INSTRUCTIONS in those files to change the vibe to glassmorphism."*

## The Components

Currently available in this starter pack:
- `Button.tsx`
- `Card.tsx`
- `Input.tsx`
- `utils.ts` (Tailwind class merger)

## Why is this viral?

Because everyone is "vibe coding" right now, but they are fighting against UI libraries built for human manual labor. Vibe UI is built for the machine that builds for you.

## License
MIT. Copy, paste, and let the AI vibe.
