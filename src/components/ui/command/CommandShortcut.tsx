import type * as React from 'react';

import { cn } from '@/lib/utils';

export function CommandShortcut({
  className,
  ...props
}: React.ComponentProps<'span'>) {
  return (
    <span
      data-slot="command-shortcut"
      className={cn(
        'lsd:text-lsd-text-primary lsd:ml-auto lsd:text-xs lsd:tracking-widest',
        className,
      )}
      {...props}
    />
  );
}
