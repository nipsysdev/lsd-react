import type { VariantProps } from 'class-variance-authority';
import type { buttonGroupVariants } from './variants';

export interface ButtonGroupProps
  extends Omit<React.ComponentProps<'fieldset'>, 'disabled'>,
    VariantProps<typeof buttonGroupVariants> {}

export interface ButtonGroupTextProps extends React.ComponentProps<'div'> {
  asChild?: boolean;
}
