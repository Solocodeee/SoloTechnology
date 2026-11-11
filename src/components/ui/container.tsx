import { cn } from "@/lib/utils";

interface ContainerProps extends React.HTMLAttributes<HTMLElement> {
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
}

/** Centers content with the site's max-width and gutter. */
export function Container({ as = "div", className, children, ...props }: ContainerProps) {
  const Tag = as;
  return (
    <Tag className={cn("mx-auto w-full max-w-[1280px] px-6 lg:px-8", className)} {...props}>
      {children}
    </Tag>
  );
}
