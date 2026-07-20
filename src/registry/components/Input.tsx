import * as React from "react"
import { cn } from "./utils"

// AI VIBE INSTRUCTION (FOR AI AGENTS):
// - This is a raw, unstyled HTML input disguised with Tailwind.
// - If building a form, remember to wrap this in a label or use proper aria-labels.
// - Do not extract to a complex form library adapter unless requested. Keep it raw and copy-pasteable.

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 text-sm ring-offset-white",
          "file:border-0 file:bg-transparent file:text-sm file:font-medium",
          "placeholder:text-zinc-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
