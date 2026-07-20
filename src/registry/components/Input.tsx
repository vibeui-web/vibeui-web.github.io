"use client";

import * as React from "react";
import { cn } from "./utils";
import { motion } from "framer-motion";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    return (
      <div className="relative group w-full">
        <motion.div
          initial={false}
          animate={{
            opacity: isFocused ? 1 : 0,
            scale: isFocused ? 1 : 0.95,
          }}
          transition={{ duration: 0.2 }}
          className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-white/30 to-white/10 opacity-0 blur transition duration-300"
        />
        <input
          type={type}
          className={cn(
            "relative flex h-11 w-full rounded-xl border border-white/10 bg-black/50 backdrop-blur-md px-4 py-2 text-sm text-white shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-white/40 focus-visible:outline-none focus-visible:border-white/40 disabled:cursor-not-allowed disabled:opacity-50",
            className
          )}
          ref={ref}
          onFocus={(e) => {
            setIsFocused(true);
            props.onFocus?.(e);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            props.onBlur?.(e);
          }}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
