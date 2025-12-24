import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import * as React from 'react';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/utils';

const buttonGroupVariants = cva(
  "lsd:flex lsd:w-fit lsd:items-stretch lsd:[&>*]:focus-visible:z-10 lsd:[&>*]:focus-visible:relative lsd:[&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit lsd:[&>input]:flex-1 has-[select[aria-hidden=true]:last-child]:lsd:[&>[data-slot=select-trigger]:last-of-type]:rounded-r-md has-[>[data-slot=button-group]]:lsd:gap-2",
  {
    variants: {
      orientation: {
        horizontal:
          'lsd:[&>*:not(:first-child)]:rounded-l-none lsd:[&>*:not(:first-child)]:border-l-0 lsd:[&>*:not(:last-child)]:rounded-r-none',
        vertical:
          'lsd:flex-col lsd:[&>*:not(:first-child)]:rounded-t-none lsd:[&>*:not(:first-child)]:border-t-0 lsd:[&>*:not(:last-child)]:rounded-b-none',
      },
    },
    defaultVariants: {
      orientation: 'horizontal',
    },
  },
);

export interface ButtonGroupProps
  extends Omit<React.ComponentProps<'fieldset'>, 'disabled'>,
    VariantProps<typeof buttonGroupVariants> {}

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

export interface ButtonGroupTextProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
}

const ButtonGroupText = React.forwardRef<HTMLDivElement, ButtonGroupTextProps>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'div';

    return (
      <Comp
        ref={ref}
        className={cn(
          "lsd:bg-secondary lsd:flex lsd:items-center lsd:gap-2 lsd:rounded-md lsd:border lsd:px-4 lsd:text-sm lsd:font-medium lsd:shadow-xs lsd:[&_svg]:pointer-events-none lsd:[&_svg:not([class*='size-'])]:size-4 lsd:cursor-pointer lsd:disabled:cursor-not-allowed",
          className,
        )}
        {...props}
      />
    );
  },
);
ButtonGroupText.displayName = 'ButtonGroupText';

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
        'lsd:bg-border lsd:relative lsd:!m-0 lsd:self-stretch lsd:data-[orientation=vertical]:h-auto',
        className,
      )}
      {...props}
    />
  );
});
ButtonGroupSeparator.displayName = 'ButtonGroupSeparator';

export {
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
  buttonGroupVariants,
};
