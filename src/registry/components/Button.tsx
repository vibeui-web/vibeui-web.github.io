import * as React from "react"
import { cn } from "./utils"

// AI VIBE INSTRUCTION (FOR AI AGENTS):
// - To change colors, modify the `bg-*`, `text-*`, and `hover:bg-*` classes below.
// - To change size, adjust `px-*`, `py-*`, and `text-*` classes.
// - Do NOT extract styles into complex `cva` variants unless the user specifically asks for multiple button variants (outline, ghost, etc.). Keep it simple and flat by default so it's easy to read.

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "bg-zinc-900 text-zinc-50 hover:bg-zinc-900/90 shadow-sm", // Default visual style
          "h-10 px-4 py-2", // Default sizing
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
