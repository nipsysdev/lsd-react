import type { TypographyVariants } from './variants';

export interface TypographyProps
  extends Omit<React.HTMLAttributes<HTMLHeadingElement>, 'color'>,
    TypographyVariants {
  as?: React.ElementType;
}
