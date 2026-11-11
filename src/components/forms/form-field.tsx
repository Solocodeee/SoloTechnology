import { cn } from "@/lib/utils";

const fieldClasses =
  "w-full rounded-lg border border-surface-300 bg-white px-4 py-3 text-sm text-ink-900 placeholder:text-ink-400 transition-colors duration-200 focus:border-brand-blue-500 focus:outline-none focus:ring-2 focus:ring-brand-blue-500/15";

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return <label className={cn("mb-2 block text-sm font-medium text-ink-700", className)} {...props} />;
}
export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return <input className={cn(fieldClasses, className)} {...props} />;
}
export function Textarea({ className, ...props }: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <textarea className={cn(fieldClasses, "min-h-32 resize-y", className)} {...props} />;
}
export function Select({ className, children, ...props }: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return <select className={cn(fieldClasses, "pe-10", className)} {...props}>{children}</select>;
}
export function FormField({ label, htmlFor, required, className, children }: {
  label: string; htmlFor: string; required?: boolean; className?: string; children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <Label htmlFor={htmlFor}>
        {label}
        {required && <span className="text-brand-blue-500"> *</span>}
      </Label>
      {children}
    </div>
  );
}
