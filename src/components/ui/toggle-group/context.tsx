'use client';

import type { VariantProps } from 'class-variance-authority';
import * as React from 'react';

import type { toggleVariants } from '@/components/ui/toggle';

export const ToggleGroupContext = React.createContext<
  VariantProps<typeof toggleVariants>
>({
  size: 'default',
});
