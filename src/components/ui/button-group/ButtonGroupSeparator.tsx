import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const ButtonGroupSeparator = React.forwardRef<
  React.ElementRef<typeof Separator>,
  React.ComponentProps<typeof Separator>
>(({ className, orientation = 'vertical', ...props }, ref) => {
  return (
    <Separator
      ref={ref}
      data-slot="button-group-separator"
      orientation={orientation}
      className={cn(
        'lsd:bg-border lsd:relative lsd:m-0! lsd:self-stretch lsd:data-[orientation=vertical]:h-auto',
        className,
      )}
      {...props}
    />
  );
});
ButtonGroupSeparator.displayName = 'ButtonGroupSeparator';

export { ButtonGroupSeparator };
