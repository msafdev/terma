import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  footer,
  hello,
  help,
  resume,
  social,
  theme,
  whatis,
} from "./cmd";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// This is the function that handles the command input
// You can add more commands here or on the components/cmd/input.js
export function command(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      return help;
    case "whatis":
      return whatis;
    case "theme":
      return theme;
    case "social":
      return social;
    case "resume":
      return resume;
    case "footer":
      return footer;
    case "hello":
    case "hi":
    case "hey":
    case "ola":
    case "yo":
      return hello;
    default:
      return [
        `Command not found.
Type <span class="text-neon-red dark:text-neon-yellow">"help"</span> for available commands.`,
      ];
  }
}
