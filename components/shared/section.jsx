import { cn } from '@/lib/utils';

export function Section({
  as: Component = 'section',
  surface = false,
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={cn(
        'relative py-24 md:py-36 lg:py-40',
        surface ? 'bg-surface' : 'bg-background',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
