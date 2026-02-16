import * as React from 'react';

import { cn } from '@/lib/utils';

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<'div'>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      data-slot="card-header"
      className={cn(
        '@container/card-header lsd:grid lsd:auto-rows-min lsd:grid-rows-[auto_auto] lsd:items-start lsd:gap-2 lsd:px-6 lsd:py-6 lsd:has-data-[slot=card-action]:grid-cols-[1fr_auto] lsd:border-b lsd:border-lsd-border lsd:pb-6',
        className,
      )}
      {...props}
    />
  );
});
CardHeader.displayName = 'CardHeader';

export { CardHeader };
