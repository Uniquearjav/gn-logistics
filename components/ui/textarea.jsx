import * as React from 'react';
import { cn } from '@/lib/utils';

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'flex min-h-[140px] w-full rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground shadow-none placeholder:text-muted-foreground/60 focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 transition-colors leading-relaxed resize-y',
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
