import * as React from 'react';

import { cn } from '@/lib/utils';

const Card = React.forwardRef<HTMLDivElement, React.ComponentProps<'div'>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        data-slot="card"
        className={cn(
          'lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:flex lsd:flex-col lsd:border-lsd-border lsd:border lsd:shadow-sm',
          className,
        )}
        {...props}
      />
    );
  },
);
Card.displayName = 'Card';

export { Card };
