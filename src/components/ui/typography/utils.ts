import type { VariantProps } from 'class-variance-authority';
import type { typographyVariants } from './types';

export function getDefaultComponent(
  variant?: VariantProps<typeof typographyVariants>['variant'],
): React.ElementType {
  switch (variant) {
    // Display variants don't have default components
    case 'display1':
    case 'display2':
    case 'display3':
    case 'display4':
      return 'div';

    // Heading variants map to corresponding heading elements
    case 'h1':
      return 'h1';
    case 'h2':
      return 'h2';
    case 'h3':
      return 'h3';
    case 'h4':
      return 'h4';
    case 'h5':
      return 'h5';
    case 'h6':
      return 'h6';

    // Label variants map to label element
    case 'label1':
    case 'label2':
      return 'label';

    // All other variants default to span
    default:
      return 'span';
  }
}
