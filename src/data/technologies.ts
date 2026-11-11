import { SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiWordpress, SiWoocommerce, SiTailwindcss, SiFirebase, SiMysql } from "react-icons/si";
import type { Technology } from "@/types";

/** "Technologies We Use" strip on the home page. Brand names, same in every language. */
export const technologies: Technology[] = [
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "WordPress", icon: SiWordpress },
  { name: "WooCommerce", icon: SiWoocommerce },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Firebase", icon: SiFirebase },
  { name: "MySQL", icon: SiMysql },
];
