import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        className={cn(
          'lsd:bg-lsd-surface-primary lsd:text-lsd-text-primary lsd:flex lsd:flex-col lsd:border-lsd-border-primary lsd:border lsd:shadow-sm',
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        '@container/card-header lsd:grid lsd:auto-rows-min lsd:grid-rows-[auto_auto] lsd:items-start lsd:gap-2 lsd:px-6 lsd:py-6 lsd:has-data-[slot=card-action]:grid-cols-[1fr_auto] lsd:border-b lsd:border-lsd-border-primary lsd:pb-6',
        className,
      )}
      {...props}
    />
  );
});
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card-title"
        className={cn('lsd:leading-none lsd:font-semibold', className)}
        {...props}
      />
    );
  },
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-description"
      className={cn('lsd:text-lsd-text-secondary lsd:text-sm', className)}
      {...props}
    />
  );
});
CardDescription.displayName = 'CardDescription';

const CardAction = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-action"
      className={cn(
        'lsd:col-start-2 lsd:row-span-2 lsd:row-start-1 lsd:self-start lsd:justify-self-end',
        className,
      )}
      {...props}
    />
  );
});
CardAction.displayName = 'CardAction';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-content"
      className={cn('lsd:px-6 lsd:py-6', className)}
      {...props}
    />
  );
});
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-footer"
      className={cn(
        'lsd:flex lsd:items-center lsd:px-6 lsd:py-6 lsd:border-t lsd:border-lsd-border-primary lsd:pt-6',
        className,
      )}
      {...props}
    />
  );
});
CardFooter.displayName = 'CardFooter';

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
