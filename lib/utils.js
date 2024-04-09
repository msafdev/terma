import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  contact,
  footer,
  hello,
  help,
  projects,
  resume,
  skills,
  social,
  theme,
  whois,
} from "./cmd";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function command(cmd) {
  switch (cmd.toLowerCase()) {
    case "help":
      return help;
    case "whois":
      return whois;
    case "skills":
      return skills;
    case "theme":
      return theme;
    case "projects":
      return projects;
    case "contact":
      return contact;
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
