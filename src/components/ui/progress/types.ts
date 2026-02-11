import type * as ProgressPrimitive from '@radix-ui/react-progress';

export interface ProgressProps
  extends React.ComponentProps<typeof ProgressPrimitive.Root> {
  value?: number;
  indeterminate?: boolean;
  speed?: 'slow' | 'normal' | 'fast';
  variant?: 'default' | 'success' | 'warning' | 'destructive';
  showLabel?: boolean;
  labelPosition?: 'top' | 'bottom';
  paused?: boolean;
  size?: 'sm' | 'md' | 'lg';
}
