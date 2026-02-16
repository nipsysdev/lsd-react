'use client';

import { Command as CommandPrimitive } from 'cmdk';
import type * as React from 'react';

import { cn } from '@/lib/utils';

export function Command({
  className,
  ...props
}: React.ComponentProps<typeof CommandPrimitive>) {
  return (
    <CommandPrimitive
      data-slot="command"
      className={cn(
        'lsd:bg-lsd-surface lsd:text-lsd-text-primary lsd:flex lsd:h-full lsd:w-full lsd:flex-col lsd:overflow-hidden',
        className,
      )}
      {...props}
    />
  );
}
