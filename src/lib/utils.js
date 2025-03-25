import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function isValidURL(url) {
  try {
    new URL(url); // Check if valid URL
    return true;
  } catch(error) {
    return false;
  }
}
