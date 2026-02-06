import * as React from 'react';

import { cn } from '@/lib/utils';

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

export { CardAction };
