import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { CheckIcon } from 'lucide-react';
import type * as React from 'react';

import { cn } from '@/lib/utils';

function Checkbox({
  className,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root>) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'peer lsd:border-lsd-border dark:lsd:bg-lsd-surface-secondary/30 lsd:data-[state=checked]:bg-lsd-primary lsd:data-[state=checked]:text-lsd-surface-primary dark:lsd:data-[state=checked]:bg-lsd-primary lsd:data-[state=checked]:border-lsd-primary focus-visible:lsd:border-lsd-border-primary focus-visible:lsd:ring-lsd-text/50 aria-invalid:lsd:ring-lsd-destructive/20 dark:aria-invalid:lsd:ring-lsd-destructive/40 aria-invalid:lsd:border-lsd-destructive lsd:size-5 lsd:shrink-0 lsd:border lsd:shadow-xs lsd:transition-shadow lsd:outline-none focus-visible:lsd:ring-[3px] lsd:cursor-pointer lsd:disabled:cursor-not-allowed lsd:disabled:opacity-50',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="lsd:flex lsd:items-center lsd:justify-center lsd:text-current lsd:transition-none"
      >
        <CheckIcon className="lsd:size-4" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
