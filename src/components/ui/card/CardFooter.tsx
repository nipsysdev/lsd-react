import * as React from 'react';

import { cn } from '@/lib/utils';

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

export { CardFooter };
