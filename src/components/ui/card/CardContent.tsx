import * as React from 'react';

import { cn } from '@/lib/utils';

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

export { CardContent };
