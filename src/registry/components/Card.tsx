"use client";

import * as React from "react";
import { cn } from "./utils";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
      const { left, top } = currentTarget.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative flex flex-col rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl px-8 py-8 shadow-2xl transition-all duration-300 hover:border-white/20",
          className
        )}
        {...props}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                450px circle at ${mouseX}px ${mouseY}px,
                rgba(255, 255, 255, 0.1),
                transparent 80%
              )
            `,
          }}
        />
        <div className="relative z-10 flex flex-col gap-2">
          {children}
        </div>
      </div>
    );
  }
);
Card.displayName = "Card";

export { Card };
