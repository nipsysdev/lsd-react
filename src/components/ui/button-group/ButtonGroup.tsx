import * as React from 'react';

import { cn } from '@/lib/utils';
import type { ButtonGroupProps } from './types';
import { buttonGroupVariants } from './types';

const ButtonGroup = React.forwardRef<HTMLFieldSetElement, ButtonGroupProps>(
  ({ className, orientation, ...props }, ref) => {
    return (
      <fieldset
        ref={ref}
        data-slot="button-group"
        data-orientation={orientation}
        className={cn(buttonGroupVariants({ orientation }), className)}
        {...props}
      />
    );
  },
);
ButtonGroup.displayName = 'ButtonGroup';

export { ButtonGroup };
