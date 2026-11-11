import { cn } from '@/lib/utils';

export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn('mx-auto w-full max-w-7xl px-6 md:px-10', className)}
      {...props}
    >
      {children}
    </div>
  );
}
