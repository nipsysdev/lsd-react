import * as React from 'react';

import { cn } from '@/lib/utils';

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

export { CardTitle };
