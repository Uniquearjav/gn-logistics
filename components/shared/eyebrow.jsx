import { cn } from '@/lib/utils';

export function Eyebrow({ className, children, ...props }) {
  return (
    <div
      className={cn(
        'text-xs tracking-[0.25em] uppercase font-semibold text-accent mb-4 md:mb-5 block select-none',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
