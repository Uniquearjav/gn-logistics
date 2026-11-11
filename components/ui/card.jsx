import * as React from 'react';
import { cn } from '@/lib/utils';

function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-card text-card-foreground',
        className
      )}
      {...props}
    />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 p-6 md:p-8', className)}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <div
      className={cn(
        'font-heading text-xl md:text-2xl font-medium tracking-tight text-foreground',
        className
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <div
      className={cn('text-sm md:text-base text-muted-foreground leading-relaxed', className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn('p-6 md:p-8 pt-0', className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn('flex items-center p-6 md:p-8 pt-0', className)}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
