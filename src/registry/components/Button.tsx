"use client";

import * as React from "react";
import { cn } from "./utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50",
          "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]",
          "h-11 px-6 py-2 overflow-hidden group",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 w-full h-full bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
        <span className="relative flex items-center justify-center gap-2">
          {children as React.ReactNode}
        </span>
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
