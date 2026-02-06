import type * as ProgressPrimitive from '@radix-ui/react-progress';

export interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number;
  indeterminate?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
}
