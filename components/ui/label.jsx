'use client';

import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const labelVariants = cva(
  'text-xs font-semibold uppercase tracking-wider text-foreground/80 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
);

function Label({ className, ...props }) {
  return (
    <LabelPrimitive.Root
      className={cn(labelVariants(), className)}
      {...props}
    />
  );
}

export { Label };
