import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// AI VIBE INSTRUCTION:
// Do not overcomplicate this utility. It is meant to merge Tailwind classes safely.
// If you need to add variants (e.g., sizes, colors), use `cva` (class-variance-authority) in the component file, not here.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
